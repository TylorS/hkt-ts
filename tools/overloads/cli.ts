import { join } from 'path'

import { format } from 'prettier'
import yargs from 'yargs'

import { Eff, Sync, pipe } from '../../src'

import { FunctionSignature, Interface } from './AST'
import { generateOverloadsSafe } from './generateOverloads'
import { printOverloadSafe } from './printOverload'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('../../.prettierrc.js')

const program = yargs(process.argv, process.cwd())
  .option('definition', {
    alias: 'd',
    type: 'string',
    require: true,
  })
  .option('noImports', {
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
} from './HKT'`

async function main() {
  const { definition, noImports } = await program.argv
  const filePath = join(
    __dirname,
    'definitions',
    definition.endsWith('.ts') ? definition : definition + '.ts',
  )
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { node } = require(filePath) as { node: FunctionSignature | Interface }

  console.log('Generating overloads...')

  const main = Eff.Eff(function* () {
    const overloads = yield* generateOverloadsSafe(node)
    const printed = yield* pipe(
      overloads,
      Sync.forEach(([overload, context]) => printOverloadSafe(overload, context)),
    )

    const source = (noImports ? '' : HKT_IMPORTS + '\n\n') + printed.join('\n\n')

    return source
  })

  const input = pipe(main, Sync.runWith, Eff.run)
  const output = format(input, prettierConfig) + '\n'

  console.log(output + '\n')

  const { default: clipboard } = await import('clipboardy')

  await clipboard.write(output)

  console.log('Copied overload to your clipboard!')
}

main().catch((error) => {
  console.error(error)

  process.exitCode = 1
})
