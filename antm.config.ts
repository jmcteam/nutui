import { join } from 'path'
import { IDocMenuNavs, defineConfig } from '@antmjs/types'

const CWD = process.cwd()

export default defineConfig({
  docs: {
    title: 'antd Max',
    buildPort: 7972,
    src: [join(CWD, './src'), join(CWD, './docs')],
    globalStyles: [
      join(process.cwd(), './config/doc.less'),
      join(process.cwd(), './config/style.less'),
    ],
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    route: {
      level: 1,
    },
    headerLinks: [
      {
        title: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/AntmJS/@antmjs/vantui-vue/',
        type: 'img',
      },
      {
        title: '更多',
        type: 'select',
        options: [
          {
            title: 'antmjs Doc',
            url: 'https://antmjs.github.io/antm/antm-doc/',
          },
          {
            title: 'antmjs Vantui',
            url: 'https://antmjs.github.io/vantui',
          },
        ],
      },
    ],
    menu: getMenus(),
    demoCode: {
      dir: 'example',
    },
  },
})

function getMenus(): IDocMenuNavs {
  return [
    {
      name: '指南',
      items: [
        {
          path: 'introduce',
          title: '介绍',
        },
      ],
    },
    {
      name: '通用组件',
      items: [
        {
          path: 'button-async',
          title: 'button-async 异步按钮',
        },
        {
          path: 'infinite-scroll',
          title: 'infinite-scroll 无限滚动',
        },
      ],
    },
    {
      name: '数据录入',
      items: [
        {
          path: 'form-box',
          title: 'form-box 表单盒子',
        },
      ],
    },
    {
      name: '业务组件',
      items: [
        {
          path: 'sku',
          title: 'sku 商品选择',
        },
      ],
    },
  ]
}
