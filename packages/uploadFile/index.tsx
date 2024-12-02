import { View, Image } from '@tarojs/components'
import { defineComponent, onUpdated, PropType, ref, watch } from 'vue'
import { ActionSheet, ImagePreview, Progress } from '@nutui/nutui-taro'

import {
  chooseMedia,
  chooseMessageFile,
  showToast,
  showLoading,
  uploadFile,
  hideLoading,
  downloadFile,
  openDocument,
} from '@tarojs/taro'

const Toast = (msg: string, complete?: () => void) => {
  return showToast({
    title: msg,
    icon: 'none',
    duration: 2500,
    mask: true,
    complete: complete,
  })
}

const OSS_STATIC_PREFIX =
  'https://atgs-prod.oss-cn-hangzhou.aliyuncs.com/cloud/storage/weapp/'
const COMMON_PDF_ICON = OSS_STATIC_PREFIX + 'pdf.png'
const COMMON_WORD_ICON = OSS_STATIC_PREFIX + 'word.png'
const COMMON_EXCEL_ICON = OSS_STATIC_PREFIX + 'excel.png'
const COMMON_FILE_ICON = OSS_STATIC_PREFIX + 'file.png'

// TODO 需要服务端返回真实路径，否则无法实现图片回填
export const UploadFile = defineComponent({
  name: 'UploadFile',
  props: {
    onClear: Function,
    containerClass: String,
    createHeader: Function,
    queryAttachUrls: Function,
    target: {
      type: Object,
      default: () => {
        return {
          key: 'e6yun3.0',
          bizKey: 'waybillPlatform',
        }
      },
    },
    headers: {
      type: Object,
      default: () => {
        return {}
      },
    },
    name: { type: String, default: 'files' },
    url: { type: String, default: '' },
    formData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    sizeType: {
      type: Array as PropType<('original' | 'compressed')[]>,
      default: () => ['original', 'compressed'],
    },
    sourceType: {
      type: Array as PropType<('album' | 'camera')[]>,
      default: () => ['album', 'camera'],
    },
    mode: {
      type: String,
      default: '',
    },
    needPreview: { type: Boolean, default: true },
    maximum: { type: Number, default: 100 },
    fileList: { type: Array, default: () => [] },
    onSuccess: { type: Function },
    onChange: { type: Function },
    isPreview: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    maxSize: { type: Number, default: 10 },
    tips: { type: String, default: '文件大小不超过10M' },
  },
  setup(props, { slots }) {
    const show = ref()
    const showPreview = ref<any>({ show: false, previewData: [] })
    const uploadProgress = ref<any>()
    const fileList = ref<any>(props.fileList)
    const showFileList = ref<any>() // 展示真实的路径
    const menuItems = [
      {
        name: '图片',
        fileType: 'image',
      },
      {
        name: '文件',
        fileType: 'file',
      },
    ]
    const fileTypeEnum = [
      {
        value: 'image',
        arr: ['jpeg', 'jpg', 'bmp', 'png', 'gif'],
      },
      {
        value: 'excel',
        arr: ['xlsx', 'xls', 'xlsm', 'xlsb', 'xltx'],
      },
      {
        value: 'word',
        arr: ['doc', 'docx'],
      },
      {
        value: 'pdf',
        arr: ['pdf'],
      },
    ]

    // 点击弹窗
    const onUploadClick = () => {
      const { mode } = props
      if (mode) {
        choose({ fileType: mode })
      } else {
        show.value = true
      }
    }
    //  选择文件类型
    const choose = (item) => {
      if (item.fileType === 'file') {
        toUploadFile()
      } else {
        toUploadImg()
      }
    }

    const toUploadImg = () => {
      const { sizeType, sourceType } = props
      chooseMedia({
        count: 1, // 默认9, 设置图片的数量
        mediaType: ['image'],
        sizeType: sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        success: function (res: any) {
          // 成功选择图片后，获取图片的临时文件路径

          if (res.tempFiles?.[0].tempFilePath) {
            const tempFileObj = {
              ...res.tempFiles?.[0],
              tmpFileUrl: res.tempFiles?.[0].tempFilePath,
            }
            // 上传图片
            uploadRequest(tempFileObj)
          }
        },
        fail: () => {},
      })
    }

    // 选取文件
    const toUploadFile = () => {
      chooseMessageFile({
        count: 1,
        type: 'file',
        success: function (res) {
          // tempFilePath可以作为img标签的src属性显示图片

          if (res.tempFiles) {
            const tempFileObj = {
              ...res.tempFiles[0],
              tmpFileUrl: res.tempFiles[0]?.path,
            }
            // 上传文件
            uploadRequest(tempFileObj)
          }
        },
      })
    }

    const uploadRequest = (tempFilePath) => {
      const size = props.maxSize * 1024 * 1024 // 10M
      if (tempFilePath.size > size) {
        return showToast({ icon: 'none', title: '上传失败，文件大小超过限制' })
      }

      const { target, headers, formData, url, name } = props
      showLoading({
        title: '上传中...',
      })
      // 上传图片
      const uploadTask = uploadFile({
        url: `${url}?customerId=${target['key']}&businessTypeKey=${target['bizKey']}`, // 开发者服务器的URL
        filePath: tempFilePath.tmpFileUrl, // 要上传文件资源的路径
        header: {
          //  @ts-ignore
          'Content-Type': 'multipart/form-data',
          ...props.createHeader?.(),
          ...headers,
        },
        formData: { ...formData },
        name: name, // 固定值
        success: function (res) {
          console.log('=============', res)
          if (res.statusCode !== 200) {
            Toast('上传失败，请稍后再试')
          } else {
            let responseData: any = {}

            if (typeof res.data === 'string') {
              responseData = JSON.parse(res.data || '{}')
            }
            if (
              Array.isArray(responseData.result) &&
              responseData.result?.length > 0
            ) {
              // tempFilePath
              const realData = { ...tempFilePath, ...responseData.result[0] }

              fileList.value = [...fileList.value, realData]
              // 上传成功后的操作
              props?.onChange?.(realData, fileList.value)
            } else {
              Toast(responseData.message || '上传失败，请稍后再试')
            }
          }
        },
        complete: function () {
          setTimeout(() => {
            hideLoading()
          }, 1500)
          // 隐藏加载中的提示
          // hideLoading()
        },
      })

      uploadTask.progress((res) => {
        uploadProgress.value = res.progress
      })
    }

    // 下载
    const saveFile = (fileDownUrl) => {
      downloadFile({
        url: fileDownUrl, //仅为示例，并非真实的资源
        success: function (res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            Toast('下载成功')
            var filePath = res.tempFilePath

            if (filePath) {
              openDocument({
                filePath: filePath,
                success: function () {
                  console.log('打开文档成功')
                },
              })
            }
          }
        },
      })
    }

    const getFileExtension = (url: string) => {
      let urlWithoutParams = url.split('?')[0] || '' // 去除查询参数
      let filename = urlWithoutParams.substring(
        urlWithoutParams.lastIndexOf('/') + 1,
      )
      let fileType = filename.split('.').pop() || '' // 获取文件后缀

      return fileType.toLowerCase() // 转换为小写以进行比较
    }

    const renderFileShow = (file) => {
      const fileUrl = file.fileUrl
      const showUrl = file.tmpFileUrl || file.fileUrl

      const typeType = getFileExtension(showUrl)
      const type = fileTypeEnum.find((el) => el.arr.includes(typeType))?.value

      if (type === 'image') {
        return (
          <View
            class="file-box"
            onClick={() => {
              showPreview.value.show = true
              showPreview.value.previewData = [{ src: showUrl }]
            }}
          >
            <Image class="jmc-img-cla" src={showUrl} />
          </View>
        )
      } else if (type === 'pdf') {
        return (
          <View
            class="file-box"
            onClick={() => {
              saveFile(fileUrl)
            }}
          >
            <Image src={COMMON_PDF_ICON} />
          </View>
        )
      } else if (type === 'word') {
        return (
          <View
            class="file-box"
            onClick={() => {
              saveFile(fileUrl)
            }}
          >
            <Image src={COMMON_WORD_ICON} />
          </View>
        )
      } else if (type === 'excel') {
        return (
          <View
            class="file-box"
            onClick={() => {
              saveFile(fileUrl)
            }}
          >
            <Image src={COMMON_EXCEL_ICON} />
          </View>
        )
      } else {
        return (
          <View
            class="file-box"
            onClick={() => {
              saveFile(fileUrl)
            }}
          >
            <Image src={COMMON_FILE_ICON} />
          </View>
        )
      }
    }

    const clearFile = (index) => {
      const operateData = fileList.value.filter((_, i: number) => i !== index)
      fileList.value = operateData
      props?.onClear?.(fileList.value)
      props?.onChange?.({}, fileList.value)
    }

    onUpdated(() => {
      fileList.value = props.fileList
    })

    watch(
      () => fileList.value,
      async () => {
        const params: any = []

        let realUrlArr =
          fileList.value.filter((el) => el.fileUrl.includes('http')) || []
        fileList.value
          .filter((el) => !el.fileUrl.includes('http'))
          .forEach((el) => {
            params.push({ url: el.fileUrl })
          })

        if (params && params.length) {
          const { result } = await props.queryAttachUrls?.(params)

          realUrlArr = [
            ...realUrlArr,
            ...result.map((el) => ({ ...el, fileUrl: el.fullFileUrl })),
          ]
        }

        showFileList.value = realUrlArr
      },
      {
        immediate: true,
      },
    )

    return () => {
      const { containerClass, tips, disabled, maximum, needPreview } = props

      return (
        <View class={`components-uploaderFile-box ${containerClass}`}>
          <View class="upload-content">
            {needPreview &&
              showFileList.value?.map((item: any, index) => {
                return (
                  <View class="upload-show">
                    {!disabled && (
                      <View
                        onClick={() => {
                          clearFile(index)
                        }}
                        class="jmc-nut-icon  jmc-nut-icon-qingchu jmc-clear"
                      />
                    )}
                    <View class="upload-box">{renderFileShow(item)}</View>
                  </View>
                )
              })}
            {!disabled && fileList.value.length < maximum && (
              <View onClick={onUploadClick} class="uploader-add">
                {uploadProgress.value > 0 && uploadProgress.value < 100 && (
                  <View class="progress-box">
                    <View class="progress-text">{uploadProgress.value}%</View>
                    <Progress
                      showText={false}
                      strokeColor="#386DF8"
                      percentage={uploadProgress.value}
                    />
                  </View>
                )}
                {slots?.['default']?.() || (
                  <View class="upload-box">
                    <View class="plus-sign">
                      <View class="jmc-nut-icon jmc-nut-icon-plus"></View>
                    </View>
                    <View class="upload-tip">{slots?.['desc']?.()}</View>
                  </View>
                )}
              </View>
            )}
          </View>
          {!disabled && <View class="upload-tips">{tips}</View>}

          <ImagePreview
            show={showPreview.value?.show}
            onClose={() => {
              showPreview.value.show = false
            }}
            images={showPreview.value?.previewData}
          ></ImagePreview>

          <ActionSheet
            v-model:visible={show.value}
            title="文件类型"
            menuItems={menuItems}
            cancelTxt="取消"
            onChoose={choose}
            onCancel={() => (show.value = false)}
          ></ActionSheet>
        </View>
      )
    }
  },
})

export default UploadFile
