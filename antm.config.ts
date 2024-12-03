import { join } from 'path'
import { IDocMenuNavs, defineConfig } from '@antmjs/types'

const CWD = process.cwd()
// https://antmjs.github.io/antm/antm-doc/#/quick
export default defineConfig({
  docs: {
    title: 'NutUi',
    buildPort: 7972,
    src: [join(CWD, './packages'), join(CWD, './docs')],
    globalStyles: [join(process.cwd(), './config/docs.less')],
    logo: 'https://atgs-prod.oss-cn-hangzhou.aliyuncs.com/cloud/storage/weapp/nut-logo.png',
    route: {
      level: 1,
    },
    menu: getMenus(),
    demoCode: {
      dir: 'demo',
    },
    simulator: {
      url: {
        development: 'http://127.0.0.1:8181',
        production: '/nutui/dist/index.html',
      },
      transform: (url) => `#/pages/${url}/index`,
      noMate: {
        urls: ['introduce', 'contributing'],
        redirect: '#/pages/checkList/index',
      },
    },
    headerLinks: [
      {
        title: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/jmcteam/nutui',
        type: 'img',
      },
      {
        title: '更多',
        type: 'select',
        options: [
          {
            title: 'taro-vue3-jsx-template',
            url: 'https://github.com/jmcteam/taro-vue-jsx-template',
          },
        ],
      },
    ],
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
        {
          path: 'quick',
          title: '快速开始',
        },
        {
          path: 'contributing',
          title: '贡献指南',
        },
      ],
    },
    {
      name: '表单组件',
      items: [
        {
          path: 'checkList',
          title: 'checkList 勾选组件',
        },
        {
          path: 'datePickerBox',
          title: 'datePickerBox 日期组件',
        },
      ],
    },
  ]
}
