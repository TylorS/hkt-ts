import { Options } from '@typed/test'

const nodeOptions: Options = {
  typeCheck: false,
  files: ['source/**/*.test.ts'],
}

const browserOptions: Options = {
  ...nodeOptions,
  mode: 'browser',
  files: ['source/**/*.browser-test.ts'],
}

const configs = [nodeOptions]

if (process.env.BROWSER) {
  configs.push(browserOptions)
}

export default configs
