import { createRequire } from 'node:module'
import { join } from 'node:path'

import { format } from 'prettier'
import yargs from 'yargs'

import { ParentNode } from './AST.js'
import { getDirname } from './common.js'
import { generateOverloads } from './generateOverloads.js'
import { printOverload } from './printOverload.js'

const dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const prettierConfig = require('../../.prettierrc.cjs')

const program = yargs(process.argv, process.cwd())
  .option('definition', {
    alias: 'd',
    type: 'string',
    require: true,
  })
  .option('noImports', {
    type: 'boolean',
  })
  .option('printOutput', {
    type: 'boolean',
  })
  .option('skipFormat', {
    type: 'boolean',
  })

const HKT_IMPORTS = `import {
  HKT,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  HKT10,
  Kind,
  Kind2,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
  Kind10,
  Params,
  DefaultOf,
} from './HKT.js'`

async function main() {
  const { definition, noImports, printOutput, skipFormat } = await program.argv
  const filePath = join(
    dirname,
    'definitions',
    definition.endsWith('.ts') ? definition : definition + '.ts',
  )
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = await import(filePath)
  const modKeys = Object.keys(mod)
  const node = (modKeys.length === 1 ? mod[modKeys[0]] : mod['node']) as ParentNode

  console.log('Generating overloads...')

  const printed = generateOverloads(node).map(([overload, context]) =>
    printOverload(overload, context),
  )

  const input = (noImports ? '' : HKT_IMPORTS + '\n\n') + printed.join('\n\n')
  const output = (skipFormat ? input : format(input, prettierConfig)) + '\n'

  if (printOutput) {
    console.log(output)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { default: clipboard } = await import('clipboardy')

    await clipboard.write(output)

    console.log('Copied overload to your clipboard!')
  }
}

main().catch((error) => {
  console.error(error)

  process.exitCode = 1
})
