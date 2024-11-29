import { join } from 'path'
import { IDocMenuNavs, defineConfig } from '@antmjs/types'

const CWD = process.cwd()

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
    headerLinks: [],
    menu: getMenus(),
    demoCode: {
      dir: 'demo',
    },
    simulator: {
      url: {
        development: 'http://127.0.0.1:8181',
        production: '/nutui/mobile.html',
      },
      transform: (url) => `#/pages/${url}/index`,
      noMate: {
        urls: ['introduce'],
        redirect: '#/pages/checkList/index',
      },
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
      name: '表单组件',
      items: [
        {
          path: 'checkList',
          title: 'checkList 勾选组件',
        },
      ],
    },
  ]
}
