module.exports = {
  name: '@jmc/nutui',
  compiler: 'babel',
  build: {
    srcDir: './packages',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'yarn',
    ignore: [/types.d.ts/],
  },
}
