import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'packages/jsx/src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'packages/jsx/lib/index.js',
      },
    ],
    plugins: [typescript({ tsconfig: 'packages/jsx/tsconfig.json' })],
  },
]
