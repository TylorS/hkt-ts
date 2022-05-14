// TODO: update exports in package.json with all modules

import fs from 'fs'
import path, { extname } from 'path'

import { MODULES, ROOT_DIR, SOURCE_DIR, findFilePaths } from './common'

const TSX_REGEX = /.tsx?$/
const INDEX_REGEX = /\/?index$/

if (require.main === module) {
  const packageJsonPath = path.join(ROOT_DIR, 'package.json')
  const packageJsonContents = fs.readFileSync(packageJsonPath).toString()
  const packageJson = JSON.parse(packageJsonContents)

  packageJson.exports = createExports()

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).trim() + `\n`)
}

type ExportMap = {
  require: { default: string; types: string }
  import: { default: string; types: string }
}

export function createExports() {
  const exports: Record<string, ExportMap> = {
    '.': {
      require: {
        default: './cjs/index.js',
        types: './cjs/index.d.ts',
      },
      import: {
        default: './esm/index.js',
        types: './esm/index.d.ts',
      },
    },
  }

  for (const module of MODULES) {
    const sourceDir = path.join(SOURCE_DIR, module)
    const isDirectory = fs.statSync(sourceDir).isDirectory()
    const name = module.replace(TSX_REGEX, '')

    exports[`./${name}`] = {
      require: {
        default:
          './' +
          (isDirectory ? path.join('cjs', name, 'index.js') : path.join('cjs', `${name}.js`)),
        types:
          './' +
          (isDirectory ? path.join('cjs', name, 'index.js') : path.join('cjs', `${name}.d.ts`)),
      },
      import: {
        default:
          './' +
          (isDirectory ? path.join('esm', name, 'index.js') : path.join('esm', `${name}.js`)),
        types:
          './' +
          (isDirectory ? path.join('esm', name, 'index.js') : path.join('esm', `${name}.d.ts`)),
      },
    }

    if (!isDirectory) {
      continue
    }

    const filePaths = findFilePaths(sourceDir, [
      '!**/*.browser-test.ts',
      '!**/*.test.ts',
      '**/*.ts',
    ])

    for (const filePath of filePaths) {
      const relativePath = path.relative(sourceDir, filePath)

      if (extname(relativePath) !== '.ts') {
        continue
      }

      const jsPath = relativePath.replace('.ts', '.js')
      const dtsPath = relativePath.replace('.ts', '.d.ts')
      const map: ExportMap = {
        require: {
          default: './' + path.join('cjs', name, jsPath),
          types: './' + path.join('cjs', name, dtsPath),
        },
        import: {
          default: './' + path.join('esm', name, jsPath),
          types: './' + path.join('esm', name, dtsPath),
        },
      }

      const relativeName = relativePath.replace(TSX_REGEX, '').replace(INDEX_REGEX, '')

      exports[`./${name}${relativeName ? `/${relativeName}` : ''}`] = map
    }
  }

  return exports
}
