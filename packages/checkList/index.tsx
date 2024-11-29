import { View } from '@tarojs/components'
import { defineComponent, onMounted, ref, watch } from 'vue'
import { CheckListProps } from './types'
import { Popup, Searchbar } from '@nutui/nutui-taro'
import Checkbox from '../checkbox'
import Empty from '../empty'
import VirtualList from '@tarojs/components-advanced/dist/components/virtual-list/vue/list'
import classNames from 'classnames'
import { useDebounceWatch } from '../hooks/index'

export const CheckList = defineComponent({
  name: 'checkList',
  props: CheckListProps,
  setup(props, { emit }) {
    const show = ref(false)
    const keyWord = ref('')
    const loading = ref(false)
    const checked = ref<Array<number | string>>([])
    const checkedData = ref<Array<Record<string, any>>>([])
    const innerData = ref<Array<Record<string, any>>>([])
    const innerAllData = ref<Array<Record<string, any>>>([])

    const clear = () => {
      emit('update:modelValue', [], [])
      props.onChange?.([], [])
      checked.value = []
      checkedData.value = []
    }

    const handleCheck = (d: number | string) => {
      if (loading.value) return
      if (props.mode === 'multiple') {
        let checkedNew = [...checked.value]
        if (checkedNew.includes(d)) {
          checkedNew = checkedNew.filter((it) => it !== d)
        } else {
          checkedNew.push(d)
        }
        checked.value = checkedNew
      } else {
        checked.value = [d]
      }
    }

    watch(
      () => [props.modelValue, props.data],
      () => {
        if (props.modelValue && Array.isArray(props.modelValue)) {
          const ddd = props.data?.length ? props.data : innerAllData.value
          const checkedData_ = ddd.filter((it) =>
            props.modelValue.includes(it[props.fieldName]),
          )
          checkedData.value = checkedData_
        }
      },
    )

    watch(
      () => show.value,
      (newValue) => {
        if (!newValue) {
          checked.value = []
          keyWord.value = ''
        } else {
          const cc = checkedData.value.map((it) => {
            return it[props.fieldName]
          })
          checked.value = cc
        }
      },
      {
        immediate: true,
      },
    )

    useDebounceWatch(
      keyWord,
      () => {
        if (show.value) {
          if (props.searchData && props.searchAsync) {
            searchDataInner(keyWord.value)
            return
          }
          if (keyWord.value) {
            const fData =
              props.data?.filter((it) => {
                return it[props.labelName].includes(keyWord.value)
              }) || []
            innerData.value = fData
          } else {
            innerData.value = props.data
          }
        } else {
          const ddd = props.data?.length ? props.data : innerAllData.value

          innerData.value = ddd
        }
      },
      1000,
    )

    watch(
      () => props.data,
      () => {
        if (props.data && !props.searchData) {
          innerData.value = props.data
        }
      },
      {
        immediate: true,
      },
    )

    const handleConfirm = () => {
      const ddd = props.data?.length ? props.data : innerAllData.value
      const cData = ddd.filter((d) =>
        checked.value.includes(d[props.fieldName]),
      )
      checkedData.value = cData
      props.onChange?.(checked.value, cData)
      emit('update:modelValue', checked.value, cData)
      show.value = false
    }

    const handleCheckAll = () => {
      if (loading.value) return
      const ddd = props.data?.length ? props.data : innerAllData.value
      if (checked.value.length === ddd.length) {
        checked.value = []
      } else {
        checked.value = ddd.map((it) => it[props.fieldName])
      }
    }

    const searchDataInner = async (vv: string) => {
      if (props.searchData) {
        loading.value = true
        try {
          const res = await props.searchData(vv)
          if (!vv) {
            innerAllData.value = (Array.isArray(res) ? res : res.result) || []
          }
          innerData.value = (Array.isArray(res) ? res : res.result) || []
        } catch (err) {
          throw new Error(err?.toString())
        } finally {
          loading.value = false
        }
      }
    }

    onMounted(() => {
      if (!!props.searchData && !innerAllData.value?.length) {
        searchDataInner('')
      } else if (!!props.searchData) {
        innerData.value = innerAllData.value
      }
      if (!props.searchData) {
        innerData.value = props.data
      }
    })

    const disabledItem = (key) => {
      if (
        checked.value.length === props.limit &&
        !checked.value.includes(key)
      ) {
        return true
      } else return false
    }

    const Row = ({
      it,
      index,
      labelName,
      fieldName,
      checkType,
      optionsLabelName,
    }) => {
      return (
        <View
          class="check-list-item"
          key={`check-list-${index}-${it[labelName]}`}
          onClick={() => handleCheck(it[fieldName])}
          style={index === 0 ? { borderTop: 'none' } : {}}
        >
          <View
            class={`check-label-name ${
              checked.value.includes(it[fieldName]) ? 'checked' : ''
            }`}
          >
            {it[optionsLabelName || labelName] || '-'}
          </View>
          {checkType !== 'checkbox' &&
            checked.value.includes(it[fieldName]) && (
              <View class="check-icon">
                <View class={`check-label-icon `}></View>
              </View>
            )}
          {checkType === 'checkbox' && (
            <View class="check-icon">
              <Checkbox
                iconSize={20}
                disabled={disabledItem(it[fieldName])}
                modelValue={checked.value.includes(it[fieldName])}
              ></Checkbox>
            </View>
          )}
        </View>
      )
    }

    return () => {
      const {
        checkAll,
        fieldName,
        placeholder,
        allowClear,
        labelName,
        optionsLabelName,
        showArrowDown,
        showArrowLeft,
        searchShow,
        containerClass,
        searchPlaceholder,
        limit,
        data,
        checkType,
        disabled,
        virtualList,
        flexStart,
      } = props

      const renderShowInner = () => {
        if (!checkedData.value?.length) {
          return placeholder
        } else if (checkedData.value.length === 1) {
          return checkedData.value[0]?.[labelName] || '--'
        } else {
          return `已选${checkedData.value.length}项`
        }
      }

      return (
        <View class={`components-check-list-wrapper ${containerClass}`}>
          <View
            class={classNames({
              'check-list-content': true,
              'check-list-nocontent': checkedData.value.length === 0,
              'check-list-disable': disabled,
              'check-list-flex-start': flexStart,
            })}
            onClick={() => {
              if (!disabled && !show.value) {
                show.value = true
              }
            }}
          >
            {renderShowInner()}
          </View>

          <View class="flex">
            {!disabled && allowClear && !!checkedData.value?.length && (
              <View
                class="jmc-nut-icon jmc-nut-icon-clear clear-box"
                onClick={clear}
              ></View>
            )}
            {showArrowDown && (
              <View
                onClick={() => (show.value = true)}
                class="jmc-nut-icon jmc-nut-icon-xiajiantou check-list-arrow"
              ></View>
            )}
            {showArrowLeft && (
              <View
                onClick={() => (show.value = true)}
                class="jmc-nut-icon jmc-nut-icon-youjiantou check-list-arrow"
              ></View>
            )}
          </View>
          <Popup
            closeable={false}
            v-model:visible={show.value}
            onClickCloseIcon={() => (show.value = false)}
            onClickOverlay={() => (show.value = false)}
            position="bottom"
            teleportDisable={true}
            safeAreaInsetBottom
            round
          >
            <View class="check-list-header">
              <View
                class="check-list-cancel"
                onClick={() => (show.value = false)}
              >
                取消
              </View>
              <View class="check-list-title">{placeholder}</View>
              <View class="check-list-submit" onClick={handleConfirm}>
                确定
              </View>
            </View>
            {searchShow && (
              <Searchbar
                v-model={keyWord.value}
                placeholder={searchPlaceholder}
                background="#ffff"
                inputBackground="#F7F8FB"
              />
            )}
            <View
              class="check-list-body"
              style={{
                height: 'auto',
                maxHeight: '40vH',
                overflowY: virtualList ? 'hidden' : 'scroll',
              }}
            >
              {loading.value && (
                <View class="check-list-loading">
                  <View class="jmc-nut-icon jmc-nut-icon-loading"></View>
                </View>
              )}
              {!loading.value && innerData.value.length === 0 && (
                <View class="check-list-empty">
                  <Empty tips="没有找到相关结果哦~" />
                </View>
              )}
              {checkAll && limit === undefined && (
                <View class="check-list-item" onClick={handleCheckAll}>
                  <Checkbox
                    iconSize={20}
                    modelValue={
                      checked.value.length !== 0 &&
                      (checked.value.length === data?.length ||
                        checked.value.length === innerAllData.value.length)
                    }
                    disabled={disabledItem('ALL')}
                  ></Checkbox>
                  <View class="check-label-name">全选</View>
                </View>
              )}
              {!virtualList &&
                innerData.value?.map((it, index) => {
                  return Row({
                    it,
                    index,
                    labelName,
                    fieldName,
                    checkType,
                    optionsLabelName,
                  })
                })}
              {virtualList && (
                <VirtualList
                  height={320}
                  itemSize={44}
                  width="100%"
                  itemCount={innerData.value?.length}
                  itemData={innerData.value || []}
                  item={({ index, data }) => {
                    return Row({
                      it: data[index],
                      index,
                      labelName,
                      fieldName,
                      checkType,
                      optionsLabelName,
                    })
                  }}
                />
              )}
            </View>
          </Popup>
        </View>
      )
    }
  },
})

export default CheckList
