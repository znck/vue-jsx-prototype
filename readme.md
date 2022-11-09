# Better JSX

This example uses a factory function scoped JSX implementation. JSX types can be enabled:

1. Per project: either importing `@vue/jsx/register` or adding it to `tsconfig.json`.
2. Per file: using `/** @jsx h */` followed by `import {h} from '@vue/jsx'`.

## Advantages

No global types pollution, i.e., multiple implementations of JSX can co-exist in the same project.

---

Clone and run `pnpm install` to setup.
