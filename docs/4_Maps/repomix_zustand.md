This file is a merged representation of the entire codebase, combined into a single document by Repomix. The content has been processed where security check has been disabled.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files, each consisting of:

- File path as an attribute
- Full contents of the file
  </file_format>

<usage_guidelines>

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
  </usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
</notes>

<additional_info>

</additional_info>

</file_summary>

<directory_structure>
.codesandbox/
ci.json
.github/
DISCUSSION_TEMPLATE/
bug-report.yml
ISSUE_TEMPLATE/
bug_report.md
config.yml
workflows/
compressed-size-action.yml
cr.yml
docs.yml
lint-and-type.yml
publish.yml
test-multiple-builds.yml
test-multiple-versions.yml
test-old-typescript.yml
FUNDING.yml
pull_request_template.md
docs/
apis/
create-store.md
create-with-equality-fn.md
create.md
shallow.md
getting-started/
comparison.md
introduction.md
guides/
auto-generating-selectors.md
connect-to-state-with-url-hash.md
event-handler-in-pre-react-18.md
flux-inspired-practice.md
how-to-reset-state.md
immutable-state-and-merging.md
initialize-state-with-props.md
maps-and-sets-usage.md
nextjs.md
practice-with-no-store-actions.md
prevent-rerenders-with-use-shallow.md
slices-pattern.md
ssr-and-hydration.md
testing.md
tutorial-tic-tac-toe.md
typescript.md
updating-state.md
hooks/
use-shallow.md
use-store-with-equality-fn.md
use-store.md
integrations/
immer-middleware.md
persisting-store-data.md
third-party-libraries.md
middlewares/
combine.md
devtools.md
immer.md
persist.md
redux.md
subscribe-with-selector.md
migrations/
migrating-to-v4.md
migrating-to-v5.md
previous-versions/
zustand-v3-create-context.md
examples/
demo/
public/
manifest.json
robots.txt
vite.svg
src/
components/
CodePreview.jsx
CopyButton.jsx
Details.jsx
Fireflies.jsx
Scene.jsx
SnippetLang.jsx
materials/
layerMaterial.js
resources/
javascript-code.js
typescript-code.js
utils/
copy-to-clipboard.js
App.jsx
main.jsx
pmndrs.css
styles.css
.gitignore
eslint.config.js
index.html
package.json
vite.config.js
starter/
src/
assets/
zustand-mascot.svg
index.css
index.tsx
vite-env.d.ts
index.html
package.json
README.md
tsconfig.json
vite.config.ts
src/
middleware/
combine.ts
devtools.ts
immer.ts
persist.ts
redux.ts
subscribeWithSelector.ts
react/
shallow.ts
vanilla/
shallow.ts
index.ts
middleware.ts
react.ts
shallow.ts
traditional.ts
types.d.ts
vanilla.ts
tests/
vanilla/
basic.test.ts
shallow.test.tsx
subscribe.test.tsx
basic.test.tsx
devtools.test.tsx
middlewareTypes.test.tsx
persistAsync.test.tsx
persistSync.test.tsx
setup.ts
shallow.test.tsx
ssr.test.tsx
subscribe.test.tsx
test-utils.ts
types.test.tsx
.gitignore
.prettierignore
CONTRIBUTING.md
eslint.config.mjs
FUNDING.json
LICENSE
package.json
README.md
rollup.config.mjs
tsconfig.json
vitest.config.mts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".codesandbox/ci.json">
{
  "packages": ["dist"],
  "sandboxes": [
    "new",
    "react-typescript-react-ts",
    "simple-react-browserify-x9yni",
    "simple-snowpack-react-o1gmx",
    "react-parcel-onewf",
    "next-js-uo1h0",
    "pavlobu-zustand-demo-frutec"
  ],
  "node": "18"
}
</file>

<file path=".github/DISCUSSION_TEMPLATE/bug-report.yml">
labels: ['bug']
body:
  - type: markdown
    attributes:
      value: If you don't have a reproduction link, please choose a different category.
  - type: textarea
    attributes:
      label: Bug Description
      description: Describe the bug you encountered
    validations:
      required: true
  - type: input
    attributes:
      label: Reproduction Link
      description: A link to a [TypeScript Playground](https://www.typescriptlang.org/play), a [StackBlitz Project](https://stackblitz.com/) or something else with a minimal reproduction.
    validations:
      required: true
</file>

## <file path=".github/ISSUE_TEMPLATE/bug_report.md">

name: Assigned issue
about: This is to create a new issue that already has an assignee. Please open a new discussion otherwise.
title: ''
labels: ''
assignees: ''

---

</file>

<file path=".github/ISSUE_TEMPLATE/config.yml">
blank_issues_enabled: false
contact_links:
  - name: Bug Reports
    url: https://github.com/pmndrs/zustand/discussions/new?category=bug-report
    about: Please post bug reports here.
  - name: Questions
    url: https://github.com/pmndrs/zustand/discussions/new?category=q-a
    about: Please post questions here.
  - name: Other Discussions
    url: https://github.com/pmndrs/zustand/discussions/new/choose
    about: Please post ideas and general discussions here.
</file>

<file path=".github/workflows/compressed-size-action.yml">
name: Compressed Size

on: [pull_request]

jobs:
build:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/_'
cache: 'pnpm' - uses: preactjs/compressed-size-action@v2
with:
pattern: './dist/\*\*/_.{js,mjs}'
</file>

<file path=".github/workflows/cr.yml">
name: Publish Any Commit

on: [push, pull_request]

jobs:
build:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/_'
cache: 'pnpm' - run: pnpm install - run: pnpm run build - run: pnpm dlx pkg-pr-new publish './dist' --compact --template './examples/_'
</file>

<file path=".github/workflows/docs.yml">
name: Build documentation and deploy to GitHub Pages

on:
push:
branches: [main]
workflow_dispatch:

# Cancel previous run (see: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)

concurrency:
group: ${{ github.workflow }}-${{ github.ref }}
cancel-in-progress: true

jobs:
build:
uses: pmndrs/docs/.github/workflows/build.yml@v2
with:
mdx: 'docs'
libname: 'Zustand'
home_redirect: '/getting-started/introduction'
icon: '/favicon.ico'
logo: '/bear.jpg'
github: 'https://github.com/pmndrs/zustand'

deploy:
needs: build
runs-on: ubuntu-latest

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - id: deployment
        uses: actions/deploy-pages@v4

</file>

<file path=".github/workflows/lint-and-type.yml">
name: Lint and Type

on:
push:
branches: [main]
pull_request:
types: [opened, synchronize]

jobs:
lint:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/\*'
cache: 'pnpm' - run: pnpm install - run: pnpm run test:format - run: pnpm run test:types - run: pnpm run test:lint
</file>

<file path=".github/workflows/publish.yml">
name: Publish

on:
release:
types: [published]

jobs:
publish:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/\*'
registry-url: 'https://registry.npmjs.org'
cache: 'pnpm' - run: pnpm install - run: pnpm run build - run: npm publish
env:
NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
working-directory: dist
</file>

<file path=".github/workflows/test-multiple-builds.yml">
name: Test Multiple Builds

on:
push:
branches: [main]
pull_request:
types: [opened, synchronize]

jobs:
test_matrix:
runs-on: ubuntu-latest
strategy:
fail-fast: false
matrix:
build: [cjs, esm]
env: [development] # [development, production]
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/_'
cache: 'pnpm' - run: pnpm install - run: pnpm run build - name: Patch for DEV-ONLY
if: ${{ matrix.env == 'development' }}
run: |
sed -i~ "s/it[.a-zA-Z]_('\[DEV-ONLY\]/it('/" tests/_.tsx
sed -i~ "s/it[.a-zA-Z]_('\[PRD-ONLY\]/it.skip('/" tests/_.tsx - name: Patch for PRD-ONLY
if: ${{ matrix.env == 'production' }}
run: |
sed -i~ "s/it[.a-zA-Z]_('\[PRD-ONLY\]/it('/" tests/_.tsx
sed -i~ "s/it[.a-zA-Z]_('\[DEV-ONLY\]/it.skip('/" tests/_.tsx - name: Patch for CJS
if: ${{ matrix.build == 'cjs' }}
run: |
sed -i~ "s/resolve('\.\/src\(._\)\.ts')/resolve('\.\/dist\1.js')/" vitest.config.mts - name: Patch for ESM
if: ${{ matrix.build == 'esm' }}
        run: |
          sed -i~ "s/resolve('\.\/src\(.*\)\.ts')/resolve('\.\/dist\/esm\1.mjs')/" vitest.config.mts
          sed -i~ "1s/^/import.meta.env=import.meta.env||{};import.meta.env.MODE='${NODE_ENV}';/" tests/\*.tsx
env:
NODE_ENV: ${{ matrix.env }} - name: Test ${{ matrix.build }} ${{ matrix.env }}
run: |
pnpm run test:spec
env:
NODE_ENV: ${{ matrix.env }}
</file>

<file path=".github/workflows/test-multiple-versions.yml">
name: Test Multiple Versions

on:
push:
branches: [main]
pull_request:
types: [opened, synchronize]

jobs:
test:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/\*'
cache: 'pnpm' - run: pnpm install - run: pnpm run build # we don't have any other workflows to test build - run: pnpm run test:spec

test_matrix:
runs-on: ubuntu-latest
strategy:
fail-fast: false
matrix:
react: - 18.0.0 - 18.1.0 - 18.2.0 - 18.3.1 - 19.0.0-rc.1 - 19.1.0-canary-3ce77d55-20250106 - 0.0.0-experimental-3ce77d55-20250106
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/\*'
cache: 'pnpm' - run: pnpm install - name: Test ${{ matrix.react }} ${{ matrix.devtools-skip }}
        run: |
          pnpm add -D react@${{ matrix.react }} react-dom@${{ matrix.react }}
pnpm run test:spec
</file>

<file path=".github/workflows/test-old-typescript.yml">
name: Test Old TypeScript

on:
push:
branches: [main]
pull_request:
types: [opened, synchronize]

jobs:
test_matrix:
runs-on: ubuntu-latest
strategy:
fail-fast: false
matrix:
typescript: - 5.5.4 - 5.4.5 - 5.3.3 - 5.2.2 - 5.1.6 - 5.0.4 - 4.9.5 - 4.8.4 - 4.7.4 - 4.6.4 - 4.5.5
steps: - uses: actions/checkout@v4 - uses: pnpm/action-setup@v4 - uses: actions/setup-node@v4
with:
node-version: 'lts/_'
cache: 'pnpm' - run: pnpm install - run: pnpm run build - name: Patch for all TS
run: |
sed -i~ 's/"isolatedDeclarations": true,//' tsconfig.json - name: Patch for v4/v3 TS
if: ${{ startsWith(matrix.typescript, '4.') || startsWith(matrix.typescript, '3.') }}
run: |
sed -i~ 's/"verbatimModuleSyntax": true,//' tsconfig.json - name: Patch for Old TS
run: |
sed -i~ 's/"moduleResolution": "bundler",/"moduleResolution": "node",/' tsconfig.json
sed -i~ 's/"allowImportingTsExtensions": true,//' tsconfig.json
sed -i~ 's/"zustand": \["\.\/src\/index\.ts"\],/"zustand": [".\/dist\/index.d.ts"],/' tsconfig.json
sed -i~ 's/"zustand\/\*": \["\.\/src\/\*\.ts"\]/"zustand\/_": [".\/dist\/*.d.ts"]/' tsconfig.json
sed -i~ 's/"include": ._/"include": ["src\/types.d.ts", "dist\/\*\*\/_", "tests\/\*_\/_"],/' tsconfig.json
pnpm json -I -f package.json -e "this.resolutions={}; this.resolutions['@types/node']='18.13.0';"
pnpm add -D @types/node@18.13.0 - name: Install old TypeScript
run: pnpm add -D typescript@${{ matrix.typescript }} - name: Test ${{ matrix.typescript }}
run: pnpm run test:types
</file>

<file path=".github/FUNDING.yml">
# These are supported funding model platforms

github: [dai-shi] # Replace with up to 4 GitHub Sponsors-enabled usernames e.g., [user1, user2]
patreon: # Replace with a single Patreon username
open_collective: # Replace with a single Open Collective username
ko_fi: # Replace with a single Ko-fi username
tidelift: # Replace with a single Tidelift platform-name/package-name e.g., npm/babel
community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
liberapay: # Replace with a single Liberapay username
issuehunt: # Replace with a single IssueHunt username
otechie: # Replace with a single Otechie username
lfx_crowdfunding: # Replace with a single LFX Crowdfunding project-name e.g., cloud-foundry
custom: [
'https://daishi.gumroad.com/l/uaxms',
'https://daishi.gumroad.com/l/learn-zustand-v4',
] # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
</file>

<file path=".github/pull_request_template.md">
## Related Bug Reports or Discussions

Fixes #

## Summary

## Check List

- [ ] `pnpm run fix` for formatting and linting code and docs
      </file>

## <file path="docs/apis/create-store.md">

title: createStore
description: How to create vanilla stores
nav: 24

---

`createStore` lets you create a vanilla store that exposes API utilities.

```js
const someStore = createStore(stateCreatorFn);
```

- [Types](#types)
  - [Signature](#createstore-signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Updating state based on previous state](#updating-state-based-on-previous-state)
  - [Updating Primitives in State](#updating-primitives-in-state)
  - [Updating Objects in State](#updating-objects-in-state)
  - [Updating Arrays in State](#updating-arrays-in-state)
  - [Subscribing to state updates](#subscribing-to-state-updates)
- [Troubleshooting](#troubleshooting)
  - [I’ve updated the state, but the screen doesn’t update](#ive-updated-the-state-but-the-screen-doesnt-update)

## Types

### Signature

```ts
createStore<T>()(stateCreatorFn: StateCreator<T, [], []>): StoreApi<T>
```

## Reference

### `createStore(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.

#### Returns

`createStore` returns a vanilla store that exposes API utilities, `setState`, `getState`,
`getInitialState` and `subscribe`.

## Usage

### Updating state based on previous state

This example shows how you can support **updater functions** within **actions**.

```tsx
import { createStore } from "zustand/vanilla";

type AgeStoreState = { age: number };

type AgeStoreActions = {
  setAge: (
    nextAge:
      | AgeStoreState["age"]
      | ((currentAge: AgeStoreState["age"]) => AgeStoreState["age"])
  ) => void;
};

type AgeStore = AgeStoreState & AgeStoreActions;

const ageStore = createStore<AgeStore>()((set) => ({
  age: 42,
  setAge: (nextAge) =>
    set((state) => ({
      age: typeof nextAge === "function" ? nextAge(state.age) : nextAge,
    })),
}));

function increment() {
  ageStore.getState().setAge((currentAge) => currentAge + 1);
}

const $yourAgeHeading = document.getElementById(
  "your-age"
) as HTMLHeadingElement;
const $incrementBy3Button = document.getElementById(
  "increment-by-3"
) as HTMLButtonElement;
const $incrementBy1Button = document.getElementById(
  "increment-by-1"
) as HTMLButtonElement;

$incrementBy3Button.addEventListener("click", () => {
  increment();
  increment();
  increment();
});

$incrementBy1Button.addEventListener("click", () => {
  increment();
});

const render: Parameters<typeof ageStore.subscribe>[0] = (state) => {
  $yourAgeHeading.innerHTML = `Your age: ${state.age}`;
};

render(ageStore.getInitialState(), ageStore.getInitialState());

ageStore.subscribe(render);
```

Here's the `html` code

```html
<h1 id="your-age"></h1>
<button id="increment-by-3" type="button">+3</button>
<button id="increment-by-1" type="button">+1</button>
```

### Updating Primitives in State

State can hold any kind of JavaScript value. When you want to update built-in primitive values like
numbers, strings, booleans, etc. you should directly assign new values to ensure updates are applied
correctly, and avoid unexpected behaviors.

> [!NOTE]
> By default, `set` function performs a shallow merge. If you need to completely replace
> the state with a new one, use the `replace` parameter set to `true`

```ts
import { createStore } from "zustand/vanilla";

type XStore = number;

const xStore = createStore<XStore>()(() => 0);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  xStore.setState(event.clientX, true);
});

const render: Parameters<typeof xStore.subscribe>[0] = (x) => {
  $dot.style.transform = `translate(${x}px, 0)`;
};

render(xStore.getInitialState(), xStore.getInitialState());

xStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Updating Objects in State

Objects are **mutable** in JavaScript, but you should treat them as **immutable** when you store
them in state. Instead, when you want to update an object, you need to create a new one (or make a
copy of an existing one), and then set the state to use the new object.

By default, `set` function performs a shallow merge. For most updates where you only need to modify
specific properties, the default shallow merge is preferred as it's more efficient. To completely
replace the state with a new one, use the `replace` parameter set to `true` with caution, as it
discards any existing nested data within the state.

```ts
import { createStore } from "zustand/vanilla";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getInitialState(), positionStore.getInitialState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in
state. Just like with objects, when you want to update an array stored in state, you need to create
a new one (or make a copy of an existing one), and then set state to use the new array.

By default, `set` function performs a shallow merge. To update array values we should assign new
values to ensure updates are applied correctly, and avoid unexpected behaviors. To completely
replace the state with a new one, use the `replace` parameter set to `true`.

> [!IMPORTANT]
> We should prefer immutable operations like: `[...array]`, `concat(...)`, `filter(...)`,
> `slice(...)`, `map(...)`, `toSpliced(...)`, `toSorted(...)`, and `toReversed(...)`, and avoid
> mutable operations like `array[arrayIndex] = ...`, `push(...)`, `unshift(...)`, `pop(...)`,
> `shift(...)`, `splice(...)`, `reverse(...)`, and `sort(...)`.

```ts
import { createStore } from "zustand/vanilla";

type PositionStore = [number, number];

const positionStore = createStore<PositionStore>()(() => [0, 0]);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.setState([event.clientX, event.clientY], true);
});

const render: Parameters<typeof positionStore.subscribe>[0] = ([x, y]) => {
  $dot.style.transform = `translate(${x}px, ${y}px)`;
};

render(positionStore.getInitialState(), positionStore.getInitialState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Subscribing to state updates

By subscribing to state updates, you register a callback that fires whenever the store's state
updates. We can use `subscribe` for external state management.

```ts
import { createStore } from "zustand/vanilla";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));

const $dot = document.getElementById("dot") as HTMLDivElement;

$dot.addEventListener("mouseenter", (event) => {
  const parent = event.currentTarget.parentElement;
  const parentWidth = parent.clientWidth;
  const parentHeight = parent.clientHeight;

  positionStore.getState().setPosition({
    x: Math.ceil(Math.random() * parentWidth),
    y: Math.ceil(Math.random() * parentHeight),
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getInitialState(), positionStore.getInitialState());

positionStore.subscribe(render);

const logger: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  console.log("new position", { position: state.position });
};

positionStore.subscribe(logger);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

## Troubleshooting

### I’ve updated the state, but the screen doesn’t update

In the previous example, the `position` object is always created fresh from the current cursor
position. But often, you will want to include existing data as a part of the new object you’re
creating. For example, you may want to update only one field in a form, but keep the previous
values for all other fields.

These input fields don’t work because the `oninput` handlers mutate the state:

```ts
import { createStore } from "zustand/vanilla";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState["person"]) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const personStore = createStore<PersonStore>()((set) => ({
  person: {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  },
  setPerson: (person) => set({ person }),
}));

const $firstNameInput = document.getElementById(
  "first-name"
) as HTMLInputElement;
const $lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const $emailInput = document.getElementById("email") as HTMLInputElement;
const $result = document.getElementById("result") as HTMLDivElement;

function handleFirstNameChange(event: Event) {
  personStore.getState().person.firstName = (event.target as any).value;
}

function handleLastNameChange(event: Event) {
  personStore.getState().person.lastName = (event.target as any).value;
}

function handleEmailChange(event: Event) {
  personStore.getState().person.email = (event.target as any).value;
}

$firstNameInput.addEventListener("input", handleFirstNameChange);
$lastNameInput.addEventListener("input", handleLastNameChange);
$emailInput.addEventListener("input", handleEmailChange);

const render: Parameters<typeof personStore.subscribe>[0] = (state) => {
  $firstNameInput.value = state.person.firstName;
  $lastNameInput.value = state.person.lastName;
  $emailInput.value = state.person.email;

  $result.innerHTML = `${state.person.firstName} ${state.person.lastName} (${state.person.email})`;
};

render(personStore.getInitialState(), personStore.getInitialState());

personStore.subscribe(render);
```

Here's the `html` code

```html
<label style="display: block">
  First name:
  <input id="first-name" />
</label>
<label style="display: block">
  Last name:
  <input id="last-name" />
</label>
<label style="display: block">
  Email:
  <input id="email" />
</label>
<p id="result"></p>
```

For example, this line mutates the state from a past render:

```ts
personStore.getState().firstName = (e.target as any).value;
```

The reliable way to get the behavior you’re looking for is to create a new object and pass it to
`setPerson`. But here you want to also copy the existing data into it because only one of the
fields has changed:

```ts
personStore.getState().setPerson({
  firstName: e.target.value, // New first name from the input
});
```

> [!NOTE]
> We don’t need to copy every property separately due to `set` function performing shallow merge by
> default.

Now the form works!

Notice how you didn’t declare a separate state variable for each input field. For large forms,
keeping all data grouped in an object is very convenient—as long as you update it correctly!

```ts {32-34,38-40,44-46}
import { createStore } from "zustand/vanilla";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState["person"]) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const personStore = createStore<PersonStore>()((set) => ({
  person: {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  },
  setPerson: (person) => set({ person }),
}));

const $firstNameInput = document.getElementById(
  "first-name"
) as HTMLInputElement;
const $lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const $emailInput = document.getElementById("email") as HTMLInputElement;
const $result = document.getElementById("result") as HTMLDivElement;

function handleFirstNameChange(event: Event) {
  personStore.getState().setPerson({
    ...personStore.getState().person,
    firstName: (event.target as any).value,
  });
}

function handleLastNameChange(event: Event) {
  personStore.getState().setPerson({
    ...personStore.getState().person,
    lastName: (event.target as any).value,
  });
}

function handleEmailChange(event: Event) {
  personStore.getState().setPerson({
    ...personStore.getState().person,
    email: (event.target as any).value,
  });
}

$firstNameInput.addEventListener("input", handleFirstNameChange);
$lastNameInput.addEventListener("input", handleLastNameChange);
$emailInput.addEventListener("input", handleEmailChange);

const render: Parameters<typeof personStore.subscribe>[0] = (state) => {
  $firstNameInput.value = state.person.firstName;
  $lastNameInput.value = state.person.lastName;
  $emailInput.value = state.person.email;

  $result.innerHTML = `${state.person.firstName} ${state.person.lastName} (${state.person.email})`;
};

render(personStore.getInitialState(), personStore.getInitialState());

personStore.subscribe(render);
```

</file>

## <file path="docs/apis/create-with-equality-fn.md">

title: createWithEqualityFn ⚛️
description: How to create efficient stores
nav: 25

---

`createWithEqualityFn` lets you create a React Hook with API utilities attached, just like `create`.
However, it offers a way to define a custom equality check. This allows for more granular control
over when components re-render, improving performance and responsiveness.

```js
const useSomeStore = createWithEqualityFn(stateCreatorFn, equalityFn);
```

- [Types](#types)
  - [Signature](#createwithequalityfn-signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Updating state based on previous state](#updating-state-based-on-previous-state)
  - [Updating Primitives in State](#updating-primitives-in-state)
  - [Updating Objects in State](#updating-objects-in-state)
  - [Updating Arrays in State](#updating-arrays-in-state)
  - [Updating state with no store actions](#updating-state-with-no-store-actions)
  - [Subscribing to state updates](#subscribing-to-state-updates)
- [Troubleshooting](#troubleshooting)
  - [I’ve updated the state, but the screen doesn’t update](#ive-updated-the-state-but-the-screen-doesnt-update)

## Types

### Signature

```ts
createWithEqualityFn<T>()(stateCreatorFn: StateCreator<T, [], []>, equalityFn?: (a: T, b: T) => boolean): UseBoundStore<StoreApi<T>>
```

## Reference

### `createWithEqualityFn(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.
- **optional** `equalityFn`: Defaults to `Object.is`. A function that lets you skip re-renders.

#### Returns

`createWithEqualityFn` returns a React Hook with API utilities attached, just like `create`. It
lets you return data that is based on current state, using a selector function, and lets you skip
re-renders using an equality function. It should take a selector function, and an equality function
as arguments.

## Usage

### Updating state based on previous state

To update a state based on previous state we should use **updater functions**. Read more
about that [here](https://react.dev/learn/queueing-a-series-of-state-updates).

This example shows how you can support **updater functions** within **actions**.

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type AgeStoreState = { age: number };

type AgeStoreActions = {
  setAge: (
    nextAge:
      | AgeStoreState["age"]
      | ((currentAge: AgeStoreState["age"]) => AgeStoreState["age"])
  ) => void;
};

type AgeStore = AgeStoreState & AgeStoreActions;

const useAgeStore = createWithEqualityFn<AgeStore>()(
  (set) => ({
    age: 42,
    setAge: (nextAge) =>
      set((state) => ({
        age: typeof nextAge === "function" ? nextAge(state.age) : nextAge,
      })),
  }),
  shallow
);

export default function App() {
  const age = useAgeStore((state) => state.age);
  const setAge = useAgeStore((state) => state.setAge);

  function increment() {
    setAge((currentAge) => currentAge + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        type="button"
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        type="button"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
```

### Updating Primitives in State

State can hold any kind of JavaScript value. When you want to update built-in primitive values like
numbers, strings, booleans, etc. you should directly assign new values to ensure updates are applied
correctly, and avoid unexpected behaviors.

> [!NOTE]
> By default, `set` function performs a shallow merge. If you need to completely replace
> the state with a new one, use the `replace` parameter set to `true`

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type XStore = number;

const useXStore = createWithEqualityFn<XStore>()(() => 0, shallow);

export default function MovingDot() {
  const x = useXStore();
  const setX = (nextX: number) => {
    useXStore.setState(nextX, true);
  };
  const position = { y: 0, x };

  return (
    <div
      onPointerMove={(e) => {
        setX(e.clientX);
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating Objects in State

Objects are **mutable** in JavaScript, but you should treat them as **immutable** when you store
them in state. Instead, when you want to update an object, you need to create a new one (or make a
copy of an existing one), and then set the state to use the new object.

By default, `set` function performs a shallow merge. For most updates where you only need to modify
specific properties, the default shallow merge is preferred as it's more efficient. To completely
replace the state with a new one, use the `replace` parameter set to `true` with caution, as it
discards any existing nested data within the state.

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const usePositionStore = createWithEqualityFn<PositionStore>()(
  (set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }),
  shallow
);

export default function MovingDot() {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in
state. Just like with objects, when you want to update an array stored in state, you need to create
a new one (or make a copy of an existing one), and then set state to use the new array.

By default, `set` function performs a shallow merge. To update array values we should assign new
values to ensure updates are applied correctly, and avoid unexpected behaviors. To completely
replace the state with a new one, use the `replace` parameter set to `true`.

> [!IMPORTANT]
> We should prefer immutable operations like: `[...array]`, `concat(...)`, `filter(...)`,
> `slice(...)`, `map(...)`, `toSpliced(...)`, `toSorted(...)`, and `toReversed(...)`, and avoid
> mutable operations like `array[arrayIndex] = ...`, `push(...)`, `unshift(...)`, `pop(...)`,
> `shift(...)`, `splice(...)`, `reverse(...)`, and `sort(...)`.

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type PositionStore = [number, number];

const usePositionStore = createWithEqualityFn<PositionStore>()(
  () => [0, 0],
  shallow
);

export default function MovingDot() {
  const [x, y] = usePositionStore();
  const position = { x, y };
  const setPosition: typeof usePositionStore.setState = (nextPosition) => {
    usePositionStore.setState(nextPosition, true);
  };

  return (
    <div
      onPointerMove={(e) => {
        setPosition([e.clientX, e.clientY]);
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating state with no store actions

Defining actions at module level, external to the store have a few advantages like: it doesn't
require a hook to call an action, and it facilitates code splitting.

> [!NOTE]
> The recommended way is to colocate actions and states within the store (let your actions be
> located together with your state).

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

const usePositionStore = createWithEqualityFn<{
  x: number;
  y: number;
}>()(() => ({ x: 0, y: 0 }), shallow);

const setPosition: typeof usePositionStore.setState = (nextPosition) => {
  usePositionStore.setState(nextPosition);
};

export default function MovingDot() {
  const position = usePositionStore();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
        onMouseEnter={(event) => {
          const parent = event.currentTarget.parentElement;
          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          setPosition({
            x: Math.ceil(Math.random() * parentWidth),
            y: Math.ceil(Math.random() * parentHeight),
          });
        }}
      />
    </div>
  );
}
```

### Subscribing to state updates

By subscribing to state updates, you register a callback that fires whenever the store's state
updates. We can use `subscribe` for external state management.

```tsx
import { useEffect } from "react";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const usePositionStore = createWithEqualityFn<PositionStore>()(
  (set) => ({
    position: { x: 0, y: 0 },
    setPosition: (nextPosition) => set(nextPosition),
  }),
  shallow
);

export default function MovingDot() {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  useEffect(() => {
    const unsubscribePositionStore = usePositionStore.subscribe(
      ({ position }) => {
        console.log("new position", { position });
      }
    );

    return () => {
      unsubscribePositionStore();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
        onMouseEnter={(event) => {
          const parent = event.currentTarget.parentElement;
          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          setPosition({
            x: Math.ceil(Math.random() * parentWidth),
            y: Math.ceil(Math.random() * parentHeight),
          });
        }}
      />
    </div>
  );
}
```

## Troubleshooting

### I’ve updated the state, but the screen doesn’t update

In the previous example, the `position` object is always created fresh from the current cursor
position. But often, you will want to include existing data as a part of the new object you’re
creating. For example, you may want to update only one field in a form, but keep the previous
values for all other fields.

These input fields don’t work because the `onChange` handlers mutate the state:

```tsx
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState["person"]) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const usePersonStore = createWithEqualityFn<PersonStore>()(
  (set) => ({
    person: {
      firstName: "Barbara",
      lastName: "Hepworth",
      email: "bhepworth@sculpture.com",
    },
    setPerson: (person) => set({ person }),
  }),
  shallow
);

export default function Form() {
  const person = usePersonStore((state) => state.person);
  const setPerson = usePersonStore((state) => state.setPerson);

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    person.email = e.target.value;
  }

  return (
    <>
      <label style={{ display: "block" }}>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

For example, this line mutates the state from a past render:

```tsx
person.firstName = e.target.value;
```

The reliable way to get the behavior you’re looking for is to create a new object and pass it to
`setPerson`. But here you want to also copy the existing data into it because only one of the
fields has changed:

```ts
setPerson({ ...person, firstName: e.target.value }); // New first name from the input
```

> [!NOTE]
> We don’t need to copy every property separately due to `set` function performing shallow merge by
> default.

Now the form works!

Notice how you didn’t declare a separate state variable for each input field. For large forms,
keeping all data grouped in an object is very convenient—as long as you update it correctly!

```tsx {32,36,40}
import { type ChangeEvent } from "react";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState["person"]) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const usePersonStore = createWithEqualityFn<PersonStore>()(
  (set) => ({
    person: {
      firstName: "Barbara",
      lastName: "Hepworth",
      email: "bhepworth@sculpture.com",
    },
    setPerson: (nextPerson) => set({ person: nextPerson }),
  }),
  shallow
);

export default function Form() {
  const person = usePersonStore((state) => state.person);
  const setPerson = usePersonStore((state) => state.setPerson);

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <label style={{ display: "block" }}>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

</file>

## <file path="docs/apis/create.md">

title: create ⚛️
description: How to create stores
nav: 26

---

`create` lets you create a React Hook with API utilities attached.

```js
const useSomeStore = create(stateCreatorFn);
```

- [Types](#types)
  - [Signature](#create-signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Updating state based on previous state](#updating-state-based-on-previous-state)
  - [Updating Primitives in State](#updating-primitives-in-state)
  - [Updating Objects in State](#updating-objects-in-state)
  - [Updating Arrays in State](#updating-arrays-in-state)
  - [Updating state with no store actions](#updating-state-with-no-store-actions)
  - [Subscribing to state updates](#subscribing-to-state-updates)
- [Troubleshooting](#troubleshooting)
  - [I’ve updated the state, but the screen doesn’t update](#ive-updated-the-state-but-the-screen-doesnt-update)

## Types

### Signature

```ts
create<T>()(stateCreatorFn: StateCreator<T, [], []>): UseBoundStore<StoreApi<T>>
```

## Reference

### `create(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.

#### Returns

`create` returns a React Hook with API utilities, `setState`, `getState`, `getInitialState` and
`subscribe`, attached. It lets you return data that is based on current state, using a selector
function. It should take a selector function as its only argument.

## Usage

### Updating state based on previous state

To update a state based on previous state we should use **updater functions**. Read more
about that [here](https://react.dev/learn/queueing-a-series-of-state-updates).

This example shows how you can support **updater functions** within **actions**.

```tsx
import { create } from "zustand";

type AgeStoreState = { age: number };

type AgeStoreActions = {
  setAge: (
    nextAge:
      | AgeStoreState["age"]
      | ((currentAge: AgeStoreState["age"]) => AgeStoreState["age"])
  ) => void;
};

type AgeStore = AgeStoreState & AgeStoreActions;

const useAgeStore = create<AgeStore>()((set) => ({
  age: 42,
  setAge: (nextAge) => {
    set((state) => ({
      age: typeof nextAge === "function" ? nextAge(state.age) : nextAge,
    }));
  },
}));

export default function App() {
  const age = useAgeStore((state) => state.age);
  const setAge = useAgeStore((state) => state.setAge);

  function increment() {
    setAge((currentAge) => currentAge + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
```

### Updating Primitives in State

State can hold any kind of JavaScript value. When you want to update built-in primitive values like
numbers, strings, booleans, etc. you should directly assign new values to ensure updates are applied
correctly, and avoid unexpected behaviors.

> [!NOTE]
> By default, `set` function performs a shallow merge. If you need to completely replace the state
> with a new one, use the `replace` parameter set to `true`

```tsx
import { create } from "zustand";

type XStore = number;

const useXStore = create<XStore>()(() => 0);

export default function MovingDot() {
  const x = useXStore();
  const setX = (nextX: number) => {
    useXStore.setState(nextX, true);
  };
  const position = { y: 0, x };

  return (
    <div
      onPointerMove={(e) => {
        setX(e.clientX);
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating Objects in State

Objects are **mutable** in JavaScript, but you should treat them as **immutable** when you store
them in state. Instead, when you want to update an object, you need to create a new one (or make a
copy of an existing one), and then set the state to use the new object.

By default, `set` function performs a shallow merge. For most updates where you only need to modify
specific properties, the default shallow merge is preferred as it's more efficient. To completely
replace the state with a new one, use the `replace` parameter set to `true` with caution, as it
discards any existing nested data within the state.

```tsx
import { create } from "zustand";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const usePositionStore = create<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (nextPosition) => set(nextPosition),
}));

export default function MovingDot() {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in
state. Just like with objects, when you want to update an array stored in state, you need to create
a new one (or make a copy of an existing one), and then set state to use the new array.

By default, `set` function performs a shallow merge. To update array values we should assign new
values to ensure updates are applied correctly, and avoid unexpected behaviors. To completely
replace the state with a new one, use the `replace` parameter set to `true`.

> [!IMPORTANT]
> We should prefer immutable operations like: `[...array]`, `concat(...)`, `filter(...)`,
> `slice(...)`, `map(...)`, `toSpliced(...)`, `toSorted(...)`, and `toReversed(...)`, and avoid
> mutable operations like `array[arrayIndex] = ...`, `push(...)`, `unshift(...)`, `pop(...)`,
> `shift(...)`, `splice(...)`, `reverse(...)`, and `sort(...)`.

```tsx
import { create } from "zustand";

type PositionStore = [number, number];

const usePositionStore = create<PositionStore>()(() => [0, 0]);

export default function MovingDot() {
  const [x, y] = usePositionStore();
  const setPosition: typeof usePositionStore.setState = (nextPosition) => {
    usePositionStore.setState(nextPosition, true);
  };
  const position = { x, y };

  return (
    <div
      onPointerMove={(e) => {
        setPosition([e.clientX, e.clientY]);
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

### Updating state with no store actions

Defining actions at module level, external to the store have a few advantages like: it doesn't
require a hook to call an action, and it facilitates code splitting.

> [!NOTE]
> The recommended way is to colocate actions and states within the store (let your actions be
> located together with your state).

```tsx
import { create } from "zustand";

const usePositionStore = create<{
  x: number;
  y: number;
}>()(() => ({ x: 0, y: 0 }));

const setPosition: typeof usePositionStore.setState = (nextPosition) => {
  usePositionStore.setState(nextPosition);
};

export default function MovingDot() {
  const position = usePositionStore();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
        onMouseEnter={(event) => {
          const parent = event.currentTarget.parentElement;
          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          setPosition({
            x: Math.ceil(Math.random() * parentWidth),
            y: Math.ceil(Math.random() * parentHeight),
          });
        }}
      />
    </div>
  );
}
```

### Subscribing to state updates

By subscribing to state updates, you register a callback that fires whenever the store's state
updates. We can use `subscribe` for external state management.

```tsx
import { useEffect } from "react";
import { create } from "zustand";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const usePositionStore = create<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (nextPosition) => set(nextPosition),
}));

export default function MovingDot() {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  useEffect(() => {
    const unsubscribePositionStore = usePositionStore.subscribe(
      ({ position }) => {
        console.log("new position", { position });
      }
    );

    return () => {
      unsubscribePositionStore();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
        onMouseEnter={(event) => {
          const parent = event.currentTarget.parentElement;
          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          setPosition({
            x: Math.ceil(Math.random() * parentWidth),
            y: Math.ceil(Math.random() * parentHeight),
          });
        }}
      />
    </div>
  );
}
```

## Troubleshooting

### I’ve updated the state, but the screen doesn’t update

In the previous example, the `position` object is always created fresh from the current cursor
position. But often, you will want to include existing data as a part of the new object you’re
creating. For example, you may want to update only one field in a form, but keep the previous
values for all other fields.

These input fields don’t work because the `onChange` handlers mutate the state:

```tsx
import { create } from "zustand";

type PersonStoreState = {
  firstName: string;
  lastName: string;
  email: string;
};

type PersonStoreActions = {
  setPerson: (nextPerson: Partial<PersonStoreState>) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const usePersonStore = create<PersonStore>()((set) => ({
  firstName: "Barbara",
  lastName: "Hepworth",
  email: "bhepworth@sculpture.com",
  setPerson: (nextPerson) => set(nextPerson),
}));

export default function Form() {
  const person = usePersonStore((state) => state);
  const setPerson = usePersonStore((state) => state.setPerson);

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    person.email = e.target.value;
  }

  return (
    <>
      <label style={{ display: "block" }}>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

For example, this line mutates the state from a past render:

```tsx
person.firstName = e.target.value;
```

The reliable way to get the behavior you’re looking for is to create a new object and pass it to
`setPerson`. But here you want to also copy the existing data into it because only one of the
fields has changed:

```ts
setPerson({ ...person, firstName: e.target.value }); // New first name from the input
```

> [!NOTE]
> We don’t need to copy every property separately due to `set` function performing shallow merge by
> default.

Now the form works!

Notice how you didn’t declare a separate state variable for each input field. For large forms,
keeping all data grouped in an object is very convenient—as long as you update it correctly!

```tsx {27,31,35}
import { create } from "zustand";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState["person"]) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const usePersonStore = create<PersonStore>()((set) => ({
  person: {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  },
  setPerson: (nextPerson) => set(nextPerson),
}));

export default function Form() {
  const person = usePersonStore((state) => state.person);
  const setPerson = usePersonStore((state) => state.setPerson);

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <label style={{ display: "block" }}>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

</file>

## <file path="docs/apis/shallow.md">

title: shallow
description: How compare simple data effectively
nav: 27

---

`shallow` lets you run fast checks on simple data structures. It effectively identifies changes in
**top-level** properties when you're working with data structures that don't have nested objects or
arrays within them.

> [!NOTE]
> Shallow lets you perform quick comparisons, but keep its limitations in mind.

```js
const equal = shallow(a, b);
```

- [Types](#types)
  - [Signature](#shallow-signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Comparing Primitives](#comparing-primitives)
  - [Comparing Objects](#comparing-objects)
  - [Comparing Sets](#comparing-sets)
  - [Comparing Maps](#comparing-maps)
- [Troubleshooting](#troubleshooting)
  - [Comparing objects returns `false` even if they are identical.](#comparing-objects-returns-false-even-if-they-are-identical)

## Types

### Signature

```ts
shallow<T>(a: T, b: T): boolean
```

## Reference

### `shallow(a, b)`

#### Parameters

- `a`: The first value.
- `b`: The second value.

#### Returns

`shallow` returns `true` when `a` and `b` are equal based on a shallow comparison of their
**top-level** properties. Otherwise, it should return `false`.

## Usage

### Comparing Primitives

When comparing primitive values like `string`s, `number`s, `boolean`s, and `BigInt`s, both
`Object.is` and `shallow` function return `true` if the values are the same. This is because
primitive values are compared by their actual value rather than by reference.

```ts
const stringLeft = "John Doe";
const stringRight = "John Doe";

Object.is(stringLeft, stringRight); // -> true
shallow(stringLeft, stringRight); // -> true

const numberLeft = 10;
const numberRight = 10;

Object.is(numberLeft, numberRight); // -> true
shallow(numberLeft, numberRight); // -> true

const booleanLeft = true;
const booleanRight = true;

Object.is(booleanLeft, booleanRight); // -> true
shallow(booleanLeft, booleanRight); // -> true

const bigIntLeft = 1n;
const bigIntRight = 1n;

Object.is(bigIntLeft, bigIntRight); // -> true
shallow(bigIntLeft, bigIntRight); // -> true
```

### Comparing Objects

When comparing objects, it's important to understand how `Object.is` and `shallow` function
operate, as they handle comparisons differently.

The `shallow` function returns `true` because shallow performs a shallow comparison of the objects.
It checks if the top-level properties and their values are the same. In this case, the top-level
properties (`firstName`, `lastName`, and `age`) and their values are identical between `objectLeft`
and `objectRight`, so shallow considers them equal.

```ts
const objectLeft = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
const objectRight = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

Object.is(objectLeft, objectRight); // -> false
shallow(objectLeft, objectRight); // -> true
```

### Comparing Sets

When comparing sets, it's important to understand how `Object.is` and `shallow` function operate,
as they handle comparisons differently.

The `shallow` function returns `true` because shallow performs a shallow comparison of the sets. It
checks if the top-level properties (in this case, the sets themselves) are the same. Since `setLeft`
and `setRight` are both instances of the Set object and contain the same elements, shallow considers
them equal.

```ts
const setLeft = new Set([1, 2, 3]);
const setRight = new Set([1, 2, 3]);

Object.is(setLeft, setRight); // -> false
shallow(setLeft, setRight); // -> true
```

### Comparing Maps

When comparing maps, it's important to understand how `Object.is` and `shallow` function operate, as
they handle comparisons differently.

The `shallow` returns `true` because shallow performs a shallow comparison of the maps. It checks if
the top-level properties (in this case, the maps themselves) are the same. Since `mapLeft` and
`mapRight` are both instances of the Map object and contain the same key-value pairs, shallow
considers them equal.

```ts
const mapLeft = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
const mapRight = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

Object.is(mapLeft, mapRight); // -> false
shallow(mapLeft, mapRight); // -> true
```

## Troubleshooting

### Comparing objects returns `false` even if they are identical.

The `shallow` function performs a shallow comparison. A shallow comparison checks if the top-level
properties of two objects are equal. It does not check nested objects or deeply nested properties.
In other words, it only compares the references of the properties.

In the following example, the shallow function returns `false` because it compares only the
top-level properties and their references. The address property in both objects is a nested object,
and even though their contents are identical, their references are different. Consequently, shallow
sees them as different, resulting in `false`.

```ts
const objectLeft = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};
const objectRight = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

Object.is(objectLeft, objectRight); // -> false
shallow(objectLeft, objectRight); // -> false
```

If we remove the `address` property, the shallow comparison would work as expected because all
top-level properties would be primitive values or references to the same values:

```ts
const objectLeft = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
const objectRight = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

Object.is(objectLeft, objectRight); // -> false
shallow(objectLeft, objectRight); // -> true
```

In this modified example, `objectLeft` and `objectRight` have the same top-level properties and
primitive values. Since `shallow` function only compares the top-level properties, it will return
`true` because the primitive values (`firstName`, `lastName`, and `age`) are identical in both
objects.
</file>

## <file path="docs/getting-started/comparison.md">

title: Comparison
description: How Zustand stacks up against similar libraries
nav: 1

---

Zustand is one of many state management libraries for React.
On this page we will discuss Zustand
in comparison to some of these libraries,
including Redux, Valtio, Jotai, and Recoil.

Each library has its own strengths and weaknesses,
and we will compare key differences and similarities between each.

## Redux

### State Model (vs Redux)

Conceptually, Zustand and Redux are quite similar,
both are based on an immutable state model.
However, Redux requires your app to be wrapped
in context providers; Zustand does not.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));
```

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

type Action = {
  type: keyof Actions;
  qty: number;
};

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.qty };
    case "decrement":
      return { count: state.count - action.qty };
    default:
      return state;
  }
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  dispatch: (action: Action) => set((state) => countReducer(state, action)),
}));
```

**Redux**

```ts
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
  qty: number;
};

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.qty };
    case "decrement":
      return { count: state.count - action.qty };
    default:
      return state;
  }
};

const countStore = createStore(countReducer);
```

```ts
import { createSlice, configureStore } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    incremented: (state, qty: number) => {
      // Redux Toolkit does not mutate the state, it uses the Immer library
      // behind scenes, allowing us to have something called "draft state".
      state.value += qty;
    },
    decremented: (state, qty: number) => {
      state.value -= qty;
    },
  },
});

const countStore = configureStore({ reducer: countSlice.reducer });
```

### Render Optimization (vs Redux)

When it comes to render optimizations within your app,
there are no major differences in approach between Zustand and Redux.
In both libraries it is recommended
that you manually apply render optimizations by using selectors.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));

const Component = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  // ...
};
```

**Redux**

```ts
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
  qty: number;
};

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.qty };
    case "decrement":
      return { count: state.count - action.qty };
    default:
      return state;
  }
};

const countStore = createStore(countReducer);

const Component = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // ...
};
```

```ts
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    incremented: (state, qty: number) => {
      // Redux Toolkit does not mutate the state, it uses the Immer library
      // behind scenes, allowing us to have something called "draft state".
      state.value += qty;
    },
    decremented: (state, qty: number) => {
      state.value -= qty;
    },
  },
});

const countStore = configureStore({ reducer: countSlice.reducer });

const useAppSelector: TypedUseSelectorHook<typeof countStore.getState> =
  useSelector;

const useAppDispatch: () => typeof countStore.dispatch = useDispatch;

const Component = () => {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  // ...
};
```

## Valtio

### State Model (vs Valtio)

Zustand and Valtio approach state management
in a fundamentally different way.
Zustand is based on the **immutable** state model,
while Valtio is based on the **mutable** state model.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  obj: { count: number };
};

const store = create<State>(() => ({ obj: { count: 0 } }));

store.setState((prev) => ({ obj: { count: prev.obj.count + 1 } }));
```

**Valtio**

```ts
import { proxy } from "valtio";

const state = proxy({ obj: { count: 0 } });

state.obj.count += 1;
```

### Render Optimization (vs Valtio)

The other difference between Zustand and Valtio
is Valtio makes render optimizations through property access.
However, with Zustand, it is recommended that
you manually apply render optimizations by using selectors.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

const useCountStore = create<State>(() => ({
  count: 0,
}));

const Component = () => {
  const count = useCountStore((state) => state.count);
  // ...
};
```

**Valtio**

```ts
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  count: 0,
});

const Component = () => {
  const { count } = useSnapshot(state);
  // ...
};
```

## Jotai

### State Model (vs Jotai)

There is one major difference between Zustand and Jotai.
Zustand is a single store,
while Jotai consists of primitive atoms that can be composed together.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  updateCount: (
    countCallback: (count: State["count"]) => State["count"]
  ) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  updateCount: (countCallback) =>
    set((state) => ({ count: countCallback(state.count) })),
}));
```

**Jotai**

```ts
import { atom } from "jotai";

const countAtom = atom<number>(0);
```

### Render Optimization (vs Jotai)

Jotai achieves render optimizations through atom dependency.
However, with Zustand it is recommended that
you manually apply render optimizations by using selectors.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  updateCount: (
    countCallback: (count: State["count"]) => State["count"]
  ) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  updateCount: (countCallback) =>
    set((state) => ({ count: countCallback(state.count) })),
}));

const Component = () => {
  const count = useCountStore((state) => state.count);
  const updateCount = useCountStore((state) => state.updateCount);
  // ...
};
```

**Jotai**

```ts
import { atom, useAtom } from "jotai";

const countAtom = atom<number>(0);

const Component = () => {
  const [count, updateCount] = useAtom(countAtom);
  // ...
};
```

## Recoil

### State Model (vs Recoil)

The difference between Zustand and Recoil
is similar to that between Zustand and Jotai.
Recoil depends on atom string keys
instead of atom object referential identities.
Additionally, Recoil needs to wrap your app in a context provider.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  setCount: (countCallback: (count: State["count"]) => State["count"]) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  setCount: (countCallback) =>
    set((state) => ({ count: countCallback(state.count) })),
}));
```

**Recoil**

```ts
import { atom } from "recoil";

const count = atom({
  key: "count",
  default: 0,
});
```

### Render Optimization (vs Recoil)

Similar to previous optimization comparisons,
Recoil makes render optimizations through atom dependency.
Whereas with Zustand, it is recommended that
you manually apply render optimizations by using selectors.

**Zustand**

```ts
import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  setCount: (countCallback: (count: State["count"]) => State["count"]) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  setCount: (countCallback) =>
    set((state) => ({ count: countCallback(state.count) })),
}));

const Component = () => {
  const count = useCountStore((state) => state.count);
  const setCount = useCountStore((state) => state.setCount);
  // ...
};
```

**Recoil**

```ts
import { atom, useRecoilState } from "recoil";

const countAtom = atom({
  key: "count",
  default: 0,
});

const Component = () => {
  const [count, setCount] = useRecoilState(countAtom);
  // ...
};
```

## Npm Downloads Trend

- [Npm Downloads Trend of State Management Libraries for React](https://npm-stat.com/charts.html?package=zustand&package=jotai&package=valtio&package=%40reduxjs%2Ftoolkit&package=recoil)
  </file>

## <file path="docs/getting-started/introduction.md">

title: Introduction
description: How to use Zustand
nav: 0

---

<div class="flex justify-center mb-4">
  <img src="../bear.jpg" alt="Logo Zustand" />
</div>

A small, fast, and scalable bearbones state management solution.
Zustand has a comfy API based on hooks.
It isn't boilerplatey or opinionated,
but has enough convention to be explicit and flux-like.

Don't disregard it because it's cute, it has claws!
Lots of time was spent to deal with common pitfalls,
like the dreaded [zombie child problem],
[React concurrency], and [context loss]
between mixed renderers.
It may be the one state manager in the React space that gets all of these right.

You can try a live demo [here](https://codesandbox.io/s/dazzling-moon-itop4).

[zombie child problem]: https://react-redux.js.org/api/hooks#stale-props-and-zombie-children
[react concurrency]: https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md
[context loss]: https://github.com/facebook/react/issues/13332

## Installation

Zustand is available as a package on NPM for use:

```bash
# NPM
npm install zustand
# Or, use any package manager of your choice.
```

## First create a store

Your store is a hook!
You can put anything in it: primitives, objects, functions.
The `set` function _merges_ state.

```js
import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
```

## Then bind your components, and that's it!

You can use the hook anywhere, without the need of providers.
Select your state and the consuming component
will re-render when that state changes.

```jsx
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} bears around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

</file>

## <file path="docs/guides/auto-generating-selectors.md">

title: Auto Generating Selectors
nav: 5

---

We recommend using selectors when using either the properties or actions from the store. You can access values from the store like so:

```typescript
const bears = useBearStore((state) => state.bears);
```

However, writing these could be tedious. If that is the case for you, you can auto-generate your selectors.

## Create the following function: `createSelectors`

```typescript
import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
```

If you have a store like this:

```typescript
interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const useBearStoreBase = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));
```

Apply that function to your store:

```typescript
const useBearStore = createSelectors(useBearStoreBase);
```

Now the selectors are auto generated and you can access them directly:

```typescript
// get the property
const bears = useBearStore.use.bears();

// get the action
const increment = useBearStore.use.increment();
```

## Vanilla Store

If you are using a vanilla store, use the following `createSelectors` function:

```typescript
import { StoreApi, useStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () =>
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};
```

The usage is the same as a React store. If you have a store like this:

```typescript
import { createStore } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const store = createStore<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));
```

Apply that function to your store:

```typescript
const useBearStore = createSelectors(store);
```

Now the selectors are auto generated and you can access them directly:

```typescript
// get the property
const bears = useBearStore.use.bears();

// get the action
const increment = useBearStore.use.increment();
```

## Live Demo

For a working example of this, see the [Code Sandbox](https://codesandbox.io/s/zustand-auto-generate-selectors-forked-rl8v5e?file=/src/selectors.ts).

## Third-party Libraries

- [auto-zustand-selectors-hook](https://github.com/Albert-Gao/auto-zustand-selectors-hook)
- [react-hooks-global-state](https://github.com/dai-shi/react-hooks-global-state)
- [zustood](https://github.com/udecode/zustood)
- [@davstack/store](https://github.com/DawidWraga/davstack)
  </file>

## <file path="docs/guides/connect-to-state-with-url-hash.md">

title: Connect to state with URL
nav: 11

---

## Connect State with URL Hash

If you want to connect state of a store to URL hash, you can create your own hash storage.

```ts
import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

export const useBoundStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => hashStorage),
    }
  )
);
```

### CodeSandbox Demo

https://codesandbox.io/s/zustand-state-with-url-hash-demo-f29b88?file=/src/store/index.ts

## Persist and Connect State with URL Parameters (Example: URL Query Parameters)

There are times when you want to conditionally connect the state to the URL.
This example depicts usage of the URL query parameters
while keeping it synced with another persistence implementation, like `localstorage`.

If you want the URL params to always populate, the conditional check on `getUrlSearch()` can be removed.

The implementation below will update the URL in place, without refresh, as the relevant states change.

```ts
import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

const getUrlSearch = () => {
  return window.location.search.slice(1);
};

const persistentStorage: StateStorage = {
  getItem: (key): string => {
    // Check URL first
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      const storedValue = searchParams.get(key);
      return JSON.parse(storedValue as string);
    } else {
      // Otherwise, we should load from localstorage or alternative storage
      return JSON.parse(localStorage.getItem(key) as string);
    }
  },
  setItem: (key, newValue): void => {
    // Check if query params exist at all, can remove check if always want to set URL
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      searchParams.set(key, JSON.stringify(newValue));
      window.history.replaceState(null, "", `?${searchParams.toString()}`);
    }

    localStorage.setItem(key, JSON.stringify(newValue));
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.delete(key);
    window.location.search = searchParams.toString();
  },
};

type LocalAndUrlStore = {
  typesOfFish: string[];
  addTypeOfFish: (fishType: string) => void;
  numberOfBears: number;
  setNumberOfBears: (newNumber: number) => void;
};

const storageOptions = {
  name: "fishAndBearsStore",
  storage: createJSONStorage<LocalAndUrlStore>(() => persistentStorage),
};

const useLocalAndUrlStore = create(
  persist<LocalAndUrlStore>(
    (set) => ({
      typesOfFish: [],
      addTypeOfFish: (fishType) =>
        set((state) => ({ typesOfFish: [...state.typesOfFish, fishType] })),

      numberOfBears: 0,
      setNumberOfBears: (numberOfBears) => set(() => ({ numberOfBears })),
    }),
    storageOptions
  )
);

export default useLocalAndUrlStore;
```

When generating the URL from a component, you can call buildShareableUrl:

```ts
const buildURLSuffix = (params, version = 0) => {
  const searchParams = new URLSearchParams();

  const zustandStoreParams = {
    state: {
      typesOfFish: params.typesOfFish,
      numberOfBears: params.numberOfBears,
    },
    version: version, // version is here because that is included with how Zustand sets the state
  };

  // The URL param key should match the name of the store, as specified as in storageOptions above
  searchParams.set("fishAndBearsStore", JSON.stringify(zustandStoreParams));
  return searchParams.toString();
};

export const buildShareableUrl = (params, version) => {
  return `${window.location.origin}?${buildURLSuffix(params, version)}`;
};
```

The generated URL would look like (here without any encoding, for readability):

`https://localhost/search?fishAndBearsStore={"state":{"typesOfFish":["tilapia","salmon"],"numberOfBears":15},"version":0}}`
</file>

## <file path="docs/guides/event-handler-in-pre-react-18.md">

title: Calling actions outside a React event handler in pre React 18
nav: 9

---

Because React handles `setState` synchronously if it's called outside an event handler, updating the state outside an event handler will force react to update the components synchronously. Therefore, there is a risk of encountering the zombie-child effect.
In order to fix this, the action needs to be wrapped in `unstable_batchedUpdates` like so:

```jsx
import { unstable_batchedUpdates } from "react-dom"; // or 'react-native'

const useFishStore = create((set) => ({
  fishes: 0,
  increaseFishes: () => set((prev) => ({ fishes: prev.fishes + 1 })),
}));

const nonReactCallback = () => {
  unstable_batchedUpdates(() => {
    useFishStore.getState().increaseFishes();
  });
};
```

More details: https://github.com/pmndrs/zustand/issues/302
</file>

## <file path="docs/guides/flux-inspired-practice.md">

title: Flux inspired practice
nav: 4

---

Although Zustand is an unopinionated library, we do recommend a few patterns.
These are inspired by practices originally found in [Flux](https://github.com/facebookarchive/flux),
and more recently [Redux](https://redux.js.org/understanding/thinking-in-redux/three-principles),
so if you are coming from another library, you should feel right at home.

However, Zustand does differ in some fundamental ways,
so some terminology may not perfectly align to other libraries.

## Recommended patterns

### Single store

Your applications global state should be located in a single Zustand store.

If you have a large application, Zustand supports [splitting the store into slices](./slices-pattern.md).

### Use `set` / `setState` to update the store

Always use `set` (or `setState`) to perform updates to your store.
`set` (and `setState`) ensures the described update is correctly merged and listeners are appropriately notified.

### Colocate store actions

In Zustand, state can be updated without the use of dispatched actions and reducers found in other Flux libraries.
These store actions can be added directly to the store as shown below.

Optionally, by using `setState` they can be [located external to the store](./practice-with-no-store-actions.md)

```js
const useBoundStore = create((set) => ({
  storeSliceA: ...,
  storeSliceB: ...,
  storeSliceC: ...,
  updateX: () => set(...),
  updateY: () => set(...),
}))
```

## Redux-like patterns

If you can't live without Redux-like reducers, you can define a `dispatch` function on the root level of the store:

```typescript
const types = { increase: "INCREASE", decrease: "DECREASE" };

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by };
    case types.decrease:
      return { grumpiness: state.grumpiness - by };
  }
};

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}));

const dispatch = useGrumpyStore((state) => state.dispatch);
dispatch({ type: types.increase, by: 2 });
```

You could also use our redux-middleware. It wires up your main reducer, sets initial state, and adds a dispatch function to the state itself and the vanilla api.

```typescript
import { redux } from "zustand/middleware";

const useReduxStore = create(redux(reducer, initialState));
```

Another way to update the store could be through functions wrapping the state functions. These could also handle side-effects of actions. For example, with HTTP-calls. To use Zustand in a non-reactive way, see [the readme](https://github.com/pmndrs/zustand#readingwriting-state-and-reacting-to-changes-outside-of-components).
</file>

## <file path="docs/guides/how-to-reset-state.md">

title: How to reset state
nav: 12

---

The following pattern can be used to reset the state to its initial value.

```ts
import { create } from "zustand";

// define types for state values and actions separately
type State = {
  salmon: number;
  tuna: number;
};

type Actions = {
  addSalmon: (qty: number) => void;
  addTuna: (qty: number) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  salmon: 0,
  tuna: 0,
};

// create store
const useSlice = create<State & Actions>()((set, get) => ({
  ...initialState,
  addSalmon: (qty: number) => {
    set({ salmon: get().salmon + qty });
  },
  addTuna: (qty: number) => {
    set({ tuna: get().tuna + qty });
  },
  reset: () => {
    set(initialState);
  },
}));
```

Resetting multiple stores at once

```ts
import type { StateCreator } from 'zustand'
import { create: actualCreate } from 'zustand'

const storeResetFns = new Set<() => void>()

const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn()
  })
}

export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = actualCreate(stateCreator)
    const initialState = store.getInitialState()
    storeResetFns.add(() => {
      store.setState(initialState, true)
    })
    return store
  }
}) as typeof actualCreate
```

## CodeSandbox Demo

- Basic: https://codesandbox.io/s/zustand-how-to-reset-state-basic-demo-rrqyon
- Advanced: https://codesandbox.io/s/zustand-how-to-reset-state-advanced-demo-gtu0qe
- Immer: https://codesandbox.io/s/how-to-reset-state-advance-immer-demo-nyet3f
  </file>

## <file path="docs/guides/immutable-state-and-merging.md">

title: Immutable state and merging
nav: 3

---

Like with React's `useState`, we need to update state immutably.

Here's a typical example:

```jsx
import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
```

The `set` function is to update state in the store.
Because the state is immutable, it should have been like this:

```js
set((state) => ({ ...state, count: state.count + 1 }));
```

However, as this is a common pattern, `set` actually merges state, and
we can skip the `...state` part:

```js
set((state) => ({ count: state.count + 1 }));
```

## Nested objects

The `set` function merges state at only one level.
If you have a nested object, you need to merge them explicitly. You will use the spread operator pattern like so:

```jsx
import { create } from "zustand";

const useCountStore = create((set) => ({
  nested: { count: 0 },
  inc: () =>
    set((state) => ({
      nested: { ...state.nested, count: state.nested.count + 1 },
    })),
}));
```

For complex use cases, consider using some libraries that help with immutable updates.
You can refer to [Updating nested state object values](./updating-state.md#deeply-nested-object).

## Replace flag

To disable the merging behavior, you can specify a `replace` boolean value for `set` like so:

```js
set((state) => newState, true);
```

</file>

## <file path="docs/guides/initialize-state-with-props.md">

title: Initialize state with props
nav: 13

---

In cases where [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) is needed, such as when a store should be initialized with props from a component, the recommended approach is to use a vanilla store with React.context.

## Store creator with `createStore`

```ts
import { createStore } from "zustand";

interface BearProps {
  bears: number;
}

interface BearState extends BearProps {
  addBear: () => void;
}

type BearStore = ReturnType<typeof createBearStore>;

const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };
  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () => set((state) => ({ bears: ++state.bears })),
  }));
};
```

## Creating a context with `React.createContext`

```ts
import { createContext } from "react";

export const BearContext = createContext<BearStore | null>(null);
```

## Basic component usage

```tsx
// Provider implementation
import { useRef } from "react";

function App() {
  const store = useRef(createBearStore()).current;
  return (
    <BearContext.Provider value={store}>
      <BasicConsumer />
    </BearContext.Provider>
  );
}
```

```tsx
// Consumer component
import { useContext } from "react";
import { useStore } from "zustand";

function BasicConsumer() {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  const bears = useStore(store, (s) => s.bears);
  const addBear = useStore(store, (s) => s.addBear);
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}
```

## Common patterns

### Wrapping the context provider

```tsx
// Provider wrapper
import { useRef } from "react";

type BearProviderProps = React.PropsWithChildren<BearProps>;

function BearProvider({ children, ...props }: BearProviderProps) {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
}
```

### Extracting context logic into a custom hook

```tsx
// Mimic the hook returned by `create`
import { useContext } from "react";
import { useStore } from "zustand";

function useBearContext<T>(selector: (state: BearState) => T): T {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
}
```

```tsx
// Consumer usage of the custom hook
function CommonConsumer() {
  const bears = useBearContext((s) => s.bears);
  const addBear = useBearContext((s) => s.addBear);
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}
```

### Optionally allow using a custom equality function

```tsx
// Allow custom equality function by using useStoreWithEqualityFn instead of useStore
import { useContext } from "react";
import { useStoreWithEqualityFn } from "zustand/traditional";

function useBearContext<T>(
  selector: (state: BearState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStoreWithEqualityFn(store, selector, equalityFn);
}
```

### Complete example

```tsx
// Provider wrapper & custom hook consumer
function App2() {
  return (
    <BearProvider bears={2}>
      <HookConsumer />
    </BearProvider>
  );
}
```

</file>

## <file path="docs/guides/maps-and-sets-usage.md">

title: Map and Set Usage
nav: 10

---

You need to wrap Maps and Sets inside an object. When you want its update to be reflected (e.g. in React),
you do it by calling `setState` on it:

**You can view a codesandbox here: https://codesandbox.io/s/late-https-bxz9qy**

```js
import { create } from "zustand";

const useFooBar = create(() => ({ foo: new Map(), bar: new Set() }));

function doSomething() {
  // doing something...

  // If you want to update some React component that uses `useFooBar`, you have to call setState
  // to let React know that an update happened.
  // Following React's best practices, you should create a new Map/Set when updating them:
  useFooBar.setState((prev) => ({
    foo: new Map(prev.foo).set("newKey", "newValue"),
    bar: new Set(prev.bar).add("newKey"),
  }));
}
```

</file>

## <file path="docs/guides/nextjs.md">

title: Setup with Next.js
nav: 17

---

[Next.js](https://nextjs.org) is a popular server-side rendering framework for React that presents
some unique challenges for using Zustand properly.
Keep in mind that Zustand store is a global
variable (AKA module state) making it optional to use a `Context`.
These challenges include:

- **Per-request store:** A Next.js server can handle multiple requests simultaneously. This means
  that the store should be created per request and should not be shared across requests.
- **SSR friendly:** Next.js applications are rendered twice, first on the server
  and again on the client. Having different outputs on both the client and the server will result
  in "hydration errors." The store will have to be initialized on the server and then
  re-initialized on the client with the same data in order to avoid that. Please read more about
  that in our [SSR and Hydration](./ssr-and-hydration) guide.
- **SPA routing friendly:** Next.js supports a hybrid model for client side routing, which means
  that in order to reset a store, we need to initialize it at the component level using a
  `Context`.
- **Server caching friendly:** Recent versions of Next.js (specifically applications using the App
  Router architecture) support aggressive server caching. Due to our store being a **module state**,
  it is completely compatible with this caching.

We have these general recommendations for the appropriate use of Zustand:

- **No global stores** - Because the store should not be shared across requests, it should not be defined
  as a global variable. Instead, the store should be created per request.
- **React Server Components should not read from or write to the store** - RSCs cannot use hooks or context. They aren't
  meant to be stateful. Having an RSC read from or write values to a global store violates the
  architecture of Next.js.

### Creating a store per request

Let's write our store factory function that will create a new store for each
request.

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

> **Note:** do not forget to remove all comments from your `tsconfig.json` file.

```ts
// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  count: 0,
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
```

### Providing the store

Let's use the `createCounterStore` in our component and share it using a context provider.

```tsx
// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type CounterStore, createCounterStore } from "@/stores/counter-store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
```

> **Note:** In this example, we ensure that this component is re-render-safe by checking the
> value of the reference, so that the store is only created once. This component will only be
> rendered once per request on the server, but might be re-rendered multiple times on the client if
> there are stateful client components located above this component in the tree, or if this component
> also contains other mutable state that causes a re-render.

### Initializing the store

```ts
// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (): CounterState => {
  return { count: new Date().getFullYear() };
};

export const defaultInitState: CounterState = {
  count: 0,
};

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
```

```tsx
// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type CounterStore,
  createCounterStore,
  initCounterStore,
} from "@/stores/counter-store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCounterStore(initCounterStore());
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
```

### Using the store with different architectures

There are two architectures for a Next.js application: the
[Pages Router](https://nextjs.org/docs/pages/building-your-application/routing) and the
[App Router](https://nextjs.org/docs/app/building-your-application/routing). The usage of Zustand on
both architectures should be the same with slight differences related to each architecture.

#### Pages Router

```tsx
// src/components/pages/home-page.tsx
import { useCounterStore } from "@/providers/counter-store-provider.ts";

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>
      <button type="button" onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  );
};
```

```tsx
// src/_app.tsx
import type { AppProps } from "next/app";

import { CounterStoreProvider } from "@/providers/counter-store-provider.tsx";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterStoreProvider>
      <Component {...pageProps} />
    </CounterStoreProvider>
  );
}
```

```tsx
// src/pages/index.tsx
import { HomePage } from "@/components/pages/home-page.tsx";

export default function Home() {
  return <HomePage />;
}
```

> **Note:** creating a store per route would require creating and sharing the store
> at page (route) component level. Try not to use this if you do not need to create
> a store per route.

```tsx
// src/pages/index.tsx
import { CounterStoreProvider } from "@/providers/counter-store-provider.tsx";
import { HomePage } from "@/components/pages/home-page.tsx";

export default function Home() {
  return (
    <CounterStoreProvider>
      <HomePage />
    </CounterStoreProvider>
  );
}
```

#### App Router

```tsx
// src/components/pages/home-page.tsx
"use client";

import { useCounterStore } from "@/providers/counter-store-provider";

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>
      <button type="button" onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  );
};
```

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CounterStoreProvider } from "@/providers/counter-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
    </html>
  );
}
```

```tsx
// src/app/page.tsx
import { HomePage } from "@/components/pages/home-page";

export default function Home() {
  return <HomePage />;
}
```

> **Note:** creating a store per route would require creating and sharing the store
> at page (route) component level. Try not to use this if you do not need to create
> a store per route.

```tsx
// src/app/page.tsx
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import { HomePage } from "@/components/pages/home-page";

export default function Home() {
  return (
    <CounterStoreProvider>
      <HomePage />
    </CounterStoreProvider>
  );
}
```

</file>

## <file path="docs/guides/practice-with-no-store-actions.md">

title: Practice with no store actions
nav: 6

---

The recommended usage is to colocate actions and states within the store (let your actions be located together with your state).

For example:

```js
export const useBoundStore = create((set) => ({
  count: 0,
  text: "hello",
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text }),
}));
```

This creates a self-contained store with data and actions together.

---

An alternative approach is to define actions at module level, external to the store.

```js
export const useBoundStore = create(() => ({
  count: 0,
  text: "hello",
}));

export const inc = () =>
  useBoundStore.setState((state) => ({ count: state.count + 1 }));

export const setText = (text) => useBoundStore.setState({ text });
```

This has a few advantages:

- It doesn't require a hook to call an action;
- It facilitates code splitting.

While this pattern doesn't offer any downsides, some may prefer colocating due to its encapsulated nature.
</file>

## <file path="docs/guides/prevent-rerenders-with-use-shallow.md">

title: Prevent rerenders with useShallow
nav: 15

---

When you need to subscribe to a computed state from a store, the recommended way is to
use a selector.

The computed selector will cause a rerender if the output has changed according to [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is?retiredLocale=it).

In this case you might want to use `useShallow` to avoid a rerender if the computed value is always shallow
equal the previous one.

## Example

We have a store that associates to each bear a meal and we want to render their names.

```js
import { create } from "zustand";

const useMeals = create(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
}));

export const BearNames = () => {
  const names = useMeals((state) => Object.keys(state));

  return <div>{names.join(", ")}</div>;
};
```

Now papa bear wants a pizza instead:

```js
useMeals.setState({
  papaBear: "a large pizza",
});
```

This change causes `BearNames` rerenders even though the actual output of `names` has not changed according to shallow equal.

We can fix that using `useShallow`!

```js
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useMeals = create(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
}));

export const BearNames = () => {
  const names = useMeals(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};
```

Now they can all order other meals without causing unnecessary rerenders of our `BearNames` component.
</file>

## <file path="docs/guides/slices-pattern.md">

title: Slices Pattern
nav: 14

---

## Slicing the store into smaller stores

Your store can become bigger and bigger and tougher to maintain as you add more features.

You can divide your main store into smaller individual stores to achieve modularity. This is simple to accomplish in Zustand!

The first individual store:

```js
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
```

Another individual store:

```js
export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});
```

You can now combine both the stores into **one bounded store**:

```js
import { create } from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));
```

### Usage in a React component

```jsx
import { useBoundStore } from "./stores/useBoundStore";

function App() {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBear = useBoundStore((state) => state.addBear);
  return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button onClick={() => addBear()}>Add a bear</button>
    </div>
  );
}

export default App;
```

### Updating multiple stores

You can update multiple stores, at the same time, in a single function.

```js
export const createBearFishSlice = (set, get) => ({
  addBearAndFish: () => {
    get().addBear();
    get().addFish();
  },
});
```

Combining all the stores together is the same as before.

```js
import { create } from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";
import { createBearFishSlice } from "./createBearFishSlice";

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createBearFishSlice(...a),
}));
```

## Adding middlewares

Adding middlewares to a combined store is the same as with other normal stores.

Adding `persist` middleware to our `useBoundStore`:

```js
import { create } from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";
import { persist } from "zustand/middleware";

export const useBoundStore = create(
  persist(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }),
    { name: "bound-store" }
  )
);
```

Please keep in mind you should only apply middlewares in the combined store. Applying them inside individual slices can lead to unexpected issues.

## Usage with TypeScript

A detailed guide on how to use the slice pattern in Zustand with TypeScript can be found [here](./typescript.md#slices-pattern).
</file>

## <file path="docs/guides/ssr-and-hydration.md">

title: SSR and Hydration
nav: 16

---

## Server-side Rendering (SSR)

Server-side Rendering (SSR) is a technique that helps us render our components into
HTML strings on the server, send them directly to the browser, and finally "hydrate" the
static markup into a fully interactive app on the client.

### React

Let's say we want to render a stateless app using React. In order to do that, we need
to use `express`, `react` and `react-dom/server`. We don't need `react-dom/client`
since it's a stateless app.

Let's dive into that:

- `express` helps us build a web app that we can run using Node,
- `react` helps us build the UI components that we use in our app,
- `react-dom/server` helps us render our components on a server.

```json
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "noEmitOnError": true,
    "removeComments": false,
    "sourceMap": true,
    "target": "esnext"
  },
  "include": ["**/*"]
}
```

> **Note:** do not forget to remove all comments from your `tsconfig.json` file.

```tsx
// app.tsx
export const App = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Static Server-side-rendered App</title>
      </head>
      <body>
        <div>Hello World!</div>
      </body>
    </html>
  );
};
```

```tsx
// server.tsx
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { App } from "./app.tsx";

const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = express();

app.get("/", (_, res) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
```

```sh
tsc --build
```

```sh
node server.js
```

## Hydration

Hydration turns the initial HTML snapshot from the server into a fully interactive app
that runs in the browser. The right way to "hydrate" a component is by using `hydrateRoot`.

### React

Let's say we want to render a stateful app using React. In order to do that we need to
use `express`, `react`, `react-dom/server` and `react-dom/client`.

Let's dive into that:

- `express` helps us build a web app that we can run using Node,
- `react` helps us build the UI components that we use in our app,
- `react-dom/server` helps us render our components on a server,
- `react-dom/client` helps us hydrate our components on a client.

> **Note:** Do not forget that even if we can render our components on a server, it is
> important to "hydrate" them on a client to make them interactive.

```json
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "noEmitOnError": true,
    "removeComments": false,
    "sourceMap": true,
    "target": "esnext"
  },
  "include": ["**/*"]
}
```

> **Note:** do not forget to remove all comments in your `tsconfig.json` file.

```tsx
// app.tsx
export const App = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Static Server-side-rendered App</title>
      </head>
      <body>
        <div>Hello World!</div>
      </body>
    </html>
  );
};
```

```tsx
// main.tsx
import ReactDOMClient from "react-dom/client";

import { App } from "./app.tsx";

ReactDOMClient.hydrateRoot(document, <App />);
```

```tsx
// server.tsx
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { App } from "./app.tsx";

const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = express();

app.use("/", (_, res) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
    bootstrapScripts: ["/main.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
```

```sh
tsc --build
```

```sh
node server.js
```

> **Warning:** The React tree you pass to `hydrateRoot` needs to produce the same output as it did on the server.
> The most common causes leading to hydration errors include:
>
> - Extra whitespace (like newlines) around the React-generated HTML inside the root node.
> - Using checks like typeof window !== 'undefined' in your rendering logic.
> - Using browser-only APIs like `window.matchMedia` in your rendering logic.
> - Rendering different data on the server and the client.
>
> React recovers from some hydration errors, but you must fix them like other bugs. In the best case, they’ll lead to a slowdown; in the worst case, event handlers can get attached to the wrong elements.

You can read more about the caveats and pitfalls here: [hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)
</file>

## <file path="docs/guides/testing.md">

title: Testing
description: Writing Tests
nav: 8

---

## Setting Up a Test Environment

### Test Runners

Usually, your test runner needs to be configured to run JavaScript/TypeScript syntax. If you're
going to be testing UI components, you will likely need to configure the test runner to use JSDOM
to provide a mock DOM environment.

See these resources for test runner configuration instructions:

- **Jest**
  - [Jest: Getting Started](https://jestjs.io/docs/getting-started)
  - [Jest: Configuration - Test Environment](https://jestjs.io/docs/configuration#testenvironment-string)
- **Vitest**
  - [Vitest: Getting Started](https://vitest.dev/guide)
  - [Vitest: Configuration - Test Environment](https://vitest.dev/config/#environment)

### UI and Network Testing Tools

**We recommend using [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro)
to test out React components that connect to Zustand**. RTL is a simple and complete React DOM
testing utility that encourages good testing practices. It uses ReactDOM's `render` function and
`act` from `react-dom/tests-utils`. Futhermore, [Native Testing Library (RNTL)](https://testing-library.com/docs/react-native-testing-library/intro)
is the alternative to RTL to test out React Native components. The [Testing Library](https://testing-library.com/)
family of tools also includes adapters for many other popular frameworks.

We also recommend using [Mock Service Worker (MSW)](https://mswjs.io/) to mock network requests, as
this means your application logic does not need to be changed or mocked when writing tests.

- **React Testing Library (DOM)**
  - [DOM Testing Library: Setup](https://testing-library.com/docs/dom-testing-library/setup)
  - [React Testing Library: Setup](https://testing-library.com/docs/react-testing-library/setup)
  - [Testing Library Jest-DOM Matchers](https://testing-library.com/docs/ecosystem-jest-dom)
- **Native Testing Library (React Native)**
  - [Native Testing Library: Setup](https://testing-library.com/docs/react-native-testing-library/setup)
- **User Event Testing Library (DOM)**
  - [User Event Testing Library: Setup](https://testing-library.com/docs/user-event/setup)
- **TypeScript for Jest**
  - [TypeScript for Jest: Setup](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)
- **TypeScript for Node**
  - [TypeScript for Node: Setup](https://typestrong.org/ts-node/docs/installation)
- **Mock Service Worker**
  - [MSW: Installation](https://mswjs.io/docs/getting-started/install)
  - [MSW: Setting up mock requests](https://mswjs.io/docs/getting-started/mocks/rest-api)
  - [MSW: Mock server configuration for Node](https://mswjs.io/docs/getting-started/integrate/node)

## Setting Up Zustand for testing

> **Note**: Since Jest and Vitest have slight differences, like Vitest using **ES modules** and Jest using
> **CommonJS modules**, you need to keep that in mind if you are using Vitest instead of Jest.

The mock provided below will enable the relevant test runner to reset the zustand stores after each test.

### Shared code just for testing purposes

This shared code was added to avoid code duplication in our demo since we use the same counter store
creator for both implementations, with and without `Context` API — `createStore` and `create`, respectively.

```ts
// shared/counter-store-creator.ts
import { type StateCreator } from "zustand";

export type CounterStore = {
  count: number;
  inc: () => void;
};

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
});
```

### Jest

In the next steps we are going to setup our Jest environment in order to mock Zustand.

```ts
// __mocks__/zustand.ts
import { act } from "@testing-library/react";
import type * as ZustandExportedTypes from "zustand";
export * from "zustand";

const { create: actualCreate, createStore: actualCreateStore } =
  jest.requireActual<typeof ZustandExportedTypes>("zustand");

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  const store = actualCreate(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand create mock");

  // to support curried version of create
  return typeof stateCreator === "function"
    ? createUncurried(stateCreator)
    : createUncurried;
}) as typeof ZustandExportedTypes.create;

const createStoreUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  const store = actualCreateStore(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const createStore = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand createStore mock");

  // to support curried version of createStore
  return typeof stateCreator === "function"
    ? createStoreUncurried(stateCreator)
    : createStoreUncurried;
}) as typeof ZustandExportedTypes.createStore;

// reset all stores after each test run
afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});
```

```ts
// setup-jest.ts
import "@testing-library/jest-dom";
```

```ts
// jest.config.ts
import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setup-jest.ts"],
};

export default config;
```

> **Note**: to use TypeScript we need to install two packages `ts-jest` and `ts-node`.

### Vitest

In the next steps we are going to setup our Vitest environment in order to mock Zustand.

> **Warning:** In Vitest you can change the [root](https://vitest.dev/config/#root).
> Due to that, you need make sure that you are creating your `__mocks__` directory in the right place.
> Let's say that you change the **root** to `./src`, that means you need to create a `__mocks__`
> directory under `./src`. The end result would be `./src/__mocks__`, rather than `./__mocks__`.
> Creating `__mocks__` directory in the wrong place can lead to issues when using Vitest.

```ts
// __mocks__/zustand.ts
import { act } from "@testing-library/react";
import type * as ZustandExportedTypes from "zustand";
export * from "zustand";

const { create: actualCreate, createStore: actualCreateStore } =
  await vi.importActual<typeof ZustandExportedTypes>("zustand");

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  const store = actualCreate(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand create mock");

  // to support curried version of create
  return typeof stateCreator === "function"
    ? createUncurried(stateCreator)
    : createUncurried;
}) as typeof ZustandExportedTypes.create;

const createStoreUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  const store = actualCreateStore(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const createStore = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  console.log("zustand createStore mock");

  // to support curried version of createStore
  return typeof stateCreator === "function"
    ? createStoreUncurried(stateCreator)
    : createStoreUncurried;
}) as typeof ZustandExportedTypes.createStore;

// reset all stores after each test run
afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});
```

> **Note**: without [globals configuration](https://vitest.dev/config/#globals) enabled, we need
> to add `import { afterEach, vi } from 'vitest'` at the top.

```ts
// global.d.ts
/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
```

> **Note**: without [globals configuration](https://vitest.dev/config/#globals) enabled, we do
> need to remove `/// <reference types="vitest/globals" />`.

```ts
// setup-vitest.ts
import "@testing-library/jest-dom";

vi.mock("zustand"); // to make it work like Jest (auto-mocking)
```

> **Note**: without [globals configuration](https://vitest.dev/config/#globals) enabled, we need
> to add `import { vi } from 'vitest'` at the top.

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./setup-vitest.ts"],
      },
    })
  )
);
```

### Testing components

In the next examples we are going to use `useCounterStore`

> **Note**: all of these examples are written using TypeScript.

```ts
// shared/counter-store-creator.ts
import { type StateCreator } from "zustand";

export type CounterStore = {
  count: number;
  inc: () => void;
};

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
});
```

```ts
// stores/use-counter-store.ts
import { create } from "zustand";

import {
  type CounterStore,
  counterStoreCreator,
} from "../shared/counter-store-creator";

export const useCounterStore = create<CounterStore>()(counterStoreCreator);
```

```tsx
// contexts/use-counter-store-context.tsx
import { type ReactNode, createContext, useContext, useRef } from "react";
import { createStore } from "zustand";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

import {
  type CounterStore,
  counterStoreCreator,
} from "../shared/counter-store-creator";

export const createCounterStore = () => {
  return createStore<CounterStore>(counterStoreCreator);
};

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const counterStoreRef = useRef<CounterStoreApi>(null);
  if (!counterStoreRef.current) {
    counterStoreRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={counterStoreRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export type UseCounterStoreContextSelector<T> = (store: CounterStore) => T;

export const useCounterStoreContext = <T,>(
  selector: UseCounterStoreContextSelector<T>
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (counterStoreContext === undefined) {
    throw new Error(
      "useCounterStoreContext must be used within CounterStoreProvider"
    );
  }

  return useStoreWithEqualityFn(counterStoreContext, selector, shallow);
};
```

```tsx
// components/counter/counter.tsx
import { useCounterStore } from "../../stores/use-counter-store";

export function Counter() {
  const { count, inc } = useCounterStore();

  return (
    <div>
      <h2>Counter Store</h2>
      <h4>{count}</h4>
      <button onClick={inc}>One Up</button>
    </div>
  );
}
```

```ts
// components/counter/index.ts
export * from "./counter";
```

```tsx
// components/counter/counter.test.tsx
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "./counter";

describe("Counter", () => {
  test("should render with initial state of 1", async () => {
    renderCounter();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /one up/i })
    ).toBeInTheDocument();
  });

  test("should increase count by clicking a button", async () => {
    const user = userEvent.setup();

    renderCounter();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /one up/i }));
    });

    expect(await screen.findByText(/^2$/)).toBeInTheDocument();
  });
});

const renderCounter = () => {
  return render(<Counter />);
};
```

```tsx
// components/counter-with-context/counter-with-context.tsx
import {
  CounterStoreProvider,
  useCounterStoreContext,
} from "../../contexts/use-counter-store-context";

const Counter = () => {
  const { count, inc } = useCounterStoreContext((state) => state);

  return (
    <div>
      <h2>Counter Store Context</h2>
      <h4>{count}</h4>
      <button onClick={inc}>One Up</button>
    </div>
  );
};

export const CounterWithContext = () => {
  return (
    <CounterStoreProvider>
      <Counter />
    </CounterStoreProvider>
  );
};
```

```tsx
// components/counter-with-context/index.ts
export * from "./counter-with-context";
```

```tsx
// components/counter-with-context/counter-with-context.test.tsx
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CounterWithContext } from "./counter-with-context";

describe("CounterWithContext", () => {
  test("should render with initial state of 1", async () => {
    renderCounterWithContext();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /one up/i })
    ).toBeInTheDocument();
  });

  test("should increase count by clicking a button", async () => {
    const user = userEvent.setup();

    renderCounterWithContext();

    expect(await screen.findByText(/^1$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /one up/i }));
    });

    expect(await screen.findByText(/^2$/)).toBeInTheDocument();
  });
});

const renderCounterWithContext = () => {
  return render(<CounterWithContext />);
};
```

> **Note**: without [globals configuration](https://vitest.dev/config/#globals) enabled, we need
> to add `import { describe, test, expect } from 'vitest'` at the top of each test file.

**CodeSandbox Demos**

- Jest Demo: https://stackblitz.com/edit/jest-zustand
- Vitest Demo: https://stackblitz.com/edit/vitest-zustand

## References

- **React Testing Library**: [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro)
  is a very lightweight solution for testing React components. It provides utility functions on top
  of `react-dom` and `react-dom/test-utils`, in a way that encourages better testing practices. Its
  primary guiding principle is: "The more your tests resemble the way your software is used, the
  more confidence they can give you."
- **Native Testing Library**: [Native Testing Library (RNTL)](https://testing-library.com/docs/react-native-testing-library/intro)
  is a very lightweight solution for testing React Native components, similarly to RTL, but its
  functions are built on top of `react-test-renderer`.
- **Testing Implementation Details**: Blog post by Kent C. Dodds on why he recommends to avoid
  [testing implementation details](https://kentcdodds.com/blog/testing-implementation-details).
  </file>

## <file path="docs/guides/tutorial-tic-tac-toe.md">

title: 'Tutorial: Tic-Tac-Toe'
description: Building a game
nav: 0

---

# Tutorial: Tic-Tac-Toe

## Building a game

You will build a small tic-tac-toe game during this tutorial. This tutorial does assume existing
React knowledge. The techniques you'll learn in the tutorial are fundamental to building any React
app, and fully understanding it will give you a deep understanding of React and Zustand.

> [!NOTE]
> This tutorial is crafted for those who learn best through hands-on experience and want to swiftly
> create something tangible. It draws inspiration from React's tic-tac-toe tutorial.

The tutorial is divided into several sections:

- Setup for the tutorial will give you a starting point to follow the tutorial.
- Overview will teach you the fundamentals of React: components, props, and state.
- Completing the game will teach you the most common techniques in React development.
- Adding time travel will give you a deeper insight into the unique strengths of React.

### What are you building?

In this tutorial, you'll build an interactive tic-tac-toe game with React and Zustand.

You can see what it will look like when you're finished here:

```jsx
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine(
    {
      history: [Array(9).fill(null)],
      currentMove: 0,
    },
    (set, get) => {
      return {
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (nextCurrentMove) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === "function"
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }));
        },
      };
    }
  )
);

function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((_, i) => (
          <Square
            key={`square-${i}`}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to game start";

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateTurns(squares) {
  return squares.filter((square) => !square).length;
}

function calculateStatus(winner, turns, player) {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}
```

### Building the board

Let's start by creating the `Square` component, which will be a building block for our `Board`
component. This component will represent each square in our game.

The `Square` component should take `value` and `onSquareClick` as props. It should return a
`<button>` element, styled to look like a square. The button displays the value prop, which can be
`'X'`, `'O'`, or `null`, depending on the game's state. When the button is clicked, it triggers the
`onSquareClick` function passed in as a prop, allowing the game to respond to user input.

Here's the code for the `Square` component:

```jsx
function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
```

Let's move on to creating the Board component, which will consist of 9 squares arranged in a grid.
This component will serve as the main playing area for our game.

The `Board` component should return a `<div>` element styled as a grid. The grid layout is achieved
using CSS Grid, with three columns and three rows, each taking up an equal fraction of the available
space. The overall size of the grid is determined by the width and height properties, ensuring that
it is square-shaped and appropriately sized.

Inside the grid, we place nine Square components, each with a value prop representing its position.
These Square components will eventually hold the game symbols (`'X'` or `'O'`) and handle user
interactions.

Here's the code for the `Board` component:

```jsx
export default function Board() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  );
}
```

This Board component sets up the basic structure for our game board by arranging nine squares in a
3x3 grid. It positions the squares neatly, providing a foundation for adding more features and
handling player interactions in the future.

### Lifting state up

Each `Square` component could maintain a part of the game's state. To check for a winner in a
tic-tac-toe game, the `Board` component would need to somehow know the state of each of the 9
`Square` components.

How would you approach that? At first, you might guess that the `Board` component needs to ask each
`Square` component for that `Square`'s component state. Although this approach is technically
possible in React, we discourage it because the code becomes difficult to understand, susceptible
to bugs, and hard to refactor. Instead, the best approach is to store the game's state in the
parent `Board` component instead of in each `Square` component. The `Board` component can tell each
`Square` component what to display by passing a prop, like you did when you passed a number to each
`Square` component.

> [!IMPORTANT]
> To collect data from multiple children, or to have two or more child components
> communicate with each other, declare the shared state in their parent component instead. The
> parent component can pass that state back down to the children via props. This keeps the child
> components in sync with each other and with their parent.

Let's take this opportunity to try it out. Edit the `Board` component so that it declares a state
variable named squares that defaults to an array of 9 nulls corresponding to the 9 squares:

```jsx
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine({ squares: Array(9).fill(null) }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares:
            typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
    };
  })
);

export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      {squares.map((square, squareIndex) => (
        <Square key={squareIndex} value={square} />
      ))}
    </div>
  );
}
```

`Array(9).fill(null)` creates an array with nine elements and sets each of them to `null`. The
`useGameStore` declares a `squares` state that's initially set to that array. Each entry in the
array corresponds to the value of a square. When you fill the board in later, the squares array
will look like this:

```js
const squares = ["O", null, "X", "X", "X", "O", "O", null, null];
```

Each Square will now receive a `value` prop that will either be `'X'`, `'O'`, or `null` for empty
squares.

Next, you need to change what happens when a `Square` component is clicked. The `Board` component
now maintains which squares are filled. You'll need to create a way for the `Square` component to
update the `Board`'s component state. Since state is private to a component that defines it, you
cannot update the `Board`'s component state directly from `Square` component.

Instead, you'll pass down a function from the Board component to the `Square` component, and you'll
have `Square` component call that function when a square is clicked. You'll start with the function
that the `Square` component will call when it is clicked. You'll call that function `onSquareClick`:

Now you'll connect the `onSquareClick` prop to a function in the `Board` component that you'll name
`handleClick`. To connect `onSquareClick` to `handleClick` you'll pass an inline function to the
`onSquareClick` prop of the first Square component:

```jsx
<Square key={squareIndex} value={square} onSquareClick={() => handleClick(i)} />
```

Lastly, you will define the `handleClick` function inside the `Board` component to update the
squares array holding your board's state.

The `handleClick` function should take the index of the square to update and create a copy of the
`squares` array (`nextSquares`). Then, `handleClick` updates the `nextSquares` array by adding `X`
to the square at the specified index (`i`) if is not already filled.

```jsx {5-10,27}
export default function Board() {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      {squares.map((square, squareIndex) => (
        <Square
          key={squareIndex}
          value={square}
          onSquareClick={() => handleClick(squareIndex)}
        />
      ))}
    </div>
  );
}
```

> [!IMPORTANT]
> Note how in `handleClick` function, you call `.slice()` to create a copy of the squares array
> instead of modifying the existing array.

### Taking turns

It's now time to fix a major defect in this tic-tac-toe game: the `'O'`s cannot be used on the
board.

You'll set the first move to be `'X'` by default. Let's keep track of this by adding another piece
of state to the `useGameStore` hook:

```jsx {2,12-18}
const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares:
            typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }));
      },
    };
  })
);
```

Each time a player moves, `xIsNext` (a boolean) will be flipped to determine which player goes next
and the game's state will be saved. You'll update the Board's `handleClick` function to flip the
value of `xIsNext`:

```jsx {2-3,6,11}
export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const player = xIsNext ? "X" : "O";

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      {squares.map((square, squareIndex) => (
        <Square
          key={squareIndex}
          value={square}
          onSquareClick={() => handleClick(squareIndex)}
        />
      ))}
    </div>
  );
}
```

### Declaring a winner or draw

Now that the players can take turns, you'll want to show when the game is won or drawn and there
are no more turns to make. To do this you'll add three helper functions. The first helper function
called `calculateWinner` that takes an array of 9 squares, checks for a winner and returns `'X'`,
`'O'`, or `null` as appropriate. The second helper function called `calculateTurns` that takes the
same array, checks for remaining turns by filtering out only `null` items, and returns the count of
them. The last helper called `calculateStatus` that takes the remaining turns, the winner, and the
current player (`'X' or 'O'`):

```js
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateTurns(squares) {
  return squares.filter((square) => !square).length;
}

function calculateStatus(winner, turns, player) {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}
```

You will use the result of `calculateWinner(squares)` in the Board component's `handleClick`
function to check if a player has won. You can perform this check at the same time you check if a
user has clicked a square that already has a `'X'` or and `'O'`. We'd like to return early in
both cases:

```js {2}
function handleClick(i) {
  if (squares[i] || winner) return
  const nextSquares = squares.slice()
  nextSquares[i] = player'
  setSquares(nextSquares)
  setXIsNext(!xIsNext)
}
```

To let the players know when the game is over, you can display text such as `'Winner: X'` or
`'Winner: O'`. To do that you'll add a `status` section to the `Board` component. The status will
display the winner or draw if the game is over and if the game is ongoing you'll display which
player's turn is next:

```jsx {6-7,9,21}
export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}
```

Congratulations! You now have a working tic-tac-toe game. And you've just learned the basics of
React and Zustand too. So you are the real winner here. Here is what the code should look like:

```jsx
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares:
            typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }));
      },
    };
  })
);

function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateTurns(squares) {
  return squares.filter((square) => !square).length;
}

function calculateStatus(winner, turns, player) {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}
```

### Adding time travel

As a final exercise, let's make it possible to “go back in time” and revisit previous moves in the
game.

If you had directly modified the squares array, implementing this time-travel feature would be very
difficult. However, since you used `slice()` to create a new copy of the squares array after every
move, treating it as immutable, you can store every past version of the squares array and navigate
between them.

You'll keep track of these past squares arrays in a new state variable called `history`. This
`history` array will store all board states, from the first move to the latest one, and will look
something like this:

```js
const history = [
  // First move
  [null, null, null, null, null, null, null, null, null],
  // Second move
  ["X", null, null, null, null, null, null, null, null],
  // Third move
  ["X", "O", null, null, null, null, null, null, null],
  // and so on...
];
```

This approach allows you to easily navigate between different game states and implement the
time-travel feature.

### Lifting state up, again

Next, you will create a new top-level component called `Game` to display a list of past moves. This
is where you will store the `history` state that contains the entire game history.

By placing the `history` state in the `Game` component, you can remove the `squares` state from the
`Board` component. You will now lift the state up from the `Board` component to the top-level `Game`
component. This change allows the `Game` component to have full control over the `Board`'s
component data and instruct the `Board` component to render previous turns from the `history`.

First, add a `Game` component with `export default` and remove it from `Board` component. Here is
what the code should look like:

```jsx {1,44-61}
function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
```

Add some state to the `useGameStore` hook to track the history of moves:

```js {2,4-11}
const useGameStore = create(
  combine({ history: [Array(9).fill(null)], xIsNext: true }, (set) => {
    return {
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }));
      },
    };
  })
);
```

Notice how `[Array(9).fill(null)]` creates an array with a single item, which is itself an array of
9 null values.

To render the squares for the current move, you'll need to read the most recent squares array from
the `history` state. You don't need an extra state for this because you already have enough
information to calculate it during rendering:

```jsx {2-6}
export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[history.length - 1];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```

Next, create a `handlePlay` function inside the `Game` component that will be called by the `Board`
component to update the game. Pass `xIsNext`, `currentSquares` and `handlePlay` as props to the
`Board` component:

```jsx {8-10,21}
export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```

Let's make the `Board` component fully controlled by the props it receives. To do this, we'll modify
the `Board` component to accept three props: `xIsNext`, `squares`, and a new `onPlay` function that
the `Board` component can call with the updated squares array when a player makes a move.

```jsx {1}
function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}
```

The `Board` component is now fully controlled by the props passed to it by the `Game` component. To
get the game working again, you need to implement the `handlePlay` function in the `Game`
component.

What should `handlePlay` do when called? Previously, the `Board` component called `setSquares` with
an updated array; now it passes the updated squares array to `onPlay`.

The `handlePlay` function needs to update the `Game` component's state to trigger a re-render.
Instead of using `setSquares`, you'll update the `history` state variable by appending the updated
squares array as a new `history` entry. You also need to toggle `xIsNext`, just as the `Board`
component used
to do.

```js {2-3}
function handlePlay(nextSquares) {
  setHistory(history.concat([nextSquares]));
  setXIsNext(!xIsNext);
}
```

At this point, you've moved the state to live in the `Game` component, and the UI should be fully
working, just as it was before the refactor. Here is what the code should look like at this point:

```jsx
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine({ history: [Array(9).fill(null)], xIsNext: true }, (set) => {
    return {
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }));
      },
    };
  })
);

function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#fff",
        border: "1px solid #999",
        outline: 0,
        borderRadius: 0,
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory(history.concat([nextSquares]));
    setXIsNext(!xIsNext);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateTurns(squares) {
  return squares.filter((square) => !square).length;
}

function calculateStatus(winner, turns, player) {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}
```

### Showing the past moves

Since you are recording the tic-tac-toe game's history, you can now display a list of past moves to
the player.

You already have an array of `history` moves in store, so now you need to transform it to an array
of React elements. In JavaScript, to transform one array into another, you can use the Array
`.map()` method:

You'll use `map` to transform your `history` of moves into React elements representing buttons on the
screen, and display a list of buttons to **jump** to past moves. Let's `map` over the `history` in
the `Game` component:

```jsx {29-44}
export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory(history.concat([nextSquares]));
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to game start";

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
```

Before you can implement the `jumpTo` function, you need the `Game` component to keep track of which
step the user is currently viewing. To do this, define a new state variable called `currentMove`,
which will start at `0`:

```js {3,14-21}
const useGameStore = create(
  combine(
    { history: [Array(9).fill(null)], currentMove: 0, xIsNext: true },
    (set) => {
      return {
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (nextCurrentMove) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === "function"
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }));
        },
        setXIsNext: (nextXIsNext) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === "function"
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }));
        },
      };
    }
  )
);
```

Next, update the `jumpTo` function inside `Game` component to update that `currentMove`. You’ll
also set `xIsNext` to `true` if the number that you’re changing `currentMove` to is even.

```js {2-3}
function jumpTo(nextMove) {
  setCurrentMove(nextMove);
  setXIsNext(currentMove % 2 === 0);
}
```

You will now make two changes to the `handlePlay` function in the `Game` component, which is called
when you click on a square.

- If you "go back in time" and then make a new move from that point, you only want to keep the
  history up to that point. Instead of adding `nextSquares` after all items in the history (using
  the Array `.concat()` method), you'll add it after all items in
  `history.slice(0, currentMove + 1)` to keep only that portion of the old history.
- Each time a move is made, you need to update `currentMove` to point to the latest history entry.

```js {2-4}
function handlePlay(nextSquares) {
  const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}
```

Finally, you will modify the `Game` component to render the currently selected move, instead of
always rendering the final move:

```jsx {2-8}
export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(currentMove % 2 === 0);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to game start";

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
```

### Final cleanup

If you look closely at the code, you'll see that `xIsNext` is `true` when `currentMove` is even and
`false` when `currentMove` is odd. This means that if you know the value of `currentMove`, you can
always determine what `xIsNext` should be.

There's no need to store `xIsNext` separately in the state. It’s better to avoid redundant state
because it can reduce bugs and make your code easier to understand. Instead, you can calculate
`xIsNext` based on `currentMove`:

```jsx {2-5,13,17}
export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to game start";

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
```

You no longer need the `xIsNext` state declaration or the calls to `setXIsNext`. Now, there’s no
chance for `xIsNext` to get out of sync with `currentMove`, even if you make a mistake while coding
the components.

### Wrapping up

Congratulations! You’ve created a tic-tac-toe game that:

- Lets you play tic-tac-toe,
- Indicates when a player has won the game or when is drawn,
- Stores a game’s history as a game progresses,
- Allows players to review a game’s history and see previous versions of a game’s board.

Nice work! We hope you now feel like you have a decent grasp of how React and Zustand works.
</file>

## <file path="docs/guides/typescript.md">

title: TypeScript Guide
nav: 7

---

## Basic usage

The difference when using TypeScript is that instead of writing `create(...)`, you have to write `create<T>()(...)` (notice the extra parentheses `()` too along with the type parameter) where `T` is the type of the state to annotate it. For example:

```ts
import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
```

<details>
  <summary>Why can't we simply infer the type from the initial state?</summary>

  <br/>

**TLDR**: Because state generic `T` is invariant.

Consider this minimal version `create`:

```ts
declare const create: <T>(f: (get: () => T) => T) => T;

const x = create((get) => ({
  foo: 0,
  bar: () => get(),
}));
// `x` is inferred as `unknown` instead of
// interface X {
//   foo: number,
//   bar: () => X
// }
```

Here, if you look at the type of `f` in `create`, i.e. `(get: () => T) => T`, it "gives" `T` via return (making it covariant), but it also "takes" `T` via `get` (making it contravariant). "So where does `T` come from?" TypeScript wonders. It's like that chicken or egg problem. At the end TypeScript, gives up and infers `T` as `unknown`.

So, as long as the generic to be inferred is invariant (i.e. both covariant and contravariant), TypeScript will be unable to infer it. Another simple example would be this:

```ts
const createFoo = {} as <T>(f: (t: T) => T) => T;
const x = createFoo((_) => "hello");
```

Here again, `x` is `unknown` instead of `string`.

  <details>
    <summary>More about the inference (just for the people curious and interested in TypeScript)</summary>

In some sense this inference failure is not a problem because a value of type `<T>(f: (t: T) => T) => T` cannot be written. That is to say you can't write the real runtime implementation of `createFoo`. Let's try it:

```js
const createFoo = (f) => f(/* ? */);
```

`createFoo` needs to return the return value of `f`. And to do that we first have to call `f`. And to call it we have to pass a value of type `T`. And to pass a value of type `T` we first have to produce it. But how can we produce a value of type `T` when we don't even know what `T` is? The only way to produce a value of type `T` is to call `f`, but then to call `f` itself we need a value of type `T`. So you see it's impossible to actually write `createFoo`.

So what we're saying is, the inference failure in case of `createFoo` is not really a problem because it's impossible to implement `createFoo`. But what about the inference failure in case of `create`? That also is not really a problem because it's impossible to implement `create` too. Wait a minute, if it's impossible to implement `create` then how does Zustand implement it? The answer is, it doesn't.

Zustand lies that it implemented `create`'s type, it implemented only the most part of it. Here's a simple proof by showing unsoundness. Consider the following code:

```ts
import { create } from "zustand";

const useBoundStore = create<{ foo: number }>()((_, get) => ({
  foo: get().foo,
}));
```

This code compiles. But if we run it, we'll get an exception: "Uncaught TypeError: Cannot read properties of undefined (reading 'foo')". This is because `get` would return `undefined` before the initial state is created (hence you shouldn't call `get` when creating the initial state). The types promise that `get` will never return `undefined` but it does initially, which means Zustand failed to implement it.

And of course Zustand failed because it's impossible to implement `create` the way types promise (in the same way it's impossible to implement `createFoo`). In other words we don't have a type to express the actual `create` we have implemented. We can't type `get` as `() => T | undefined` because it would cause inconvenience and it still won't be correct as `get` is indeed `() => T` eventually, just if called synchronously it would be `() => undefined`. What we need is some kind of TypeScript feature that allows us to type `get` as `(() => T) & WhenSync<() => undefined>`, which of course is extremely far-fetched.

So we have two problems: lack of inference and unsoundness. Lack of inference can be solved if TypeScript can improve its inference for invariants. And unsoundness can be solved if TypeScript introduces something like `WhenSync`. To work around lack of inference we manually annotate the state type. And we can't work around unsoundness, but it's not a big deal because it's not much, calling `get` synchronously anyway doesn't make sense.

</details>

</details>

<details>
  <summary>Why the currying `()(...)`?</summary>

  <br/>

**TLDR**: It is a workaround for [microsoft/TypeScript#10571](https://github.com/microsoft/TypeScript/issues/10571).

Imagine you have a scenario like this:

```ts
declare const withError: <T, E>(
  p: Promise<T>
) => Promise<[error: undefined, value: T] | [error: E, value: undefined]>;
declare const doSomething: () => Promise<string>;

const main = async () => {
  let [error, value] = await withError(doSomething());
};
```

Here, `T` is inferred to be a `string` and `E` is inferred to be `unknown`. You might want to annotate `E` as `Foo`, because you are certain of the shape of error `doSomething()` would throw. However, you can't do that. You can either pass all generics or none. Along with annotating `E` as `Foo`, you will also have to annotate `T` as `string` even though it gets inferred anyway. The solution is to make a curried version of `withError` that does nothing at runtime. Its purpose is to just allow you annotate `E`.

```ts
declare const withError: {
  <E>(): <T>(
    p: Promise<T>
  ) => Promise<[error: undefined, value: T] | [error: E, value: undefined]>;
  <T, E>(
    p: Promise<T>
  ): Promise<[error: undefined, value: T] | [error: E, value: undefined]>;
};
declare const doSomething: () => Promise<string>;
interface Foo {
  bar: string;
}

const main = async () => {
  let [error, value] = await withError<Foo>()(doSomething());
};
```

This way, `T` gets inferred and you get to annotate `E`. Zustand has the same use case when we want to annotate the state (the first type parameter) but allow other parameters to get inferred.

</details>

Alternatively, you can also use `combine`, which infers the state so that you do not need to type it.

```ts
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useBearStore = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
);
```

<details>
  <summary>Be a little careful</summary>

  <br/>

We achieve the inference by lying a little in the types of `set`, `get`, and `store` that you receive as parameters. The lie is that they're typed as if the state is the first parameter, when in fact the state is the shallow-merge (`{ ...a, ...b }`) of both first parameter and the second parameter's return. For example, `get` from the second parameter has type `() => { bears: number }` and that is a lie as it should be `() => { bears: number, increase: (by: number) => void }`. And `useBearStore` still has the correct type; for example, `useBearStore.getState` is typed as `() => { bears: number, increase: (by: number) => void }`.

It isn't really a lie because `{ bears: number }` is still a subtype of `{ bears: number, increase: (by: number) => void }`. Therefore, there will be no problem in most cases. You should just be careful while using replace. For example, `set({ bears: 0 }, true)` would compile but will be unsound as it will delete the `increase` function. Another instance where you should be careful is if you use `Object.keys`. `Object.keys(get())` will return `["bears", "increase"]` and not `["bears"]`. The return type of `get` can make you fall for these mistakes.

`combine` trades off a little type-safety for the convenience of not having to write a type for state. Hence, you should use `combine` accordingly. It is fine in most cases and you can use it conveniently.

</details>

Note that we don't use the curried version when using `combine` because `combine` "creates" the state. When using a middleware that creates the state, it isn't necessary to use the curried version because the state now can be inferred. Another middleware that creates state is `redux`. So when using `combine`, `redux`, or any other custom middleware that creates the state, we don't recommend using the curried version.

If you want to infer state type also outside of state declaration, you can use the `ExtractState` type helper:

```ts
import { create, ExtractState } from "zustand";
import { combine } from "zustand/middleware";

type BearState = ExtractState<typeof useBearStore>;

const useBearStore = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
);
```

## Using middlewares

You do not have to do anything special to use middlewares in TypeScript.

```ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: "bearStore" }
    )
  )
);
```

Just make sure you are using them immediately inside `create` so as to make the contextual inference work. Doing something even remotely fancy like the following `myMiddlewares` would require more advanced types.

```ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const myMiddlewares = (f) => devtools(persist(f, { name: "bearStore" }));

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
  myMiddlewares((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
  }))
);
```

Also, we recommend using `devtools` middleware as last as possible. For example, when you use it with `immer` as a middleware, it should be `devtools(immer(...))` and not `immer(devtools(...))`. This is because`devtools` mutates the `setState` and adds a type parameter on it, which could get lost if other middlewares (like `immer`) also mutate `setState` before `devtools`. Hence using `devtools` at the end makes sure that no middlewares mutate `setState` before it.

## Authoring middlewares and advanced usage

Imagine you had to write this hypothetical middleware.

```ts
import { create } from "zustand";

const foo = (f, bar) => (set, get, store) => {
  store.foo = bar;
  return f(set, get, store);
};

const useBearStore = create(foo(() => ({ bears: 0 }), "hello"));
console.log(useBearStore.foo.toUpperCase());
```

Zustand middlewares can mutate the store. But how could we possibly encode the mutation on the type-level? That is to say how could we type `foo` so that this code compiles?

For a usual statically typed language, this is impossible. But thanks to TypeScript, Zustand has something called a "higher-kinded mutator" that makes this possible. If you are dealing with complex type problems, like typing a middleware or using the `StateCreator` type, you will have to understand this implementation detail. For this, you can [check out #710](https://github.com/pmndrs/zustand/issues/710).

If you are eager to know what the answer is to this particular problem then you can [see it here](#middleware-that-changes-the-store-type).

### Handling Dynamic `replace` Flag

If the value of the `replace` flag is not known at compile time and is determined dynamically, you might face issues. To handle this, you can use a workaround by annotating the `replace` parameter with the parameters of the `setState` function:

```ts
const replaceFlag = Math.random() > 0.5;
const args = [{ bears: 5 }, replaceFlag] as Parameters<
  typeof useBearStore.setState
>;
store.setState(...args);
```

#### Example with `as Parameters` Workaround

```ts
import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

const replaceFlag = Math.random() > 0.5;
const args = [{ bears: 5 }, replaceFlag] as Parameters<
  typeof useBearStore.setState
>;
useBearStore.setState(...args); // Using the workaround
```

By following this approach, you can ensure that your code handles dynamic `replace` flags without encountering type issues.

## Common recipes

### Middleware that doesn't change the store type

```ts
import { create, StateCreator, StoreMutatorIdentifier } from "zustand";

type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

type LoggerImpl = <T>(
  f: StateCreator<T, [], []>,
  name?: string
) => StateCreator<T, [], []>;

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...a) => {
    set(...(a as Parameters<typeof set>));
    console.log(...(name ? [`${name}:`] : []), get());
  };
  const setState = store.setState;
  store.setState = (...a) => {
    setState(...(a as Parameters<typeof setState>));
    console.log(...(name ? [`${name}:`] : []), store.getState());
  };

  return f(loggedSet, get, store);
};

export const logger = loggerImpl as unknown as Logger;

// ---

const useBearStore = create<BearState>()(
  logger(
    (set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }),
    "bear-store"
  )
);
```

### Middleware that changes the store type

```ts
import {
  create,
  StateCreator,
  StoreMutatorIdentifier,
  Mutate,
  StoreApi,
} from "zustand";

type Foo = <
  T,
  A,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
  f: StateCreator<T, [...Mps, ["foo", A]], Mcs>,
  bar: A
) => StateCreator<T, Mps, [["foo", A], ...Mcs]>;

declare module "zustand" {
  interface StoreMutators<S, A> {
    foo: Write<Cast<S, object>, { foo: A }>;
  }
}

type FooImpl = <T, A>(
  f: StateCreator<T, [], []>,
  bar: A
) => StateCreator<T, [], []>;

const fooImpl: FooImpl = (f, bar) => (set, get, _store) => {
  type T = ReturnType<typeof f>;
  type A = typeof bar;

  const store = _store as Mutate<StoreApi<T>, [["foo", A]]>;
  store.foo = bar;
  return f(set, get, _store);
};

export const foo = fooImpl as unknown as Foo;

type Write<T extends object, U extends object> = Omit<T, keyof U> & U;

type Cast<T, U> = T extends U ? T : U;

// ---

const useBearStore = create(foo(() => ({ bears: 0 }), "hello"));
console.log(useBearStore.foo.toUpperCase());
```

### `create` without curried workaround

The recommended way to use `create` is using the curried workaround like so: `create<T>()(...)`. This is because it enables you to infer the store type. But if for some reason you do not want to use the workaround, you can pass the type parameters like the following. Note that in some cases, this acts as an assertion instead of annotation, so we don't recommend it.

```ts
import { create } from "zustand"

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<
  BearState,
  [
    ['zustand/persist', BearState],
    ['zustand/devtools', never]
  ]
>(devtools(persist((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}), { name: 'bearStore' }))
```

### Slices pattern

```ts
import { create, StateCreator } from "zustand";

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

interface FishSlice {
  fishes: number;
  addFish: () => void;
}

interface SharedSlice {
  addBoth: () => void;
  getBoth: () => void;
}

const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    // you can reuse previous methods
    get().addBear();
    get().addFish();
    // or do them from scratch
    // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
  },
  getBoth: () => get().bears + get().fishes,
});

const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createSharedSlice(...a),
}));
```

A detailed explanation on the slices pattern can be found [here](./slices-pattern.md).

If you have some middlewares then replace `StateCreator<MyState, [], [], MySlice>` with `StateCreator<MyState, Mutators, [], MySlice>`. For example, if you are using `devtools` then it will be `StateCreator<MyState, [["zustand/devtools", never]], [], MySlice>`. See the ["Middlewares and their mutators reference"](#middlewares-and-their-mutators-reference) section for a list of all mutators.

### Bounded `useStore` hook for vanilla stores

```ts
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const bearStore = createStore<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

function useBearStore(): BearState;
function useBearStore<T>(selector: (state: BearState) => T): T;
function useBearStore<T>(selector?: (state: BearState) => T) {
  return useStore(bearStore, selector!);
}
```

You can also make an abstract `createBoundedUseStore` function if you need to create bounded `useStore` hooks often and want to DRY things up...

```ts
import { useStore, StoreApi } from "zustand";
import { createStore } from "zustand/vanilla";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const bearStore = createStore<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

const createBoundedUseStore = ((store) => (selector) =>
  useStore(store, selector)) as <S extends StoreApi<unknown>>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T): T;
};

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

const useBearStore = createBoundedUseStore(bearStore);
```

## Middlewares and their mutators reference

- `devtools` — `["zustand/devtools", never]`
- `persist` — `["zustand/persist", YourPersistedState]`<br/>
  `YourPersistedState` is the type of state you are going to persist, ie the return type of `options.partialize`, if you're not passing `partialize` options the `YourPersistedState` becomes `Partial<YourState>`. Also [sometimes](https://github.com/pmndrs/zustand/issues/980#issuecomment-1162289836) passing actual `PersistedState` won't work. In those cases, try passing `unknown`.
- `immer` — `["zustand/immer", never]`
- `subscribeWithSelector` — `["zustand/subscribeWithSelector", never]`
- `redux` — `["zustand/redux", YourAction]`
- `combine` — no mutator as `combine` does not mutate the store
  </file>

## <file path="docs/guides/updating-state.md">

title: Updating state
nav: 2

---

## Flat updates

Updating state with Zustand is simple! Call the provided `set` function with
the new state, and it will be shallowly merged with the existing state in the
store. **Note** See next section for nested state.

```tsx
import { create } from "zustand";

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
};

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create<State & Action>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

// In consuming app
function App() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  return (
    <main>
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  );
}
```

## Deeply nested object

If you have a deep state object like this:

```ts
type State = {
  deep: {
    nested: {
      obj: { count: number };
    };
  };
};
```

Updating nested state requires some effort to ensure the process is completed
immutably.

### Normal approach

Similar to React or Redux, the normal approach is to copy each level of the
state object. This is done with the spread operator `...`, and by manually
merging that in with the new state values. Like so:

```ts
  normalInc: () =>
    set((state) => ({
      deep: {
        ...state.deep,
        nested: {
          ...state.deep.nested,
          obj: {
            ...state.deep.nested.obj,
            count: state.deep.nested.obj.count + 1
          }
        }
      }
    })),
```

This is very long! Let's explore some alternatives that will make your life
easier.

### With Immer

Many people use [Immer](https://github.com/immerjs/immer) to update nested
values. Immer can be used anytime you need to update nested state such as in
React, Redux and of course, Zustand!

You can use Immer to shorten your state updates for deeply nested object. Let's
take a look at an example:

```ts
  immerInc: () =>
    set(produce((state: State) => { ++state.deep.nested.obj.count })),
```

What a reduction! Please take note of the [gotchas listed here](../integrations/immer-middleware.md).

### With optics-ts

There is another option with [optics-ts](https://github.com/akheron/optics-ts/):

```ts
  opticsInc: () =>
    set(O.modify(O.optic<State>().path("deep.nested.obj.count"))((c) => c + 1)),
```

Unlike Immer, optics-ts doesn't use proxies or mutation syntax.

### With Ramda

You can also use [Ramda](https://ramdajs.com/):

```ts
  ramdaInc: () =>
    set(R.modifyPath(["deep", "nested", "obj", "count"], (c) => c + 1)),
```

Both ramda and optics-ts also work with types.

### CodeSandbox Demo

https://codesandbox.io/s/zustand-normal-immer-optics-ramda-updating-ynn3o?file=/src/App.tsx
</file>

## <file path="docs/hooks/use-shallow.md">

title: useShallow ⚛️
description: How to memoize selector functions
nav: 28

---

`useShallow` is a React Hook that lets you optimize re-renders.

```js
const memoizedSelector = useShallow(selector);
```

- [Types](#types)
  - [Signature](#signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Writing a memoized selector](#writing-a-memoized-selector)
- [Troubleshooting](#troubleshooting)

### Signature

```ts
useShallow<T, U = T>(selectorFn: (state: T) => U): (state: T) => U
```

## Reference

### `useShallow(selectorFn)`

#### Parameters

- `selectorFn`: A function that lets you return data that is based on current state.

#### Returns

`useShallow` returns a memoized version of a selector function using a shallow comparison for
memoization.

## Usage

### Writing a memoized selector

First, we need to setup a store to hold the state for the bear family. In this store, we define
three properties: `papaBear`, `mamaBear`, and `babyBear`, each representing a different member of
the bear family and their respective oatmeal pot sizes.

```tsx
import { create } from "zustand";

type BearFamilyMealsStore = {
  [key: string]: string;
};

const useBearFamilyMealsStore = create<BearFamilyMealsStore>()(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  babyBear: "A little, small, wee pot",
}));
```

Next, we'll create a `BearNames` component that retrieves the keys of our state (the bear family
members) and displays them.

```tsx
function BearNames() {
  const names = useBearFamilyMealsStore((state) => Object.keys(state));

  return <div>{names.join(", ")}</div>;
}
```

Next, we will create a `UpdateBabyBearMeal` component that periodically updates baby bear's meal
choice.

```tsx
const meals = [
  "A tiny, little, wee bowl",
  "A small, petite, tiny pot",
  "A wee, itty-bitty, small bowl",
  "A little, petite, tiny dish",
  "A tiny, small, wee vessel",
  "A small, little, wee cauldron",
  "A little, tiny, small cup",
  "A wee, small, little jar",
  "A tiny, wee, small pan",
  "A small, wee, little crock",
];

function UpdateBabyBearMeal() {
  useEffect(() => {
    const timer = setInterval(() => {
      useBearFamilyMealsStore.setState({
        babyBear: meals[Math.floor(Math.random() * (meals.length - 1))],
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}
```

Finally, we combine both components in the `App` component to see them in action.

```tsx
export default function App() {
  return (
    <>
      <UpdateBabyBearMeal />
      <BearNames />
    </>
  );
}
```

Here is what the code should look like:

```tsx
import { useEffect } from "react";
import { create } from "zustand";

type BearFamilyMealsStore = {
  [key: string]: string;
};

const useBearFamilyMealsStore = create<BearFamilyMealsStore>()(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  babyBear: "A little, small, wee pot",
}));

const meals = [
  "A tiny, little, wee bowl",
  "A small, petite, tiny pot",
  "A wee, itty-bitty, small bowl",
  "A little, petite, tiny dish",
  "A tiny, small, wee vessel",
  "A small, little, wee cauldron",
  "A little, tiny, small cup",
  "A wee, small, little jar",
  "A tiny, wee, small pan",
  "A small, wee, little crock",
];

function UpdateBabyBearMeal() {
  useEffect(() => {
    const timer = setInterval(() => {
      useBearFamilyMealsStore.setState({
        babyBear: meals[Math.floor(Math.random() * (meals.length - 1))],
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}

function BearNames() {
  const names = useBearFamilyMealsStore((state) => Object.keys(state));

  return <div>{names.join(", ")}</div>;
}

export default function App() {
  return (
    <>
      <UpdateBabyBearMeal />
      <BearNames />
    </>
  );
}
```

Everything might look fine, but there’s a small problem: the `BearNames` component keeps
re-rendering even if the names haven’t changed. This happens because the component re-renders
whenever any part of the state changes, even if the specific part we care about (the list of names) hasn’t changed.

To fix this, we use `useShallow` to make sure the component only re-renders when the actual keys of
the state change:

```tsx
function BearNames() {
  const names = useBearFamilyMealsStore(
    useShallow((state) => Object.keys(state))
  );

  return <div>{names.join(", ")}</div>;
}
```

Here is what the code should look like:

```tsx
import { useEffect } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type BearFamilyMealsStore = {
  [key: string]: string;
};

const useBearFamilyMealsStore = create<BearFamilyMealsStore>()(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  babyBear: "A little, small, wee pot",
}));

const meals = [
  "A tiny, little, wee bowl",
  "A small, petite, tiny pot",
  "A wee, itty-bitty, small bowl",
  "A little, petite, tiny dish",
  "A tiny, small, wee vessel",
  "A small, little, wee cauldron",
  "A little, tiny, small cup",
  "A wee, small, little jar",
  "A tiny, wee, small pan",
  "A small, wee, little crock",
];

function UpdateBabyBearMeal() {
  useEffect(() => {
    const timer = setInterval(() => {
      useBearFamilyMealsStore.setState({
        babyBear: meals[Math.floor(Math.random() * (meals.length - 1))],
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}

function BearNames() {
  const names = useBearFamilyMealsStore(
    useShallow((state) => Object.keys(state))
  );

  return <div>{names.join(", ")}</div>;
}

export default function App() {
  return (
    <>
      <UpdateBabyBearMeal />
      <BearNames />
    </>
  );
}
```

By using `useShallow`, we optimized the rendering process, ensuring that the component only
re-renders when necessary, which improves overall performance.

## Troubleshooting

TBD
</file>

## <file path="docs/hooks/use-store-with-equality-fn.md">

title: useStoreWithEqualityFn ⚛️
description: How to use vanilla stores effectively in React
nav: 29

---

`useStoreWithEqualityFn` is a React Hook that lets you use a vanilla store in React, just like
`useStore`. However, it offers a way to define a custom equality check. This allows for more
granular control over when components re-render, improving performance and responsiveness.

```js
const someState = useStoreWithEqualityFn(store, selectorFn, equalityFn);
```

- [Types](#types)
  - [Signature](#signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Use a vanilla store in React](#use-a-vanilla-store-in-react)
  - [Using dynamic vanilla stores in React](#using-dynamic-global-vanilla-stores-in-react)
  - [Using scoped (non-global) vanilla store in React](#using-scoped-non-global-vanilla-store-in-react)
  - [Using dynamic scoped (non-global) vanilla stores in React](#using-dynamic-scoped-non-global-vanilla-stores-in-react)
- [Troubleshooting](#troubleshooting)

### Signature

```ts
useStoreWithEqualityFn<T, U = T>(store: StoreApi<T>, selectorFn: (state: T) => U, equalityFn?: (a: T, b: T) => boolean): U
```

## Reference

### `useStoreWithEqualityFn(store, selectorFn, equalityFn)`

#### Parameters

- `storeApi`: The instance that lets you access to store API utilities.
- `selectorFn`: A function that lets you return data that is based on current state.
- `equalityFn`: A function that lets you skip re-renders.

#### Returns

`useStoreWithEqualityFn` returns any data based on current state depending on the selector function,
and lets you skip re-renders using an equality function. It should take a store, a selector
function, and an equality function as arguments.

## Usage

### Using a global vanilla store in React

First, let's set up a store that will hold the position of the dot on the screen. We'll define the
store to manage `x` and `y` coordinates and provide an action to update these coordinates.

```tsx
import { createStore, useStore } from "zustand";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));
```

Next, we'll create a `MovingDot` component that renders a div representing the dot. This component
will use the store to track and update the dot's position.

```tsx
function MovingDot() {
  const position = useStoreWithEqualityFn(
    positionStore,
    (state) => state.position,
    shallow
  );
  const setPosition = useStoreWithEqualityFn(
    positionStore,
    (state) => state.setPosition,
    shallow
  );

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

Finally, we’ll render the `MovingDot` component in our `App` component.

```tsx
export default function App() {
  return <MovingDot />;
}
```

Here is what the code should look like:

```tsx
import { createStore } from "zustand";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));

function MovingDot() {
  const position = useStoreWithEqualityFn(
    positionStore,
    (state) => state.position,
    shallow
  );
  const setPosition = useStoreWithEqualityFn(
    positionStore,
    (state) => state.setPosition,
    shallow
  );

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export default function App() {
  return <MovingDot />;
}
```

### Using dynamic global vanilla stores in React

First, we'll create a factory function that generates a store for managing the counter state.
Each tab will have its own instance of this store.

```ts
import { createStore } from "zustand";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

Next, we'll create a factory function that manages the creation and retrieval of counter stores.
This allows each tab to have its own independent counter.

```ts
const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoreFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const getOrCreateCounterStoreByKey =
  createCounterStoreFactory(defaultCounterStores);
```

Now, let’s build the Tabs component, where users can switch between tabs and increment each tab’s
counter.

```tsx
const [currentTabIndex, setCurrentTabIndex] = useState(0);
const counterState = useStoreWithEqualityFn(
  getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`),
  (state) => state,
  shallow
);

return (
  <div style={{ fontFamily: "monospace" }}>
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        borderBottom: "1px solid salmon",
        paddingBottom: 4,
      }}
    >
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(0)}
      >
        Tab 1
      </button>
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(1)}
      >
        Tab 2
      </button>
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(2)}
      >
        Tab 3
      </button>
    </div>
    <div style={{ padding: 4 }}>
      Content of Tab {currentTabIndex + 1}
      <br /> <br />
      <button type="button" onClick={() => counterState.increment()}>
        Count: {counterState.count}
      </button>
    </div>
  </div>
);
```

Finally, we'll create the `App` component, which renders the tabs and their respective counters.
The counter state is managed independently for each tab.

```tsx
export default function App() {
  return <Tabs />;
}
```

Here is what the code should look like:

```tsx
import { useState } from "react";
import { createStore } from "zustand";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};

const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoreFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const getOrCreateCounterStoreByKey =
  createCounterStoreFactory(defaultCounterStores);

export default function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useStoreWithEqualityFn(
    getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`),
    (state) => state,
    shallow
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

### Using scoped (non-global) vanilla store in React

First, let's set up a store that will hold the position of the dot on the screen. We'll define the
store to manage `x` and `y` coordinates and provide an action to update these coordinates.

```tsx
type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};
```

Next, we'll create a context and a provider component to pass down the store through the React
component tree. This allows each `MovingDot` component to have its own independent state.

```tsx
const PositionStoreContext = createContext<ReturnType<
  typeof createPositionStore
> | null>(null);

function PositionStoreProvider({ children }: { children: ReactNode }) {
  const [positionStore] = useState(createPositionStore);

  return (
    <PositionStoreContext.Provider value={positionStore}>
      {children}
    </PositionStoreContext.Provider>
  );
}
```

To simplify accessing the store, we’ll create a React custom hook, `usePositionStore`. This hook
will read the store from the context and allow us to select specific parts of the state.

```ts
function usePositionStore<U>(selector: (state: PositionStore) => U) {
  const store = useContext(PositionStoreContext);

  if (store === null) {
    throw new Error(
      "usePositionStore must be used within PositionStoreProvider"
    );
  }

  return useStoreWithEqualityFn(store, selector, shallow);
}
```

Now, let's create the `MovingDot` component, which will render a dot that follows the mouse cursor
within its container.

```tsx
function MovingDot({ color }: { color: string }) {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x:
            e.clientX > e.currentTarget.clientWidth
              ? e.clientX - e.currentTarget.clientWidth
              : e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "50vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

Finally, we'll bring everything together in the `App` component, where we render two `MovingDot`
components, each with its own independent state.

```tsx
export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PositionStoreProvider>
        <MovingDot color="red" />
      </PositionStoreProvider>
      <PositionStoreProvider>
        <MovingDot color="blue" />
      </PositionStoreProvider>
    </div>
  );
}
```

Here is what the code should look like:

```tsx
import { type ReactNode, useState, createContext, useContext } from "react";
import { createStore } from "zustand";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};

const PositionStoreContext = createContext<ReturnType<
  typeof createPositionStore
> | null>(null);

function PositionStoreProvider({ children }: { children: ReactNode }) {
  const [positionStore] = useState(createPositionStore);

  return (
    <PositionStoreContext.Provider value={positionStore}>
      {children}
    </PositionStoreContext.Provider>
  );
}

function usePositionStore<U>(selector: (state: PositionStore) => U) {
  const store = useContext(PositionStoreContext);

  if (store === null) {
    throw new Error(
      "usePositionStore must be used within PositionStoreProvider"
    );
  }

  return useStoreWithEqualityFn(store, selector, shallow);
}

function MovingDot({ color }: { color: string }) {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x:
            e.clientX > e.currentTarget.clientWidth
              ? e.clientX - e.currentTarget.clientWidth
              : e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "50vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PositionStoreProvider>
        <MovingDot color="red" />
      </PositionStoreProvider>
      <PositionStoreProvider>
        <MovingDot color="blue" />
      </PositionStoreProvider>
    </div>
  );
}
```

### Using dynamic scoped (non-global) vanilla stores in React

First, we'll create a factory function that generates a store for managing the counter state.
Each tab will have its own instance of this store.

```ts
type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

Next, we'll create a factory function that manages the creation and retrieval of counter stores.
This allows each tab to have its own independent counter.

```ts
const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};
```

Next, we need a way to manage and access these stores throughout our app. We’ll use React’s context
for this.

```tsx
const CounterStoresContext = createContext(null);

const CounterStoresProvider = ({ children }) => {
  const [stores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoresContext.Provider value={stores}>
      {children}
    </CounterStoresContext.Provider>
  );
};
```

Now, we’ll create a custom hook, `useCounterStore`, that lets us access the correct store for a
given tab.

```tsx
const useCounterStore = <U,>(
  currentTabIndex: number,
  selector: (state: CounterStore) => U
) => {
  const stores = useContext(CounterStoresContext);

  if (stores === undefined) {
    throw new Error(
      "useCounterStore must be used within CounterStoresProvider"
    );
  }

  const getOrCreateCounterStoreByKey = useCallback(
    () => createCounterStoreFactory(stores),
    [stores]
  );

  return useStoreWithEqualityFn(
    getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`),
    selector,
    shallow
  );
};
```

Now, let’s build the Tabs component, where users can switch between tabs and increment each tab’s
counter.

```tsx
function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

Finally, we'll create the `App` component, which renders the tabs and their respective counters.
The counter state is managed independently for each tab.

```tsx
export default function App() {
  return (
    <CounterStoresProvider>
      <Tabs />
    </CounterStoresProvider>
  );
}
```

Here is what the code should look like:

```tsx
import {
  type ReactNode,
  useState,
  useCallback,
  useContext,
  createContext,
} from "react";
import { createStore, useStore } from "zustand";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};

const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const CounterStoresContext = createContext<Map<
  string,
  ReturnType<typeof createCounterStore>
> | null>(null);

const CounterStoresProvider = ({ children }: { children: ReactNode }) => {
  const [stores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoresContext.Provider value={stores}>
      {children}
    </CounterStoresContext.Provider>
  );
};

const useCounterStore = <U,>(
  key: string,
  selector: (state: CounterStore) => U
) => {
  const stores = useContext(CounterStoresContext);

  if (stores === undefined) {
    throw new Error(
      "useCounterStore must be used within CounterStoresProvider"
    );
  }

  const getOrCreateCounterStoreByKey = useCallback(
    (key: string) => createCounterStoreFactory(stores!)(key),
    [stores]
  );

  return useStore(getOrCreateCounterStoreByKey(key), selector);
};

function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CounterStoresProvider>
      <Tabs />
    </CounterStoresProvider>
  );
}
```

## Troubleshooting

TBD
</file>

## <file path="docs/hooks/use-store.md">

title: useStore ⚛️
description: How to use vanilla stores in React
nav: 30

---

`useStore` is a React Hook that lets you use a vanilla store in React.

```js
const someState = useStore(store, selectorFn);
```

- [Types](#types)
  - [Signature](#signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Use a vanilla store in React](#use-a-vanilla-store-in-react)
  - [Using dynamic vanilla stores in React](#using-dynamic-global-vanilla-stores-in-react)
  - [Using scoped (non-global) vanilla store in React](#using-scoped-non-global-vanilla-store-in-react)
  - [Using dynamic scoped (non-global) vanilla stores in React](#using-dynamic-scoped-non-global-vanilla-stores-in-react)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
useStore<StoreApi<T>, U = T>(store: StoreApi<T>, selectorFn?: (state: T) => U) => UseBoundStore<StoreApi<T>>
```

## Reference

### `useStore(store, selectorFn)`

#### Parameters

- `storeApi`: The instance that lets you access to store API utilities.
- `selectorFn`: A function that lets you return data that is based on current state.

#### Returns

`useStore` returns any data based on current state depending on the selector function. It should
take a store, and a selector function as arguments.

## Usage

### Using a global vanilla store in React

First, let's set up a store that will hold the position of the dot on the screen. We'll define the
store to manage `x` and `y` coordinates and provide an action to update these coordinates.

```tsx
type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));
```

Next, we'll create a `MovingDot` component that renders a div representing the dot. This component
will use the store to track and update the dot's position.

```tsx
function MovingDot() {
  const position = useStore(positionStore, (state) => state.position);
  const setPosition = useStore(positionStore, (state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

Finally, we’ll render the `MovingDot` component in our `App` component.

```tsx
export default function App() {
  return <MovingDot />;
}
```

Here is what the code should look like:

```tsx
import { createStore, useStore } from "zustand";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));

function MovingDot() {
  const position = useStore(positionStore, (state) => state.position);
  const setPosition = useStore(positionStore, (state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export default function App() {
  return <MovingDot />;
}
```

### Using dynamic global vanilla stores in React

First, we'll create a factory function that generates a store for managing the counter state.
Each tab will have its own instance of this store.

```ts
type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

Next, we'll create a factory function that manages the creation and retrieval of counter stores.
This allows each tab to have its own independent counter.

```ts
const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoreFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const getOrCreateCounterStoreByKey =
  createCounterStoreFactory(defaultCounterStores);
```

Now, let’s build the Tabs component, where users can switch between tabs and increment each tab’s
counter.

```tsx
const [currentTabIndex, setCurrentTabIndex] = useState(0);
const counterState = useStore(
  getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`)
);

return (
  <div style={{ fontFamily: "monospace" }}>
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        borderBottom: "1px solid salmon",
        paddingBottom: 4,
      }}
    >
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(0)}
      >
        Tab 1
      </button>
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(1)}
      >
        Tab 2
      </button>
      <button
        type="button"
        style={{
          border: "1px solid salmon",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTabIndex(2)}
      >
        Tab 3
      </button>
    </div>
    <div style={{ padding: 4 }}>
      Content of Tab {currentTabIndex + 1}
      <br /> <br />
      <button type="button" onClick={() => counterState.increment()}>
        Count: {counterState.count}
      </button>
    </div>
  </div>
);
```

Finally, we'll create the `App` component, which renders the tabs and their respective counters.
The counter state is managed independently for each tab.

```tsx
export default function App() {
  return <Tabs />;
}
```

Here is what the code should look like:

```tsx
import { useState } from "react";
import { createStore, useStore } from "zustand";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};

const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoreFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const getOrCreateCounterStoreByKey =
  createCounterStoreFactory(defaultCounterStores);

export default function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useStore(
    getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`)
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

### Using scoped (non-global) vanilla store in React

First, let's set up a store that will hold the position of the dot on the screen. We'll define the
store to manage `x` and `y` coordinates and provide an action to update these coordinates.

```tsx
type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};
```

Next, we'll create a context and a provider component to pass down the store through the React
component tree. This allows each `MovingDot` component to have its own independent state.

```tsx
const PositionStoreContext = createContext<ReturnType<
  typeof createPositionStore
> | null>(null);

function PositionStoreProvider({ children }: { children: ReactNode }) {
  const [positionStore] = useState(createPositionStore);

  return (
    <PositionStoreContext.Provider value={positionStore}>
      {children}
    </PositionStoreContext.Provider>
  );
}
```

To simplify accessing the store, we’ll create a React custom hook, `usePositionStore`. This hook
will read the store from the context and allow us to select specific parts of the state.

```ts
function usePositionStore<U>(selector: (state: PositionStore) => U) {
  const store = useContext(PositionStoreContext);

  if (store === null) {
    throw new Error(
      "usePositionStore must be used within PositionStoreProvider"
    );
  }

  return useStore(store, selector);
}
```

Now, let's create the `MovingDot` component, which will render a dot that follows the mouse cursor
within its container.

```tsx
function MovingDot({ color }: { color: string }) {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x:
            e.clientX > e.currentTarget.clientWidth
              ? e.clientX - e.currentTarget.clientWidth
              : e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "50vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

Finally, we'll bring everything together in the `App` component, where we render two `MovingDot`
components, each with its own independent state.

```tsx
export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PositionStoreProvider>
        <MovingDot color="red" />
      </PositionStoreProvider>
      <PositionStoreProvider>
        <MovingDot color="blue" />
      </PositionStoreProvider>
    </div>
  );
}
```

Here is what the code should look like:

```tsx
import { type ReactNode, useState, createContext, useContext } from "react";
import { createStore, useStore } from "zustand";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};

const PositionStoreContext = createContext<ReturnType<
  typeof createPositionStore
> | null>(null);

function PositionStoreProvider({ children }: { children: ReactNode }) {
  const [positionStore] = useState(createPositionStore);

  return (
    <PositionStoreContext.Provider value={positionStore}>
      {children}
    </PositionStoreContext.Provider>
  );
}

function usePositionStore<U>(selector: (state: PositionStore) => U) {
  const store = useContext(PositionStoreContext);

  if (store === null) {
    throw new Error(
      "usePositionStore must be used within PositionStoreProvider"
    );
  }

  return useStore(store, selector);
}

function MovingDot({ color }: { color: string }) {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x:
            e.clientX > e.currentTarget.clientWidth
              ? e.clientX - e.currentTarget.clientWidth
              : e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "50vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: color,
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PositionStoreProvider>
        <MovingDot color="red" />
      </PositionStoreProvider>
      <PositionStoreProvider>
        <MovingDot color="blue" />
      </PositionStoreProvider>
    </div>
  );
}
```

### Using dynamic scoped (non-global) vanilla stores in React

First, we'll create a factory function that generates a store for managing the counter state.
Each tab will have its own instance of this store.

```ts
import { createStore } from "zustand";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

Next, we'll create a factory function that manages the creation and retrieval of counter stores.
This allows each tab to have its own independent counter.

```ts
const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};
```

Next, we need a way to manage and access these stores throughout our app. We’ll use React’s context
for this.

```tsx
const CounterStoresContext = createContext(null);

const CounterStoresProvider = ({ children }) => {
  const [stores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoresContext.Provider value={stores}>
      {children}
    </CounterStoresContext.Provider>
  );
};
```

Now, we’ll create a custom hook, `useCounterStore`, that lets us access the correct store for a
given tab.

```tsx
const useCounterStore = <U>(
  currentTabIndex: number,
  selector: (state: CounterStore) => U,
) => {
  const stores = useContext(CounterStoresContext)

  if (stores === undefined) {
    throw new Error('useCounterStore must be used within CounterStoresProvider')
  }

  const getOrCreateCounterStoreByKey = useCallback(
    () => createCounterStoreFactory(stores),
    [stores],
  )

  return useStore(getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`))
}
```

Now, let’s build the Tabs component, where users can switch between tabs and increment each tab’s
counter.

```tsx
function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

Finally, we'll create the `App` component, which renders the tabs and their respective counters.
The counter state is managed independently for each tab.

```tsx
export default function App() {
  return (
    <CounterStoresProvider>
      <Tabs />
    </CounterStoresProvider>
  );
}
```

Here is what the code should look like:

```tsx
import {
  type ReactNode,
  useState,
  useCallback,
  useContext,
  createContext,
} from "react";
import { createStore, useStore } from "zustand";

type CounterState = {
  count: number;
};

type CounterActions = { increment: () => void };

type CounterStore = CounterState & CounterActions;

const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};

const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};

const CounterStoresContext = createContext<Map<
  string,
  ReturnType<typeof createCounterStore>
> | null>(null);

const CounterStoresProvider = ({ children }: { children: ReactNode }) => {
  const [stores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoresContext.Provider value={stores}>
      {children}
    </CounterStoresContext.Provider>
  );
};

const useCounterStore = <U,>(
  key: string,
  selector: (state: CounterStore) => U
) => {
  const stores = useContext(CounterStoresContext);

  if (stores === undefined) {
    throw new Error(
      "useCounterStore must be used within CounterStoresProvider"
    );
  }

  const getOrCreateCounterStoreByKey = useCallback(
    (key: string) => createCounterStoreFactory(stores!)(key),
    [stores]
  );

  return useStore(getOrCreateCounterStoreByKey(key), selector);
};

function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
  );

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          borderBottom: "1px solid salmon",
          paddingBottom: 4,
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type="button"
          style={{
            border: "1px solid salmon",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type="button" onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CounterStoresProvider>
      <Tabs />
    </CounterStoresProvider>
  );
}
```

## Troubleshooting

TBD
</file>

## <file path="docs/integrations/immer-middleware.md">

title: Immer middleware
nav: 18

---

The [Immer](https://github.com/immerjs/immer) middleware enables you
to use immutable state in a more convenient way.
Also, with Immer, you can simplify handling
immutable data structures in Zustand.

## Installation

In order to use the Immer middleware in Zustand,
you will need to install Immer as a direct dependency.

```bash
npm install immer
```

## Usage

(Notice the extra parentheses after the type parameter as mentioned in the [Typescript Guide](../guides/typescript.md)).

Updating simple states

```ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
  immer((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty;
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty;
      }),
  }))
);
```

Updating complex states

```ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type State = {
  todos: Record<string, Todo>;
};

type Actions = {
  toggleTodo: (todoId: string) => void;
};

export const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: {
      "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
        id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
        title: "Learn Zustand",
        done: false,
      },
      "354ee16c-bfdd-44d3-afa9-e93679bda367": {
        id: "354ee16c-bfdd-44d3-afa9-e93679bda367",
        title: "Learn Jotai",
        done: false,
      },
      "771c85c5-46ea-4a11-8fed-36cc2c7be344": {
        id: "771c85c5-46ea-4a11-8fed-36cc2c7be344",
        title: "Learn Valtio",
        done: false,
      },
      "363a4bac-083f-47f7-a0a2-aeeee153a99c": {
        id: "363a4bac-083f-47f7-a0a2-aeeee153a99c",
        title: "Learn Signals",
        done: false,
      },
    },
    toggleTodo: (todoId: string) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      }),
  }))
);
```

## Gotchas

In this section you will find some things
that you need to keep in mind when using Zustand with Immer.

### My subscriptions aren't being called

If you are using Immer,
make sure you are actually following
[the rules of Immer](https://immerjs.github.io/immer/pitfalls).

For example, you have to add `[immerable] = true` for
[class objects](https://immerjs.github.io/immer/complex-objects) to work.
If you don't do this, Immer will still mutate the object,
but not as a proxy, so it will also update the current state.
Zustand checks if the state has actually changed,
so since both the current state and the next state are
equal (if you don't do it correctly),
Zustand will skip calling the subscriptions.

## CodeSandbox Demo

- [Basic](https://codesandbox.io/p/sandbox/zustand-updating-draft-states-basic-demo-forked-96mkdw),
- [Advanced](https://codesandbox.io/p/sandbox/zustand-updating-draft-states-advanced-demo-forked-phkzzg).
  </file>

## <file path="docs/integrations/persisting-store-data.md">

title: Persisting store data
nav: 20

---

The Persist middleware enables you to store
your Zustand state in a storage
(e.g., `localStorage`, `AsyncStorage`, `IndexedDB`, etc.),
thus persisting its data.

Note that this middleware supports both
synchronous storages, like `localStorage`,
and asynchronous storages, like `AsyncStorage`,
but using an asynchronous storage does come with a cost.
See [Hydration and asynchronous storages](#hydration-and-asynchronous-storages)
for more details.

## Simple example

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBearStore = create()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
```

## Typescript simple example

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BearStore = {
  bears: number;
  addABear: () => void;
};

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
```

## Options

### `name`

This is the only required option.
The given name is going to be the key
used to store your Zustand state in the storage,
so it must be unique.

### `storage`

> Type: `() => StateStorage`

The `StateStorage` can be imported with:

```ts
import { StateStorage } from "zustand/middleware";
```

> Default: `createJSONStorage(() => localStorage)`

Enables you to use your own storage. Simply pass a function that returns the storage you want to use. It's recommended to use the [`createJSONStorage`](#createjsonstorage) helper function to create a `storage` object that is compliant with the `StateStorage` interface.

Example:

```ts
import { persist, createJSONStorage } from "zustand/middleware";

export const useBoundStore = create(
  persist(
    (set, get) => ({
      // ...
    }),
    {
      // ...
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

### `partialize`

> Type: `(state: Object) => Object`

> Default: `(state) => state`

Enables you to pick some of the state's fields to be stored in the storage.

You could omit multiple fields using the following:

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["foo"].includes(key))
        ),
    }
  )
);
```

Or you could allow only specific fields using the following:

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      partialize: (state) => ({ foo: state.foo }),
    }
  )
);
```

### `onRehydrateStorage`

> Type: `(state: Object) => ((state?: Object, error?: Error) => void) | void`

This option enables you to pass a listener function
that will be called when the storage is hydrated.

Example:

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      // ...
    }),
    {
      // ...
      onRehydrateStorage: (state) => {
        console.log("hydration starts");

        // optional
        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished");
          }
        };
      },
    }
  )
);
```

### `version`

> Type: `number`

> Default: `0`

If you want to introduce a breaking change in your storage
(e.g. renaming a field), you can specify a new version number.
By default, if the version in the storage
does not match the version in the code,
the stored value won't be used.
You can use the [migrate](#migrate) function (see below)
to handle breaking changes in order to persist previously stored data.

### `migrate`

> Type: `(persistedState: Object, version: number) => Object | Promise<Object>`

> Default: `(persistedState) => persistedState`

You can use this option to handle versions migration.
The migrate function takes the persisted state
and the version number as arguments.
It must return a state that is compliant
to the latest version (the version in the code).

For instance, if you want to rename a field, you can use the following:

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      newField: 0, // let's say this field was named otherwise in version 0
    }),
    {
      // ...
      version: 1, // a migration will be triggered if the version in the storage mismatches this one
      migrate: (persistedState, version) => {
        if (version === 0) {
          // if the stored value is in version 0, we rename the field to the new name
          persistedState.newField = persistedState.oldField;
          delete persistedState.oldField;
        }

        return persistedState;
      },
    }
  )
);
```

### `merge`

> Type: `(persistedState: Object, currentState: Object) => Object`

> Default: `(persistedState, currentState) => ({ ...currentState, ...persistedState })`

In some cases, you might want to use a custom merge function
to merge the persisted value with the current state.

By default, the middleware does a shallow merge.
The shallow merge might not be enough
if you have partially persisted nested objects.
For instance, if the storage contains the following:

```ts
{
  foo: {
    bar: 0,
  }
}
```

But your Zustand store contains:

```ts
{
  foo: {
    bar: 0,
    baz: 1,
  }
}
```

The shallow merge will erase the `baz` field from the `foo` object.
One way to fix this would be to give a custom deep merge function:

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: {
        bar: 0,
        baz: 1,
      },
    }),
    {
      // ...
      merge: (persistedState, currentState) =>
        deepMerge(currentState, persistedState),
    }
  )
);
```

### `skipHydration`

> Type: `boolean | undefined`

> Default: `undefined`

By default the store will be hydrated on initialization.

In some applications you may need to control when the first hydration occurs.
For example, in server-rendered apps.

If you set `skipHydration`, the initial call for hydration isn't called,
and it is left up to you to manually call `rehydrate()`.

```ts
export const useBoundStore = create(
  persist(
    () => ({
      count: 0,
      // ...
    }),
    {
      // ...
      skipHydration: true,
    }
  )
);
```

```tsx
import { useBoundStore } from './path-to-store';

export function StoreConsumer() {
  // hydrate persisted store after on mount
  useEffect(() => {
    useBoundStore.persist.rehydrate();
  }, [])

  return (
    //...
  )
}
```

## API

> Version: >=3.6.3

The Persist API enables you to do a number of interactions
with the Persist middleware
from inside or outside of a React component.

### `getOptions`

> Type: `() => Partial<PersistOptions>`

> Returns: Options of the Persist middleware

For example, it can be used to obtain the storage name:

```ts
useBoundStore.persist.getOptions().name;
```

### `setOptions`

> Type: `(newOptions: Partial<PersistOptions>) => void`

Changes the middleware options.
Note that the new options will be merged with the current ones.

For instance, this can be used to change the storage name:

```ts
useBoundStore.persist.setOptions({
  name: "new-name",
});
```

Or even to change the storage engine:

```ts
useBoundStore.persist.setOptions({
  storage: createJSONStorage(() => sessionStorage),
});
```

### `clearStorage`

> Type: `() => void`

Clears everything stored under the [name](#name) key.

```ts
useBoundStore.persist.clearStorage();
```

### `rehydrate`

> Type: `() => Promise<void>`

In some cases, you might want to trigger the rehydration manually.
This can be done by calling the `rehydrate` method.

```ts
await useBoundStore.persist.rehydrate();
```

### `hasHydrated`

> Type: `() => boolean`

This is a non-reactive getter to check
if the storage has been hydrated
(note that it updates when calling [`rehydrate`](#rehydrate)).

```ts
useBoundStore.persist.hasHydrated();
```

### `onHydrate`

> Type: `(listener: (state) => void) => () => void`

> Returns: Unsubscribe function

This listener will be called when the hydration process starts.

```ts
const unsub = useBoundStore.persist.onHydrate((state) => {
  console.log("hydration starts");
});

// later on...
unsub();
```

### `onFinishHydration`

> Type: `(listener: (state) => void) => () => void`

> Returns: Unsubscribe function

This listener will be called when the hydration process ends.

```ts
const unsub = useBoundStore.persist.onFinishHydration((state) => {
  console.log("hydration finished");
});

// later on...
unsub();
```

### `createJSONStorage`

> Type: `(getStorage: () => StateStorage, options?: JsonStorageOptions) => StateStorage`

> Returns: `PersistStorage`

This helper function enables you to create a [`storage`](#storage) object which is useful when you want to use a custom storage engine.

`getStorage` is a function that returns the storage engine with the properties `getItem`, `setItem`, and `removeItem`.

`options` is an optional object that can be used to customize the serialization and deserialization of the data. `options.reviver` is a function that is passed to `JSON.parse` to deserialize the data. `options.replacer` is a function that is passed to `JSON.stringify` to serialize the data.

```ts
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => sessionStorage, {
  reviver: (key, value) => {
    if (value && value.type === "date") {
      return new Date(value);
    }
    return value;
  },
  replacer: (key, value) => {
    if (value instanceof Date) {
      return { type: "date", value: value.toISOString() };
    }
    return value;
  },
});
```

## Hydration and asynchronous storages

To explain what is the "cost" of asynchronous storages,
you need to understand what is hydration.

In a nutshell, hydration is a process
of retrieving persisted state from the storage
and merging it with the current state.

The Persist middleware does two kinds of hydration:
synchronous and asynchronous.
If the given storage is synchronous (e.g., `localStorage`),
hydration will be done synchronously.
On the other hand, if the given storage is asynchronous (e.g., `AsyncStorage`),
hydration will be done asynchronously (shocking, I know!).

But what's the catch?
With synchronous hydration,
the Zustand store will already have been hydrated at its creation.
In contrast, with asynchronous hydration,
the Zustand store will be hydrated later on, in a microtask.

Why does it matter?
Asynchronous hydration can cause some unexpected behaviors.
For instance, if you use Zustand in a React app,
the store will **not** be hydrated at the initial render.
In cases where your app depends on the persisted value at page load,
you might want to wait until
the store has been hydrated before showing anything.
For example, your app might think the user
is not logged in because it's the default,
but in reality the store has not been hydrated yet.

If your app does depends on the persisted state at page load,
see [_How can I check if my store has been hydrated_](#how-can-i-check-if-my-store-has-been-hydrated)
in the [FAQ](#faq) section below.

### Usage in Next.js

NextJS uses Server Side Rendering, and it will compare the rendered component on the server with the one rendered on client.
But since you are using data from browser to change your component, the two renders will differ and Next will throw a warning at you.

The errors usually are:

- Text content does not match server-rendered HTML
- Hydration failed because the initial UI does not match what was rendered on the server
- There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering

To solve these errors, create a custom hook so that Zustand waits a little before changing your components.

Create a file with the following:

```ts
// useStore.ts
import { useState, useEffect } from "react";

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
```

Now in your pages, you will use the hook a little bit differently:

```ts
// useBearStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

// the store itself does not need any change
export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage",
    }
  )
);
```

```ts
// yourComponent.tsx

import useStore from "./useStore";
import { useBearStore } from "./stores/useBearStore";

const bears = useStore(useBearStore, (state) => state.bears);
```

Credits: [This reply to an issue](https://github.com/pmndrs/zustand/issues/938#issuecomment-1481801942), which points to [this blog post](https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5).

## FAQ

### How can I check if my store has been hydrated

There are a few different ways to do this.

You can use the [`onRehydrateStorage`](#onrehydratestorage)
listener function to update a field in the store:

```ts
const useBoundStore = create(
  persist(
    (set, get) => ({
      // ...
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state
        });
      }
    }),
    {
      // ...
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true)
      }
    }
  )
);

export default function App() {
  const hasHydrated = useBoundStore(state => state._hasHydrated);

  if (!hasHydrated) {
    return <p>Loading...</p>
  }

  return (
    // ...
  );
}
```

You can also create a custom `useHydration` hook:

```ts
const useBoundStore = create(persist(...))

const useHydration = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubHydrate = useBoundStore.persist.onHydrate(() => setHydrated(false))

    const unsubFinishHydration = useBoundStore.persist.onFinishHydration(() => setHydrated(true))

    setHydrated(useBoundStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
```

### How can I use a custom storage engine

If the storage you want to use does not match the expected API, you can create your own storage:

```ts
import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { get, set, del } from "idb-keyval"; // can use anything: IndexedDB, Ionic Storage, etc.

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved");
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved");
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted");
    await del(name);
  },
};

export const useBoundStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => storage),
    }
  )
);
```

If you're using a type that `JSON.stringify()` doesn't support, you'll need to write your own serialization/deserialization code. However, if this is tedious, you can use third-party libraries to serialize and deserialize different types of data.

For example, [Superjson](https://github.com/blitz-js/superjson) can serialize data along with its type, allowing the data to be parsed back to its original type upon deserialization

```ts
import superjson from "superjson"; //  can use anything: serialize-javascript, devalue, etc.
import { PersistStorage } from "zustand/middleware";

interface BearState {
  bear: Map<string, string>;
  fish: Set<string>;
  time: Date;
  query: RegExp;
}

const storage: PersistStorage<BearState> = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse(str);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

const initialState: BearState = {
  bear: new Map(),
  fish: new Set(),
  time: new Date(),
  query: new RegExp(""),
};

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      ...initialState,
      // ...
    }),
    {
      name: "food-storage",
      storage,
    }
  )
);
```

### How can I rehydrate on storage event

You can use the Persist API to create your own implementation,
similar to the example below:

```ts
type StoreWithPersist = Mutate<StoreApi<State>, [["zustand/persist", unknown]]>

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate()
    }
  }

  window.addEventListener('storage', storageEventCallback)

  return () => {
    window.removeEventListener('storage', storageEventCallback)
  }
}

const useBoundStore = create(persist(...))
withStorageDOMEvents(useBoundStore)
```

### How do I use it with TypeScript

Basic typescript usage doesn't require anything special
except for writing `create<State>()(...)` instead of `create(...)`.

```tsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MyState {
  bears: number;
  addABear: () => void;
}

export const useBearStore = create<MyState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ bears: state.bears }),
    }
  )
);
```

### How do I use it with Map and Set

In order to persist object types such as `Map` and `Set`, they will need to be converted to JSON-serializable types such as an `Array` which can be done by defining a custom `storage` engine.

Let's say your state uses `Map` to handle a list of `transactions`,
then you can convert the `Map` into an `Array` in the `storage` prop which is shown below:

```ts

interface BearState {
  .
  .
  .
  transactions: Map<any>
}

  storage: {
    getItem: (name) => {
      const str = localStorage.getItem(name);
      if (!str) return null;
      const existingValue = JSON.parse(str);
      return {
        ...existingValue,
        state: {
          ...existingValue.state,
          transactions: new Map(existingValue.state.transactions),
        }
      }
    },
    setItem: (name, newValue: StorageValue<BearState>) => {
      // functions cannot be JSON encoded
      const str = JSON.stringify({
        ...newValue,
        state: {
          ...newValue.state,
          transactions: Array.from(newValue.state.transactions.entries()),
        },
      })
      localStorage.setItem(name, str)
    },
    removeItem: (name) => localStorage.removeItem(name),
  },
```

</file>

## <file path="docs/integrations/third-party-libraries.md">

title: Third-party Libraries
nav: 19

---

Zustand provides bear necessities for state management.
Although it is great for most projects,
some users wish to extend the library's feature set.
This can be done using third-party libraries created by the community.

> Disclaimer: These libraries may have bugs, limited maintenance,
> or other limitations, and are not officially recommended
> by pmndrs or the Zustand maintainers.
> This list aims to provide a good starting point
> for someone looking to extend Zustand's feature set.

- [@colorfy-software/zfy](https://colorfy-software.gitbook.io/zfy/) — 🧸 Useful helpers for state management in React with Zustand.
- [@davstack/store](https://www.npmjs.com/package/@davstack/store) — A zustand store factory that auto generates selectors with get/set/use methods, supports inferred types, and makes global / local state management easy.
- [@dhmk/zustand-lens](https://github.com/dhmk083/dhmk-zustand-lens) — Lens support for Zustand.
- [@liveblocks/zustand](https://github.com/liveblocks/liveblocks/tree/main/packages/liveblocks-zustand) — Liveblocks middleware to make your application multiplayer.
- [@prncss-xyz/zustand-optics](https://github.com/prncss-xyz/zustand-optics) — An adapter for [optics-ts](https://github.com/akheron/optics-ts).
- [auto-zustand-selectors-hook](https://github.com/Albert-Gao/auto-zustand-selectors-hook) — Automatic generation of Zustand hooks with Typescript support.
- [derive-zustand](https://github.com/zustandjs/derive-zustand) — A function to create a derived Zustand store from other Zustand stores.
- [geschichte](https://github.com/BowlingX/geschichte) — Zustand and Immer-based hook to manage query parameters.
- [leiten-zustand](https://github.com/hecmatyar/leiten-zustand) — Cleans your store from boilerplate for requests and data transformation.
- [leo-query](https://github.com/steaks/leo-query) — A simple library to connect async queries to Zustand stores.
- [mobz](https://github.com/2A5F/Mobz) — Zustand-style MobX API.
- [ngx-zustand](https://github.com/JoaoPauloLousada/ngx-zustand) — A Zustand adapter for Angular.
- [persist-and-sync](https://github.com/mayank1513/persist-and-sync) — Zustand middleware to easily persist and sync Zustand state between tabs/windows/iframes with same origin.
- [shared-zustand](https://github.com/Tom-Julux/shared-zustand) — Cross-tab state sharing for Zustand.
- [simple-zustand-devtools](https://github.com/beerose/simple-zustand-devtools) — 🐻⚛️ Inspect your Zustand store in React DevTools.
- [solid-zustand](https://github.com/wobsoriano/solid-zustand) — State management in Solid using Zustand.
- [treeshakable](https://github.com/react18-tools/treeshakable) — A wrapper for library creators to avoid redundant store creation.
- [use-broadcast-ts](https://github.com/Romainlg29/use-broadcast) — Zustand middleware to share state between tabs.
- [use-post-message-ts](https://github.com/paulschoen/use-post-message) — Zustand middleware for sharing state between cross-origin iframes via postMessage browser method.
- [use-zustand](https://github.com/zustandjs/use-zustand) — Another custom hook to use Zustand vanilla store.
- [vue-zustand](https://github.com/wobsoriano/vue-zustand) — State management solution for Vue based on Zustand.
- [zoov](https://github.com/InfiniteXyy/zoov) — State management solution based on Zustand with Module-like API.
- [zubridge](https://github.com/goosewobbler/zubridge) — Use Zustand in cross-platform apps, seamlessly. Supports Electron & Tauri.
- [zukeeper](https://github.com/oslabs-beta/Zukeeper) — Native devtools with state and action tracking, diffing, tree display, and time travel
- [zundo](https://github.com/charkour/zundo) — 🍜 Undo and redo middleware for Zustand, enabling time-travel in your apps.
- [zustand-ards](https://github.com/ivoilic/zustand-ards) — 💁 Simple opinionated utilities for example alternative selector formats and default shallow hooks
- [zustand-async-slice](https://github.com/mym0404/zustand-async-slice) - Simple Zustand utility to create Async Slice. TypeScript Fully Supported 🖖
- [zustand-boilerplate](https://github.com/sagiereder/zustand-boilerplate) — A tool that automatically generates getters, setters and more for your zustand store.
- [zustand-computed](https://github.com/chrisvander/zustand-computed) — A Zustand middleware to create computed states.
- [zustand-computed-state](https://github.com/yasintz/zustand-computed-state) — Simple middleware to add computed states.
- [zustand-constate](https://github.com/ntvinhit/zustand-constate) — Context-based state management based on Zustand and taking ideas from Constate.
- [zustand-context](https://github.com/fredericoo/zustand-context) — Create a zustand store in React Context, containing an initial value, or use it in your components with isolated, mockable instances.
- [zustand-di](https://github.com/charkour/zustand-di) — use react props to init zustand stores
- [zustand-forms](https://github.com/Conduct/zustand-forms) — Fast, type safe form states as Zustand stores.
- [zustand-hash-storage](https://github.com/MartinGamesCZ/zustand-hash-storage) — Zustand middleware for saving state into URL hash, b64 encoded (can be configured) and debounce timer.
- [zustand-injectors](https://github.com/zustandjs/zustand-injectors) — A sweet way to lazy load slices
- [zustand-interval-persist](https://www.npmjs.com/package/zustand-interval-persist) — An enhancement for zustand that enables automatic saving of the store's state to the specified storage at regular interval.
- [zustand-lit](https://github.com/ennjin/zustand-lit) — A zustand adapter for lit.js (LitElement)
- [zustand-middleware-computed-state](https://github.com/cmlarsen/zustand-middleware-computed-state) — A dead simple middleware for adding computed state to Zustand.
- [zustand-middleware-xstate](https://github.com/biowaffeln/zustand-middleware-xstate) — A middleware for putting XState state machines into a global Zustand store.
- [zustand-middleware-yjs](https://github.com/joebobmiles/zustand-middleware-yjs) — A middleware for synchronizing Zustand stores with Yjs.
- [zustand-multi-persist](https://github.com/mooalot/zustand-multi-persist) — A middleware for persisting and rehydrating state to multiple storage engines.
- [zustand-namespaces](https://github.com/mooalot/zustand-namespaces) - One store to rule them all. Namespaced Zustand stores.
- [zustand-persist](https://github.com/roadmanfong/zustand-persist) — A middleware for persisting and rehydrating state.
- [zustand-pub](https://github.com/AwesomeDevin/zustand-pub) — Cross-Application/Cross-Framework State Management And Sharing based on zustand and zustand-vue for React/Vue.
- [zustand-querystring](https://github.com/nitedani/zustand-querystring) — A Zustand middleware that syncs the store with the querystring.
- [zustand-rx](https://github.com/patdx/zustand-rx) — A Zustand middleware enabling you to subscribe to a store as an RxJS Observable.
- [zustand-saga](https://github.com/Nowsta/zustand-saga) — A Zustand middleware for redux-saga (minus redux).
- [zustand-slices](https://github.com/zustandjs/zustand-slices) — A slice utility for Zustand.
- [zustand-store-addons](https://github.com/Diablow/zustand-store-addons) — React state management addons for Zustand.
- [zustand-sync-tabs](https://github.com/mayank1513/zustand-sync-tabs) — Zustand middleware to easily sync Zustand state between tabs/windows/iframes with same origin.
- [zustand-valtio](https://github.com/zustandjs/zustand-valtio) — A sweet combination of Zustand and Valtio
- [zustand-vue](https://github.com/AwesomeDevin/zustand-vue) — State management for vue (Vue3 / Vue2) based on zustand.
- [zustand-x](https://github.com/udecode/zustand-x) — Zustand store factory for a best-in-class developer experience.
- [zustand-xs](https://github.com/zustandjs/zustand-xs) — XState/store compabile middleware for Zustand
- [zustand-yjs](https://github.com/tandem-pt/zustand-yjs) — Zustand stores for Yjs structures.
- [zusteller](https://github.com/timkindberg/zusteller) — Your global state savior. "Just hooks" + Zustand.
- [zusty](https://github.com/oslabs-beta/Zusty) — Zustand tool to assist debugging with time travel, action logs, state snapshots, store view, render time metrics and state component tree.
  </file>

## <file path="docs/middlewares/combine.md">

title: combine
description: How to create a store and get types automatically inferred
nav: 201

---

# combine

`combine` middleware lets you create a cohesive state by merging an initial state with a state
creator function that adds new state slices and actions. This is really helpful as it automatically
infers types, so there’s no need for explicit type definitions.

> [!TIP]
> This makes state management more straightforward and efficient by making curried version of
> `create` and `createStore` not necessary for middleware usage.

```js
const nextStateCreatorFn = combine(initialState, additionalStateCreatorFn);
```

- [Types](#types)
  - [Signature](#combine-signature)
- [Reference](#reference)
- [Usage](#usage)
  - [Creating a state with inferred types](#creating-a-state-wit-inferred-types)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
combine<T, U>(initialState: T, additionalStateCreatorFn: StateCreator<T, [], [], U>): StateCreator<Omit<T, keyof U> & U, [], []>
```

## Reference

### `combine(initialState, additionalStateCreatorFn)`

#### Parameters

- `initialState`: The value you want the state to be initially. It can be a value of any type,
  except a function.
- `additionalStateCreatorFn`: A function that takes `set` function, `get` function and `store` as
  arguments. Usually, you will return an object with the methods you want to expose.

#### Returns

`combine` returns a state creator function.

## Usage

### Creating a store with inferred types

This example shows you how you can create a store and get types automatically inferred, so you
don’t need to define them explicitly.

```ts
import { createStore } from "zustand/vanilla";
import { combine } from "zustand/middleware";

const positionStore = createStore(
  combine({ position: { x: 0, y: 0 } }, (set) => ({
    setPosition: (position) => set({ position }),
  }))
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getInitialState(), positionStore.getInitialState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

## Troubleshooting

TBD
</file>

## <file path="docs/middlewares/devtools.md">

title: devtools
description: How to time-travel debug your store
nav: 205

---

# devtools

`devtools` middleware lets you use [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools)
without Redux. Read more about the benefits of using [Redux DevTools for debugging](https://redux.js.org/style-guide/#use-the-redux-devtools-extension-for-debugging).

```js
const nextStateCreatorFn = devtools(stateCreatorFn, devtoolsOptions);
```

- [Types](#types)
  - [Signature](#signature)
  - [Mutator](#mutator)
- [Reference](#reference)
- [Usage](#usage)
  - [Debugging a store](#debugging-a-store)
  - [Debugging a Slices pattern based store](#debugging-a-slices-pattern-based-store)
- [Troubleshooting](#troubleshooting)
  - [Only one store is displayed](#only-one-store-is-displayed)
  - [Action names are labeled as 'anonymous'](#all-action-names-are-labeled-as-anonymous)

## Types

### Signature

```ts
devtools<T>(stateCreatorFn: StateCreator<T, [], []>, devtoolsOptions?: DevtoolsOptions): StateCreator<T, [['zustand/devtools', never]], []>
```

### Mutator

<!-- prettier-ignore-start -->
```ts
['zustand/devtools', never]
```
<!-- prettier-ignore-end -->

## Reference

### `devtools(stateCreatorFn, devtoolsOptions)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.
- **optional** `devtoolsOptions`: An object to define `Redux Devtools` options.
  - **optional** `name`: A custom identifier for the connection in the Redux DevTools.
  - **optional** `enabled`: Defaults to `true` when is on development mode, and defaults to `false`
    when is on production mode. Enables or disables the Redux DevTools integration
    for this store.
  - **optional** `anonymousActionType`: Defaults to `anonymous`. A string to use as the action type
    for anonymous mutations in the Redux DevTools.
  - **optional** `store`: A custom identifier for the store in the Redux DevTools.

#### Returns

`devtools` returns a state creator function.

## Usage

### Debugging a store

This example shows you how you can use `Redux Devtools` to debug a store

```ts
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type JungleStore = {
  bears: number;
  addBear: () => void;
  fishes: number;
  addFish: () => void;
};

const useJungleStore = create<JungleStore>()(
  devtools((set) => ({
    bears: 0,
    addBear: () =>
      set((state) => ({ bears: state.bears + 1 }), undefined, "jungle/addBear"),
    fishes: 0,
    addFish: () =>
      set(
        (state) => ({ fishes: state.fishes + 1 }),
        undefined,
        "jungle/addFish"
      ),
  }))
);
```

### Debugging a Slices pattern based store

This example shows you how you can use `Redux Devtools` to debug a Slices pattern based store

```ts
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type BearSlice = {
  bears: number;
  addBear: () => void;
};

type FishSlice = {
  fishes: number;
  addFish: () => void;
};

type JungleStore = BearSlice & FishSlice;

const createBearSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () =>
    set(
      (state) => ({ bears: state.bears + 1 }),
      undefined,
      "jungle:bear/addBear"
    ),
});

const createFishSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () =>
    set(
      (state) => ({ fishes: state.fishes + 1 }),
      undefined,
      "jungle:fish/addFish"
    ),
});

const useJungleStore = create<JungleStore>()(
  devtools((...args) => ({
    ...createBearSlice(...args),
    ...createFishSlice(...args),
  }))
);
```

## Troubleshooting

### Only one store is displayed

By default, `Redux Devtools` only show one store at a time, so in order to see other stores you
need to use store selector and choose a different store.

### All action names are labeled as 'anonymous'

If an action type name is not provided, it is defaulted to "anonymous". You can customize this
default value by providing a `anonymousActionType` parameter:

For instance the next example doesn't have action type name:

```ts
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type BearSlice = {
  bears: number;
  addBear: () => void;
};

type FishSlice = {
  fishes: number;
  addFish: () => void;
};

type JungleStore = BearSlice & FishSlice;

const createBearSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

const createFishSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const useJungleStore = create<JungleStore>()(
  devtools((...args) => ({
    ...createBearSlice(...args),
    ...createFishSlice(...args),
  }))
);
```

In order to fix the previous example, we need to provide an action type name as the third parameter.
Additionally, to preserve the default behavior of the replacement logic, the second parameter
should be set to `undefined`.

Here's the fixed previous example

```ts
import { create, StateCreator } from "zustand";

type BearSlice = {
  bears: number;
  addBear: () => void;
};

type FishSlice = {
  fishes: number;
  addFish: () => void;
};

type JungleStore = BearSlice & FishSlice;

const createBearSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () =>
    set((state) => ({ bears: state.bears + 1 }), undefined, "bear/addBear"),
});

const createFishSlice: StateCreator<
  JungleStore,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () =>
    set((state) => ({ fishes: state.fishes + 1 }), undefined, "fish/addFish"),
});

const useJungleStore = create<JungleStore>()(
  devtools((...args) => ({
    ...createBearSlice(...args),
    ...createFishSlice(...args),
  }))
);
```

> [!IMPORTANT]
> Do not set the second parameter to `true` or `false` unless you want to override the default
> replacement logic
> </file>

## <file path="docs/middlewares/immer.md">

title: immer
description: How to perform immutable updates in a store without boilerplate code
nav: 206

---

# immer

`immer` middleware lets you perform immutable updates.

```js
const nextStateCreatorFn = immer(stateCreatorFn);
```

- [Types](#types)
  - [Signature](#signature)
  - [Mutator](#mutator)
- [Reference](#reference)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
immer<T>(stateCreatorFn: StateCreator<T, [], []>): StateCreator<T, [['zustand/immer', never]], []>
```

### Mutator

<!-- prettier-ignore-start -->
```ts
['zustand/immer', never]
```
<!-- prettier-ignore-end -->

## Reference

### `immer(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.

#### Returns

`immer` returns a state creator function.

## Usage

### Updating state without boilerplate code

In the next example, we're going to update the `person` object. Since it's a nested object, we need
to create a copy of the entire object before making the update.

```ts
import { createStore } from "zustand/vanilla";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (
    nextPerson: (
      person: PersonStoreState["person"]
    ) => PersonStoreState["person"] | PersonStoreState["person"]
  ) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const personStore = createStore<PersonStore>()((set) => ({
  person: {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  },
  setPerson: (nextPerson) =>
    set((state) => ({
      person:
        typeof nextPerson === "function"
          ? nextPerson(state.person)
          : nextPerson,
    })),
}));

const $firstNameInput = document.getElementById(
  "first-name"
) as HTMLInputElement;
const $lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const $emailInput = document.getElementById("email") as HTMLInputElement;
const $result = document.getElementById("result") as HTMLDivElement;

function handleFirstNameChange(event: Event) {
  personStore.getState().setPerson((person) => ({
    ...person,
    firstName: (event.target as any).value,
  }));
}

function handleLastNameChange(event: Event) {
  personStore.getState().setPerson((person) => ({
    ...person,
    lastName: (event.target as any).value,
  }));
}

function handleEmailChange(event: Event) {
  personStore.getState().setPerson((person) => ({
    ...person,
    email: (event.target as any).value,
  }));
}

$firstNameInput.addEventListener("input", handleFirstNameChange);
$lastNameInput.addEventListener("input", handleLastNameChange);
$emailInput.addEventListener("input", handleEmailChange);

const render: Parameters<typeof personStore.subscribe>[0] = (state) => {
  $firstNameInput.value = state.person.firstName;
  $lastNameInput.value = state.person.lastName;
  $emailInput.value = state.person.email;

  $result.innerHTML = `${state.person.firstName} ${state.person.lastName} (${state.person.email})`;
};

render(personStore.getInitialState(), personStore.getInitialState());

personStore.subscribe(render);
```

Here's the `html` code

```html
<label style="display: block">
  First name:
  <input id="first-name" />
</label>
<label style="display: block">
  Last name:
  <input id="last-name" />
</label>
<label style="display: block">
  Email:
  <input id="email" />
</label>
<p id="result"></p>
```

To avoid manually copying the entire object before making updates, we'll use the `immer`
middleware.

```ts
import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (
    nextPerson: (
      person: PersonStoreState["person"]
    ) => PersonStoreState["person"] | PersonStoreState["person"]
  ) => void;
};

type PersonStore = PersonStoreState & PersonStoreActions;

const personStore = createStore<PersonStore>()(
  immer((set) => ({
    person: {
      firstName: "Barbara",
      lastName: "Hepworth",
      email: "bhepworth@sculpture.com",
    },
    setPerson: (nextPerson) =>
      set((state) => {
        state.person =
          typeof nextPerson === "function"
            ? nextPerson(state.person)
            : nextPerson;
      }),
  }))
);

const $firstNameInput = document.getElementById(
  "first-name"
) as HTMLInputElement;
const $lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const $emailInput = document.getElementById("email") as HTMLInputElement;
const $result = document.getElementById("result") as HTMLDivElement;

function handleFirstNameChange(event: Event) {
  personStore.getState().setPerson((person) => {
    person.firstName = (event.target as any).value;
  });
}

function handleLastNameChange(event: Event) {
  personStore.getState().setPerson((person) => {
    person.lastName = (event.target as any).value;
  });
}

function handleEmailChange(event: Event) {
  personStore.getState().setPerson((person) => {
    person.email = (event.target as any).value;
  });
}

$firstNameInput.addEventListener("input", handleFirstNameChange);
$lastNameInput.addEventListener("input", handleLastNameChange);
$emailInput.addEventListener("input", handleEmailChange);

const render: Parameters<typeof personStore.subscribe>[0] = (state) => {
  $firstNameInput.value = state.person.firstName;
  $lastNameInput.value = state.person.lastName;
  $emailInput.value = state.person.email;

  $result.innerHTML = `${state.person.firstName} ${state.person.lastName} (${state.person.email})`;
};

render(personStore.getInitialState(), personStore.getInitialState());

personStore.subscribe(render);
```

## Troubleshooting

TBD
</file>

## <file path="docs/middlewares/persist.md">

title: persist
description: How to persist a store
nav: 207

---

# persist

`persist` middleware lets you persist a store's state across page reloads or application
restarts.

```js
const nextStateCreatorFn = persist(stateCreatorFn, persistOptions);
```

- [Types](#types)
  - [Signature](#signature)
  - [Mutator](#mutator)
- [Reference](#reference)
- [Usage](#usage)
  - [Persisting a state](#persisting-a-state)
  - [Persisting a state partially](#persisting-a-state-partially)
  - [Persisting a state with custom storage](#persisting-a-state-with-custom-storage)
  - [Persisting a state through versioning and migrations](#persisting-a-state-through-versioning-and-migrations)
  - [Persisting a state with nested objects](#persisting-a-state-with-nested-objects)
  - [Persisting a state and hydrate it manually](#persisting-a-state-and-hydrate-it-manually)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
persist<T, U>(stateCreatorFn: StateCreator<T, [], []>, persistOptions?: PersistOptions<T, U>): StateCreator<T, [['zustand/persist', U]], []>
```

### Mutator

<!-- prettier-ignore-start -->
```ts
['zustand/persist', U]
```
<!-- prettier-ignore-end -->

## Reference

### `persist(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.
- `persistOptions`: An object to define storage options.
  - `name`: A unique name of the item for your store in the storage.
  - **optional** `storage`: Defaults to `createJSONStorage(() => localStorage)`. -
  - **optional** `partialize`: A function to filter state fields before persisting it.
  - **optional** `onRehydrateStorage`: A function or function returning a function that allows
    custom logic before and after state rehydration.
  - **optional** `version`: A version number for the persisted state. If the stored state version
    doesn't match, it won't be used.
  - **optional** `migrate`: A function to migrate persisted state if the version mismatch occurs.
  - **optional** `merge`: A function for custom logic when merging persisted state with the current
    state during rehydration. Defaults to a shallow merge.
  - **optional** `skipHydration`: Defaults to `false`. If `true`, the middleware won't
    automatically rehydrate the state on initialization. Use `rehydrate` function manually in this
    case. This is useful for server-side rendering (SSR) applications.

#### Returns

`persist` returns a state creator function.

## Usage

### Persisting a state

In this tutorial, we'll create a simple position tracker using vanilla store and the `persist`
middleware. The example tracks the `position` of the mouse as it moves within a container and
stores the `position` in local storage, so it persists even when the page reloads.

We start by setting up a vanilla store that holds the position (an object with `x` and `y`
coordinates) and an action to update it. We'll also use the `persist` middleware to store the
position in `localStorage`.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: "position-storage" }
  )
);
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the complete code.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: "position-storage" }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Persisting a state partially

In this tutorial, we'll create a simple position tracker using vanilla store and the `persist`
middleware. Additionally, we'll show you how to persist only part of the state
(partial persistence), which can be useful when you don’t want to store the entire state in
`localStorage`.

We’ll first create a vanilla store that holds the position state and actions to update it. We'll
use the `persist` middleware to persist only the relevant part of the state (in this case, the
context containing the position).

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = {
  context: {
    position: { x: number; y: number };
  };
};

type PositionStoreActions = {
  actions: {
    setPosition: (
      nextPosition: PositionStoreState["context"]["position"]
    ) => void;
  };
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      context: {
        position: { x: 0, y: 0 },
      },
      actions: {
        setPosition: (position) => set({ context: { position } }),
      },
    }),
    {
      name: "position-storage",
      partialize: (state) => ({ context: state.context }),
    }
  )
);
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().actions.setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.context.position.x}px, ${state.context.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the full code to create a dot that follows your mouse movement inside a container and
persists the `context` in `localStorage`.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = {
  context: {
    position: { x: number; y: number };
  };
};

type PositionStoreActions = {
  actions: {
    setPosition: (
      nextPosition: PositionStoreState["context"]["position"]
    ) => void;
  };
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      context: {
        position: { x: 0, y: 0 },
      },
      actions: {
        setPosition: (position) => set({ context: { position } }),
      },
    }),
    {
      name: "position-storage",
      partialize: (state) => ({ context: state.context }),
    }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().actions.setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.context.position.x}px, ${state.context.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Persisting a state with custom storage

In this mini tutorial, we’ll create a simple position-tracking system using vanilla store, where
the position state is persisted in the URL's search parameters. This approach allows state
persistence directly in the browser's URL, which can be useful for maintaining state across page
reloads or sharing links with state embedded.

We need to implement functions to manipulate URL search parameters as if they were a storage
mechanism. This includes retrieving, setting, and removing parameters.

```ts
const getSearchParams = () => {
  return new URL(location.href).searchParams;
};

const updateSearchParams = (searchParams: URLSearchParams) => {
  window.history.replaceState(
    {},
    "",
    `${location.pathname}?${searchParams.toString()}`
  );
};

const getSearchParam = (key: string) => {
  const searchParams = getSearchParams();
  return searchParams.get(key);
};

const updateSearchParam = (key: string, value: string) => {
  const searchParams = getSearchParams();
  searchParams.set(key, value);

  updateSearchParams(searchParams);
};

const removeSearchParam = (key: string) => {
  const searchParams = getSearchParams();
  searchParams.delete(key);

  updateSearchParams(searchParams);
};
```

To use the URL search parameters as storage, we define a `searchParamsStorage` object with
`getItem`, `setItem`, and `removeItem` methods. These methods map to our custom functions that
manipulate search parameters.

```ts
const searchParamsStorage = {
  getItem: (key: string) => getSearchParam(key),
  setItem: (key: string, value: string) => updateSearchParam(key, value),
  removeItem: (key: string) => removeSearchParam(key),
};
```

Now, we initialize the vanilla store using the `persist` middleware, specifying that we want to use
our custom storage. Instead of the default `localStorage` or `sessionStorage`, we’ll persist the
position data in the URL search parameters.

```ts
import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      storage: createJSONStorage(() => searchParamsStorage),
    }
  )
);
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the full code to create a dot that follows your mouse movement inside a container and
persists the position in URL's search parameters.

```ts
import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const getSearchParams = () => {
  return new URL(location.href).searchParams;
};

const updateSearchParams = (searchParams: URLSearchParams) => {
  window.history.replaceState(
    {},
    "",
    `${location.pathname}?${searchParams.toString()}`
  );
};

const getSearchParam = (key: string) => {
  const searchParams = getSearchParams();
  return searchParams.get(key);
};

const updateSearchParam = (key: string, value: string) => {
  const searchParams = getSearchParams();
  searchParams.set(key, value);

  updateSearchParams(searchParams);
};

const removeSearchParam = (key: string) => {
  const searchParams = getSearchParams();
  searchParams.delete(key);

  updateSearchParams(searchParams);
};

const searchParamsStorage = {
  getItem: (key: string) => getSearchParam(key),
  setItem: (key: string, value: string) => updateSearchParam(key, value),
  removeItem: (key: string) => removeSearchParam(key),
};

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      storage: createJSONStorage(() => searchParamsStorage),
    }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Persisting a state through versioning and migrations

In this tutorial, we’ll explore how to manage state persistence using versioning and migration.
We will demonstrate how to evolve your state schema across versions without breaking existing
persisted data.

Before moving to versioned state management, we simulate an initial state for `version` 0. This is
done by manually setting a `version` 0 state in `localStorage` if it doesn't already exist. The
`version` 0 state saves the coordinates as `x` and `y` fields.

```ts
// For tutorial purposes only
if (!localStorage.getItem("position-storage")) {
  localStorage.setItem(
    "position-storage",
    JSON.stringify({
      state: { x: 100, y: 100 }, // version 0 structure
      version: 0,
    })
  );
}
```

Next, we use `persist` middleware to handle state persistence. We also add a migration function to
handle changes between versions. In this example, we `migrate` the state from `version` 0 (where
`x` and `y` are separate) to `version` 1, where they are combined into a `position` object.

```ts
migrate: (persisted: any, version) => {
  if (version === 0) {
    persisted.position = { x: persisted.x, y: persisted.y };
    delete persisted.x;
    delete persisted.y;
  }

  return persisted;
};
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the complete code.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

// For tutorial purposes only
if (!localStorage.getItem("position-storage")) {
  localStorage.setItem(
    "position-storage",
    JSON.stringify({
      state: { x: 100, y: 100 },
      version: 0,
    })
  );
}

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 }, // version 0: just x: 0, y: 0
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      version: 1,
      migrate: (persisted: any, version) => {
        if (version === 0) {
          persisted.position = { x: persisted.x, y: persisted.y };
          delete persisted.x;
          delete persisted.y;
        }

        return persisted;
      },
    }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Persisting a state with nested objects

In this tutorial, we’ll create a vanilla store that keeps track of a position represented by `x`
and `y` coordinates. We will also implement persistence using `localStorage` and demonstrate how to
handle merging of state with potentially missing fields.

To simulate an initial state for the tutorial, we will check if our position data exists in
`localStorage`. If it doesn't, we’ll set it up.

```ts
if (!localStorage.getItem("position-storage")) {
  localStorage.setItem(
    "position-storage",
    JSON.stringify({
      state: { position: { y: 100 } }, // missing `x` field
      version: 0,
    })
  );
}
```

Now, we will create the store and configure it to use persistence and deep merging.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import createDeepMerge from "@fastify/deepmerge";

const deepMerge = createDeepMerge({ all: true });

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      merge: (persisted, current) => deepMerge(current, persisted) as never,
    }
  )
);
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the complete code.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import createDeepMerge from "@fastify/deepmerge";

const deepMerge = createDeepMerge({ all: true });

// For tutorial purposes only
if (!localStorage.getItem("position-storage")) {
  localStorage.setItem(
    "position-storage",
    JSON.stringify({
      state: { position: { y: 100 } }, // missing `x` field
      version: 0,
    })
  );
}

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      merge: (persisted, current) => deepMerge(current, persisted) as never,
    }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  console.log({ state });
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

### Persisting a state and hydrate it manually

In this tutorial, we’ll create a vanilla store that keeps track of a position represented by `x`
and `y` coordinates. We will also implement persistence using `localStorage` and explore how to
skip the hydration process and manually trigger rehydration after a delay.

We start by setting up a vanilla store that holds the position (an object with `x` and `y`
coordinates) and an action to update it. Furthermore, we'll also use the `persist` middleware to
store the position in `localStorage` but skipping hydration.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      skipHydration: true,
    }
  )
);
```

Since we skipped hydration in the initial setup, we will manually rehydrate the state. Here, we’re
using `setTimeout` to simulate a delayed rehydration.

```ts
setTimeout(() => {
  positionStore.persist.rehydrate();
}, 2000);
```

Next, we'll track the mouse movements inside a div and update the store with the new position.

```ts
const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});
```

We want to reflect the position updates on the screen by moving a div element
(representing the dot) to the new coordinates.

```ts
const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here’s the complete code.

```ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage",
      skipHydration: true,
    }
  )
);

const $dotContainer = document.getElementById(
  "dot-container"
) as HTMLDivElement;
const $dot = document.getElementById("dot") as HTMLDivElement;

$dotContainer.addEventListener("pointermove", (event) => {
  positionStore.getState().setPosition({
    x: event.clientX,
    y: event.clientY,
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

setTimeout(() => {
  positionStore.persist.rehydrate();
}, 2000);

render(positionStore.getState(), positionStore.getState());

positionStore.subscribe(render);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

## Troubleshooting

TBD
</file>

## <file path="docs/middlewares/redux.md">

title: redux
description: How to use actions and reducers in a store
nav: 208

---

# redux

`redux` middleware lets you update a store through actions and reducers just like redux.

```js
const nextStateCreatorFn = redux(reducerFn, initialState);
```

- [Types](#types)
  - [Signature](#signature)
  - [Mutator](#mutator)
- [Reference](#reference)
- [Usage](#usage)
  - [Updating state through actions and reducers](#updating-state-through-actions-and-reducers)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
redux<T, A>(reducerFn: (state: T, action: A) => T, initialState: T): StateCreator<T & { dispatch: (action: A) => A }, [['zustand/redux', A]], []>
```

### Mutator

<!-- prettier-ignore-start -->
```ts
['zustand/redux', A]
```
<!-- prettier-ignore-end -->

## Reference

### `redux(reducerFn, initialState)`

#### Parameters

- `reducerFn`: It should be pure and should take the current state of your application and an action
  object as arguments, and returns the new state resulting from applying the action.
- `initialState`: The value you want the state to be initially. It can be a value of any type,
  except a function.

#### Returns

`redux` returns a state creator function.

## Usage

### Updating state through actions and reducers

```ts
import { createStore } from "zustand/vanilla";
import { redux } from "zustand/middleware";

type PersonStoreState = {
  firstName: string;
  lastName: string;
  email: string;
};

type PersonStoreAction =
  | { type: "person/setFirstName"; firstName: string }
  | { type: "person/setLastName"; lastName: string }
  | { type: "person/setEmail"; email: string };

type PersonStore = PersonStoreState & PersonStoreActions;

const personStoreReducer = (
  state: PersonStoreState,
  action: PersonStoreAction
) => {
  switch (action.type) {
    case "person/setFirstName": {
      return { ...state, firstName: action.firstName };
    }
    case "person/setLastName": {
      return { ...state, lastName: action.lastName };
    }
    case "person/setEmail": {
      return { ...state, email: action.email };
    }
    default: {
      return state;
    }
  }
};

const personStoreInitialState: PersonStoreState = {
  firstName: "Barbara",
  lastName: "Hepworth",
  email: "bhepworth@sculpture.com",
};

const personStore = createStore<PersonStore>()(
  redux(personStoreReducer, personStoreInitialState)
);

const $firstNameInput = document.getElementById(
  "first-name"
) as HTMLInputElement;
const $lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const $emailInput = document.getElementById("email") as HTMLInputElement;
const $result = document.getElementById("result") as HTMLDivElement;

function handleFirstNameChange(event: Event) {
  personStore.dispatch({
    type: "person/setFirstName",
    firstName: (event.target as any).value,
  });
}

function handleLastNameChange(event: Event) {
  personStore.dispatch({
    type: "person/setLastName",
    lastName: (event.target as any).value,
  });
}

function handleEmailChange(event: Event) {
  personStore.dispatch({
    type: "person/setEmail",
    email: (event.target as any).value,
  });
}

$firstNameInput.addEventListener("input", handleFirstNameChange);
$lastNameInput.addEventListener("input", handleLastNameChange);
$emailInput.addEventListener("input", handleEmailChange);

const render: Parameters<typeof personStore.subscribe>[0] = (person) => {
  $firstNameInput.value = person.firstName;
  $lastNameInput.value = person.lastName;
  $emailInput.value = person.email;

  $result.innerHTML = `${person.firstName} ${person.lastName} (${person.email})`;
};

render(personStore.getInitialState(), personStore.getInitialState());

personStore.subscribe(render);
```

Here's the `html` code

```html
<label style="display: block">
  First name:
  <input id="first-name" />
</label>
<label style="display: block">
  Last name:
  <input id="last-name" />
</label>
<label style="display: block">
  Email:
  <input id="email" />
</label>
<p id="result"></p>
```

## Troubleshooting

TBD
</file>

## <file path="docs/middlewares/subscribe-with-selector.md">

title: subscribeWithSelector
description: How to subscribe to granular store updates in a store
nav: 210

---

# subscribeWithSelector

`subscribeWithSelector` middleware lets you subscribe to specific data based on current state.

```js
const nextStateCreatorFn = subscribeWithSelector(stateCreatorFn);
```

- [Types](#types)
  - [Signature](#signature)
  - [Mutator](#mutator)
- [Reference](#reference)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## Types

### Signature

```ts
subscribeWithSelector<T>(stateCreatorFn: StateCreator<T, [], []>): StateCreator<T, [['zustand/subscribeWithSelector', never]], []>
```

### Mutator

<!-- prettier-ignore-start -->
```ts
['zustand/subscribeWithSelector', never]
```
<!-- prettier-ignore-end -->

## Reference

### `subscribeWithSelector(stateCreatorFn)`

#### Parameters

- `stateCreatorFn`: A function that takes `set` function, `get` function and `store` as arguments.
  Usually, you will return an object with the methods you want to expose.

#### Returns

`subscribeWithSelector` returns a state creator function.

## Usage

### Subscribing partial state updates

By subscribing to partial state updates, you register a callback that fires whenever the store's
partial state updates. We can use `subscribe` for external state management.

```ts
import { createStore } from "zustand/vanilla";
import { subscribeWithSelector } from "zustand/middleware";

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()(
  subscribeWithSelector((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }))
);

const $dot = document.getElementById("dot") as HTMLDivElement;

$dot.addEventListener("mouseenter", (event) => {
  const parent = event.currentTarget.parentElement;
  const parentWidth = parent.clientWidth;
  const parentHeight = parent.clientHeight;

  positionStore.getState().setPosition({
    x: Math.ceil(Math.random() * parentWidth),
    y: Math.ceil(Math.random() * parentHeight),
  });
});

const render: Parameters<typeof positionStore.subscribe>[0] = (state) => {
  $dot.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
};

render(positionStore.getInitialState(), positionStore.getInitialState());

positionStore.subscribe((state) => state.position, render);

const logger: Parameters<typeof positionStore.subscribe>[0] = (x) => {
  console.log("new x position", { x });
};

positionStore.subscribe((state) => state.position.x, logger);
```

Here's the `html` code

```html
<div
  id="dot-container"
  style="position: relative; width: 100vw; height: 100vh;"
>
  <div
    id="dot"
    style="position: absolute; background-color: red; border-radius: 50%; left: -10px; top: -10px; width: 20px; height: 20px;"
  ></div>
</div>
```

## Troubleshooting

TBD
</file>

## <file path="docs/migrations/migrating-to-v4.md">

title: Migrating to v4
nav: 22

---

The only breaking changes are in types.
If you are using Zustand with TypeScript
or JSDoc type annotations,
this guide applies.
Otherwise, no migration is required.

Also, it's recommended to first read
the new [TypeScript Guide](../guides/typescript.md),
so that the migration is easier to understand.

In addition to this migration guide,
you can also check the
[diff](https://github.com/pmndrs/zustand/compare/v3.7.2...v4.0.0?short_path=37e5b4c#diff-c21e24854115b390eccde717da83f91feb2d5927a76c1485e5f0fdd0135c2afa)
of the test files in the Zustand repository from v3 to v4.

## `create`

**Applicable imports**

```ts
import create from "zustand";
import create from "zustand/vanilla";
```

**Change**

```diff
- create:
-   < State
-   , StoreSetState = StoreApi<State>["set"]
-   , StoreGetState = StoreApi<State>["get"]
-   , Store = StoreApi<State>
-   >
-     (f: ...) => ...
+ create:
+   { <State>(): (f: ...) => ...
+   , <State, Mutators>(f: ...) => ...
+   }
```

**Migration**

If you are not passing any type parameters to `create`,
no migration is required.

If you are using a "leaf" middleware like `combine` or `redux`,
remove all type parameters from `create`.

Else, replace `create<T, ...>(...)` with `create<T>()(...)`.

## `StateCreator`

**Applicable imports**

```ts
import type { StateCreator } from "zustand";
import type { StateCreator } from "zustand/vanilla";
```

**Change**

```diff
- type StateCreator
-   < State
-   , StoreSetState = StoreApi<State>["set"]
-   , StoreGetState = StoreApi<State>["get"]
-   , Store = StoreApi<State>
-   > =
-     ...
+ type StateCreator
+   < State
+   , InMutators extends [StoreMutatorIdentifier, unknown][] = []
+   , OutMutators extends [StoreMutatorIdentifier, unknown][] = []
+   , Return = State
+   > =
+     ...
```

**Migration**

If you are using `StateCreator`,
you are likely authoring a middleware
or using the "slices" pattern.
For that check the
[Authoring middlewares and advanced usage](../guides/typescript.md#authoring-middlewares-and-advanced-usage)
and [Common recipes](../guides/typescript.md#common-recipes)
sections of the TypeScript Guide.

## `PartialState`

**Applicable imports**

```ts
import type { PartialState } from "zustand";
import type { PartialState } from "zustand/vanilla";
```

**Change**

```diff
- type PartialState
-   < T extends State
-   , K1 extends keyof T = keyof T
-   , K2 extends keyof T = K1
-   , K3 extends keyof T = K2
-   , K4 extends keyof T = K3
-   > =
-   | (Pick<T, K1> | Pick<T, K2> | Pick<T, K3> | Pick<T, K4> | T)
-   | ((state: T) => Pick<T, K1> | Pick<T, K2> | Pick<T, K3> | Pick<T, K4> | T)
+ type PartialState<T> =
+   | Partial<T>
+   | ((state: T) => Partial<T>)
```

**Migration**

Replace `PartialState<T, ...>` with `PartialState<T>`
and preferably turn on [`exactOptionalPropertyTypes`](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes)
in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true
  }
}
```

We're no longer using the trick to disallow `{ foo: undefined }`
to be assigned to `Partial<{ foo: string }>`.
Instead, we're relying on the users to turn on `exactOptionalPropertyTypes`.

## `useStore`

**Applicable imports**

```ts
import { useStore } from "zustand";
import { useStore } from "zustand/react";
```

**Change**

```diff
- useStore:
-   { <State>(store: StoreApi<State>): State
-   , <State, StateSlice>
-       ( store: StoreApi<State>
-       , selector: StateSelector<State, StateSlice>,
-       , equals?: EqualityChecker<StateSlice>
-       ): StateSlice
-   }
+ useStore:
+   <Store, StateSlice = ExtractState<Store>>
+     ( store: Store
+     , selector?: StateSelector<State, StateSlice>,
+     , equals?: EqualityChecker<StateSlice>
+     )
+       => StateSlice
```

**Migration**

If you are not passing any type parameters to `useStore`,
no migration is required.

If you are,
it's recommended to remove all the type parameters,
or pass the **store** type instead of the **state** type as the first parameter.

## `UseBoundStore`

**Applicable imports**

```ts
import type { UseBoundStore } from "zustand";
import type { UseBoundStore } from "zustand/react";
```

**Change**

```diff
- type UseBoundStore<
-   State,
-   Store = StoreApi<State>
- > =
-   & { (): T
-     , <StateSlice>
-         ( selector: StateSelector<State, StateSlice>
-         , equals?: EqualityChecker<StateSlice>
-         ): U
-     }
-   & Store
+ type UseBoundStore<Store> =
+   & (<StateSlice = ExtractState<S>>
+       ( selector?: (state: ExtractState<S>) => StateSlice
+       , equals?: (a: StateSlice, b: StateSlice) => boolean
+       ) => StateSlice
+     )
+   & S
```

**Migration**

Replace `UseBoundStore<T>` with `UseBoundStore<StoreApi<T>>`,
and `UseBoundStore<T, S>` with `UseBoundStore<S>`

## `UseContextStore`

**Applicable imports**

```ts
import type { UseContextStore } from "zustand/context";
```

**Change**

```diff
- type UseContextStore
```

**Migration**

Use `typeof MyContext.useStore` instead

## `createContext`

**Applicable imports**

```ts
import createContext from "zustand/context";
```

**Change**

```diff
  createContext:
-   <State, Store = StoreApi<State>>() => ...
+   <Store>() => ...
```

**Migration**

Replace `createContext<T>()` with `createContext<StoreApi<T>>()`,
and `createContext<T, S>()` with `createContext<S>()`.

## `combine`, `devtools`, `subscribeWithSelector`

**Applicable imports**

```ts
import { combine } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { subscribeWithSelector } from "zustand/middleware";
```

**Change**

```diff
- combine:
-   <T, U>(...) => ...
+ combine:
+   <T, U, Mps, Mcs>(...) => ...

- devtools:
-   <T>(...) => ...
+ devtools:
+   <T, Mps, Mcs>(...) => ...

- subscribeWithSelector:
-   <T>(...) => ...
+ subscribeWithSelector:
+   <T, Mps, Mcs>(...) => ...
```

**Migration**

If you are not passing any type parameters
to `combine`, `devtools`, or `subscribeWithSelector`,
no migration is required.

If you are,
remove all the type parameters,
as they are inferred automatically.

## `persist`

**Applicable imports**

```ts
import { persist } from "zustand/middleware";
```

**Change**

```diff
- persist:
-   <T, U = Partial<T>>(...) => ...
+ persist:
+   <T, Mps, Mcs, U = T>(...) => ...
```

**Migration**

If you are passing any type parameters,
remove them as they are inferred automatically.

Next, if you are passing the `partialize` option,
there is no further steps required for migration.

If you are **not** passing the `partialize` option,
you might see some compilation errors.
If you do not see any,
there is no further migration required.

The type of partialized state is now `T` instead of `Partial<T>`,
which aligns with the runtime behavior of the default `partialize`,
which is an identity (`s => s`).

If you see some compilation errors,
you have to find and fix the errors yourself,
because they might be indicative of unsound code.
Alternatively, the workaround will be passing
`s => s as Partial<typeof s>` to `partialize`.
If your partialized state is truly `Partial<T>`,
you should not encounter any bugs.

The runtime behavior has not changed,
only the types are now correct.

## `redux`

**Applicable imports**

```ts
import { redux } from "zustand/middleware";
```

**Change**

```diff
- redux:
-   <T, A>(...) => ...
+ redux:
+   <T, A, Mps, Mcs>(...) => ...
```

**Migration**

If you are not passing any type parameters to `redux`,
no migration is required.

If you are,
remove all the type parameters,
and annotate only the second (action) parameter.
That is, replace `redux<T, A>((state, action) => ..., ...)`
with `redux((state, action: A) => ..., ...)`.
</file>

## <file path="docs/migrations/migrating-to-v5.md">

title: How to Migrate to v5 from v4
nav: 23

---

# How to Migrate to v5 from v4

We highly recommend to update to the latest version of v4, before migrating to v5. It will show all deprecation warnings without breaking your app.

## Changes in v5

- Drop default exports
- Drop deprecated features
- Make React 18 the minimum required version
- Make use-sync-external-store a peer dependency (required for `createWithEqualityFn` and `useStoreWithEqualityFn` in `zustand/traditional`)
- Make TypeScript 4.5 the minimum required version
- Drop UMD/SystemJS support
- Organize entry points in the package.json
- Drop ES5 support
- Stricter types when setState's replace flag is set
- Persist middleware behavioral change
- Other small improvements (technically breaking changes)

## Migration Guide

### Using custom equality functions such as `shallow`

The `create` function in v5 does not support customizing equality function.

If you use custom equality function such as `shallow`,
the easiest migration is to use `createWithEqualityFn`.

```js
// v4
import { create } from "zustand";
import { shallow } from "zustand/shallow";

const useCountStore = create((set) => ({
  count: 0,
  text: "hello",
  // ...
}));

const Component = () => {
  const { count, text } = useCountStore(
    (state) => ({
      count: state.count,
      text: state.text,
    }),
    shallow
  );
  // ...
};
```

That can be done with `createWithEqualityFn` in v5:

```bash
npm install use-sync-external-store
```

```js
// v5
import { createWithEqualityFn as create } from "zustand/traditional";

// The rest is the same as v4
```

Alternatively, for the `shallow` use case, you can use `useShallow` hook:

```js
// v5
import { create } from "zustand";
import { useShallow } from "zustand/shallow";

const useCountStore = create((set) => ({
  count: 0,
  text: "hello",
  // ...
}));

const Component = () => {
  const { count, text } = useCountStore(
    useShallow((state) => ({
      count: state.count,
      text: state.text,
    }))
  );
  // ...
};
```

### Requiring stable selector outputs

There is a behavioral change in v5 to match React default behavior.
If a selector returns a new reference, it may cause infinite loops.

For example, this may cause infinite loops.

```js
// v4
const [searchValue, setSearchValue] = useStore((state) => [
  state.searchValue,
  state.setSearchValue,
]);
```

The error message will be something like this:

```plaintext
Uncaught Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
```

To fix it, use the `useShallow` hook, which will return a stable reference.

```js
// v5
import { useShallow } from "zustand/shallow";

const [searchValue, setSearchValue] = useStore(
  useShallow((state) => [state.searchValue, state.setSearchValue])
);
```

Here's another example that may cause infinite loops.

```js
// v4
const action = useMainStore((state) => {
  return state.action ?? () => {}
})
```

To fix it, make sure the selector function returns a stable reference.

```js
// v5

const FALLBACK_ACTION = () => {};

const action = useMainStore((state) => {
  return state.action ?? FALLBACK_ACTION;
});
```

Alternatively, if you need v4 behavior, `createWithEqualityFn` will do.

```js
// v5
import { createWithEqualityFn as create } from "zustand/traditional";
```

### Stricter types when setState's replace flag is set (Typescript only)

```diff
- setState:
-   (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean | undefined) => void;
+ setState:
+   (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: false) => void;
+   (state: T | ((state: T) => T), replace: true) => void;
```

If you are not using the `replace` flag, no migration is required.

If you are using the `replace` flag and it's set to `true`, you must provide a complete state object.
This change ensures that `store.setState({}, true)` (which results in an invalid state) is no longer considered valid.

**Examples:**

```ts
// Partial state update (valid)
store.setState({ key: "value" });

// Complete state replacement (valid)
store.setState({ key: "value" }, true);

// Incomplete state replacement (invalid)
store.setState({}, true); // Error
```

#### Handling Dynamic `replace` Flag

If the value of the `replace` flag is dynamic and determined at runtime, you might face issues. To handle this, you can use a workaround by annotating the `replace` parameter with the parameters of the `setState` function:

```ts
const replaceFlag = Math.random() > 0.5;
const args = [{ bears: 5 }, replaceFlag] as Parameters<
  typeof useBearStore.setState
>;
store.setState(...args);
```

#### Persist middleware no longer stores item at store creation

Previously, the `persist` middleware stored the initial state during store creation. This behavior has been removed in v5 (and v4.5.5).

For example, in the following code, the initial state is stored in the storage.

```js
// v4
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountStore = create(
  persist(
    () => ({
      count: Math.floor(Math.random() * 1000),
    }),
    {
      name: "count",
    }
  )
);
```

In v5, this is no longer the case, and you need to explicitly set the state after store creation.

```js
// v5
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountStore = create(
  persist(
    () => ({
      count: 0,
    }),
    {
      name: "count",
    }
  )
);
useCountStore.setState({
  count: Math.floor(Math.random() * 1000),
});
```

## Links

- https://github.com/pmndrs/zustand/pull/2138
- https://github.com/pmndrs/zustand/pull/2580
  </file>

## <file path="docs/previous-versions/zustand-v3-create-context.md">

title: createContext from zustand/context
nav: 21

---

A special `createContext` is provided since v3.5,
which avoids misusing the store hook.

> **Note**: This function is deprecated in v4 and will be removed in v5. See [Migration](#migration).

```jsx
import create from 'zustand'
import createContext from 'zustand/context'

const { Provider, useStore } = createContext()

const createStore = () => create(...)

const App = () => (
  <Provider createStore={createStore}>
    ...
  </Provider>
)

const Component = () => {
  const state = useStore()
  const slice = useStore(selector)
  ...
```

## createContext usage in real components

```jsx
import create from "zustand";
import createContext from "zustand/context";

// Best practice: You can move the below createContext() and createStore to a separate file(store.js) and import the Provider, useStore here/wherever you need.

const { Provider, useStore } = createContext();

const createStore = () =>
  create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
  }));

const Button = () => {
  return (
      {/** store() - This will create a store for each time using the Button component instead of using one store for all components **/}
    <Provider createStore={createStore}>
      <ButtonChild />
    </Provider>
  );
};

const ButtonChild = () => {
  const state = useStore();
  return (
    <div>
      {state.bears}
      <button
        onClick={() => {
          state.increasePopulation();
        }}
      >
        +
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Button />
      <Button />
    </div>
  );
}
```

## createContext usage with initialization from props

```tsx
import create from "zustand";
import createContext from "zustand/context";

const { Provider, useStore } = createContext();

export default function App({ initialBears }) {
  return (
    <Provider
      createStore={() =>
        create((set) => ({
          bears: initialBears,
          increase: () => set((state) => ({ bears: state.bears + 1 })),
        }))
      }
    >
      <Button />
    </Provider>
  );
}
```

## Migration

Discussion: https://github.com/pmndrs/zustand/discussions/1276

Here's the new context usage with v4 API.

```jsx
import { createContext, useContext, useRef } from "react";
import { createStore, useStore } from "zustand";

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createStore((set) => ({
      // ...
    }));
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreInContext = (selector) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Missing StoreProvider");
  }
  return useStore(store, selector);
};
```

Or reach out to some third-party libraries that provide Zustand v3-like APIs:

- <https://github.com/charkour/zustand-di>
- <https://github.com/arvinxx/zustand-utils>
  </file>

<file path="examples/demo/public/manifest.json">
{
  "short_name": "Zustand",
  "name": "🐻 Bear necessities for state management in React",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
</file>

<file path="examples/demo/public/robots.txt">
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
</file>

<file path="examples/demo/public/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
</file>

<file path="examples/demo/src/components/CodePreview.jsx">
import { create } from 'zustand'
import { Highlight } from 'prism-react-renderer'
import CopyButton from './CopyButton'
import SnippetLang from './SnippetLang'
import javascriptCode from '../resources/javascript-code'
import typescriptCode from '../resources/typescript-code'

const useStore = create((set, get) => ({
lang: 'javascript',
setLang: (lang) => set(() => ({ lang })),
getCode: () =>
get().lang === 'javascript' ? javascriptCode : typescriptCode,
}))

export default function CodePreview() {
const { lang, setLang, getCode } = useStore()
const code = getCode()

return (
<Highlight code={code} language="tsx" theme={undefined}>
{({ className, style, tokens, getLineProps, getTokenProps }) => (
// define how each line is to be rendered in the code block,
// position is set to relative so the copy button can align to bottom right
<pre className={className} style={{ ...style, position: 'relative' }}>
{tokens.map((line, i) => (
<div {...getLineProps({ line })} key={i}>
{line.map((token, key) => (
<span {...getTokenProps({ token })} key={key} />
))}
</div>
))}
<div className="snippet-container">
<SnippetLang lang={lang} setLang={setLang} />
<CopyButton code={code} />
</div>
</pre>
)}
</Highlight>
)
}
</file>

<file path="examples/demo/src/components/CopyButton.jsx">
import { useState, useCallback, useRef } from 'react'
import { copyToClipboard } from '../utils/copy-to-clipboard'

/_
Isolated logic for the entire copy functionality instead
of a separate button component and with the added utility
_/
export default function CopyButton({ code, ...props }) {
const [isCopied, setIsCopied] = useState(false)
const timer = useRef()

const handleCopy = useCallback(() => {
clearTimeout(timer.current)
copyToClipboard(code).then(() => {
setIsCopied(true)
timer.current = setTimeout(() => setIsCopied(false), 3000)
})
}, [code])

return (
<>
<button className="copy-button" onClick={handleCopy} {...props}>
{isCopied ? (
'Copied!'
) : (
<>
<svg
xmlns="http://www.w3.org/2000/svg"
width={16}
height={16}
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth={2}
strokeLinecap="round"
strokeLinejoin="round"
{...props} >
<rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
<path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
</svg>
</>
)}
</button>
</>
)
}
</file>

<file path="examples/demo/src/components/Details.jsx">
export default function Details() {
  return (
    <>
      <nav className="nav">
        <a href="https://docs.pmnd.rs/zustand">Documentation</a>
        <a href="https://github.com/pmndrs/zustand">Github</a>
      </nav>
      <div className="bottom">
        <a
          href="https://github.com/pmndrs/zustand/tree/main/examples/demo"
          className="bottom-right"
        >
          {'<Source />'}
        </a>
        <a
          href="https://www.instagram.com/tina.henschel/"
          className="bottom-left"
        >
          Illustrations @ Tina Henschel
        </a>
      </div>
      <span className="header-left">Zustand</span>
    </>
  )
}
</file>

<file path="examples/demo/src/components/Fireflies.jsx">
import { Vector3, CatmullRomCurve3 } from 'three'
import { useRef, useMemo } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as meshline from 'meshline'

extend(meshline)

const r = () => Math.max(0.2, Math.random())

function Fatline({ curve, color }) {
const material = useRef()
useFrame(
(state, delta) =>
(material.current.uniforms.dashOffset.value -= delta / 100),
)
return (
<mesh>
<meshLineGeometry points={curve} />
<meshLineMaterial
        ref={material}
        transparent
        lineWidth={0.01}
        color={color}
        dashArray={0.1}
        dashRatio={0.99}
      />
</mesh>
)
}

export default function Fireflies({ count, colors, radius = 10 }) {
const lines = useMemo(
() =>
new Array(count).fill().map(() => {
const pos = new Vector3(
Math.sin(0) _ radius _ r(),
Math.cos(0) _ radius _ r(),
0,
)
const points = new Array(30).fill().map((\_, index) => {
const angle = (index / 20) _ Math.PI _ 2
return pos
.add(
new Vector3(
Math.sin(angle) _ radius _ r(),
Math.cos(angle) _ radius _ r(),
0,
),
)
.clone()
})
const curve = new CatmullRomCurve3(points).getPoints(100)
return {
color: colors[parseInt(colors.length * Math.random())],
curve,
}
}),
[count, radius, colors],
)
return (
<group position={[-radius * 2, -radius, 0]}>
{lines.map((props, index) => (
<Fatline key={index} {...props} />
))}
</group>
)
}
</file>

<file path="examples/demo/src/components/Scene.jsx">
import { Mesh, PlaneGeometry, Group, Vector3, MathUtils } from 'three'
import { memo, useRef, useState, useLayoutEffect } from 'react'
import { createRoot, events, extend, useFrame } from '@react-three/fiber'
import { Plane, useAspect, useTexture } from '@react-three/drei'
import {
  EffectComposer,
  DepthOfField,
  Vignette,
} from '@react-three/postprocessing'
import { MaskFunction } from 'postprocessing'
import Fireflies from './Fireflies'
import bgUrl from '../resources/bg.jpg'
import starsUrl from '../resources/stars.png'
import groundUrl from '../resources/ground.png'
import bearUrl from '../resources/bear.png'
import leaves1Url from '../resources/leaves1.png'
import leaves2Url from '../resources/leaves2.png'
import '../materials/layerMaterial'

function Experience() {
const scaleN = useAspect(1600, 1000, 1.05)
const scaleW = useAspect(2200, 1000, 1.05)
const textures = useTexture([
bgUrl,
starsUrl,
groundUrl,
bearUrl,
leaves1Url,
leaves2Url,
])
const group = useRef()
const layersRef = useRef([])
const [movement] = useState(() => new Vector3())
const [temp] = useState(() => new Vector3())
const layers = [
{ texture: textures[0], x: 0, y: 0, z: 0, factor: 0.005, scale: scaleW },
{ texture: textures[1], x: 0, y: 0, z: 10, factor: 0.005, scale: scaleW },
{ texture: textures[2], x: 0, y: 0, z: 20, scale: scaleW },
{
texture: textures[3],
x: 0,
y: 0,
z: 30,
scaleFactor: 0.83,
scale: scaleN,
},
{
texture: textures[4],
x: 0,
y: 0,
z: 40,
factor: 0.03,
scaleFactor: 1,
wiggle: 0.6,
scale: scaleW,
},
{
texture: textures[5],
x: -20,
y: -20,
z: 49,
factor: 0.04,
scaleFactor: 1.3,
wiggle: 1,
scale: scaleW,
},
]

useFrame((state, delta) => {
movement.lerp(temp.set(state.pointer.x, state.pointer.y _ 0.2, 0), 0.2)
group.current.position.x = MathUtils.lerp(
group.current.position.x,
state.pointer.x _ 20,
0.05,
)
group.current.rotation.x = MathUtils.lerp(
group.current.rotation.x,
state.pointer.y / 20,
0.05,
)
group.current.rotation.y = MathUtils.lerp(
group.current.rotation.y,
-state.pointer.x / 2,
0.05,
)
layersRef.current[4].uniforms.time.value =
layersRef.current[5].uniforms.time.value += delta
}, 1)

return (
<group ref={group}>
<Fireflies count={20} radius={80} colors={['orange']} />
{layers.map(
(
{
scale,
texture,
ref,
factor = 0,
scaleFactor = 1,
wiggle = 0,
x,
y,
z,
},
i,
) => (
<Plane
scale={scale}
args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]}
position={[x, y, z]}
key={i}
ref={ref} >
<layerMaterial
movement={movement}
textr={texture}
factor={factor}
ref={(el) => (layersRef.current[i] = el)}
wiggle={wiggle}
scale={scaleFactor}
/>
</Plane>
),
)}
</group>
)
}

function Effects() {
const ref = useRef()
useLayoutEffect(() => {
const maskMaterial = ref.current.maskPass.getFullscreenMaterial()
maskMaterial.maskFunction = MaskFunction.MULTIPLY_RGB_SET_ALPHA
})
return (
<EffectComposer disableNormalPass multisampling={0}>
<DepthOfField
ref={ref}
target={[0, 0, 30]}
bokehScale={8}
focalLength={0.1}
width={1024}
/>
<Vignette />
</EffectComposer>
)
}

export default function Scene() {
return (
<Canvas>
<Experience />
<Effects />
</Canvas>
)
}

function Canvas({ children }) {
extend({ Mesh, PlaneGeometry, Group })
const canvas = useRef(null)
const root = useRef(null)
useLayoutEffect(() => {
if (!root.current) {
root.current = createRoot(canvas.current).configure({
events,
orthographic: true,
gl: { antialias: false },
camera: { zoom: 5, position: [0, 0, 200], far: 300, near: 50 },
onCreated: (state) => {
state.events.connect(document.getElementById('root'))
state.setEvents({
compute: (event, state) => {
state.pointer.set(
(event.clientX / state.size.width) _ 2 - 1,
-(event.clientY / state.size.height) _ 2 + 1,
)
state.raycaster.setFromCamera(state.pointer, state.camera)
},
})
},
})
}
const resize = () =>
root.current.configure({
width: window.innerWidth,
height: window.innerHeight,
})
window.addEventListener('resize', resize)
root.current.render(children)
return () => window.removeEventListener('resize', resize)
}, [children])

return (
<canvas
ref={canvas}
style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'block',
      }}
/>
)
}
</file>

<file path="examples/demo/src/components/SnippetLang.jsx">
export default function SnippetLang({ lang, setLang }) {
  return (
    <select
      className="snippet-lang"
      value={lang}
      onChange={(e) => setLang(e.currentTarget.value)}
    >
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
    </select>
  )
}
</file>

<file path="examples/demo/src/materials/layerMaterial.js">
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

// This material takes care of wiggling and punches a hole into
// alpha regions so that the depth-of-field effect can process the layers.
// Credit: Gianmarco Simone https://twitter.com/ggsimm

const LayerMaterial = shaderMaterial(
{ textr: null, movement: [0, 0, 0], scale: 1, factor: 0, wiggle: 0, time: 0 },
` uniform float time;
    uniform vec2 resolution;
    uniform float wiggle;
    varying vec2 vUv;
    varying vec3 vNormal;
    void main()	{
      vUv = uv;
      vec3 transformed = vec3(position);
      if (wiggle > 0.) {
        float theta = sin(time + position.y) / 2.0 * wiggle;
        float c = cos(theta);
        float s = sin(theta);
        mat3 m = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
        transformed = transformed * m;
        vNormal = vNormal * m;
      }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
    }`,
` uniform float time;
    uniform vec2 resolution;
    uniform float factor;
    uniform float scale;
    uniform vec3 movement;
    uniform sampler2D textr;
    varying vec2 vUv;
    void main()	{
      vec2 uv = vUv / scale + movement.xy * factor;
      vec4 color = texture2D(textr, uv);
      if (color.a < 0.1) discard;
      gl_FragColor = vec4(color.rgb, .1);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
)

extend({ LayerMaterial })
</file>

<file path="examples/demo/src/resources/javascript-code.js">
export default `import { create } from 'zustand'

const useStore = create((set) => ({
count: 1,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const { count, inc } = useStore()
return (
<div>
<span>{count}</span>
<button onClick={inc}>one up</button>
</div>
)
}`
</file>

<file path="examples/demo/src/resources/typescript-code.js">
export default `import { create } from 'zustand'

type Store = {
count: number
inc: () => void
}

const useStore = create<Store>()((set) => ({
count: 1,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const { count, inc } = useStore()
return (
<div>
<span>{count}</span>
<button onClick={inc}>one up</button>
</div>
)
}`
</file>

<file path="examples/demo/src/utils/copy-to-clipboard.js">
export const copyToClipboard = (str) => {
  return navigator.clipboard.writeText(str)
}
</file>

<file path="examples/demo/src/App.jsx">
import { create } from 'zustand'
import CodePreview from './components/CodePreview'
import Details from './components/Details'
import Scene from './components/Scene'

const useStore = create((set) => ({
count: 1,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const { count, inc } = useStore()
return (
<div className="counter">
<span>{count}</span>
<button onClick={inc}>one up</button>
</div>
)
}

export default function App() {
return (
<>
<Scene />
<div className="main">
<div className="code">
<div className="code-container">
<CodePreview />
<Counter />
</div>
</div>
<Details />
</div>
</>
)
}
</file>

<file path="examples/demo/src/main.jsx">
import { createRoot } from 'react-dom/client'
import './styles.css'
import './pmndrs.css'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
</file>

<file path="examples/demo/src/pmndrs.css">
/**
 * Pmndrs theme for JavaScript, CSS and HTML
 * Loosely based on https://marketplace.visualstudio.com/items?itemName=pmndrs.pmndrs
 * @author Paul Henschel
 */

code[class*='language-'],
pre[class*='language-'] {
color: #e4f0fb !important;
background: none !important;
text-shadow: 0 1px rgba(0, 0, 0, 0.3) !important;
font-family: Menlo, Monaco, 'Courier New', monospace !important;
font-size: 0.95em !important;
text-align: left !important;
white-space: pre !important;
word-spacing: normal !important;
word-break: normal !important;
word-wrap: normal !important;
line-height: 1.5 !important;

-moz-tab-size: 4 !important;
-o-tab-size: 4 !important;
tab-size: 4 !important;

-webkit-hyphens: none !important;
-moz-hyphens: none !important;
-ms-hyphens: none !important;
hyphens: none !important;
}

/_ Code blocks _/
pre[class*='language-'] {
padding: 3.75em !important;
margin: -2.5em 0 !important;
overflow: auto !important;
border-radius: 0.75em !important;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
background: #252b37 !important;
}

/_ Inline code _/
:not(pre) > code[class*='language-'] {
padding: 0.1em !important;
border-radius: 0.3em !important;
white-space: normal !important;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
color: #a6accd !important;
}

.token.punctuation {
color: #e4f0fb !important;
}

.token.namespace {
opacity: 0.7 !important;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
color: #e4f0fb !important;
}

.token.boolean,
.token.number {
color: #5de4c7 !important;
}

.token.selector,
.token.attr-value,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
color: #5de4c7 !important;
}

.token.attr-name,
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
color: #add7ff !important;
}

.token.atrule,
.token.function,
.token.class-name {
color: #5de4c7 !important;
}

.token.keyword {
color: #add7ff !important;
}

.token.regex,
.token.important {
color: #fffac2 !important;
}

.token.important,
.token.bold {
font-weight: bold !important;
}
.token.italic {
font-style: italic !important;
}

.token.entity {
cursor: help !important;
}
</file>

<file path="examples/demo/src/styles.css">
* {
  box-sizing: border-box;
}

html,
body,
#root {
width: 100%;
height: 100%;
margin: 0;
padding: 0;
-webkit-touch-callout: none;
overflow: hidden;
background: #010101;
}

#root {
overflow: hidden;
}

body {
font-family:
-apple-system,
BlinkMacSystemFont,
avenir next,
avenir,
helvetica neue,
helvetica,
ubuntu,
roboto,
noto,
segoe ui,
arial,
sans-serif;
}

.main {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
color: white;
}

.main > .code {
position: absolute;
right: 10vw;
margin-right: -60px;
width: 640px;
max-width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
}

.code-container {
position: relative;
margin-bottom: -60px;
}

.counter {
position: absolute;
top: -100px;
right: -20px;
color: white;
background: #394a52;
padding: 40px;
border-radius: 10px;
box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.5);
width: 120px;
height: 120px;
font-size: 3em;
}

.counter > span {
position: absolute;
left: 50%;
top: 50%;
margin-top: -15px;
transform: translate3d(-50%, -50%, 0);
}

.counter > button {
margin: 10px;
padding: 5px 10px;
position: absolute;
left: 0;
bottom: 0;
width: 100px;
border-radius: 5px;
border: solid 2px white;
outline: none;
background: transparent;
color: white;
cursor: pointer;
}

.code-container pre[class*='language-'] {
margin-top: -50px;
display: inline-block;
width: auto !important;
padding: 40px 50px 40px 45px;
font-size: 0.8rem !important;
border-radius: 10px !important;
box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 1);
white-space: pre-wrap !important;
}

span.header-left {
font-weight: 700;
text-transform: uppercase;
position: absolute;
display: inline-block;
top: 40px;
left: 40px;
font-size: 3em;
color: white;
line-height: 1em;
}

a {
font-family:
-apple-system,
BlinkMacSystemFont,
avenir next,
avenir,
helvetica neue,
helvetica,
ubuntu,
roboto,
noto,
segoe ui,
arial,
sans-serif;
font-weight: 400;
font-size: 16px;
color: inherit;
position: absolute;
display: inline;
text-decoration: none;
}

.nav {
align-items: center;
display: flex;
gap: 16px;
justify-content: flex-end;
left: 40px;
position: fixed;
right: 40px;
top: 40px;
}

.nav a {
position: relative;
flex: 0 0 auto;
}

a.bottom-left {
bottom: 40px;
left: 40px;
}

a.bottom-right {
bottom: 40px;
right: 40px;
}

.snippet-container {
display: flex;
align-items: center;
gap: 4px;
position: absolute;
bottom: 0;
right: 0;
padding: 5px;
}

.snippet-lang {
background-color: #272822;
color: #fff;
outline: 0;
border: 0;
}

.copy-button {
box-shadow: none;
text-decoration: none;
font-size: 14px;
font-family: sans-serif;
line-height: 1;
padding: 12px;
width: auto;
border-radius: 5px;
border: 0;
outline: none;
background: transparent;
color: #f8f9fa;
cursor: pointer;
}

.copy-button:hover {
background-color: #5f5e5d;
}

@media only screen and (max-width: 700px) {
span.header-left {
font-size: 1em;
}
.main > .code {
margin-right: -0px;
}
.code-container > pre[class*='language-'] {
font-size: 0.6rem !important;
border-radius: 10px 10px 0 0 !important;
}
.counter {
position: absolute;
top: -120px;
}
}
</file>

<file path="examples/demo/.gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
\*.local

# Editor directories and files

.vscode/_
!.vscode/extensions.json
.idea
.DS_Store
_.suo
_.ntvs_
_.njsproj
_.sln
\*.sw?
</file>

<file path="examples/demo/eslint.config.js">
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
{
ignores: ['dist'],
},
eslint.configs.recommended,
react.configs.flat.recommended,
react.configs.flat['jsx-runtime'],
{
languageOptions: {
globals: {
...globals.browser,
...globals.es2020,
},
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
},
},
plugins: {
'react-hooks': reactHooks,
'react-refresh': reactRefresh,
},
settings: {
react: {
version: 'detect',
},
},
rules: {
...reactHooks.configs.recommended.rules,
'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true },
],
'react/prop-types': 'off',
'react/no-unknown-property': ['off'],
},
},
]
</file>

<file path="examples/demo/index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="🐻 Bear necessities for state management in React"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta name="og:image" content="/ogimage.jpg" />
    <link rel="manifest" href="/manifest.json" />
    <title>Zustand</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="examples/demo/package.json">
{
  "name": "demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "prettier": {
    "semi": false,
    "singleQuote": true
  },
  "dependencies": {
    "@react-three/drei": "^9.78.2",
    "@react-three/fiber": "^8.13.7",
    "@react-three/postprocessing": "^2.14.13",
    "@types/three": "^0.155.0",
    "meshline": "^3.1.6",
    "postprocessing": "^6.35.4",
    "prism-react-renderer": "^2.0.6",
    "prismjs": "^1.29.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.154.0",
    "zustand": "^4.3.9"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^4.4.0"
  }
}
</file>

<file path="examples/demo/vite.config.js">
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
})
</file>

<file path="examples/starter/src/assets/zustand-mascot.svg">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128">
<path d="M0 0 C2.92674749 2.02367451 4.43710763 4.6577182 5.8125 7.9375 C6.20712798 12.27840773 6.50846543 15.59317865 5.01171875 19.734375 C3.85271995 22.98800073 3.07718357 25.53531508 3 29 C5.40595939 33.29114836 8.45731999 36.61076941 12 40 C12.59683594 39.81953125 13.19367188 39.6390625 13.80859375 39.453125 C17.0075717 38.79166075 19.03677941 39.73905507 22 41 C24.22013779 42.60768599 24.8812502 43.69464338 25.875 46.25 C26.05238008 50.15236177 24.83227412 52.58817923 23 56 C19.80645161 59 19.80645161 59 17 59 C17.05800781 59.92039063 17.11601563 60.84078125 17.17578125 61.7890625 C17.76383119 78.28806378 12.00744635 90.66254859 0.8125 102.6875 C-8.61621534 111.74803121 -21.7975819 118.42405559 -35 119 C-36.07765625 119.07476562 -37.1553125 119.14953125 -38.265625 119.2265625 C-55.05734181 119.89401568 -69.14092226 114.26480156 -81.6875 103.0625 C-92.32535821 91.77412528 -96.2255403 77.89725091 -95.9375 62.703125 C-95.16953149 54.98504144 -92.25169796 48.59552316 -88.65673828 41.82250977 C-86.48817162 37.77623874 -86.48817162 37.77623874 -86.23828125 33.29296875 C-86.48964844 32.53628906 -86.74101563 31.77960937 -87 31 C-87.9014227 23.33790704 -86.44167874 17.3703024 -82 11 C-78.78712812 8.07329485 -76.43782151 7.4763614 -72.02734375 7.640625 C-67.60034116 8.42537305 -63.80444862 11.57234058 -61 15 C-61 15.66 -61 16.32 -61 17 C-60.31035156 16.72285156 -59.62070312 16.44570313 -58.91015625 16.16015625 C-52.87975084 13.83567899 -47.45919292 12.26671712 -41 12 C-39.90751953 11.94005859 -39.90751953 11.94005859 -38.79296875 11.87890625 C-32.99633084 11.70632684 -27.6311646 12.68331851 -22 14 C-21.835 13.154375 -21.67 12.30875 -21.5 11.4375 C-17.58686009 2.46988771 -9.45188118 -1.59017498 0 0 Z " fill="#423C36" transform="translate(100,4)"/>
<path d="M0 0 C6.33186897 4.8877585 10.13395719 10.71499423 11.3203125 18.66796875 C11.7497603 26.43958854 8.96784956 33.42767092 4.87890625 39.921875 C-0.8146359 45.12032653 -6.40942331 47.8325495 -14.18359375 48.046875 C-21.62067806 47.68548216 -26.93710729 45.23542235 -32.421875 40.29296875 C-37.53789534 34.61837547 -39.4093185 27.53365595 -39.26171875 20.04296875 C-38.51870381 13.06081368 -35.8361952 7.90936704 -30.74609375 3.109375 C-21.58993102 -4.27222199 -10.3818389 -6.61168989 0 0 Z " fill="#716257" transform="translate(93.99609375,41.453125)"/>
<path d="M0 0 C2.90223276 2.06734389 4.43251153 4.64675827 5.8125 7.9375 C6.20712798 12.27840773 6.50846543 15.59317865 5.01171875 19.734375 C3.85271995 22.98800073 3.07718357 25.53531508 3 29 C5.40595939 33.29114836 8.45731999 36.61076941 12 40 C12.59683594 39.81953125 13.19367188 39.6390625 13.80859375 39.453125 C17.0075717 38.79166075 19.03677941 39.73905507 22 41 C24.22013779 42.60768599 24.8812502 43.69464338 25.875 46.25 C26.05238008 50.15236177 24.83227412 52.58817923 23 56 C19.80645161 59 19.80645161 59 17 59 C17.05800781 59.92039063 17.11601563 60.84078125 17.17578125 61.7890625 C17.76383119 78.28806378 12.00744635 90.66254859 0.8125 102.6875 C-8.61621534 111.74803121 -21.7975819 118.42405559 -35 119 C-36.07765625 119.07476562 -37.1553125 119.14953125 -38.265625 119.2265625 C-55.05734181 119.89401568 -69.14092226 114.26480156 -81.6875 103.0625 C-92.32535821 91.77412528 -96.2255403 77.89725091 -95.9375 62.703125 C-95.16953149 54.98504144 -92.25169796 48.59552316 -88.65673828 41.82250977 C-86.48817162 37.77623874 -86.48817162 37.77623874 -86.23828125 33.29296875 C-86.48964844 32.53628906 -86.74101563 31.77960937 -87 31 C-87.9014227 23.33790704 -86.44167874 17.3703024 -82 11 C-78.78741059 8.07355216 -76.43523867 7.46802927 -72.0234375 7.6484375 C-67.43571746 8.44553171 -64.65273087 11.10249505 -62 14.75 C-60.13790618 17.35869184 -60.13790618 17.35869184 -56.75 17.3125 C-55.8425 17.209375 -54.935 17.10625 -54 17 C-54.66 17.66 -55.32 18.32 -56 19 C-56.99 19 -57.98 19 -59 19 C-59.33 19.66 -59.66 20.32 -60 21 C-65 16 -65 16 -66.8125 13.75 C-70.21485482 11.02811614 -72.64273429 11 -77 11 C-80.9027 13.53148108 -82.85588614 17.56347215 -84 22 C-85.04508982 30.09629826 -83.20661834 36.59901034 -80 44 C-80.99 44 -81.98 44 -83 44 C-83.495 42.515 -83.495 42.515 -84 41 C-91.09255003 54.18143731 -94.59348082 65.83405644 -90.3125 80.6875 C-85.56293233 94.63517408 -78.52829505 100.39945617 -65.73828125 107.203125 C-52.53312853 113.55677119 -36.05721359 113.82267089 -22.0234375 110.09765625 C-8.21440882 105.08430088 2.05145433 93.9228185 10 82 C10.66 82 11.32 82 12 82 C12.78174481 76.69681224 13.4465203 71.38730233 14.0625 66.0625 C14.15337891 65.28326172 14.24425781 64.50402344 14.33789062 63.70117188 C14.55939765 61.80087478 14.77981282 59.90045047 15 58 C13.8553125 57.814375 13.8553125 57.814375 12.6875 57.625 C10 57 10 57 7 55 C7.33 55.66 7.66 56.32 8 57 C9.25636791 65.87409236 6.94877165 72.63975064 2 80 C-4.49583227 87.39803119 -11.25105188 89.42289926 -20.89453125 90.09375 C-27.14874219 89.90494363 -32.030954 87.61899338 -36.8125 83.6875 C-37.534375 82.800625 -38.25625 81.91375 -39 81 C-39.44085938 80.46246094 -39.88171875 79.92492187 -40.3359375 79.37109375 C-46.63150114 71.23780777 -46.90420695 61.97856957 -46 52 C-45.01758645 48.77935181 -43.91755982 46.81994092 -42 44 C-41.34 43.67 -40.68 43.34 -40 43 C-41.33333333 47 -42.66666667 51 -44 55 C-44.90453256 63.81919249 -42.54103243 71.07370946 -37 78 C-30.70423174 83.44260341 -25.43956591 84.4429393 -17.171875 84.33203125 C-11.07691858 83.69401241 -6.24166316 81.48815309 -2.1171875 76.91015625 C2.87518016 69.85572368 4.9354258 62.59700854 4 54 C2.6224698 47.76059851 -0.62140606 43.53446621 -5 39 C-4.505 38.01 -4.505 38.01 -4 37 C0.31503917 40.99584449 3.7051836 44.46544279 6 50 C7.35264857 47.38753168 8.42135087 44.89324564 9 42 C7.71036916 38.80996083 7.71036916 38.80996083 5 36 C4.39414063 35.29101562 3.78828125 34.58203125 3.1640625 33.8515625 C1.46708766 31.87753054 -0.25485762 29.93142162 -2 28 C-1.01 27.67 -0.02 27.34 1 27 C1.1954384 24.10450497 1.38161395 21.20891002 1.5625 18.3125 C1.61857422 17.49587891 1.67464844 16.67925781 1.73242188 15.83789062 C1.98341571 11.70485877 2.11127743 8.04175718 1 4 C-2.61930698 2.79356434 -5.19231005 2.67731441 -9 3 C-14.29789125 5.90864618 -18.58876318 9.37378076 -21 15 C-21.495 13.515 -21.495 13.515 -22 12 C-17.64706023 3.48337871 -9.88445863 -2.5815081 0 0 Z " fill="#14100D" transform="translate(100,4)"/>
<path d="M0 0 C3.59662214 1.86747688 5.61719881 3.47364837 8 6.75 C9.86209382 9.35869184 9.86209382 9.35869184 13.25 9.3125 C14.1575 9.209375 15.065 9.10625 16 9 C15.34 9.66 14.68 10.32 14 11 C13.01 11 12.02 11 11 11 C10.67 11.66 10.34 12.32 10 13 C5 8 5 8 3.1875 5.75 C-0.21485482 3.02811614 -2.64273429 3 -7 3 C-10.9027 5.53148108 -12.85588614 9.56347215 -14 14 C-15.04508982 22.09629826 -13.20661834 28.59901034 -10 36 C-10.99 36 -11.98 36 -13 36 C-13.495 34.515 -13.495 34.515 -14 33 C-21.09255003 46.18143731 -24.59348082 57.83405644 -20.3125 72.6875 C-15.56293233 86.63517408 -8.52829505 92.39945617 4.26171875 99.203125 C17.46687147 105.55677119 33.94278641 105.82267089 47.9765625 102.09765625 C59.54624642 97.89729297 69.81932952 88.77553987 76.74609375 78.7265625 C78.0265619 76.96342567 79.42284042 75.49899132 81 74 C81 74.99 81 75.98 81 77 C81.66 77.33 82.32 77.66 83 78 C73.70972207 94.1810801 61.09198619 104.85509143 43 110 C40.1737474 110.56525052 37.8364354 110.87626289 35 111 C33.92234375 111.07476562 32.8446875 111.14953125 31.734375 111.2265625 C14.94265819 111.89401568 0.85907774 106.26480156 -11.6875 95.0625 C-22.32535821 83.77412528 -26.2255403 69.89725091 -25.9375 54.703125 C-25.16953149 46.98504144 -22.25169796 40.59552316 -18.65673828 33.82250977 C-16.48817162 29.77623874 -16.48817162 29.77623874 -16.23828125 25.29296875 C-16.61533203 24.15794922 -16.61533203 24.15794922 -17 23 C-17.9014227 15.33790704 -16.44167874 9.3703024 -12 3 C-8.30392984 -0.36686553 -4.86538341 -0.84533689 0 0 Z " fill="#25211C" transform="translate(30,12)"/>
<path d="M0 0 C2.67216951 1.61736575 3.71076127 2.88176207 4.49609375 5.91796875 C5.35049775 11.87770037 5.7467684 19.5064632 3 25 C-0.70581586 25.57903373 -2.67587166 24.74757092 -5.6875 22.75 C-17.7324419 14.83218903 -30.90432407 13.20387509 -45 15 C-47.3948941 15.1991378 -49.79079442 15.38650002 -52.1875 15.5625 C-53.29480469 15.64628906 -54.40210938 15.73007812 -55.54296875 15.81640625 C-56.35378906 15.87699219 -57.16460937 15.93757813 -58 16 C-52.72877216 10.22374434 -44.19734811 10.3062723 -36.8125 9.87109375 C-30.71191722 9.70768528 -24.95640233 10.75305222 -19 12 C-18.4740625 10.948125 -18.4740625 10.948125 -17.9375 9.875 C-13.39073861 3.12819278 -8.26543715 -0.71253769 0 0 Z " fill="#201D19" transform="translate(98,6)"/>
<path d="M0 0 C1.0209375 0.5878125 1.0209375 0.5878125 2.0625 1.1875 C1.58249859 5.50751266 0.44746591 7.46072191 -2.9375 10.1875 C-6.4467699 11.98712559 -9.04183797 12.26554331 -12.9375 12.1875 C-12.88529297 13.21810547 -12.88529297 13.21810547 -12.83203125 14.26953125 C-12.80496094 15.17058594 -12.77789062 16.07164063 -12.75 17 C-12.69779297 18.33998047 -12.69779297 18.33998047 -12.64453125 19.70703125 C-12.9375 22.1875 -12.9375 22.1875 -14.3203125 24.015625 C-15.9375 25.1875 -15.9375 25.1875 -18 25.125 C-19.9375 24.1875 -19.9375 24.1875 -21.1875 22.5 C-22.1133912 19.64516881 -22.073057 17.16975393 -21.9375 14.1875 C-23.113125 13.754375 -23.113125 13.754375 -24.3125 13.3125 C-26.9375 12.1875 -26.9375 12.1875 -28.9375 10.1875 C-28.5625 6.5625 -28.5625 6.5625 -27.9375 3.1875 C-23.67418153 2.42957672 -19.77117315 2.18099544 -15.4375 2.3125 C-11.8249207 2.37188487 -9.30314483 2.17574677 -6.0625 0.5625 C-2.9375 -0.8125 -2.9375 -0.8125 0 0 Z " fill="#13100E" transform="translate(92.9375,61.8125)"/>
<path d="M0 0 C3.59662214 1.86747688 5.61719881 3.47364837 8 6.75 C9.86209382 9.35869184 9.86209382 9.35869184 13.25 9.3125 C14.1575 9.209375 15.065 9.10625 16 9 C15.34 9.66 14.68 10.32 14 11 C13.01 11 12.02 11 11 11 C10.67 11.66 10.34 12.32 10 13 C5 8 5 8 3.1875 5.75 C-0.21485482 3.02811614 -2.64273429 3 -7 3 C-10.9027 5.53148108 -12.85588614 9.56347215 -14 14 C-15.04508982 22.09629826 -13.20661834 28.59901034 -10 36 C-10.99 36 -11.98 36 -13 36 C-13.495 34.515 -13.495 34.515 -14 33 C-21.09255003 46.18143731 -24.59348082 57.83405644 -20.3125 72.6875 C-18.69149403 77.50999276 -16.69668247 81.85374084 -14.05078125 86.1953125 C-13 88 -13 88 -12 91 C-13.7421875 90.94140625 -13.7421875 90.94140625 -16 90 C-17.61011177 87.63951538 -18.87762811 85.4822689 -20.125 82.9375 C-20.4761084 82.22231201 -20.8272168 81.50712402 -21.18896484 80.77026367 C-26.35930349 69.56786327 -27.63434457 56.90281624 -24 45 C-22.38506189 41.19230189 -20.59569557 37.47556428 -18.65673828 33.82250977 C-16.48817162 29.77623874 -16.48817162 29.77623874 -16.23828125 25.29296875 C-16.61533203 24.15794922 -16.61533203 24.15794922 -17 23 C-17.9014227 15.33790704 -16.44167874 9.3703024 -12 3 C-8.30392984 -0.36686553 -4.86538341 -0.84533689 0 0 Z " fill="#100D0A" transform="translate(30,12)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.22265625 4.06640625 0.22265625 4.06640625 -0.9375 6.5625 C-3.6371104 13.07718483 -4.05176239 18.48568353 -1.75 25.1875 C1.07660895 31.78292088 4.68043183 36.52146577 11 40 C17.89605334 42.2650217 25.76492764 41.976941 32.375 39.0625 C37.57620607 36.1441384 40.16441561 32.11554751 43 27 C44.33333333 25 45.66666667 23 47 21 C47.39387788 18.67612053 47.73486085 16.34206251 48 14 C48.33 14 48.66 14 49 14 C49.95648606 22.99805408 48.0479775 29.49220295 43 37 C36.50416773 44.39803119 29.74894812 46.42289926 20.10546875 47.09375 C13.85125781 46.90494363 8.969046 44.61899338 4.1875 40.6875 C3.465625 39.800625 2.74375 38.91375 2 38 C1.55914062 37.46246094 1.11828125 36.92492187 0.6640625 36.37109375 C-5.62765524 28.24277632 -5.91455402 18.97401852 -5 9 C-3.92089534 5.60643556 -2.57035322 2.57035322 0 0 Z " fill="#26231F" transform="translate(59,47)"/>
<path d="M0 0 C0.495 1.485 0.495 1.485 1 3 C1.66 3.33 2.32 3.66 3 4 C-5.79743316 19.3226816 -17.39632723 29.59827315 -34.26171875 35.28515625 C-40.59029935 36.93726788 -46.61193005 37.49970818 -53 36 C-49.24031213 33.74222399 -45.19180533 33.12553451 -40.9375 32.375 C-39.85758789 32.17390625 -39.85758789 32.17390625 -38.75585938 31.96875 C-35.79508331 31.42992724 -33.0155592 31 -30 31 C-30 30.34 -30 29.68 -30 29 C-30.99 28.67 -31.98 28.34 -33 28 C-31.9275 27.690625 -30.855 27.38125 -29.75 27.0625 C-16.97128186 22.27331789 -7.00720116 11.31932496 0 0 Z " fill="#26211B" transform="translate(110,86)"/>
<path d="M0 0 C3.375 0.5625 3.375 0.5625 5.1875 1.8125 C5.579375 2.39 5.97125 2.9675 6.375 3.5625 C6.99375 4.4596875 6.99375 4.4596875 7.625 5.375 C8.68843307 8.47667979 8.30384753 10.44422616 7.375 13.5625 C5.5698071 15.72873148 4.24466222 16.41785392 1.47265625 16.87890625 C-2.11082393 17.08577382 -4.0678233 16.92466486 -7.125 14.9375 C-9.11976086 11.77912863 -9.28760372 10.24363179 -8.625 6.5625 C-6.08279552 2.40252904 -4.89160228 0.75904173 0 0 Z " fill="#AA7F69" transform="translate(37.625,64.4375)"/>
<path d="M0 0 C2.98938721 1.2060793 4.28223371 2.57290635 6.30078125 5.06640625 C6.90535156 5.79988281 7.50992188 6.53335937 8.1328125 7.2890625 C8.58011719 7.85496094 9.02742188 8.42085937 9.48828125 9.00390625 C8.49828125 10.48890625 8.49828125 10.48890625 7.48828125 12.00390625 C6.82828125 12.00390625 6.16828125 12.00390625 5.48828125 12.00390625 C5.15828125 12.99390625 4.82828125 13.98390625 4.48828125 15.00390625 C3.82828125 15.00390625 3.16828125 15.00390625 2.48828125 15.00390625 C2.48828125 15.99390625 2.48828125 16.98390625 2.48828125 18.00390625 C1.82828125 18.00390625 1.16828125 18.00390625 0.48828125 18.00390625 C-0.17171875 18.99390625 -0.83171875 19.98390625 -1.51171875 21.00390625 C-2.50171875 21.33390625 -3.49171875 21.66390625 -4.51171875 22.00390625 C-6.3590311 18.05065781 -6.8362848 14.79385621 -6.88671875 10.44140625 C-6.91507813 9.32636719 -6.9434375 8.21132813 -6.97265625 7.0625 C-6.51171875 4.00390625 -6.51171875 4.00390625 -4.80078125 1.5390625 C-2.51171875 0.00390625 -2.51171875 0.00390625 0 0 Z " fill="#C8806B" transform="translate(28.51171875,22.99609375)"/>
<path d="M0 0 C1.8125 1.125 1.8125 1.125 3 3 C3.1875 6.6875 3.1875 6.6875 3 10 C2.34 10 1.68 10 1 10 C0.690625 10.639375 0.38125 11.27875 0.0625 11.9375 C-1 14 -1 14 -2 15 C-4.91179131 15.31478825 -6.61350511 15.19324745 -9.25 13.875 C-11.71057713 11.23866736 -12 9.59214327 -12 6 C-8.94092069 0.20959987 -6.47434097 -1.94230229 0 0 Z " fill="#B87866" transform="translate(120,46)"/>
<path d="M0 0 C2.00948183 0.01778303 4.01668765 0.16786374 6.01953125 0.33203125 C5.26953125 2.26953125 5.26953125 2.26953125 4.01953125 4.33203125 C1.95703125 4.95703125 1.95703125 4.95703125 0.01953125 5.33203125 C-0.31046875 5.99203125 -0.64046875 6.65203125 -0.98046875 7.33203125 C-0.05234375 7.54859375 -0.05234375 7.54859375 0.89453125 7.76953125 C3.01953125 8.33203125 3.01953125 8.33203125 5.01953125 9.33203125 C5.10084588 10.76858979 5.15886684 12.20647955 5.20703125 13.64453125 C5.25923828 14.84529297 5.25923828 14.84529297 5.3125 16.0703125 C5.01953125 18.33203125 5.01953125 18.33203125 3.63671875 20.12890625 C2.01953125 21.33203125 2.01953125 21.33203125 -0.04296875 21.26953125 C-1.98046875 20.33203125 -1.98046875 20.33203125 -3.23046875 18.64453125 C-4.15635995 15.78970006 -4.11602575 13.31428518 -3.98046875 10.33203125 C-4.76421875 10.06390625 -5.54796875 9.79578125 -6.35546875 9.51953125 C-8.98046875 8.33203125 -8.98046875 8.33203125 -10.98046875 5.33203125 C-10.32046875 4.34203125 -9.66046875 3.35203125 -8.98046875 2.33203125 C-7.99046875 2.33203125 -7.00046875 2.33203125 -5.98046875 2.33203125 C-5.65046875 3.32203125 -5.32046875 4.31203125 -4.98046875 5.33203125 C-4.65046875 4.50703125 -4.32046875 3.68203125 -3.98046875 2.83203125 C-1.98046875 0.33203125 -1.98046875 0.33203125 0 0 Z " fill="#3C291E" transform="translate(74.98046875,65.66796875)"/>
<path d="M0 0 C2.3125 0.5625 2.3125 0.5625 4.125 2.0625 C5.76926082 5.52410172 5.84790032 8.82860425 5.3125 12.5625 C4.6525 14.2125 3.9925 15.8625 3.3125 17.5625 C-1.3075 15.2525 -5.9275 12.9425 -10.6875 10.5625 C-8.48950726 5.06751816 -6.08305792 1.27319817 0 0 Z " fill="#C07A67" transform="translate(93.6875,11.4375)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.8125 3.375 1.8125 3.375 1 6 C-1.5625 7.3125 -1.5625 7.3125 -4 8 C-3.67 10.97 -3.34 13.94 -3 17 C-2.33613281 16.6390625 -1.67226562 16.278125 -0.98828125 15.90625 C-0.10527344 15.4421875 0.77773437 14.978125 1.6875 14.5 C2.55761719 14.0359375 3.42773438 13.571875 4.32421875 13.09375 C7.11788829 11.95181208 9.01629113 11.78495792 12 12 C12.33 13.65 12.66 15.3 13 17 C12.154375 16.608125 11.30875 16.21625 10.4375 15.8125 C5.97572557 14.75789877 4.05131718 16.0493658 0 18 C-1.32 18 -2.64 18 -4 18 C-4.33 14.7 -4.66 11.4 -5 8 C-5.94875 8.020625 -6.8975 8.04125 -7.875 8.0625 C-11 8 -11 8 -13 7 C-12.69611836 4.06247746 -12.19330344 3.15919107 -9.875 1.25 C-6.3724585 -0.27284413 -3.78415443 -0.28559656 0 0 Z " fill="#352920" transform="translate(83,47)"/>
<path d="M0 0 C8.38356164 8.15068493 8.38356164 8.15068493 10 13 C9.33333333 14.33333333 8.66666667 15.66666667 8 17 C7.61250787 19.32495277 7.27017161 21.65851268 7 24 C6.72027344 23.42378906 6.44054687 22.84757812 6.15234375 22.25390625 C5.04119631 20.08057719 3.84615416 18.01294084 2.5625 15.9375 C2.15128906 15.26589844 1.74007812 14.59429687 1.31640625 13.90234375 C0.05958046 11.95589272 0.05958046 11.95589272 -1.63671875 10.40625 C-3 9 -3 9 -3.375 6.5625 C-2.93956032 3.58699552 -1.97538528 2.22230844 0 0 Z " fill="#3F3934" transform="translate(100,34)"/>
<path d="M0 0 C-1 3 -1 3 -3.94921875 4.75390625 C-5.19025738 5.36710969 -6.43664129 5.96958532 -7.6875 6.5625 C-8.60692383 7.01786133 -8.60692383 7.01786133 -9.54492188 7.48242188 C-15.13962115 10.2056106 -20.34974279 12.14841296 -26.5625 12.6875 C-27.47128906 12.77386719 -28.38007812 12.86023438 -29.31640625 12.94921875 C-32.03819889 13.00072283 -34.36040742 12.63483872 -37 12 C-33.34378845 9.80627307 -29.51417623 9.28997449 -25.375 8.625 C-17.30061068 7.22028123 -7.25408891 0 0 0 Z " fill="#14110F" transform="translate(94,110)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C2.04632602 9.8432152 -0.69449735 16.86906494 -6.3359375 24.90234375 C-7.5625 26.3125 -7.5625 26.3125 -10 28 C-12.8125 27.8125 -12.8125 27.8125 -15 27 C-14.278125 26.46375 -13.55625 25.9275 -12.8125 25.375 C-8.4386401 21.68151831 -5.38664882 18.84401747 -4.1875 13.125 C-4.125625 12.09375 -4.06375 11.0625 -4 10 C-3.34 10 -2.68 10 -2 10 C-1.34 6.7 -0.68 3.4 0 0 Z " fill="#2A2824" transform="translate(107,61)"/>
<path d="M0 0 C2.48347571 2.91538453 3.81117687 5.12912578 4 9 C3 11.75 3 11.75 1 14 C-2.6875 14.8125 -2.6875 14.8125 -6 15 C-5.67 12.03 -5.34 9.06 -5 6 C-3.68 5.67 -2.36 5.34 -1 5 C-1 5.99 -1 6.98 -1 8 C-0.34 8.33 0.32 8.66 1 9 C0.84402344 8.43410156 0.68804687 7.86820312 0.52734375 7.28515625 C0.23537109 6.18494141 0.23537109 6.18494141 -0.0625 5.0625 C-0.35833984 3.96615234 -0.35833984 3.96615234 -0.66015625 2.84765625 C-0.77230469 2.23792969 -0.88445313 1.62820312 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#9B6958" transform="translate(42,66)"/>
<path d="M0 0 C2.4375 1.5625 2.4375 1.5625 4 4 C4.25 7.75 4.25 7.75 4 11 C3.01 10.34 2.02 9.68 1 9 C1 8.01 1 7.02 1 6 C-0.77021322 5.663389 -2.54119674 5.33082707 -4.3125 5 C-5.29863281 4.814375 -6.28476563 4.62875 -7.30078125 4.4375 C-10.03781805 3.92000204 -10.03781805 3.92000204 -13 4 C-8.55003893 0.52685966 -5.67061228 -0.84009071 0 0 Z " fill="#595249" transform="translate(98,6)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C-0.32 1.67 -1.64 1.34 -3 1 C-2.34 2.32 -1.68 3.64 -1 5 C-1.66 5.66 -2.32 6.32 -3 7 C-3.66 6.67 -4.32 6.34 -5 6 C-4.67 4.68 -4.34 3.36 -4 2 C-4.66 2 -5.32 2 -6 2 C-6.66 4.97 -7.32 7.94 -8 11 C-8.99 11 -9.98 11 -11 11 C-11.75 8.875 -11.75 8.875 -12 6 C-8.87850064 0.20292976 -6.52316218 -1.88828379 0 0 Z " fill="#BB8C78" transform="translate(120,46)"/>
<path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C3 2.66 3 3.32 3 4 C3.56976563 4.26941406 4.13953125 4.53882812 4.7265625 4.81640625 C7.07899759 6.04112761 9.19233457 7.43260962 11.375 8.9375 C14.82477976 11.26966516 18.22260697 13.25658783 22 15 C22 15.33 22 15.66 22 16 C14.78135026 16.51940358 10.60381574 13.1947638 5 9 C2.52018323 6.78526709 0.21073182 4.48235757 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#1B1713" transform="translate(18,102)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2.01 4.485 2.01 4.485 1 6 C0.34 6 -0.32 6 -1 6 C-1.33 6.99 -1.66 7.98 -2 9 C-2.66 9 -3.32 9 -4 9 C-4 9.99 -4 10.98 -4 12 C-4.66 12 -5.32 12 -6 12 C-6.99 13.485 -6.99 13.485 -8 15 C-8.99 15.33 -9.98 15.66 -11 16 C-11.6953125 14.21484375 -11.6953125 14.21484375 -12 12 C-10.7421875 10.25390625 -10.7421875 10.25390625 -8.875 8.5625 C-8.23175781 7.964375 -7.58851562 7.36625 -6.92578125 6.75 C-5.97251953 5.88375 -5.97251953 5.88375 -5 5 C-4.01477056 4.02693388 -3.03463774 3.04864549 -2.0625 2.0625 C-1.381875 1.381875 -0.70125 0.70125 0 0 Z " fill="#A1664F" transform="translate(35,29)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C0.85946128 2.62538284 0.71281053 5.25017427 0.5625 7.875 C0.52318359 8.62136719 0.48386719 9.36773437 0.44335938 10.13671875 C0.11328125 15.7734375 0.11328125 15.7734375 -1 18 C-1.99 18 -2.98 18 -4 18 C-5.2631363 14.41404928 -4.72375723 12.04721119 -3.6875 8.4375 C-3.42324219 7.48746094 -3.15898438 6.53742187 -2.88671875 5.55859375 C-2 3 -2 3 0 0 Z " fill="#3B342B" transform="translate(102,13)"/>
<path d="M0 0 C0.598125 0.20625 1.19625 0.4125 1.8125 0.625 C2.1425 2.275 2.4725 3.925 2.8125 5.625 C-2.8125 8.625 -2.8125 8.625 -6.1875 8.625 C-5.875 5.25 -5.875 5.25 -5.1875 1.625 C-2.1875 -0.375 -2.1875 -0.375 0 0 Z " fill="#1C1915" transform="translate(88.1875,65.375)"/>
<path d="M0 0 C4.84419638 2.07909954 9.55639631 4.13315891 14 7 C13.34 8.32 12.68 9.64 12 11 C11.31292969 10.57847656 10.62585938 10.15695313 9.91796875 9.72265625 C9.01691406 9.17480469 8.11585937 8.62695312 7.1875 8.0625 C6.29417969 7.51722656 5.40085937 6.97195312 4.48046875 6.41015625 C1.99296438 4.88990422 1.99296438 4.88990422 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#9F654F" transform="translate(84,18)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5 3.63 5 7.26 5 11 C3.68 11 2.36 11 1 11 C-0.20272819 8.59454362 -0.10071472 7.05003047 -0.0625 4.375 C-0.05347656 3.55773437 -0.04445313 2.74046875 -0.03515625 1.8984375 C-0.02355469 1.27195312 -0.01195313 0.64546875 0 0 Z " fill="#C34627" transform="translate(73,74)"/>
<path d="M0 0 C0 1.32 0 2.64 0 4 C-2 6 -2 6 -5.625 6.125 C-6.73875 6.08375 -7.8525 6.0425 -9 6 C-9 4.68 -9 3.36 -9 2 C-5.86501708 0.14223235 -3.62528568 -0.20140476 0 0 Z " fill="#DD7342" transform="translate(82,48)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-0.66 3 -1.32 3 -2 3 C-2 4.98 -2 6.96 -2 9 C-3.32 9.33 -4.64 9.66 -6 10 C-5.67 8.68 -5.34 7.36 -5 6 C-5.99 6.495 -5.99 6.495 -7 7 C-7.33 7.99 -7.66 8.98 -8 10 C-8.33 10 -8.66 10 -9 10 C-9.3125 7.25 -9.3125 7.25 -9 4 C-5.82190563 0.64534483 -4.70465908 0 0 0 Z " fill="#8F6653" transform="translate(38,67)"/>
<path d="M0 0 C6.27 0.66 12.54 1.32 19 2 C19.33 2.99 19.66 3.98 20 5 C7.17631533 5.56853774 7.17631533 5.56853774 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#1C1915" transform="translate(42,118)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-1.94802302 8.37985524 -6.59483302 12.80460288 -11 17 C-11.99 16.67 -12.98 16.34 -14 16 C-13.01 15.67 -12.02 15.34 -11 15 C-10.29613264 13.68592505 -9.63474075 12.34882408 -9 11 C-7.8717631 9.61365229 -6.70260397 8.25985478 -5.5 6.9375 C-3.44184439 4.66567993 -1.70861829 2.56292743 0 0 Z " fill="#100B08" transform="translate(109,92)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C0.32423324 6.33067441 -4.64315905 9.57607526 -10 12.8125 C-13.34466911 14.13643152 -16.43005133 14.64300513 -20 15 C-20 14.34 -20 13.68 -20 13 C-19.35933594 12.84144531 -18.71867187 12.68289062 -18.05859375 12.51953125 C-11.03033644 10.62368241 -5.24610197 8.48533064 -1.1875 2.1875 C-0.795625 1.465625 -0.40375 0.74375 0 0 Z " fill="#161310" transform="translate(101,76)"/>
<path d="M0 0 C1.125 1.625 1.125 1.625 2 4 C1.125 7.25 1.125 7.25 0 10 C-2.16874252 9.49396008 -3.99967627 9.00016187 -6 8 C-6 6.02 -6 4.04 -6 2 C-5.01 2 -4.02 2 -3 2 C-2.67 2.99 -2.34 3.98 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#BB7865" transform="translate(36,71)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-3.52155964 4.34770643 -5.50771843 4.37669614 -9.6875 4.625 C-10.86699219 4.69976563 -12.04648437 4.77453125 -13.26171875 4.8515625 C-14.61716797 4.92503906 -14.61716797 4.92503906 -16 5 C-11.69812336 0.25623875 -6.18827023 -0.30186684 0 0 Z " fill="#272420" transform="translate(56,17)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.625 4.0625 2.625 4.0625 3 7 C2.484375 6.154375 1.96875 5.30875 1.4375 4.4375 C-0.82388966 1.62324382 -0.82388966 1.62324382 -4.375 1.875 C-8.72937972 3.22635922 -10.72795067 4.88756283 -14 8 C-13.02503465 4.49012473 -12.04799249 3.04144806 -9.25 0.625 C-5.49027596 -1.25486202 -3.96525881 -1.17155374 0 0 Z " fill="#211A14" transform="translate(97,11)"/>
<path d="M0 0 C1.52299523 2.93720508 2.80100302 5.9168649 4 9 C3.01 9 2.02 9 1 9 C0.67 8.01 0.34 7.02 0 6 C-0.99 7.98 -1.98 9.96 -3 12 C-4.1875 10.375 -4.1875 10.375 -5 8 C-3.625 4.75 -3.625 4.75 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#1A1714" transform="translate(16,39)"/>
<path d="M0 0 C0.33 1.65 0.66 3.3 1 5 C0.154375 4.608125 -0.69125 4.21625 -1.5625 3.8125 C-6.02427443 2.75789877 -7.94868282 4.0493658 -12 6 C-13.32 6 -14.64 6 -16 6 C-16 4.35 -16 2.7 -16 1 C-15.67 2.32 -15.34 3.64 -15 5 C-14.33613281 4.6390625 -13.67226562 4.278125 -12.98828125 3.90625 C-11.66376953 3.21015625 -11.66376953 3.21015625 -10.3125 2.5 C-9.44238281 2.0359375 -8.57226562 1.571875 -7.67578125 1.09375 C-4.88211171 -0.04818792 -2.98370887 -0.21504208 0 0 Z " fill="#25201C" transform="translate(95,59)"/>
<path d="M0 0 C2.48347571 2.91538453 3.81117687 5.12912578 4 9 C2.5625 11.8125 2.5625 11.8125 1 14 C-1 11 -1 11 -1 9 C-0.34 9 0.32 9 1 9 C0.84402344 8.43410156 0.68804687 7.86820312 0.52734375 7.28515625 C0.33269531 6.55167969 0.13804688 5.81820312 -0.0625 5.0625 C-0.35833984 3.96615234 -0.35833984 3.96615234 -0.66015625 2.84765625 C-0.77230469 2.23792969 -0.88445313 1.62820312 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#936352" transform="translate(42,66)"/>
<path d="M0 0 C-1.1446875 0.86625 -1.1446875 0.86625 -2.3125 1.75 C-5.01265709 3.82336958 -5.01265709 3.82336958 -6.625 6.25 C-7.305625 7.11625 -7.305625 7.11625 -8 8 C-8.99 8 -9.98 8 -11 8 C-10.43416161 4.71813734 -9.58727596 3.10815078 -7 1 C-3.52173913 -1.17391304 -3.52173913 -1.17391304 0 0 Z " fill="#3F3A34" transform="translate(91,10)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2.01 4.485 2.01 4.485 1 6 C0.34 6 -0.32 6 -1 6 C-1.33 6.99 -1.66 7.98 -2 9 C-3.98 9 -5.96 9 -8 9 C-6.8553125 7.88625 -6.8553125 7.88625 -5.6875 6.75 C-3.5606298 4.5736677 -1.7440044 2.47832204 0 0 Z " fill="#AC6B54" transform="translate(35,29)"/>
<path d="M0 0 C-2.07808677 2.07808677 -3.15929047 2.5305555 -5.875 3.4375 C-9.04690756 4.56375703 -11.36661987 5.87303912 -14 8 C-14.66 8 -15.32 8 -16 8 C-15 5 -15 5 -12.890625 3.61328125 C-12.01921875 3.18402344 -11.1478125 2.75476562 -10.25 2.3125 C-9.38890625 1.87550781 -8.5278125 1.43851563 -7.640625 0.98828125 C-4.88971748 -0.04127438 -2.90929095 -0.19360389 0 0 Z " fill="#302C27" transform="translate(78,37)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 4.95 1 9.9 1 15 C0.01 15.495 0.01 15.495 -1 16 C-1.22384382 14.27277272 -1.42839969 12.54303993 -1.625 10.8125 C-1.74101563 9.84957031 -1.85703125 8.88664062 -1.9765625 7.89453125 C-2.00194942 4.75924677 -1.34359283 2.80513465 0 0 Z " fill="#0A0703" transform="translate(6,65)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.34 3.3 0.68 6.6 0 10 C0.66 10.33 1.32 10.66 2 11 C2 11.66 2 12.32 2 13 C-1.26954202 12.43628586 -2.82575883 11.50037734 -5 9 C-4.01 9 -3.02 9 -2 9 C-1.34 6.03 -0.68 3.06 0 0 Z " fill="#9F6A57" transform="translate(114,48)"/>
<path d="M0 0 C0.33 1.98 0.66 3.96 1 6 C-0.32 6.33 -1.64 6.66 -3 7 C-3.33 5.02 -3.66 3.04 -4 1 C-2 0 -2 0 0 0 Z " fill="#0E0C0A" transform="translate(44,50)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2 2.32 2 3 2 C2.67 3.98 2.34 5.96 2 8 C1.01 8 0.02 8 -1 8 C-1.625 5.6875 -1.625 5.6875 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#B8826C" transform="translate(110,49)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C0.71480435 2.86697492 -0.57129254 4.97607712 -3 7 C-3.66 7 -4.32 7 -5 7 C-5.33 7.99 -5.66 8.98 -6 10 C-6.33 9.34 -6.66 8.68 -7 8 C-5.88200014 6.66079162 -4.75538103 5.32877444 -3.625 4 C-2.68527344 2.88625 -2.68527344 2.88625 -1.7265625 1.75 C-1.15679687 1.1725 -0.58703125 0.595 0 0 Z " fill="#9F9483" transform="translate(65,43)"/>
<path d="M0 0 C0.79921875 0.01804687 1.5984375 0.03609375 2.421875 0.0546875 C3.02515625 0.07789062 3.6284375 0.10109375 4.25 0.125 C1.6275285 2.7474715 -0.10023127 2.76717954 -3.75 3.125 C-6.625 2.6875 -6.625 2.6875 -8.75 2.125 C-5.68753253 0.34090198 -3.52920727 -0.10380021 0 0 Z " fill="#0C0A08" transform="translate(65.75,119.875)"/>
<path d="M0 0 C0.33 1.65 0.66 3.3 1 5 C0.01 5.495 0.01 5.495 -1 6 C-1.66 4.68 -2.32 3.36 -3 2 C-4.98 2.99 -4.98 2.99 -7 4 C-6.625 2.0625 -6.625 2.0625 -6 0 C-3.50907189 -1.24546405 -2.58919267 -0.7767578 0 0 Z " fill="#25221D" transform="translate(90,66)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C0.8125 6.625 0.8125 6.625 -1 10 C-1.99 10.33 -2.98 10.66 -4 11 C-3.52269162 9.5410574 -3.04308958 8.08286504 -2.5625 6.625 C-2.29566406 5.81289063 -2.02882813 5.00078125 -1.75390625 4.1640625 C-1 2 -1 2 0 0 Z " fill="#191613" transform="translate(17,16)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.375 4.5 -0.375 4.5 -2 6 C-2.66 6 -3.32 6 -4 6 C-4.33 4.68 -4.66 3.36 -5 2 C-2 0 -2 0 0 0 Z " fill="#161310" transform="translate(94,64)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.33 2.64 3.66 5.28 4 8 C2.68 7.34 1.36 6.68 0 6 C0 4.02 0 2.04 0 0 Z " fill="#AB705B" transform="translate(30,73)"/>
<path d="M0 0 C2.64 0 5.28 0 8 0 C7.67 0.99 7.34 1.98 7 3 C5.02 3 3.04 3 1 3 C0.67 2.01 0.34 1.02 0 0 Z " fill="#221E1A" transform="translate(73,66)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.65 2.66 3.3 3 5 C1.68 5 0.36 5 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#0B0908" transform="translate(99,36)"/>
<path d="M0 0 C3.37503669 1.1858237 5.64722731 2.27573689 8 5 C2.25 4.125 2.25 4.125 0 3 C0 2.01 0 1.02 0 0 Z " fill="#12110F" transform="translate(24,109)"/>
<path d="M0 0 C2.50298434 2.93828597 3.46930939 5.17902761 4 9 C3.67 8.34 3.34 7.68 3 7 C2.01 6.67 1.02 6.34 0 6 C-0.38218767 4.34385343 -0.71395102 2.67542976 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#835C49" transform="translate(42,66)"/>
<path d="M0 0 C2.875 0.3125 2.875 0.3125 6 1 C6.66 1.99 7.32 2.98 8 4 C3.545 3.01 3.545 3.01 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#201A14" transform="translate(26,21)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.01 1.66 0.02 2.32 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#F56D2B" transform="translate(106,103)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.01 1 0.02 1 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#EA632A" transform="translate(90,116)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F46C2C" transform="translate(119,90)"/>
<path d="M0 0 C0.99 0.495 0.99 0.495 2 1 C1.01 1.495 1.01 1.495 0 2 C0 1.34 0 0.68 0 0 Z " fill="#CF6632" transform="translate(121,83)"/>
<path d="" fill="#F56D2C" transform="translate(0,0)"/>
<path d="" fill="#F46C2C" transform="translate(0,0)"/>
<path d="" fill="#F56D2C" transform="translate(0,0)"/>
</svg>
</file>

<file path="examples/starter/src/index.css">
html,
body,
#root {
  height: 100%;
}

#root {
display: flex;
place-items: center;
justify-content: center;

color: #fff;
background-color: #131311;
}
</file>

<file path="examples/starter/src/index.tsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { create } from 'zustand'

import mascot from './assets/zustand-mascot.svg'

import './index.css'

type Store = {
count: number
inc: () => void
}

const useStore = create<Store>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

const Counter = () => {
const count = useStore((s) => s.count)
const inc = useStore((s) => s.inc)

return (
<>
<span className="text-3xl">{count}</span>
<button
        className="bg-[#252b37] font-bold py-2 px-4 rounded"
        onClick={inc}
      >
+1
</button>
</>
)
}

function App() {
return (
<div className="grid place-items-center gap-6">
<a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noreferrer">
<img
src={mascot}
alt="Zustand mascot"
className="w-36"
style={{
            filter: 'drop-shadow(0 0 2em #582d3e)',
          }}
/>
</a>

      <h1 className="text-5xl font-bold">Zustand Starter</h1>

      <Counter />
    </div>

)
}

createRoot(document.getElementById('root')!).render(
<StrictMode>
<App />
</StrictMode>,
)
</file>

<file path="examples/starter/src/vite-env.d.ts">
/// <reference types="vite/client" />
</file>

<file path="examples/starter/index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="zustand examples" />
    <title>Zustand Examples | Starter</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
</file>

<file path="examples/starter/package.json">
{
  "name": "starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "zustand": "^5.0.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "typescript": "^5.0.0",
    "vite": "^5.3.4"
  }
}
</file>

<file path="examples/starter/README.md">
# Starter [![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?style=flat-square&logo=stackblitz)](https://stackblitz.com/github/pmndrs/zustand/tree/main/examples/starter)

## Set up locally

```bash
git clone https://github.com/pmndrs/zustand

# install project dependencies & build the library
cd zustand && pnpm install

# move to the examples folder & install dependencies
cd examples/starter && pnpm install

# start the dev server
pnpm dev
```

## Set up on `StackBlitz`

Link: https://stackblitz.com/github/pmndrs/zustand/tree/main/examples/starter
</file>

<file path="examples/starter/tsconfig.json">
{
  "compilerOptions": {
    "target": "es2019",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "react-jsx",
    "allowJs": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["vite.config.ts", "./src/**/*"],
  "exclude": ["node_modules"]
}
</file>

<file path="examples/starter/vite.config.ts">
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
})
</file>

<file path="src/middleware/combine.ts">
import type { StateCreator, StoreMutatorIdentifier } from '../vanilla.ts'

type Write<T, U> = Omit<T, keyof U> & U

export function combine<
T extends object,
U extends object,
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],

> (
> initialState: T,
> create: StateCreator<T, Mps, Mcs, U>,
> ): StateCreator<Write<T, U>, Mps, Mcs> {
> return (...args) => Object.assign({}, initialState, (create as any)(...args))
> }
> </file>

<file path="src/middleware/devtools.ts">
import type {} from '@redux-devtools/extension'
import type {
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from '../vanilla.ts'

type Config = Parameters<
(Window extends { **REDUX_DEVTOOLS_EXTENSION**?: infer T }
? T
: { connect: (param: any) => any })['connect']

> [0]

declare module '../vanilla' {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StoreMutators<S, A> {
'zustand/devtools': WithDevtools<S>
}
}

// FIXME https://github.com/reduxjs/redux-devtools/issues/1097
type Message = {
type: string
payload?: any
state?: any
}

type Cast<T, U> = T extends U ? T : U
type Write<T, U> = Omit<T, keyof U> & U
type TakeTwo<T> = T extends { length: 0 }
? [undefined, undefined]
: T extends { length: 1 }
? [...args0: Cast<T, unknown[]>, arg1: undefined]
: T extends { length: 0 | 1 }
? [...args0: Cast<T, unknown[]>, arg1: undefined]
: T extends { length: 2 }
? T
: T extends { length: 1 | 2 }
? T
: T extends { length: 0 | 1 | 2 }
? T
: T extends [infer A0, infer A1, ...unknown[]]
? [A0, A1]
: T extends [infer A0, (infer A1)?, ...unknown[]]
? [A0, A1?]
: T extends [(infer A0)?, (infer A1)?, ...unknown[]]
? [A0?, A1?]
: never

type WithDevtools<S> = Write<S, StoreDevtools<S>>

type Action =
| string
| {
type: string
[x: string | number | symbol]: unknown
}
type StoreDevtools<S> = S extends {
setState: {
// capture both overloads of setState
(...args: infer Sa1): infer Sr1
(...args: infer Sa2): infer Sr2
}
}
? {
setState(...args: [...args: TakeTwo<Sa1>, action?: Action]): Sr1
setState(...args: [...args: TakeTwo<Sa2>, action?: Action]): Sr2
}
: never

export interface DevtoolsOptions extends Config {
name?: string
enabled?: boolean
anonymousActionType?: string
store?: string
}

type Devtools = <
T,
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],
U = T,

> (
> initializer: StateCreator<T, [...Mps, ['zustand/devtools', never]], Mcs, U>,
> devtoolsOptions?: DevtoolsOptions,
> ) => StateCreator<T, Mps, [['zustand/devtools', never], ...Mcs]>

declare module '../vanilla' {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StoreMutators<S, A> {
'zustand/devtools': WithDevtools<S>
}
}

type DevtoolsImpl = <T>(
storeInitializer: StateCreator<T, [], []>,
devtoolsOptions?: DevtoolsOptions,
) => StateCreator<T, [], []>

export type NamedSet<T> = WithDevtools<StoreApi<T>>['setState']

type Connection = ReturnType<
NonNullable<Window['__REDUX_DEVTOOLS_EXTENSION__']>['connect']

> type ConnectionName = string | undefined
> type StoreName = string
> type StoreInformation = StoreApi<unknown>
> type ConnectionInformation = {
> connection: Connection
> stores: Record<StoreName, StoreInformation>
> }
> const trackedConnections: Map<ConnectionName, ConnectionInformation> = new Map()

const getTrackedConnectionState = (
name: string | undefined,
): Record<string, any> => {
const api = trackedConnections.get(name)
if (!api) return {}
return Object.fromEntries(
Object.entries(api.stores).map(([key, api]) => [key, api.getState()]),
)
}

const extractConnectionInformation = (
store: string | undefined,
extensionConnector: NonNullable<
(typeof window)['__REDUX_DEVTOOLS_EXTENSION__']

> ,
> options: Omit<DevtoolsOptions, 'enabled' | 'anonymousActionType' | 'store'>,
> ) => {
> if (store === undefined) {

    return {
      type: 'untracked' as const,
      connection: extensionConnector.connect(options),
    }

}
const existingConnection = trackedConnections.get(options.name)
if (existingConnection) {
return { type: 'tracked' as const, store, ...existingConnection }
}
const newConnection: ConnectionInformation = {
connection: extensionConnector.connect(options),
stores: {},
}
trackedConnections.set(options.name, newConnection)
return { type: 'tracked' as const, store, ...newConnection }
}

const devtoolsImpl: DevtoolsImpl =
(fn, devtoolsOptions = {}) =>
(set, get, api) => {
const { enabled, anonymousActionType, store, ...options } = devtoolsOptions

    type S = ReturnType<typeof fn> & {
      [store: string]: ReturnType<typeof fn>
    }
    type PartialState = Partial<S> | ((s: S) => Partial<S>)

    let extensionConnector:
      | (typeof window)['__REDUX_DEVTOOLS_EXTENSION__']
      | false
    try {
      extensionConnector =
        (enabled ?? import.meta.env?.MODE !== 'production') &&
        window.__REDUX_DEVTOOLS_EXTENSION__
    } catch {
      // ignored
    }

    if (!extensionConnector) {
      return fn(set, get, api)
    }

    const { connection, ...connectionInformation } =
      extractConnectionInformation(store, extensionConnector, options)

    let isRecording = true
    ;(api.setState as any) = ((state, replace, nameOrAction: Action) => {
      const r = set(state, replace as any)
      if (!isRecording) return r
      const action: { type: string } =
        nameOrAction === undefined
          ? { type: anonymousActionType || 'anonymous' }
          : typeof nameOrAction === 'string'
            ? { type: nameOrAction }
            : nameOrAction
      if (store === undefined) {
        connection?.send(action, get())
        return r
      }
      connection?.send(
        {
          ...action,
          type: `${store}/${action.type}`,
        },
        {
          ...getTrackedConnectionState(options.name),
          [store]: api.getState(),
        },
      )
      return r
    }) as NamedSet<S>

    const setStateFromDevtools: StoreApi<S>['setState'] = (...a) => {
      const originalIsRecording = isRecording
      isRecording = false
      set(...(a as Parameters<typeof set>))
      isRecording = originalIsRecording
    }

    const initialState = fn(api.setState, get, api)
    if (connectionInformation.type === 'untracked') {
      connection?.init(initialState)
    } else {
      connectionInformation.stores[connectionInformation.store] = api
      connection?.init(
        Object.fromEntries(
          Object.entries(connectionInformation.stores).map(([key, store]) => [
            key,
            key === connectionInformation.store
              ? initialState
              : store.getState(),
          ]),
        ),
      )
    }

    if (
      (api as any).dispatchFromDevtools &&
      typeof (api as any).dispatch === 'function'
    ) {
      let didWarnAboutReservedActionType = false
      const originalDispatch = (api as any).dispatch
      ;(api as any).dispatch = (...args: any[]) => {
        if (
          import.meta.env?.MODE !== 'production' &&
          args[0].type === '__setState' &&
          !didWarnAboutReservedActionType
        ) {
          console.warn(
            '[zustand devtools middleware] "__setState" action type is reserved ' +
              'to set state from the devtools. Avoid using it.',
          )
          didWarnAboutReservedActionType = true
        }
        ;(originalDispatch as any)(...args)
      }
    }

    ;(
      connection as unknown as {
        // FIXME https://github.com/reduxjs/redux-devtools/issues/1097
        subscribe: (
          listener: (message: Message) => void,
        ) => (() => void) | undefined
      }
    ).subscribe((message: any) => {
      switch (message.type) {
        case 'ACTION':
          if (typeof message.payload !== 'string') {
            console.error(
              '[zustand devtools middleware] Unsupported action format',
            )
            return
          }
          return parseJsonThen<{ type: unknown; state?: PartialState }>(
            message.payload,
            (action) => {
              if (action.type === '__setState') {
                if (store === undefined) {
                  setStateFromDevtools(action.state as PartialState)
                  return
                }
                if (Object.keys(action.state as S).length !== 1) {
                  console.error(
                    `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `,
                  )
                }
                const stateFromDevtools = (action.state as S)[store]
                if (
                  stateFromDevtools === undefined ||
                  stateFromDevtools === null
                ) {
                  return
                }
                if (
                  JSON.stringify(api.getState()) !==
                  JSON.stringify(stateFromDevtools)
                ) {
                  setStateFromDevtools(stateFromDevtools)
                }
                return
              }

              if (!(api as any).dispatchFromDevtools) return
              if (typeof (api as any).dispatch !== 'function') return
              ;(api as any).dispatch(action)
            },
          )

        case 'DISPATCH':
          switch (message.payload.type) {
            case 'RESET':
              setStateFromDevtools(initialState as S)
              if (store === undefined) {
                return connection?.init(api.getState())
              }
              return connection?.init(getTrackedConnectionState(options.name))

            case 'COMMIT':
              if (store === undefined) {
                connection?.init(api.getState())
                return
              }
              return connection?.init(getTrackedConnectionState(options.name))

            case 'ROLLBACK':
              return parseJsonThen<S>(message.state, (state) => {
                if (store === undefined) {
                  setStateFromDevtools(state)
                  connection?.init(api.getState())
                  return
                }
                setStateFromDevtools(state[store] as S)
                connection?.init(getTrackedConnectionState(options.name))
              })

            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
              return parseJsonThen<S>(message.state, (state) => {
                if (store === undefined) {
                  setStateFromDevtools(state)
                  return
                }
                if (
                  JSON.stringify(api.getState()) !==
                  JSON.stringify(state[store])
                ) {
                  setStateFromDevtools(state[store] as S)
                }
              })

            case 'IMPORT_STATE': {
              const { nextLiftedState } = message.payload
              const lastComputedState =
                nextLiftedState.computedStates.slice(-1)[0]?.state
              if (!lastComputedState) return
              if (store === undefined) {
                setStateFromDevtools(lastComputedState)
              } else {
                setStateFromDevtools(lastComputedState[store])
              }
              connection?.send(
                null as any, // FIXME no-any
                nextLiftedState,
              )
              return
            }

            case 'PAUSE_RECORDING':
              return (isRecording = !isRecording)
          }
          return
      }
    })

    return initialState

}
export const devtools = devtoolsImpl as unknown as Devtools

const parseJsonThen = <T>(stringified: string, fn: (parsed: T) => void) => {
let parsed: T | undefined
try {
parsed = JSON.parse(stringified)
} catch (e) {
console.error(
'[zustand devtools middleware] Could not parse the received json',
e,
)
}
if (parsed !== undefined) fn(parsed as T)
}
</file>

<file path="src/middleware/immer.ts">
import { produce } from 'immer'
import type { Draft } from 'immer'
import type { StateCreator, StoreMutatorIdentifier } from '../vanilla.ts'

type Immer = <
T,
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],

> (
> initializer: StateCreator<T, [...Mps, ['zustand/immer', never]], Mcs>,
> ) => StateCreator<T, Mps, [['zustand/immer', never], ...Mcs]>

declare module '../vanilla' {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StoreMutators<S, A> {
['zustand/immer']: WithImmer<S>
}
}

type Write<T, U> = Omit<T, keyof U> & U
type SkipTwo<T> = T extends { length: 0 }
? []
: T extends { length: 1 }
? []
: T extends { length: 0 | 1 }
? []
: T extends [unknown, unknown, ...infer A]
? A
: T extends [unknown, unknown?, ...infer A]
? A
: T extends [unknown?, unknown?, ...infer A]
? A
: never

type SetStateType<T extends unknown[]> = Exclude<T[0], (...args: any[]) => any>

type WithImmer<S> = Write<S, StoreImmer<S>>

type StoreImmer<S> = S extends {
setState: infer SetState
}
? SetState extends {
(...args: infer A1): infer Sr1
(...args: infer A2): infer Sr2
}
? {
// Ideally, we would want to infer the `nextStateOrUpdater` `T` type from the
// `A1` type, but this is infeasible since it is an intersection with
// a partial type.
setState(
nextStateOrUpdater:
| SetStateType<A2>
| Partial<SetStateType<A2>>
| ((state: Draft<SetStateType<A2>>) => void),
shouldReplace?: false,
...args: SkipTwo<A1>
): Sr1
setState(
nextStateOrUpdater:
| SetStateType<A2>
| ((state: Draft<SetStateType<A2>>) => void),
shouldReplace: true,
...args: SkipTwo<A2>
): Sr2
}
: never
: never

type ImmerImpl = <T>(
storeInitializer: StateCreator<T, [], []>,
) => StateCreator<T, [], []>

const immerImpl: ImmerImpl = (initializer) => (set, get, store) => {
type T = ReturnType<typeof initializer>

store.setState = (updater, replace, ...args) => {
const nextState = (
typeof updater === 'function' ? produce(updater as any) : updater
) as ((s: T) => T) | T | Partial<T>

    return set(nextState, replace as any, ...args)

}

return initializer(store.setState, get, store)
}

export const immer = immerImpl as unknown as Immer
</file>

<file path="src/middleware/persist.ts">
import type {
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from '../vanilla.ts'

export interface StateStorage {
getItem: (name: string) => string | null | Promise<string | null>
setItem: (name: string, value: string) => unknown | Promise<unknown>
removeItem: (name: string) => unknown | Promise<unknown>
}

export type StorageValue<S> = {
state: S
version?: number
}

export interface PersistStorage<S> {
getItem: (
name: string,
) => StorageValue<S> | null | Promise<StorageValue<S> | null>
setItem: (name: string, value: StorageValue<S>) => unknown | Promise<unknown>
removeItem: (name: string) => unknown | Promise<unknown>
}

type JsonStorageOptions = {
reviver?: (key: string, value: unknown) => unknown
replacer?: (key: string, value: unknown) => unknown
}

export function createJSONStorage<S>(
getStorage: () => StateStorage,
options?: JsonStorageOptions,
): PersistStorage<S> | undefined {
let storage: StateStorage | undefined
try {
storage = getStorage()
} catch {
// prevent error if the storage is not defined (e.g. when server side rendering a page)
return
}
const persistStorage: PersistStorage<S> = {
getItem: (name) => {
const parse = (str: string | null) => {
if (str === null) {
return null
}
return JSON.parse(str, options?.reviver) as StorageValue<S>
}
const str = (storage as StateStorage).getItem(name) ?? null
if (str instanceof Promise) {
return str.then(parse)
}
return parse(str)
},
setItem: (name, newValue) =>
(storage as StateStorage).setItem(
name,
JSON.stringify(newValue, options?.replacer),
),
removeItem: (name) => (storage as StateStorage).removeItem(name),
}
return persistStorage
}

export interface PersistOptions<S, PersistedState = S> {
/** Name of the storage (must be unique) \*/
name: string
/**

- Use a custom persist storage.
-
- Combining `createJSONStorage` helps creating a persist storage
- with JSON.parse and JSON.stringify.
-
- @default createJSONStorage(() => localStorage)
  \*/
  storage?: PersistStorage<PersistedState> | undefined
  /\*\*
- Filter the persisted value.
-
- @params state The state's value
  \*/
  partialize?: (state: S) => PersistedState
  /\*\*
- A function returning another (optional) function.
- The main function will be called before the state rehydration.
- The returned function will be called after the state rehydration or when an error occurred.
  \*/
  onRehydrateStorage?: (
  state: S,
  ) => ((state?: S, error?: unknown) => void) | void
  /\*\*
- If the stored state's version mismatch the one specified here, the storage will not be used.
- This is useful when adding a breaking change to your store.
  \*/
  version?: number
  /\*\*
- A function to perform persisted state migration.
- This function will be called when persisted state versions mismatch with the one specified here.
  \*/
  migrate?: (
  persistedState: unknown,
  version: number,
  ) => PersistedState | Promise<PersistedState>
  /\*\*
- A function to perform custom hydration merges when combining the stored state with the current one.
- By default, this function does a shallow merge.
  \*/
  merge?: (persistedState: unknown, currentState: S) => S

/\*\*

- An optional boolean that will prevent the persist middleware from triggering hydration on initialization,
- This allows you to call `rehydrate()` at a specific point in your apps rendering life-cycle.
-
- This is useful in SSR application.
-
- @default false
  \*/
  skipHydration?: boolean
  }

type PersistListener<S> = (state: S) => void

type StorePersist<S, Ps> = {
persist: {
setOptions: (options: Partial<PersistOptions<S, Ps>>) => void
clearStorage: () => void
rehydrate: () => Promise<void> | void
hasHydrated: () => boolean
onHydrate: (fn: PersistListener<S>) => () => void
onFinishHydration: (fn: PersistListener<S>) => () => void
getOptions: () => Partial<PersistOptions<S, Ps>>
}
}

type Thenable<Value> = {
then<V>(
onFulfilled: (value: Value) => V | Promise<V> | Thenable<V>,
): Thenable<V>
catch<V>(
onRejected: (reason: Error) => V | Promise<V> | Thenable<V>,
): Thenable<V>
}

const toThenable =
<Result, Input>(
fn: (input: Input) => Result | Promise<Result> | Thenable<Result>,
) =>
(input: Input): Thenable<Result> => {
try {
const result = fn(input)
if (result instanceof Promise) {
return result as Thenable<Result>
}
return {
then(onFulfilled) {
return toThenable(onFulfilled)(result as Result)
},
catch(\_onRejected) {
return this as Thenable<any>
},
}
} catch (e: any) {
return {
then(\_onFulfilled) {
return this as Thenable<any>
},
catch(onRejected) {
return toThenable(onRejected)(e)
},
}
}
}

const persistImpl: PersistImpl = (config, baseOptions) => (set, get, api) => {
type S = ReturnType<typeof config>
let options = {
storage: createJSONStorage<S>(() => localStorage),
partialize: (state: S) => state,
version: 0,
merge: (persistedState: unknown, currentState: S) => ({
...currentState,
...(persistedState as object),
}),
...baseOptions,
}

let hasHydrated = false
const hydrationListeners = new Set<PersistListener<S>>()
const finishHydrationListeners = new Set<PersistListener<S>>()
let storage = options.storage

if (!storage) {
return config(
(...args) => {
console.warn(
`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`,
)
set(...(args as Parameters<typeof set>))
},
get,
api,
)
}

const setItem = () => {
const state = options.partialize({ ...get() })
return (storage as PersistStorage<S>).setItem(options.name, {
state,
version: options.version,
})
}

const savedSetState = api.setState

api.setState = (state, replace) => {
savedSetState(state, replace as any)
void setItem()
}

const configResult = config(
(...args) => {
set(...(args as Parameters<typeof set>))
void setItem()
},
get,
api,
)

api.getInitialState = () => configResult

// a workaround to solve the issue of not storing rehydrated state in sync storage
// the set(state) value would be later overridden with initial state by create()
// to avoid this, we merge the state from localStorage into the initial state.
let stateFromStorage: S | undefined

// rehydrate initial state with existing stored state
const hydrate = () => {
if (!storage) return

    // On the first invocation of 'hydrate', state will not yet be defined (this is
    // true for both the 'asynchronous' and 'synchronous' case). Pass 'configResult'
    // as a backup  to 'get()' so listeners and 'onRehydrateStorage' are called with
    // the latest available state.

    hasHydrated = false
    hydrationListeners.forEach((cb) => cb(get() ?? configResult))

    const postRehydrationCallback =
      options.onRehydrateStorage?.(get() ?? configResult) || undefined

    // bind is used to avoid `TypeError: Illegal invocation` error
    return toThenable(storage.getItem.bind(storage))(options.name)
      .then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (
            typeof deserializedStorageValue.version === 'number' &&
            deserializedStorageValue.version !== options.version
          ) {
            if (options.migrate) {
              const migration = options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version,
              )
              if (migration instanceof Promise) {
                return migration.then((result) => [true, result] as const)
              }
              return [true, migration] as const
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`,
            )
          } else {
            return [false, deserializedStorageValue.state] as const
          }
        }
        return [false, undefined] as const
      })
      .then((migrationResult) => {
        const [migrated, migratedState] = migrationResult
        stateFromStorage = options.merge(
          migratedState as S,
          get() ?? configResult,
        )

        set(stateFromStorage as S, true)
        if (migrated) {
          return setItem()
        }
      })
      .then(() => {
        // TODO: In the asynchronous case, it's possible that the state has changed
        // since it was set in the prior callback. As such, it would be better to
        // pass 'get()' to the 'postRehydrationCallback' to ensure the most up-to-date
        // state is used. However, this could be a breaking change, so this isn't being
        // done now.
        postRehydrationCallback?.(stateFromStorage, undefined)

        // It's possible that 'postRehydrationCallback' updated the state. To ensure
        // that isn't overwritten when returning 'stateFromStorage' below
        // (synchronous-case only), update 'stateFromStorage' to point to the latest
        // state. In the asynchronous case, 'stateFromStorage' isn't used after this
        // callback, so there's no harm in updating it to match the latest state.
        stateFromStorage = get()
        hasHydrated = true
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage as S))
      })
      .catch((e: Error) => {
        postRehydrationCallback?.(undefined, e)
      })

}

;(api as StoreApi<S> & StorePersist<S, S>).persist = {
setOptions: (newOptions) => {
options = {
...options,
...newOptions,
}

      if (newOptions.storage) {
        storage = newOptions.storage
      }
    },
    clearStorage: () => {
      storage?.removeItem(options.name)
    },
    getOptions: () => options,
    rehydrate: () => hydrate() as Promise<void>,
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb)

      return () => {
        hydrationListeners.delete(cb)
      }
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb)

      return () => {
        finishHydrationListeners.delete(cb)
      }
    },

}

if (!options.skipHydration) {
hydrate()
}

return stateFromStorage || configResult
}

type Persist = <
T,
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],
U = T,

> (
> initializer: StateCreator<T, [...Mps, ['zustand/persist', unknown]], Mcs>,
> options: PersistOptions<T, U>,
> ) => StateCreator<T, Mps, [['zustand/persist', U], ...Mcs]>

declare module '../vanilla' {
interface StoreMutators<S, A> {
'zustand/persist': WithPersist<S, A>
}
}

type Write<T, U> = Omit<T, keyof U> & U

type WithPersist<S, A> = S extends { getState: () => infer T }
? Write<S, StorePersist<T, A>>
: never

type PersistImpl = <T>(
storeInitializer: StateCreator<T, [], []>,
options: PersistOptions<T, T>,
) => StateCreator<T, [], []>

export const persist = persistImpl as unknown as Persist
</file>

<file path="src/middleware/redux.ts">
import type { StateCreator, StoreMutatorIdentifier } from '../vanilla.ts'
import type { NamedSet } from './devtools.ts'

type Write<T, U> = Omit<T, keyof U> & U

type Action = { type: string }

type StoreRedux<A> = {
dispatch: (a: A) => A
dispatchFromDevtools: true
}

type ReduxState<A> = {
dispatch: StoreRedux<A>['dispatch']
}

type WithRedux<S, A> = Write<S, StoreRedux<A>>

type Redux = <
T,
A extends Action,
Cms extends [StoreMutatorIdentifier, unknown][] = [],

> (
> reducer: (state: T, action: A) => T,
> initialState: T,
> ) => StateCreator<Write<T, ReduxState<A>>, Cms, [['zustand/redux', A]]>

declare module '../vanilla' {
interface StoreMutators<S, A> {
'zustand/redux': WithRedux<S, A>
}
}

type ReduxImpl = <T, A extends Action>(
reducer: (state: T, action: A) => T,
initialState: T,
) => StateCreator<T & ReduxState<A>, [], []>

const reduxImpl: ReduxImpl = (reducer, initial) => (set, \_get, api) => {
type S = typeof initial
type A = Parameters<typeof reducer>[1]
;(api as any).dispatch = (action: A) => {
;(set as NamedSet<S>)((state: S) => reducer(state, action), false, action)
return action
}
;(api as any).dispatchFromDevtools = true

return { dispatch: (...args) => (api as any).dispatch(...args), ...initial }
}
export const redux = reduxImpl as unknown as Redux
</file>

<file path="src/middleware/subscribeWithSelector.ts">
import type { StateCreator, StoreMutatorIdentifier } from '../vanilla.ts'

type SubscribeWithSelector = <
T,
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],

> (
> initializer: StateCreator<

    T,
    [...Mps, ['zustand/subscribeWithSelector', never]],
    Mcs

> ,
> ) => StateCreator<T, Mps, [['zustand/subscribeWithSelector', never], ...Mcs]>

type Write<T, U> = Omit<T, keyof U> & U

type WithSelectorSubscribe<S> = S extends { getState: () => infer T }
? Write<S, StoreSubscribeWithSelector<T>>
: never

declare module '../vanilla' {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StoreMutators<S, A> {
['zustand/subscribeWithSelector']: WithSelectorSubscribe<S>
}
}

type StoreSubscribeWithSelector<T> = {
subscribe: {
(listener: (selectedState: T, previousSelectedState: T) => void): () => void
<U>(
selector: (state: T) => U,
listener: (selectedState: U, previousSelectedState: U) => void,
options?: {
equalityFn?: (a: U, b: U) => boolean
fireImmediately?: boolean
},
): () => void
}
}

type SubscribeWithSelectorImpl = <T extends object>(
storeInitializer: StateCreator<T, [], []>,
) => StateCreator<T, [], []>

const subscribeWithSelectorImpl: SubscribeWithSelectorImpl =
(fn) => (set, get, api) => {
type S = ReturnType<typeof fn>
type Listener = (state: S, previousState: S) => void
const origSubscribe = api.subscribe as (listener: Listener) => () => void
api.subscribe = ((selector: any, optListener: any, options: any) => {
let listener: Listener = selector // if no selector
if (optListener) {
const equalityFn = options?.equalityFn || Object.is
let currentSlice = selector(api.getState())
listener = (state) => {
const nextSlice = selector(state)
if (!equalityFn(currentSlice, nextSlice)) {
const previousSlice = currentSlice
optListener((currentSlice = nextSlice), previousSlice)
}
}
if (options?.fireImmediately) {
optListener(currentSlice, currentSlice)
}
}
return origSubscribe(listener)
}) as any
const initialState = fn(set, get, api)
return initialState
}
export const subscribeWithSelector =
subscribeWithSelectorImpl as unknown as SubscribeWithSelector
</file>

<file path="src/react/shallow.ts">
import React from 'react'
import { shallow } from '../vanilla/shallow.ts'

export function useShallow<S, U>(selector: (state: S) => U): (state: S) => U {
const prev = React.useRef<U>(undefined)
return (state) => {
const next = selector(state)
return shallow(prev.current, next)
? (prev.current as U)
: (prev.current = next)
}
}
</file>

<file path="src/vanilla/shallow.ts">
const isIterable = (obj: object): obj is Iterable<unknown> =>
  Symbol.iterator in obj

const hasIterableEntries = (
value: Iterable<unknown>,
): value is Iterable<unknown> & {
entries(): Iterable<[unknown, unknown]>
} =>
// HACK: avoid checking entries type
'entries' in value

const compareEntries = (
valueA: { entries(): Iterable<[unknown, unknown]> },
valueB: { entries(): Iterable<[unknown, unknown]> },
) => {
const mapA = valueA instanceof Map ? valueA : new Map(valueA.entries())
const mapB = valueB instanceof Map ? valueB : new Map(valueB.entries())
if (mapA.size !== mapB.size) {
return false
}
for (const [key, value] of mapA) {
if (!Object.is(value, mapB.get(key))) {
return false
}
}
return true
}

// Ordered iterables
const compareIterables = (
valueA: Iterable<unknown>,
valueB: Iterable<unknown>,
) => {
const iteratorA = valueA[Symbol.iterator]()
const iteratorB = valueB[Symbol.iterator]()
let nextA = iteratorA.next()
let nextB = iteratorB.next()
while (!nextA.done && !nextB.done) {
if (!Object.is(nextA.value, nextB.value)) {
return false
}
nextA = iteratorA.next()
nextB = iteratorB.next()
}
return !!nextA.done && !!nextB.done
}

export function shallow<T>(valueA: T, valueB: T): boolean {
if (Object.is(valueA, valueB)) {
return true
}
if (
typeof valueA !== 'object' ||
valueA === null ||
typeof valueB !== 'object' ||
valueB === null
) {
return false
}
if (!isIterable(valueA) || !isIterable(valueB)) {
return compareEntries(
{ entries: () => Object.entries(valueA) },
{ entries: () => Object.entries(valueB) },
)
}
if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
return compareEntries(valueA, valueB)
}
return compareIterables(valueA, valueB)
}
</file>

<file path="src/index.ts">
export * from './vanilla.ts'
export * from './react.ts'
</file>

<file path="src/middleware.ts">
export * from './middleware/redux.ts'
export * from './middleware/devtools.ts'
export * from './middleware/subscribeWithSelector.ts'
export * from './middleware/combine.ts'
export * from './middleware/persist.ts'
</file>

<file path="src/react.ts">
import React from 'react'
import { createStore } from './vanilla.ts'
import type {
  ExtractState,
  Mutate,
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from './vanilla.ts'

type ReadonlyStoreApi<T> = Pick<
StoreApi<T>,
'getState' | 'getInitialState' | 'subscribe'

>

const identity = <T>(arg: T): T => arg
export function useStore<S extends ReadonlyStoreApi<unknown>>(
api: S,
): ExtractState<S>

export function useStore<S extends ReadonlyStoreApi<unknown>, U>(
api: S,
selector: (state: ExtractState<S>) => U,
): U

export function useStore<TState, StateSlice>(
api: ReadonlyStoreApi<TState>,
selector: (state: TState) => StateSlice = identity as any,
) {
const slice = React.useSyncExternalStore(
api.subscribe,
() => selector(api.getState()),
() => selector(api.getInitialState()),
)
React.useDebugValue(slice)
return slice
}

export type UseBoundStore<S extends ReadonlyStoreApi<unknown>> = {
(): ExtractState<S>
<U>(selector: (state: ExtractState<S>) => U): U
} & S

type Create = {
<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
): UseBoundStore<Mutate<StoreApi<T>, Mos>>
<T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
) => UseBoundStore<Mutate<StoreApi<T>, Mos>>
}

const createImpl = <T>(createState: StateCreator<T, [], []>) => {
const api = createStore(createState)

const useBoundStore: any = (selector?: any) => useStore(api, selector)

Object.assign(useBoundStore, api)

return useBoundStore
}

export const create = (<T>(createState: StateCreator<T, [], []> | undefined) =>
createState ? createImpl(createState) : createImpl) as Create
</file>

<file path="src/shallow.ts">
export { shallow } from './vanilla/shallow.ts'
export { useShallow } from './react/shallow.ts'
</file>

<file path="src/traditional.ts">
import React from 'react'
// eslint-disable-next-line import/extensions
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector'
import { createStore } from './vanilla.ts'
import type {
  Mutate,
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from './vanilla.ts'

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports

type ExtractState<S> = S extends { getState: () => infer T } ? T : never

type ReadonlyStoreApi<T> = Pick<
StoreApi<T>,
'getState' | 'getInitialState' | 'subscribe'

>

const identity = <T>(arg: T): T => arg

export function useStoreWithEqualityFn<S extends ReadonlyStoreApi<unknown>>(
api: S,
): ExtractState<S>

export function useStoreWithEqualityFn<S extends ReadonlyStoreApi<unknown>, U>(
api: S,
selector: (state: ExtractState<S>) => U,
equalityFn?: (a: U, b: U) => boolean,
): U

export function useStoreWithEqualityFn<TState, StateSlice>(
api: ReadonlyStoreApi<TState>,
selector: (state: TState) => StateSlice = identity as any,
equalityFn?: (a: StateSlice, b: StateSlice) => boolean,
) {
const slice = useSyncExternalStoreWithSelector(
api.subscribe,
api.getState,
api.getInitialState,
selector,
equalityFn,
)
React.useDebugValue(slice)
return slice
}

export type UseBoundStoreWithEqualityFn<S extends ReadonlyStoreApi<unknown>> = {
(): ExtractState<S>
<U>(
selector: (state: ExtractState<S>) => U,
equalityFn?: (a: U, b: U) => boolean,
): U
} & S

type CreateWithEqualityFn = {
<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
defaultEqualityFn?: <U>(a: U, b: U) => boolean,
): UseBoundStoreWithEqualityFn<Mutate<StoreApi<T>, Mos>>
<T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
defaultEqualityFn?: <U>(a: U, b: U) => boolean,
) => UseBoundStoreWithEqualityFn<Mutate<StoreApi<T>, Mos>>
}

const createWithEqualityFnImpl = <T>(
createState: StateCreator<T, [], []>,
defaultEqualityFn?: <U>(a: U, b: U) => boolean,
) => {
const api = createStore(createState)

const useBoundStoreWithEqualityFn: any = (
selector?: any,
equalityFn = defaultEqualityFn,
) => useStoreWithEqualityFn(api, selector, equalityFn)

Object.assign(useBoundStoreWithEqualityFn, api)

return useBoundStoreWithEqualityFn
}

export const createWithEqualityFn = (<T>(
createState: StateCreator<T, [], []> | undefined,
defaultEqualityFn?: <U>(a: U, b: U) => boolean,
) =>
createState
? createWithEqualityFnImpl(createState, defaultEqualityFn)
: createWithEqualityFnImpl) as CreateWithEqualityFn
</file>

<file path="src/types.d.ts">
declare interface ImportMeta {
  env?: {
    MODE: string
  }
}
</file>

<file path="src/vanilla.ts">
type SetStateInternal<T> = {
  _(
    partial: T | Partial<T> | { _(state: T): T | Partial<T> }['_'],
    replace?: false,
  ): void
  _(state: T | { _(state: T): T }['_'], replace: true): void
}['_']

export interface StoreApi<T> {
setState: SetStateInternal<T>
getState: () => T
getInitialState: () => T
subscribe: (listener: (state: T, prevState: T) => void) => () => void
}

export type ExtractState<S> = S extends { getState: () => infer T } ? T : never

type Get<T, K, F> = K extends keyof T ? T[K] : F

export type Mutate<S, Ms> = number extends Ms['length' & keyof Ms]
? S
: Ms extends []
? S
: Ms extends [[infer Mi, infer Ma], ...infer Mrs]
? Mutate<StoreMutators<S, Ma>[Mi & StoreMutatorIdentifier], Mrs>
: never

export type StateCreator<
T,
Mis extends [StoreMutatorIdentifier, unknown][] = [],
Mos extends [StoreMutatorIdentifier, unknown][] = [],
U = T,

> = ((
> setState: Get<Mutate<StoreApi<T>, Mis>, 'setState', never>,
> getState: Get<Mutate<StoreApi<T>, Mis>, 'getState', never>,
> store: Mutate<StoreApi<T>, Mis>,
> ) => U) & { $$storeMutators?: Mos }

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type
export interface StoreMutators<S, A> {}
export type StoreMutatorIdentifier = keyof StoreMutators<unknown, unknown>

type CreateStore = {
<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
): Mutate<StoreApi<T>, Mos>

<T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(
initializer: StateCreator<T, [], Mos>,
) => Mutate<StoreApi<T>, Mos>
}

type CreateStoreImpl = <
T,
Mos extends [StoreMutatorIdentifier, unknown][] = [],

> (
> initializer: StateCreator<T, [], Mos>,
> ) => Mutate<StoreApi<T>, Mos>

const createStoreImpl: CreateStoreImpl = (createState) => {
type TState = ReturnType<typeof createState>
type Listener = (state: TState, prevState: TState) => void
let state: TState
const listeners: Set<Listener> = new Set()

const setState: StoreApi<TState>['setState'] = (partial, replace) => {
// TODO: Remove type assertion once https://github.com/microsoft/TypeScript/issues/37663 is resolved
// https://github.com/microsoft/TypeScript/issues/37663#issuecomment-759728342
const nextState =
typeof partial === 'function'
? (partial as (state: TState) => TState)(state)
: partial
if (!Object.is(nextState, state)) {
const previousState = state
state =
(replace ?? (typeof nextState !== 'object' || nextState === null))
? (nextState as TState)
: Object.assign({}, state, nextState)
listeners.forEach((listener) => listener(state, previousState))
}
}

const getState: StoreApi<TState>['getState'] = () => state

const getInitialState: StoreApi<TState>['getInitialState'] = () =>
initialState

const subscribe: StoreApi<TState>['subscribe'] = (listener) => {
listeners.add(listener)
// Unsubscribe
return () => listeners.delete(listener)
}

const api = { setState, getState, getInitialState, subscribe }
const initialState = (state = createState(setState, getState, api))
return api as any
}

export const createStore = ((createState) =>
createState ? createStoreImpl(createState) : createStoreImpl) as CreateStore
</file>

<file path="tests/vanilla/basic.test.ts">
import { afterEach, expect, it, vi } from 'vitest'
import { createStore } from 'zustand/vanilla'
import type { StoreApi } from 'zustand/vanilla'

// To avoid include react deps on vanilla version
vi.mock('react', () => ({}))

const consoleError = console.error
afterEach(() => {
console.error = consoleError
})

it('create a store', () => {
let params
const result = createStore((...args) => {
params = args
return { value: null }
})
expect({ params, result }).toMatchInlineSnapshot(`     {
      "params": [
        [Function],
        [Function],
        {
          "getInitialState": [Function],
          "getState": [Function],
          "setState": [Function],
          "subscribe": [Function],
        },
      ],
      "result": {
        "getInitialState": [Function],
        "getState": [Function],
        "setState": [Function],
        "subscribe": [Function],
      },
    }
  `)
})

type CounterState = {
count: number
inc: () => void
}

it('uses the store', async () => {
const store = createStore<CounterState>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))
store.getState().inc()

expect(store.getState().count).toBe(1)
})

it('can get the store', async () => {
type State = {
value: number
getState1: () => State
getState2: () => State
}

const store = createStore<State>((\_, get) => ({
value: 1,
getState1: () => get(),
getState2: (): State => store.getState(),
}))

expect(store.getState().getState1().value).toBe(1)
expect(store.getState().getState2().value).toBe(1)
})

it('can set the store', async () => {
type State = {
value: number
setState1: StoreApi<State>['setState']
setState2: StoreApi<State>['setState']
}

const store = createStore<State>((set) => ({
value: 1,
setState1: (v) => set(v),
setState2: (v): void => store.setState(v),
}))

store.getState().setState1({ value: 2 })
expect(store.getState().value).toBe(2)
store.getState().setState2({ value: 3 })
expect(store.getState().value).toBe(3)
})

it('both NaN should not update', () => {
const store = createStore<number>(() => NaN)
const fn = vi.fn()

store.subscribe(fn)
store.setState(NaN)

expect(fn).not.toBeCalled()
})

it('can set the store without merging', () => {
const { setState, getState } = createStore<{ a: number } | { b: number }>(
(\_set) => ({
a: 1,
}),
)

// Should override the state instead of merging.
setState({ b: 2 }, true)

expect(getState()).toEqual({ b: 2 })
})

it('can set the object store to null', () => {
const { setState, getState } = createStore<{ a: number } | null>(() => ({
a: 1,
}))

setState(null)

expect(getState()).toEqual(null)
})

it('can set the non-object store to null', () => {
const { setState, getState } = createStore<string | null>(() => 'value')

setState(null)

expect(getState()).toEqual(null)
})

it('works with non-object state', () => {
const store = createStore<number>(() => 1)
const inc = () => store.setState((c) => c + 1)

inc()

expect(store.getState()).toBe(2)
})
</file>

<file path="tests/vanilla/shallow.test.tsx">
import { describe, expect, it } from 'vitest'
import { shallow } from 'zustand/vanilla/shallow'

describe('shallow', () => {
it('compares primitive values', () => {
expect(shallow(true, true)).toBe(true)
expect(shallow(true, false)).toBe(false)

    expect(shallow(1, 1)).toBe(true)
    expect(shallow(1, 2)).toBe(false)

    expect(shallow('zustand', 'zustand')).toBe(true)
    expect(shallow('zustand', 'redux')).toBe(false)

})

it('compares objects', () => {
expect(shallow({ foo: 'bar', asd: 123 }, { foo: 'bar', asd: 123 })).toBe(
true,
)

    expect(
      shallow({ foo: 'bar', asd: 123 }, { foo: 'bar', foobar: true }),
    ).toBe(false)

    expect(
      shallow({ foo: 'bar', asd: 123 }, { foo: 'bar', asd: 123, foobar: true }),
    ).toBe(false)

})

it('compares arrays', () => {
expect(shallow([1, 2, 3], [1, 2, 3])).toBe(true)

    expect(shallow([1, 2, 3], [2, 3, 4])).toBe(false)

    expect(
      shallow([{ foo: 'bar' }, { asd: 123 }], [{ foo: 'bar' }, { asd: 123 }]),
    ).toBe(false)

    expect(shallow([{ foo: 'bar' }], [{ foo: 'bar', asd: 123 }])).toBe(false)

    expect(shallow([1, 2, 3], [2, 3, 1])).toBe(false)

})

it('compares Maps', () => {
expect(
shallow(
new Map<string, unknown>([
['foo', 'bar'],
['asd', 123],
]),
new Map<string, unknown>([
['foo', 'bar'],
['asd', 123],
]),
),
).toBe(true)

    expect(
      shallow(
        new Map<string, unknown>([
          ['foo', 'bar'],
          ['asd', 123],
        ]),
        new Map<string, unknown>([
          ['asd', 123],
          ['foo', 'bar'],
        ]),
      ),
    ).toBe(true)

    expect(
      shallow(
        new Map<string, unknown>([
          ['foo', 'bar'],
          ['asd', 123],
        ]),
        new Map<string, unknown>([
          ['foo', 'bar'],
          ['foobar', true],
        ]),
      ),
    ).toBe(false)

    expect(
      shallow(
        new Map<string, unknown>([
          ['foo', 'bar'],
          ['asd', 123],
        ]),
        new Map<string, unknown>([
          ['foo', 'bar'],
          ['asd', 123],
          ['foobar', true],
        ]),
      ),
    ).toBe(false)

    const obj = {}
    const obj2 = {}
    expect(
      shallow(
        new Map<object, unknown>([[obj, 'foo']]),
        new Map<object, unknown>([[obj2, 'foo']]),
      ),
    ).toBe(false)

})

it('compares Sets', () => {
expect(shallow(new Set(['bar', 123]), new Set(['bar', 123]))).toBe(true)

    expect(shallow(new Set(['bar', 123]), new Set([123, 'bar']))).toBe(true)

    expect(shallow(new Set(['bar', 123]), new Set(['bar', 2]))).toBe(false)

    expect(shallow(new Set(['bar', 123]), new Set(['bar', 123, true]))).toBe(
      false,
    )

    const obj = {}
    const obj2 = {}
    expect(shallow(new Set([obj]), new Set([obj]))).toBe(true)
    expect(shallow(new Set([obj]), new Set([obj2]))).toBe(false)
    expect(shallow(new Set([obj]), new Set([obj, obj2]))).toBe(false)
    expect(shallow(new Set([obj]), new Set([obj2, obj]))).toBe(false)

    expect(shallow(['bar', 123] as never, new Set(['bar', 123]))).toBe(false)

})

it('compares functions', () => {
function firstFnCompare() {
return { foo: 'bar' }
}

    function secondFnCompare() {
      return { foo: 'bar' }
    }

    expect(shallow(firstFnCompare, firstFnCompare)).toBe(true)

    expect(shallow(secondFnCompare, secondFnCompare)).toBe(true)

    expect(shallow(firstFnCompare, secondFnCompare)).toBe(false)

})

it('compares URLSearchParams', () => {
expect(
shallow(new URLSearchParams({ a: 'a' }), new URLSearchParams({ a: 'a' })),
).toBe(true)
expect(
shallow(new URLSearchParams({ a: 'a' }), new URLSearchParams({ a: 'b' })),
).toBe(false)
expect(
shallow(new URLSearchParams({ a: 'a' }), new URLSearchParams({ b: 'b' })),
).toBe(false)
expect(
shallow(
new URLSearchParams({ a: 'a' }),
new URLSearchParams({ a: 'a', b: 'b' }),
),
).toBe(false)
expect(
shallow(
new URLSearchParams({ b: 'b', a: 'a' }),
new URLSearchParams({ a: 'a', b: 'b' }),
),
).toBe(true)
})

it('should work with nested arrays (#2794)', () => {
const arr = [1, 2]
expect(shallow([arr, 1], [arr, 1])).toBe(true)
})
})

describe('generators', () => {
it('pure iterable', () => {
function\* gen() {
yield 1
yield 2
}
expect(Symbol.iterator in gen()).toBe(true)
expect(shallow(gen(), gen())).toBe(true)
})
})

describe('unsupported cases', () => {
it('date', () => {
expect(
shallow(
new Date('2022-07-19T00:00:00.000Z'),
new Date('2022-07-20T00:00:00.000Z'),
),
).not.toBe(false)
})
})
</file>

<file path="tests/vanilla/subscribe.test.tsx">
import { describe, expect, it, vi } from 'vitest'
import { subscribeWithSelector } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

describe('subscribe()', () => {
it('should not be called if new state identity is the same', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(() => initialState)

    subscribe(spy)
    setState(initialState)
    expect(spy).not.toHaveBeenCalled()

})

it('should be called if new state identity is different', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, getState, subscribe } = createStore(() => initialState)

    subscribe(spy)
    setState({ ...getState() })
    expect(spy).toHaveBeenCalledWith(initialState, initialState)

})

it('should not be called when state slice is the same', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    subscribe((s) => s.value, spy)
    setState({ other: 'b' })
    expect(spy).not.toHaveBeenCalled()

})

it('should be called when state slice changes', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    subscribe((s) => s.value, spy)
    setState({ value: initialState.value + 1 })
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(initialState.value + 1, initialState.value)

})

it('should not be called when equality checker returns true', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    subscribe((s) => s, spy, { equalityFn: () => true })
    setState({ value: initialState.value + 2 })
    expect(spy).not.toHaveBeenCalled()

})

it('should be called when equality checker returns false', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    subscribe((s) => s.value, spy, { equalityFn: () => false })
    setState({ value: initialState.value + 2 })
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(initialState.value + 2, initialState.value)

})

it('should unsubscribe correctly', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    const unsub = subscribe((s) => s.value, spy)

    setState({ value: initialState.value + 1 })
    unsub()
    setState({ value: initialState.value + 2 })

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(initialState.value + 1, initialState.value)

})

it('should keep consistent behavior with equality check', () => {
const spy = vi.fn()
const initialState = { value: 1, other: 'a' }
const { getState, setState, subscribe } = createStore(
subscribeWithSelector(() => initialState),
)

    const isRoughEqual = (x: number, y: number) => Math.abs(x - y) < 1
    setState({ value: 0 })
    spy.mockReset()
    const spy2 = vi.fn()
    let prevValue = getState().value
    const unsub = subscribe((s) => {
      if (isRoughEqual(prevValue, s.value)) {
        // skip assuming values are equal
        return
      }
      spy(s.value, prevValue)
      prevValue = s.value
    })
    const unsub2 = subscribe((s) => s.value, spy2, { equalityFn: isRoughEqual })
    setState({ value: 0.5 })
    setState({ value: 1 })
    unsub()
    unsub2()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(1, 0)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledWith(1, 0)

})
})
</file>

<file path="tests/basic.test.tsx">
import {
  Component as ClassComponent,
  StrictMode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { afterEach, expect, it, vi } from 'vitest'
import { create } from 'zustand'
import type { StoreApi } from 'zustand'
import { createWithEqualityFn } from 'zustand/traditional'

const consoleError = console.error
afterEach(() => {
console.error = consoleError
})

it('creates a store hook and api object', () => {
let params
const result = create((...args) => {
params = args
return { value: null }
})
expect({ params, result }).toMatchInlineSnapshot(`     {
      "params": [
        [Function],
        [Function],
        {
          "getInitialState": [Function],
          "getState": [Function],
          "setState": [Function],
          "subscribe": [Function],
        },
      ],
      "result": [Function],
    }
  `)
})

type CounterState = {
count: number
inc: () => void
}

it('uses the store with no args', async () => {
const useBoundStore = create<CounterState>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const { count, inc } = useBoundStore()
useEffect(inc, [inc])
return <div>count: {count}</div>
}

render(
<>
<Counter />
</>,
)

await screen.findByText('count: 1')
})

it('uses the store with selectors', async () => {
const useBoundStore = create<CounterState>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const count = useBoundStore((s) => s.count)
const inc = useBoundStore((s) => s.inc)
useEffect(inc, [inc])
return <div>count: {count}</div>
}

render(
<>
<Counter />
</>,
)

await screen.findByText('count: 1')
})

it('uses the store with a selector and equality checker', async () => {
const useBoundStore = createWithEqualityFn(
() => ({ item: { value: 0 } }),
Object.is,
)
const { setState } = useBoundStore
let renderCount = 0

function Component() {
// Prevent re-render if new value === 1.
const item = useBoundStore(
(s) => s.item,
(\_, newItem) => newItem.value === 1,
)
return (
<div>
renderCount: {++renderCount}, value: {item.value}
</div>
)
}

render(
<>
<Component />
</>,
)

await screen.findByText('renderCount: 1, value: 0')

// This will not cause a re-render.
act(() => setState({ item: { value: 1 } }))
await screen.findByText('renderCount: 1, value: 0')

// This will cause a re-render.
act(() => setState({ item: { value: 2 } }))
await screen.findByText('renderCount: 2, value: 2')
})

it('only re-renders if selected state has changed', async () => {
const useBoundStore = create<CounterState>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))
let counterRenderCount = 0
let controlRenderCount = 0

function Counter() {
const count = useBoundStore((state) => state.count)
counterRenderCount++
return <div>count: {count}</div>
}

function Control() {
const inc = useBoundStore((state) => state.inc)
controlRenderCount++
return <button onClick={inc}>button</button>
}

render(
<>
<Counter />
<Control />
</>,
)

fireEvent.click(screen.getByText('button'))

await screen.findByText('count: 1')

expect(counterRenderCount).toBe(2)
expect(controlRenderCount).toBe(1)
})

it('can batch updates', async () => {
const useBoundStore = create<CounterState>((set) => ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
const { count, inc } = useBoundStore()
useEffect(() => {
ReactDOM.unstable_batchedUpdates(() => {
inc()
inc()
})
}, [inc])
return <div>count: {count}</div>
}

render(
<>
<Counter />
</>,
)

await screen.findByText('count: 2')
})

it('can update the selector', async () => {
type State = { one: string; two: string }
type Props = { selector: (state: State) => string }
const useBoundStore = create<State>(() => ({
one: 'one',
two: 'two',
}))

function Component({ selector }: Props) {
return <div>{useBoundStore(selector)}</div>
}

const { rerender } = render(
<StrictMode>
<Component selector={(s) => s.one} />
</StrictMode>,
)
await screen.findByText('one')

rerender(
<StrictMode>
<Component selector={(s) => s.two} />
</StrictMode>,
)
await screen.findByText('two')
})

it('can update the equality checker', async () => {
type State = { value: number }
type Props = { equalityFn: (a: State, b: State) => boolean }
const useBoundStore = createWithEqualityFn<State>(
() => ({ value: 0 }),
Object.is,
)
const { setState } = useBoundStore
const selector = (s: State) => s

let renderCount = 0
function Component({ equalityFn }: Props) {
const { value } = useBoundStore(selector, equalityFn)
return (
<div>
renderCount: {++renderCount}, value: {value}
</div>
)
}

// Set an equality checker that always returns false to always re-render.
const { rerender } = render(
<>
<Component equalityFn={() => false} />
</>,
)

// This will cause a re-render due to the equality checker.
act(() => setState({ value: 0 }))
await screen.findByText('renderCount: 2, value: 0')

// Set an equality checker that always returns true to never re-render.
rerender(
<>
<Component equalityFn={() => true} />
</>,
)

// This will NOT cause a re-render due to the equality checker.
act(() => setState({ value: 1 }))
await screen.findByText('renderCount: 3, value: 0')
})

it('can call useBoundStore with progressively more arguments', async () => {
type State = { value: number }
type Props = {
selector?: (state: State) => number
equalityFn?: (a: number, b: number) => boolean
}

const useBoundStore = createWithEqualityFn<State>(
() => ({ value: 0 }),
Object.is,
)
const { setState } = useBoundStore

let renderCount = 0
function Component({ selector, equalityFn }: Props) {
const value = useBoundStore(selector as any, equalityFn)
return (
<div>
renderCount: {++renderCount}, value: {JSON.stringify(value)}
</div>
)
}

// Render with no args.
const { rerender } = render(
<>
<Component />
</>,
)
await screen.findByText('renderCount: 1, value: {"value":0}')

// Render with selector.
rerender(
<>
<Component selector={(s) => s.value} />
</>,
)
await screen.findByText('renderCount: 2, value: 0')

// Render with selector and equality checker.
rerender(
<>
<Component
selector={(s) => s.value}
equalityFn={(oldV, newV) => oldV > newV}
/>
</>,
)

// Should not cause a re-render because new value is less than previous.
act(() => setState({ value: -1 }))
await screen.findByText('renderCount: 3, value: 0')

act(() => setState({ value: 1 }))
await screen.findByText('renderCount: 4, value: 1')
})

it('can throw an error in selector', async () => {
console.error = vi.fn()
type State = { value: string | number }

const initialState: State = { value: 'foo' }
const useBoundStore = create<State>(() => initialState)
const { setState } = useBoundStore
const selector = (s: State) =>
// @ts-expect-error This function is supposed to throw an error
s.value.toUpperCase()

class ErrorBoundary extends ClassComponent<
{ children?: ReactNode | undefined },
{ hasError: boolean }

> {

    constructor(props: { children?: ReactNode | undefined }) {
      super(props)
      this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
      return { hasError: true }
    }
    render() {
      return this.state.hasError ? <div>errored</div> : this.props.children
    }

}

function Component() {
useBoundStore(selector)
return <div>no error</div>
}

render(
<StrictMode>
<ErrorBoundary>
<Component />
</ErrorBoundary>
</StrictMode>,
)

await screen.findByText('no error')

act(() => {
setState({ value: 123 })
})
await screen.findByText('errored')
})

it('can throw an error in equality checker', async () => {
console.error = vi.fn()
type State = { value: string | number }

const initialState: State = { value: 'foo' }
const useBoundStore = createWithEqualityFn(() => initialState, Object.is)
const { setState } = useBoundStore
const selector = (s: State) => s
const equalityFn = (a: State, b: State) =>
// @ts-expect-error This function is supposed to throw an error
a.value.trim() === b.value.trim()

class ErrorBoundary extends ClassComponent<
{ children?: ReactNode | undefined },
{ hasError: boolean }

> {

    constructor(props: { children?: ReactNode | undefined }) {
      super(props)
      this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
      return { hasError: true }
    }
    render() {
      return this.state.hasError ? <div>errored</div> : this.props.children
    }

}

function Component() {
useBoundStore(selector, equalityFn)
return <div>no error</div>
}

render(
<StrictMode>
<ErrorBoundary>
<Component />
</ErrorBoundary>
</StrictMode>,
)

await screen.findByText('no error')

act(() => {
setState({ value: 123 })
})
await screen.findByText('errored')
})

it('can get the store', () => {
type State = {
value: number
getState1: () => State
getState2: () => State
}
const { getState } = create<State>((\_, get) => ({
value: 1,
getState1: () => get(),
getState2: (): State => getState(),
}))

expect(getState().getState1().value).toBe(1)
expect(getState().getState2().value).toBe(1)
})

it('can set the store', () => {
type State = {
value: number
setState1: StoreApi<State>['setState']
setState2: StoreApi<State>['setState']
}

const { setState, getState } = create<State>((set) => ({
value: 1,
setState1: (v) => set(v),
setState2: (v) => setState(v),
}))

getState().setState1({ value: 2 })
expect(getState().value).toBe(2)
getState().setState2({ value: 3 })
expect(getState().value).toBe(3)
getState().setState1((s) => ({ value: ++s.value }))
expect(getState().value).toBe(4)
getState().setState2((s) => ({ value: ++s.value }))
expect(getState().value).toBe(5)
})

it('both NaN should not update', () => {
const { setState, subscribe } = create<number>(() => NaN)

const fn = vi.fn()
subscribe(fn)

setState(NaN)

expect(fn).not.toBeCalled()
})

it('can set the store without merging', () => {
const { setState, getState } = create<{ a: number } | { b: number }>(
(\_set) => ({
a: 1,
}),
)

// Should override the state instead of merging.
setState({ b: 2 }, true)
expect(getState()).toEqual({ b: 2 })
})

it('only calls selectors when necessary with static selector', async () => {
type State = { a: number; b: number }
const useBoundStore = createWithEqualityFn<State>(() => ({ a: 0, b: 0 }))
const { setState } = useBoundStore
let staticSelectorCallCount = 0

function staticSelector(s: State) {
staticSelectorCallCount++
return s.a
}

function Component() {
useBoundStore(staticSelector)
return (
<>
<div>static: {staticSelectorCallCount}</div>
</>
)
}

const { rerender } = render(
<>
<Component />
</>,
)
await screen.findByText('static: 1')

rerender(
<>
<Component />
</>,
)
await screen.findByText('static: 1')

act(() => setState({ a: 1, b: 1 }))
await screen.findByText('static: 2')
})

it('only calls selectors when necessary (traditional)', async () => {
type State = { a: number; b: number }
const useBoundStore = createWithEqualityFn<State>(() => ({ a: 0, b: 0 }))
const { setState } = useBoundStore
let inlineSelectorCallCount = 0
let staticSelectorCallCount = 0

function staticSelector(s: State) {
staticSelectorCallCount++
return s.a
}

function Component() {
useBoundStore((s) => (inlineSelectorCallCount++, s.b))
useBoundStore(staticSelector)
return (
<>
<div>inline: {inlineSelectorCallCount}</div>
<div>static: {staticSelectorCallCount}</div>
</>
)
}

const { rerender } = render(
<>
<Component />
</>,
)
await screen.findByText('inline: 1')
await screen.findByText('static: 1')

rerender(
<>
<Component />
</>,
)
await screen.findByText('inline: 2')
await screen.findByText('static: 1')

act(() => setState({ a: 1, b: 1 }))
await screen.findByText('inline: 4')
await screen.findByText('static: 2')
})

it('ensures parent components subscribe before children', async () => {
type State = {
children: { [key: string]: { text: string } }
}
type Props = { id: string }
const useBoundStore = create<State>(() => ({
children: {
'1': { text: 'child 1' },
'2': { text: 'child 2' },
},
}))
const api = useBoundStore

function changeState() {
api.setState({
children: {
'3': { text: 'child 3' },
},
})
}

function Child({ id }: Props) {
const text = useBoundStore((s) => s.children[id]?.text)
return <div>{text}</div>
}

function Parent() {
const childStates = useBoundStore((s) => s.children)
return (
<>
<button onClick={changeState}>change state</button>
{Object.keys(childStates).map((id) => (
<Child id={id} key={id} />
))}
</>
)
}

render(
<StrictMode>
<Parent />
</StrictMode>,
)

fireEvent.click(screen.getByText('change state'))

await screen.findByText('child 3')
})

// https://github.com/pmndrs/zustand/issues/84
it('ensures the correct subscriber is removed on unmount', async () => {
const useBoundStore = create(() => ({ count: 0 }))
const api = useBoundStore

function increment() {
api.setState(({ count }) => ({ count: count + 1 }))
}

function Count() {
const c = useBoundStore((s) => s.count)
return <div>count: {c}</div>
}

function CountWithInitialIncrement() {
useLayoutEffect(increment, [])
return <Count />
}

function Component() {
const [Counter, setCounter] = useState(() => CountWithInitialIncrement)
useLayoutEffect(() => {
setCounter(() => Count)
}, [])
return (
<>
<Counter />
<Count />
</>
)
}

render(
<>
<Component />
</>,
)

expect((await screen.findAllByText('count: 1')).length).toBe(2)

act(increment)

expect((await screen.findAllByText('count: 2')).length).toBe(2)
})

// https://github.com/pmndrs/zustand/issues/86
it('ensures a subscriber is not mistakenly overwritten', async () => {
const useBoundStore = create(() => ({ count: 0 }))
const { setState } = useBoundStore

function Count1() {
const c = useBoundStore((s) => s.count)
return <div>count1: {c}</div>
}

function Count2() {
const c = useBoundStore((s) => s.count)
return <div>count2: {c}</div>
}

// Add 1st subscriber.
const { rerender } = render(
<StrictMode>
<Count1 />
</StrictMode>,
)

// Replace 1st subscriber with another.
rerender(
<StrictMode>
<Count2 />
</StrictMode>,
)

// Add 2 additional subscribers.
rerender(
<StrictMode>
<Count2 />
<Count1 />
<Count1 />
</StrictMode>,
)

// Call all subscribers
act(() => setState({ count: 1 }))

expect((await screen.findAllByText('count1: 1')).length).toBe(2)
expect((await screen.findAllByText('count2: 1')).length).toBe(1)
})

it('works with non-object state', async () => {
const useCount = create(() => 1)
const inc = () => useCount.setState((c) => c + 1)

const Counter = () => {
const count = useCount()
return (
<>
<div>count: {count}</div>
<button onClick={inc}>button</button>
</>
)
}

render(
<StrictMode>
<Counter />
</StrictMode>,
)

await screen.findByText('count: 1')

fireEvent.click(screen.getByText('button'))
await screen.findByText('count: 2')
})

it('works with "undefined" state', async () => {
const useUndefined = create(() => undefined)

const Component = () => {
const str = useUndefined((v) => v || 'undefined')
return <div>str: {str}</div>
}

render(
<StrictMode>
<Component />
</StrictMode>,
)

await screen.findByText('str: undefined')
})
</file>

<file path="tests/devtools.test.tsx">
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Mock } from 'vitest'
import { devtools, redux } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'
import type { StoreApi } from 'zustand/vanilla'

type TupleOfEqualLengthH<
Arr extends unknown[],
T,
Acc extends T[],

> = Arr extends [unknown, ...infer Rest]
> ? TupleOfEqualLengthH<Rest, T, [T, ...Acc]>
> : Acc
> type TupleOfEqualLength<Arr extends unknown[], T> = number extends Arr['length']
> ? T[]
> : TupleOfEqualLengthH<Arr, T, []>

type Connection = {
subscribers: ((message: unknown) => void)[]
api: {
subscribe: Mock<any>
unsubscribe: Mock<any>
send: Mock<any>
init: Mock<any>
error: Mock<any>
dispatch?: Mock<any>
}
}
const namedConnections = new Map<string | undefined, Connection>()
const unnamedConnections = new Map<string, Connection>()

function assertAllAreDefined<T>(arr: (T | undefined)[]): asserts arr is T[] {
if (arr.some((e) => e === undefined)) {
throw new Error()
}
}
function getNamedConnectionApis<Keys extends (string | undefined)[]>(
...keys: Keys
) {
const apis = keys.map((k) => namedConnections.get(k)?.api)
assertAllAreDefined(apis)
return apis as TupleOfEqualLength<Keys, Connection['api']>
}
function getNamedConnectionSubscribers<Keys extends (string | undefined)[]>(
...keys: Keys
) {
const subscribers = keys.map((k) => {
const subs = namedConnections.get(k)?.subscribers
if (subs?.length !== 1) throw new Error()
return subs[0]
})
assertAllAreDefined(subscribers)
return subscribers as TupleOfEqualLength<
Keys,
Connection['subscribers'][number]

> }
> function getUnnamedConnectionApis<Keys extends string[]>(...keys: Keys) {
> const apis = keys.map((k) => unnamedConnections.get(k)?.api)
> assertAllAreDefined(apis)
> return apis as TupleOfEqualLength<Keys, Connection['api']>
> }
> function getUnnamedConnectionSubscribers<Keys extends string[]>(...keys: Keys) {
> const subscribers = keys.map((k) => {

    const subs = unnamedConnections.get(k)?.subscribers
    if (!subs) {
      throw new Error()
    }
    return subs[0]

})
assertAllAreDefined(subscribers)
return subscribers as TupleOfEqualLength<
Keys,
Connection['subscribers'][number]

> }

function getKeyFromOptions(options: any): string | undefined {
let key: string | undefined = options?.name
if (options?.testStore) {
key = `${options?.name}|${options?.testStore}`
}
return key
}

const extensionConnector = {
connect: vi.fn((options: any) => {
const key = getKeyFromOptions(options)
//console.log('options', options)
const areNameUndefinedMapsNeeded =
options.testConnectionId !== undefined && options?.name === undefined
const connectionMap = areNameUndefinedMapsNeeded
? unnamedConnections
: namedConnections
const subscribers: Connection['subscribers'] = []
const api = {
subscribe: vi.fn((f: (m: unknown) => void) => {
subscribers.push(f)
return () => {}
}),
unsubscribe: vi.fn(),
send: vi.fn(),
init: vi.fn(),
error: vi.fn(),
}
connectionMap.set(
areNameUndefinedMapsNeeded ? options.testConnectionId : key,
{
subscribers,
api,
},
)
return api
}),
}
;(window as any).**REDUX_DEVTOOLS_EXTENSION** = extensionConnector

beforeEach(() => {
vi.resetModules()
extensionConnector.connect.mockClear()
namedConnections.clear()
unnamedConnections.clear()
})

it('connects to the extension by passing the options and initializes', async () => {
const options = { name: 'test', foo: 'bar' }
const initialState = { count: 0 }
createStore(devtools(() => initialState, { enabled: true, ...options }))

expect(extensionConnector.connect).toHaveBeenLastCalledWith(options)

const [conn] = getNamedConnectionApis(options.name)
expect(conn.init).toHaveBeenLastCalledWith(initialState)
})

describe('If there is no extension installed...', () => {
let savedConsoleWarn: any
beforeEach(() => {
savedConsoleWarn = console.warn
console.warn = vi.fn()
;(window as any).**REDUX_DEVTOOLS_EXTENSION** = undefined
})
afterEach(() => {
console.warn = savedConsoleWarn
;(window as any).**REDUX_DEVTOOLS_EXTENSION** = extensionConnector
})

it('does not throw', async () => {
expect(() => {
createStore(devtools(() => ({ count: 0 })))
}).not.toThrow()
})

it('does not warn', async () => {
createStore(devtools(() => ({ count: 0 })))
expect(console.warn).not.toBeCalled()
})
})

describe('When state changes...', () => {
it("sends { type: setStateName || 'anonymous`, ...rest } as the action with current state", async () => {
const options = {
name: 'testOptionsName',
enabled: true,
}
const api = createStore(devtools(() => ({ count: 0, foo: 'bar' }), options))

    api.setState({ count: 10 }, false, 'testSetStateName')
    const [connection] = getNamedConnectionApis(options.name)
    expect(connection.send).toHaveBeenLastCalledWith(
      { type: 'testSetStateName' },
      { count: 10, foo: 'bar' },
    )

    api.setState({ count: 15 }, false, {
      type: 'testSetStateName',
      payload: 15,
    })
    expect(connection.send).toHaveBeenLastCalledWith(
      { type: 'testSetStateName', payload: 15 },
      { count: 15, foo: 'bar' },
    )

    api.setState({ count: 5, foo: 'baz' }, true)
    expect(connection.send).toHaveBeenLastCalledWith(
      { type: 'anonymous' },
      { count: 5, foo: 'baz' },
    )

})
})

describe('when it receives a message of type...', () => {
describe('ACTION...', () => {
it('does nothing', async () => {
const initialState = { count: 0 }
const api = createStore(devtools(() => initialState, { enabled: true }))
const setState = vi.spyOn(api, 'setState')

      const [subscriber] = getNamedConnectionSubscribers(undefined)
      subscriber({
        type: 'ACTION',
        payload: '{ "type": "INCREMENT" }',
      })

      expect(api.getState()).toBe(initialState)
      expect(setState).not.toBeCalled()
    })

    it('unless action type is __setState', async () => {
      const initialState = { count: 0 }
      const api = createStore(devtools(() => initialState, { enabled: true }))

      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'ACTION',
        payload: '{ "type": "__setState", "state": { "foo": "bar" } }',
      })

      expect(api.getState()).toStrictEqual({ ...initialState, foo: 'bar' })
    })

    it('does nothing even if there is `api.dispatch`', async () => {
      const initialState = { count: 0 }
      const api = createStore(devtools(() => initialState, { enabled: true }))
      ;(api as any).dispatch = vi.fn()
      const setState = vi.spyOn(api, 'setState')

      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'ACTION',
        payload: '{ "type": "INCREMENT" }',
      })

      expect(api.getState()).toBe(initialState)
      expect(setState).not.toBeCalled()
      expect((api as any).dispatch).not.toBeCalled()
    })

    it('dispatches with `api.dispatch` when `api.dispatchFromDevtools` is set to true', async () => {
      const initialState = { count: 0 }
      const api = createStore(devtools(() => initialState, { enabled: true }))
      ;(api as any).dispatch = vi.fn()
      ;(api as any).dispatchFromDevtools = true
      const setState = vi.spyOn(api, 'setState')

      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'ACTION',
        payload: '{ "type": "INCREMENT" }',
      })

      expect(api.getState()).toBe(initialState)
      expect(setState).not.toBeCalled()
      expect((api as any).dispatch).toHaveBeenLastCalledWith({
        type: 'INCREMENT',
      })
    })

    it('does not throw for unsupported payload', async () => {
      const initialState = { count: 0 }
      const api = createStore(devtools(() => initialState, { enabled: true }))
      ;(api as any).dispatch = vi.fn()
      ;(api as any).dispatchFromDevtools = true
      const setState = vi.spyOn(api, 'setState')
      const originalConsoleError = console.error
      console.error = vi.fn()

      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      expect(() => {
        connectionSubscriber({
          type: 'ACTION',
          payload: 'this.increment()',
        })
      }).not.toThrow()

      expect(console.error).toHaveBeenLastCalledWith(
        '[zustand devtools middleware] Could not parse the received json',
        (() => {
          try {
            JSON.parse('this.increment()')
          } catch (e) {
            return e
          }
        })(),
      )

      expect(() => {
        connectionSubscriber({
          type: 'ACTION',
          payload: { name: 'increment', args: [] },
        })
      }).not.toThrow()

      expect(console.error).toHaveBeenLastCalledWith(
        '[zustand devtools middleware] Unsupported action format',
      )

      expect(api.getState()).toBe(initialState)
      expect(setState).not.toBeCalled()
      expect((api as any).dispatch).not.toBeCalled()

      console.error = originalConsoleError
    })

})

describe('DISPATCH and payload of type...', () => {
it('RESET, it inits with initial state', async () => {
const initialState = { count: 0 }
const api = createStore(devtools(() => initialState, { enabled: true }))
api.setState({ count: 1 })

      const [connection] = getNamedConnectionApis(undefined)
      connection.send.mockClear()
      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'DISPATCH',
        payload: { type: 'RESET' },
      })

      expect(api.getState()).toStrictEqual(initialState)
      expect(connection.init).toHaveBeenLastCalledWith(initialState)
      expect(connection.send).not.toBeCalled()
    })

    it('COMMIT, it inits with current state', async () => {
      const initialState = { count: 0 }
      const api = createStore(devtools(() => initialState, { enabled: true }))
      api.setState({ count: 2 })
      const currentState = api.getState()

      const [connection] = getNamedConnectionApis(undefined)
      connection.send.mockClear()
      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'DISPATCH',
        payload: { type: 'COMMIT' },
      })

      expect(connection.init).toHaveBeenLastCalledWith(currentState)
      expect(connection.send).not.toBeCalled()
    })

    describe('ROLLBACK...', () => {
      it('updates state without recording and inits with `message.state`', async () => {
        const initialState = { count: 0, increment: () => {} }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const newState = { foo: 'bar' }

        const [connection] = getNamedConnectionApis(undefined)
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: JSON.stringify(newState),
        })

        expect(api.getState()).toStrictEqual({ ...initialState, ...newState })
        expect(connection.init).toHaveBeenLastCalledWith({
          ...initialState,
          ...newState,
        })
        expect(connection.send).not.toBeCalled()
      })

      it('does not throw for unparsable `message.state`', async () => {
        const increment = () => {}
        const initialState = { count: 0, increment }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const originalConsoleError = console.error
        console.error = vi.fn()

        const [connection] = getNamedConnectionApis(undefined)
        connection.init.mockClear()
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: 'foobar',
        })

        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        expect(api.getState()).toBe(initialState)
        expect(connection.init).not.toBeCalled()
        expect(connection.send).not.toBeCalled()

        console.error = originalConsoleError
      })
    })

    describe('JUMP_TO_STATE...', () => {
      const increment = () => {}
      it('updates state without recording with `message.state`', async () => {
        const initialState = { count: 0, increment }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const newState = { foo: 'bar' }

        const [connection] = getNamedConnectionApis(undefined)
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: JSON.stringify(newState),
        })
        expect(api.getState()).toStrictEqual({ ...initialState, ...newState })
        expect(connection.send).not.toBeCalled()
      })

      it('does not throw for unparsable `message.state`', async () => {
        const initialState = { count: 0, increment: () => {} }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const originalConsoleError = console.error
        console.error = vi.fn()

        const [connection] = getNamedConnectionApis(undefined)
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: 'foobar',
        })

        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        expect(api.getState()).toBe(initialState)
        expect(connection.send).not.toBeCalled()

        console.error = originalConsoleError
      })
    })

    describe('JUMP_TO_ACTION...', () => {
      it('updates state without recording with `message.state`', async () => {
        const initialState = { count: 0, increment: () => {} }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const newState = { foo: 'bar' }

        const [connection] = getNamedConnectionApis(undefined)
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: JSON.stringify(newState),
        })
        expect(api.getState()).toStrictEqual({ ...initialState, ...newState })
        expect(connection.send).not.toBeCalled()
      })

      it('does not throw for unparsable `message.state`', async () => {
        const increment = () => {}
        const initialState = { count: 0, increment }
        const api = createStore(devtools(() => initialState, { enabled: true }))
        const originalConsoleError = console.error
        console.error = vi.fn()

        const [connection] = getNamedConnectionApis(undefined)
        connection.send.mockClear()
        const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
        connectionSubscriber({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: 'foobar',
        })

        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        expect(api.getState()).toBe(initialState)
        expect(connection.send).not.toBeCalled()

        console.error = originalConsoleError
      })
    })

    it('IMPORT_STATE, it updates state without recording and inits the last computedState', async () => {
      const initialState = { count: 0, increment: () => {} }
      const api = createStore(devtools(() => initialState, { enabled: true }))
      const nextLiftedState = {
        computedStates: [{ state: { count: 4 } }, { state: { count: 5 } }],
      }

      const [connection] = getNamedConnectionApis(undefined)
      connection.send.mockClear()
      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      connectionSubscriber({
        type: 'DISPATCH',
        payload: {
          type: 'IMPORT_STATE',
          nextLiftedState,
        },
      })
      expect(api.getState()).toStrictEqual({
        ...initialState,
        ...nextLiftedState.computedStates.slice(-1)[0]?.state,
      })
      expect(connection.send).toHaveBeenLastCalledWith(null, nextLiftedState)
    })

    it('PAUSE_RECORDING, it toggles the sending of actions', async () => {
      const api = createStore(devtools(() => ({ count: 0 }), { enabled: true }))

      api.setState({ count: 1 }, false, 'increment')
      const [connection] = getNamedConnectionApis(undefined)
      const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
      expect(connection.send).toHaveBeenLastCalledWith(
        { type: 'increment' },
        { count: 1 },
      )
      connectionSubscriber({
        type: 'DISPATCH',
        payload: { type: 'PAUSE_RECORDING' },
      })

      api.setState({ count: 2 }, false, 'increment')
      expect(connection.send).toHaveBeenLastCalledWith(
        { type: 'increment' },
        { count: 1 },
      )
      connectionSubscriber({
        type: 'DISPATCH',
        payload: { type: 'PAUSE_RECORDING' },
      })

      api.setState({ count: 3 }, false, 'increment')
      expect(connection.send).toHaveBeenLastCalledWith(
        { type: 'increment' },
        { count: 3 },
      )
    })

})
})

describe('with redux middleware', () => {
let api: StoreApi<{
count: number
dispatch: (
action: { type: 'INCREMENT' } | { type: 'DECREMENT' },
) => { type: 'INCREMENT' } | { type: 'DECREMENT' }
}>

it('works as expected', async () => {
api = createStore(
devtools(
redux(
(
{ count },
{ type }: { type: 'INCREMENT' } | { type: 'DECREMENT' },
) => ({
count: count + (type === 'INCREMENT' ? 1 : -1),
}),
{ count: 0 },
),
{ enabled: true },
),
)
;(api as any).dispatch({ type: 'INCREMENT' })
;(api as any).dispatch({ type: 'INCREMENT' })
const [connection] = getNamedConnectionApis(undefined)
const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
connectionSubscriber({
type: 'ACTION',
payload: JSON.stringify({ type: 'DECREMENT' }),
})

    expect(connection.init.mock.calls).toMatchObject([
      [{ count: 0 }] as unknown as Record<string, unknown>,
    ])
    expect(connection.send.mock.calls).toMatchObject([
      [{ type: 'INCREMENT' }, { count: 1 }] as unknown as Record<
        string,
        unknown
      >,
      [{ type: 'INCREMENT' }, { count: 2 }] as unknown as Record<
        string,
        unknown
      >,
      [{ type: 'DECREMENT' }, { count: 1 }] as unknown as Record<
        string,
        unknown
      >,
    ])
    expect(api.getState()).toMatchObject({ count: 1 })

})

it('[DEV-ONLY] warns about misusage', () => {
const originalConsoleWarn = console.warn
console.warn = vi.fn()
;(api as any).dispatch({ type: '**setState' as any })
expect(console.warn).toHaveBeenLastCalledWith(
'[zustand devtools middleware] "**setState" action type is reserved ' +
'to set state from the devtools. Avoid using it.',
)

    console.warn = originalConsoleWarn

})
})

describe('different envs', () => {
let savedConsoleWarn: any
beforeEach(() => {
savedConsoleWarn = console.warn
console.warn = vi.fn()
})
afterEach(() => {
console.warn = savedConsoleWarn
})

it('works in non-browser env', async () => {
const originalWindow = global.window
global.window = undefined as any

    expect(() => {
      createStore(devtools(() => ({ count: 0 }), { enabled: true }))
    }).not.toThrow()

    global.window = originalWindow

})

it('works in react native env', async () => {
const originalWindow = global.window
global.window = {} as any

    expect(() => {
      createStore(devtools(() => ({ count: 0 }), { enabled: true }))
    }).not.toThrow()

    global.window = originalWindow

})
})

it('preserves isRecording after setting from devtools', async () => {
const api = createStore(devtools(() => ({ count: 0 }), { enabled: true }))
const [connection] = getNamedConnectionApis(undefined)
const [connectionSubscriber] = getNamedConnectionSubscribers(undefined)
connectionSubscriber({
type: 'DISPATCH',
payload: { type: 'PAUSE_RECORDING' },
})
connectionSubscriber({
type: 'ACTION',
payload: '{ "type": "\_\_setState", "state": { "foo": "bar" } }',
})

api.setState({ count: 1 })
expect(connection.send).not.toBeCalled()
})

/\* features:

- [] if name is undefined - use multiple devtools connections.
- [] if name and store is defined - use connection for specific 'name'.
- [] if two stores are connected to one 'name' group and.
-      another connected to another 'name' group, then feature should work
- [] check actions with this feature, for multiple stores that store prefixes are added -
- [] - reset
- [] - commit
- [] - rollback
- [] - jump to state, jump to action
- [] - import state
  \*\*/

describe('when redux connection was called on multiple stores with `name` undefined in `devtools` options', () => {
it('should create separate connection for each devtools store with .connect call', async () => {
const options1 = { foo: 'bar', testConnectionId: 'asdf' }
const options2 = { foo: 'barr', testConnectionId: '123asd' }
const initialState1 = { count: 0 }
const initialState2 = { count1: 1 }

    createStore(devtools(() => initialState1, { enabled: true, ...options1 }))
    createStore(devtools(() => initialState2, { enabled: true, ...options2 }))

    expect(extensionConnector.connect).toHaveBeenNthCalledWith(1, options1)
    expect(extensionConnector.connect).toHaveBeenNthCalledWith(2, options2)

})

it('should call .init on each different connection object', async () => {
const options1 = { foo: 'bar', testConnectionId: 'asdf' }
const options2 = { foo: 'barr', testConnectionId: '123asd' }
const initialState1 = { count: 0 }
const initialState2 = { count1: 1 }

    createStore(devtools(() => initialState1, { enabled: true, ...options1 }))
    createStore(devtools(() => initialState2, { enabled: true, ...options2 }))

    const [conn1, conn2] = getUnnamedConnectionApis(
      options1.testConnectionId,
      options2.testConnectionId,
    )
    expect(conn1.init).toHaveBeenCalledWith(initialState1)
    expect(conn2.init).toHaveBeenCalledWith(initialState2)

})

describe('when `store` property was provided in `devtools` call in options', () => {
it('should create single connection for all internal calls of .connect and `store` is not passed to .connect', async () => {
const { devtools: newDevtools } = await import('zustand/middleware')

      const options1 = { store: 'store1123', foo: 'bar1' }
      const options2 = { store: 'store2313132', foo: 'bar2' }
      const initialState1 = { count: 0 }
      const initialState2 = { count1: 1 }

      createStore(
        newDevtools(() => initialState1, { enabled: true, ...options1 }),
      )
      createStore(
        newDevtools(() => initialState2, { enabled: true, ...options2 }),
      )

      expect(extensionConnector.connect).toHaveBeenCalledTimes(1)
      expect(extensionConnector.connect).toHaveBeenCalledWith({
        foo: options1.foo,
      })
    })

    it('should call `.init` on single connection with combined states after each `create(devtools` call', async () => {
      const { devtools: newDevtools } = await import('zustand/middleware')

      const options1 = { store: 'store12' }
      const options2 = { store: 'store21' }
      const initialState1 = { count1: 0 }
      const initialState2 = { count2: 1 }

      createStore(
        newDevtools(() => initialState1, { enabled: true, ...options1 }),
      )
      createStore(
        newDevtools(() => initialState2, { enabled: true, ...options2 }),
      )

      expect(extensionConnector.connect).toHaveBeenCalledTimes(1)
      const [connection] = getNamedConnectionApis(undefined)
      expect(connection.init).toHaveBeenCalledTimes(2)
      expect(connection.init).toHaveBeenNthCalledWith(1, {
        [options1.store]: initialState1,
      })
      expect(connection.init).toHaveBeenNthCalledWith(2, {
        [options1.store]: initialState1,
        [options2.store]: initialState2,
      })
    })

})
})

describe('when redux connection was called on multiple stores with `name` provided in `devtools` options', () => {
describe('when same `name` is provided to all stores in devtools options', () => {
it('should call .connect of redux extension with `name` that was passed from `devtools` options', async () => {
const connectionName = 'test'
const options1 = { name: connectionName, store: 'store1123', foo: 'bar1' }
const options2 = { name: connectionName, store: 'store1414', foo: 'bar1' }
const initialState1 = { count: 0 }
const initialState2 = { count: 2 }

      createStore(devtools(() => initialState1, { enabled: true, ...options1 }))
      createStore(devtools(() => initialState2, { enabled: true, ...options2 }))

      expect(extensionConnector.connect).toHaveBeenCalledTimes(1)
      expect(extensionConnector.connect).toHaveBeenCalledWith({
        foo: options1.foo,
        name: connectionName,
      })
    })

})

describe('when different `name` props were provided for different group of stores in devtools options', () => {
it('should call .connect of redux extension with `name` that was passed from `devtools` options', async () => {
const connectionNameGroup1 = 'test1'
const connectionNameGroup2 = 'test2'
const options1 = {
name: connectionNameGroup1,
store: 'store1123',
foo: 'bar2',
}
const options2 = {
name: connectionNameGroup1,
store: 'store1232',
foo: 'bar3',
}
const options3 = {
name: connectionNameGroup2,
store: 'store61661',
foo: 'bar4',
}
const options4 = {
name: connectionNameGroup2,
store: 'store14632',
foo: 'bar5',
}
const initialState1 = { count: 0 }
const initialState2 = { count: 2 }
const initialState3 = { count: 5 }
const initialState4 = { count: 7 }

      createStore(devtools(() => initialState1, { enabled: true, ...options1 }))
      createStore(devtools(() => initialState2, { enabled: true, ...options2 }))
      createStore(devtools(() => initialState3, { enabled: true, ...options3 }))
      createStore(devtools(() => initialState4, { enabled: true, ...options4 }))

      expect(extensionConnector.connect).toHaveBeenCalledTimes(2)
      expect(extensionConnector.connect).toHaveBeenNthCalledWith(1, {
        foo: options1.foo,
        name: connectionNameGroup1,
      })
      expect(extensionConnector.connect).toHaveBeenNthCalledWith(2, {
        foo: options3.foo,
        name: connectionNameGroup2,
      })
    })

    it('should call `.init` on single connection with combined states after each `create(devtools` call', async () => {
      const { devtools: newDevtools } = await import('zustand/middleware')
      const connectionNameGroup1 = 'test1'
      const connectionNameGroup2 = 'test2'
      const options1 = {
        name: connectionNameGroup1,
        store: 'store1123',
        foo: 'bar2',
      }
      const options2 = {
        name: connectionNameGroup1,
        store: 'store1232',
        foo: 'bar3',
      }
      const options3 = {
        name: connectionNameGroup2,
        store: 'store61661',
        foo: 'bar4',
      }
      const options4 = {
        name: connectionNameGroup2,
        store: 'store14632',
        foo: 'bar5',
      }
      const initialState1 = { count: 0 }
      const initialState2 = { count: 2 }
      const initialState3 = { count: 5 }
      const initialState4 = { count: 7 }

      createStore(
        newDevtools(() => initialState1, { enabled: true, ...options1 }),
      )
      createStore(
        newDevtools(() => initialState2, { enabled: true, ...options2 }),
      )
      createStore(
        newDevtools(() => initialState3, { enabled: true, ...options3 }),
      )
      createStore(
        newDevtools(() => initialState4, { enabled: true, ...options4 }),
      )

      expect(extensionConnector.connect).toHaveBeenCalledTimes(2)
      const [connection1, connection2] = getNamedConnectionApis(
        connectionNameGroup1,
        connectionNameGroup2,
      )
      expect(connection1.init).toHaveBeenCalledTimes(2)
      expect(connection1.init).toHaveBeenNthCalledWith(1, {
        [options1.store]: initialState1,
      })
      expect(connection1.init).toHaveBeenNthCalledWith(2, {
        [options1.store]: initialState1,
        [options2.store]: initialState2,
      })
      expect(connection2.init).toHaveBeenCalledTimes(2)
      expect(connection2.init).toHaveBeenNthCalledWith(1, {
        [options3.store]: initialState3,
      })
      expect(connection2.init).toHaveBeenNthCalledWith(2, {
        [options3.store]: initialState3,
        [options4.store]: initialState4,
      })
    })

    it('preserves isRecording after setting from devtools on proper connection subscriber', async () => {
      const options1 = { name: 'asdf1' }
      const options2 = { name: 'asdf2' }
      const api1 = createStore(
        devtools(() => ({ count: 0 }), { enabled: true, ...options1 }),
      )
      createStore(
        devtools(() => ({ count: 0 }), { enabled: true, ...options2 }),
      )
      const connections = getNamedConnectionApis(options1.name, options2.name)
      const [connectionSubscriber] = getNamedConnectionSubscribers(
        options1.name,
      )
      connectionSubscriber({
        type: 'DISPATCH',
        payload: { type: 'PAUSE_RECORDING' },
      })
      connectionSubscriber({
        type: 'ACTION',
        payload: '{ "type": "__setState", "state": { "foo": "bar" } }',
      })

      api1.setState({ count: 1 })
      connections.forEach((conn) => expect(conn.send).not.toBeCalled())
    })

    describe('with redux middleware', () => {
      let api1: StoreApi<{
        count: number
        dispatch: (
          action: { type: 'INCREMENT' } | { type: 'DECREMENT' },
        ) => { type: 'INCREMENT' } | { type: 'DECREMENT' }
      }>
      let api2: StoreApi<{
        count: number
        dispatch: (
          action: { type: 'INCREMENT' } | { type: 'DECREMENT' },
        ) => { type: 'INCREMENT' } | { type: 'DECREMENT' }
      }>

      it('works as expected', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        api1 = createStore(
          devtools(
            redux(
              (
                { count },
                { type }: { type: 'INCREMENT' } | { type: 'DECREMENT' },
              ) => ({
                count: count + (type === 'INCREMENT' ? 1 : -1),
              }),
              { count: 0 },
            ),
            { enabled: true, ...options1 },
          ),
        )
        api2 = createStore(
          devtools(
            redux(
              (
                { count },
                { type }: { type: 'INCREMENT' } | { type: 'DECREMENT' },
              ) => ({
                count: count + (type === 'INCREMENT' ? 1 : -1),
              }),
              { count: 10 },
            ),
            { enabled: true, ...options2 },
          ),
        )
        ;(api1 as any).dispatch({ type: 'INCREMENT' })
        ;(api1 as any).dispatch({ type: 'INCREMENT' })
        ;(api2 as any).dispatch({ type: 'INCREMENT' })
        ;(api2 as any).dispatch({ type: 'INCREMENT' })
        const [connection1, connection2] = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
        )
        const [connectionSubscriber1, connectionSubscriber2] =
          getUnnamedConnectionSubscribers(
            options1.testConnectionId,
            options2.testConnectionId,
          )
        connectionSubscriber1({
          type: 'ACTION',
          payload: JSON.stringify({ type: 'DECREMENT' }),
        })
        connectionSubscriber2({
          type: 'ACTION',
          payload: JSON.stringify({ type: 'DECREMENT' }),
        })

        expect(connection1.init.mock.calls).toMatchObject([
          [{ count: 0 }] as unknown as Record<string, unknown>,
        ])
        expect(connection2.init.mock.calls).toMatchObject([
          [{ count: 10 }] as unknown as Record<string, unknown>,
        ])
        expect(connection1.send.mock.calls).toMatchObject([
          [{ type: 'INCREMENT' }, { count: 1 }] as unknown as Record<
            string,
            unknown
          >,
          [{ type: 'INCREMENT' }, { count: 2 }] as unknown as Record<
            string,
            unknown
          >,
          [{ type: 'DECREMENT' }, { count: 1 }] as unknown as Record<
            string,
            unknown
          >,
        ])
        expect(connection2.send.mock.calls).toMatchObject([
          [{ type: 'INCREMENT' }, { count: 11 }] as unknown as Record<
            string,
            unknown
          >,
          [{ type: 'INCREMENT' }, { count: 12 }] as unknown as Record<
            string,
            unknown
          >,
          [{ type: 'DECREMENT' }, { count: 11 }] as unknown as Record<
            string,
            unknown
          > as unknown as Record<string, unknown>,
        ])
        expect(api1.getState()).toMatchObject({ count: 1 })
        expect(api2.getState()).toMatchObject({ count: 11 })
      })
    })

})
})

describe('when create devtools was called multiple times with `name` option undefined', () => {
describe('When state changes...', () => {
it("sends { type: setStateName || 'anonymous`, ...rest } as the action with current state, isolated from other connections", async () => {
const options1 = {
enabled: true,
testConnectionId: '123',
}
const options2 = {
enabled: true,
testConnectionId: '324',
}
const options3 = {
enabled: true,
testConnectionId: '412',
}
const api1 = createStore(
devtools(() => ({ count: 0, foo: 'bar' }), options1),
)
createStore(devtools(() => ({ count: 0, foo: 'bar1' }), options2))
createStore(devtools(() => ({ count: 0, foo: 'bar2' }), options3))

      api1.setState({ count: 10 }, false, 'testSetStateName')
      const [connection1, connection2, connection3] = getUnnamedConnectionApis(
        options1.testConnectionId,
        options2.testConnectionId,
        options3.testConnectionId,
      )
      expect(connection1.send).toHaveBeenLastCalledWith(
        { type: 'testSetStateName' },
        { count: 10, foo: 'bar' },
      )
      expect(connection2.send).not.toBeCalled()
      expect(connection3.send).not.toBeCalled()

      api1.setState({ count: 15 }, false, {
        type: 'testSetStateName',
        payload: 15,
      })
      expect(connection1.send).toHaveBeenLastCalledWith(
        { type: 'testSetStateName', payload: 15 },
        { count: 15, foo: 'bar' },
      )
      expect(connection2.send).not.toBeCalled()
      expect(connection3.send).not.toBeCalled()

      api1.setState({ count: 5, foo: 'baz' }, true)
      expect(connection1.send).toHaveBeenLastCalledWith(
        { type: 'anonymous' },
        { count: 5, foo: 'baz' },
      )
      expect(connection2.send).not.toBeCalled()
      expect(connection3.send).not.toBeCalled()
    })

})

describe('when it receives a message of type...', () => {
describe('ACTION...', () => {
it('does nothing, connections isolated from each other', async () => {
const options1 = { testConnectionId: '123' }
const options2 = { testConnectionId: '231' }
const options3 = { testConnectionId: '4342' }
const initialState1 = { count: 0 }
const initialState2 = { count: 2 }
const initialState3 = { count: 3 }
const api1 = createStore(
devtools(() => initialState1, {
enabled: true,
...options1,
}),
)
const api2 = createStore(
devtools(() => initialState2, {
enabled: true,
...options2,
}),
)
const api3 = createStore(
devtools(() => initialState3, {
enabled: true,
...options3,
}),
)
const setState1 = vi.spyOn(api1, 'setState')
const setState2 = vi.spyOn(api2, 'setState')
const setState3 = vi.spyOn(api3, 'setState')

        const [subscriber] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
        )
        subscriber({
          type: 'ACTION',
          payload: '{ "type": "INCREMENT" }',
        })

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        expect(setState1).not.toBeCalled()
        expect(setState2).not.toBeCalled()
        expect(setState3).not.toBeCalled()
      })

      it('unless action type is __setState, connections isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )

        const [connectionSubscriber] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
        )
        connectionSubscriber({
          type: 'ACTION',
          payload: '{ "type": "__setState", "state": { "foo": "bar" } }',
        })

        expect(api1.getState()).toStrictEqual({ ...initialState1, foo: 'bar' })
        expect(api2.getState()).toStrictEqual({ ...initialState2 })
        expect(api3.getState()).toStrictEqual({ ...initialState3 })
      })

      it('does nothing even if there is `api.dispatch`, connections isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        ;(api1 as any).dispatch = vi.fn()
        ;(api2 as any).dispatch = vi.fn()
        ;(api3 as any).dispatch = vi.fn()
        const setState1 = vi.spyOn(api1, 'setState')
        const setState2 = vi.spyOn(api2, 'setState')
        const setState3 = vi.spyOn(api3, 'setState')

        const subscribers = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        const testPayload = {
          type: 'ACTION',
          payload: '{ "type": "INCREMENT" }',
        }
        subscribers.forEach((sub) => sub(testPayload))

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        expect(setState1).not.toBeCalled()
        expect(setState2).not.toBeCalled()
        expect(setState3).not.toBeCalled()
        expect((api1 as any).dispatch).not.toBeCalled()
        expect((api2 as any).dispatch).not.toBeCalled()
        expect((api3 as any).dispatch).not.toBeCalled()
      })

      it('dispatches with `api.dispatch` when `api.dispatchFromDevtools` is set to true, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        ;(api1 as any).dispatch = vi.fn()
        ;(api1 as any).dispatchFromDevtools = true
        ;(api2 as any).dispatch = vi.fn()
        ;(api2 as any).dispatchFromDevtools = true
        ;(api3 as any).dispatch = vi.fn()
        ;(api3 as any).dispatchFromDevtools = true
        const setState1 = vi.spyOn(api1, 'setState')
        const setState2 = vi.spyOn(api2, 'setState')
        const setState3 = vi.spyOn(api3, 'setState')

        const subscribers = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        const getTestPayload = (n: number) => ({
          type: 'ACTION',
          payload: `{ "type": "INCREMENT${n}" }`,
        })
        subscribers.forEach((sub, i) => sub(getTestPayload(i + 1)))

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        expect(setState1).not.toBeCalled()
        expect(setState2).not.toBeCalled()
        expect(setState3).not.toBeCalled()
        expect((api1 as any).dispatch).toHaveBeenLastCalledWith({
          type: 'INCREMENT1',
        })
        expect((api2 as any).dispatch).toHaveBeenLastCalledWith({
          type: 'INCREMENT2',
        })
        expect((api3 as any).dispatch).toHaveBeenLastCalledWith({
          type: 'INCREMENT3',
        })
      })

      it('does not throw for unsupported payload, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        ;(api1 as any).dispatch = vi.fn()
        ;(api1 as any).dispatchFromDevtools = true
        ;(api2 as any).dispatch = vi.fn()
        ;(api2 as any).dispatchFromDevtools = true
        ;(api3 as any).dispatch = vi.fn()
        ;(api3 as any).dispatchFromDevtools = true
        const setState1 = vi.spyOn(api1, 'setState')
        const setState2 = vi.spyOn(api2, 'setState')
        const setState3 = vi.spyOn(api3, 'setState')
        const originalConsoleError = console.error
        console.error = vi.fn()

        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        expect(() => {
          connectionSubscriber1({
            type: 'ACTION',
            payload: 'this.increment1()',
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          1,
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('this.increment1()')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(() => {
          connectionSubscriber1({
            type: 'ACTION',
            payload: 'this.increment2()',
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          2,
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('this.increment2()')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(() => {
          connectionSubscriber1({
            type: 'ACTION',
            payload: 'this.increment3()',
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          3,
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('this.increment3()')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(() => {
          connectionSubscriber1({
            type: 'ACTION',
            payload: { name: 'increment', args: [] },
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          4,
          '[zustand devtools middleware] Unsupported action format',
        )
        expect(() => {
          connectionSubscriber2({
            type: 'ACTION',
            payload: { name: 'increment', args: [] },
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          5,
          '[zustand devtools middleware] Unsupported action format',
        )
        expect(() => {
          connectionSubscriber3({
            type: 'ACTION',
            payload: { name: 'increment', args: [] },
          })
        }).not.toThrow()
        expect(console.error).toHaveBeenNthCalledWith(
          6,
          '[zustand devtools middleware] Unsupported action format',
        )

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        expect(setState1).not.toBeCalled()
        expect(setState2).not.toBeCalled()
        expect(setState3).not.toBeCalled()
        expect((api1 as any).dispatch).not.toBeCalled()
        expect((api2 as any).dispatch).not.toBeCalled()
        expect((api3 as any).dispatch).not.toBeCalled()

        console.error = originalConsoleError
      })
    })

    describe('DISPATCH and payload of type...', () => {
      it('RESET, it inits with initial state, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        api1.setState({ count: 1 })
        api2.setState({ count: 3 })
        api3.setState({ count: 10 })

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        const [connection1, connection2, connection3] = connections
        connections.forEach((conn) => conn.send.mockClear())
        const subscribers = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        const action = {
          type: 'DISPATCH',
          payload: { type: 'RESET' },
        }
        subscribers.forEach((sub) => sub(action))

        expect(api1.getState()).toStrictEqual(initialState1)
        expect(api1.getState()).toStrictEqual(initialState1)
        expect(api1.getState()).toStrictEqual(initialState1)
        expect(connection1.init).toHaveBeenLastCalledWith(initialState1)
        expect(connection2.init).toHaveBeenLastCalledWith(initialState2)
        expect(connection3.init).toHaveBeenLastCalledWith(initialState3)
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())
      })

      it('COMMIT, it inits with current state, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0 }
        const initialState2 = { count: 2 }
        const initialState3 = { count: 5 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        api1.setState({ count: 1 })
        api2.setState({ count: 3 })
        api3.setState({ count: 10 })
        const currentState1 = api1.getState()
        const currentState2 = api2.getState()
        const currentState3 = api3.getState()

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const subscribers = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        const action = {
          type: 'DISPATCH',
          payload: { type: 'COMMIT' },
        }
        subscribers.forEach((sub) => sub(action))

        const [connection1, connection2, connection3] = connections
        expect(connection1.init).toHaveBeenLastCalledWith(currentState1)
        expect(connection2.init).toHaveBeenLastCalledWith(currentState2)
        expect(connection3.init).toHaveBeenLastCalledWith(currentState3)
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())
      })
    })

    describe('ROLLBACK...', () => {
      it('updates state without recording and inits with `message.state, connections are isolated from each other`', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: () => {} }
        const initialState2 = { count: 2, increment: () => {} }
        const initialState3 = { count: 5, increment: () => {} }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const newState1 = { foo: 'bar1' }
        const newState2 = { foo: 'bar2' }
        const newState3 = { foo: 'bar3' }

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: JSON.stringify(newState1),
        })
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: JSON.stringify(newState2),
        })
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: JSON.stringify(newState3),
        })

        expect(api1.getState()).toStrictEqual({
          ...initialState1,
          ...newState1,
        })
        expect(api2.getState()).toStrictEqual({
          ...initialState2,
          ...newState2,
        })
        expect(api3.getState()).toStrictEqual({
          ...initialState3,
          ...newState3,
        })
        const [connection1, connection2, connection3] = connections
        expect(connection1.init).toHaveBeenLastCalledWith({
          ...initialState1,
          ...newState1,
        })
        expect(connection2.init).toHaveBeenLastCalledWith({
          ...initialState2,
          ...newState2,
        })
        expect(connection3.init).toHaveBeenLastCalledWith({
          ...initialState3,
          ...newState3,
        })
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())
      })

      it('does not throw for unparsable `message.state`, connections are isolated from each other', async () => {
        const increment1 = () => {}
        const increment2 = () => {}
        const increment3 = () => {}
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const originalConsoleError = console.error
        console.error = vi.fn()

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.init.mockClear())
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: 'foobar',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: 'foobar1',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar1')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'ROLLBACK' },
          state: 'foobar3',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar3')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        connections.forEach((conn) => {
          expect(conn.init).not.toBeCalled()
          expect(conn.send).not.toBeCalled()
        })

        console.error = originalConsoleError
      })
    })

    describe('JUMP_TO_STATE...', () => {
      const increment1 = () => {}
      const increment2 = () => {}
      const increment3 = () => {}

      it('updates state without recording with `message.state`, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const newState1 = { foo: 'bar1' }
        const newState2 = { foo: 'bar2' }
        const newState3 = { foo: 'bar3' }

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: JSON.stringify(newState1),
        })
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: JSON.stringify(newState2),
        })
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: JSON.stringify(newState3),
        })

        expect(api1.getState()).toStrictEqual({
          ...initialState1,
          ...newState1,
        })
        expect(api2.getState()).toStrictEqual({
          ...initialState2,
          ...newState2,
        })
        expect(api3.getState()).toStrictEqual({
          ...initialState3,
          ...newState3,
        })
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())
      })

      it('does not throw for unparsable `message.state`, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const originalConsoleError = console.error
        console.error = vi.fn()

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )

        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: 'foobar',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: 'foobar2',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar2')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_STATE' },
          state: 'foobar3',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar3')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())

        console.error = originalConsoleError
      })
    })

    describe('JUMP_TO_ACTION...', () => {
      const increment1 = () => {}
      const increment2 = () => {}
      const increment3 = () => {}

      it('updates state without recording with `message.state`, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const newState1 = { foo: 'bar1' }
        const newState2 = { foo: 'bar2' }
        const newState3 = { foo: 'bar3' }

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )

        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: JSON.stringify(newState1),
        })
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: JSON.stringify(newState2),
        })
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: JSON.stringify(newState3),
        })

        expect(api1.getState()).toStrictEqual({
          ...initialState1,
          ...newState1,
        })
        expect(api2.getState()).toStrictEqual({
          ...initialState2,
          ...newState2,
        })
        expect(api3.getState()).toStrictEqual({
          ...initialState3,
          ...newState3,
        })
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())
      })

      it('does not throw for unparsable `message.state`, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const originalConsoleError = console.error
        console.error = vi.fn()

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: 'foobar',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: 'foobar2',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar2')
            } catch (e) {
              return e
            }
          })(),
        )
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'JUMP_TO_ACTION' },
          state: 'foobar3',
        })
        expect(console.error).toHaveBeenLastCalledWith(
          '[zustand devtools middleware] Could not parse the received json',
          (() => {
            try {
              JSON.parse('foobar3')
            } catch (e) {
              return e
            }
          })(),
        )

        expect(api1.getState()).toBe(initialState1)
        expect(api2.getState()).toBe(initialState2)
        expect(api3.getState()).toBe(initialState3)
        connections.forEach((conn) => expect(conn.send).not.toBeCalled())

        console.error = originalConsoleError
      })

      it('IMPORT_STATE, it updates state without recording and inits the last computedState, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const initialState1 = { count: 0, increment: increment1 }
        const initialState2 = { count: 2, increment: increment2 }
        const initialState3 = { count: 5, increment: increment3 }
        const api1 = createStore(
          devtools(() => initialState1, { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => initialState2, { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => initialState3, { enabled: true, ...options3 }),
        )
        const nextLiftedState1 = {
          computedStates: [{ state: { count: 4 } }, { state: { count: 5 } }],
        }
        const nextLiftedState2 = {
          computedStates: [{ state: { count: 20 } }, { state: { count: 8 } }],
        }
        const nextLiftedState3 = {
          computedStates: [{ state: { count: 12 } }, { state: { count: 100 } }],
        }

        const connections = getUnnamedConnectionApis(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )
        connections.forEach((conn) => conn.send.mockClear())
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )

        connectionSubscriber1({
          type: 'DISPATCH',
          payload: {
            type: 'IMPORT_STATE',
            nextLiftedState: nextLiftedState1,
          },
        })
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: {
            type: 'IMPORT_STATE',
            nextLiftedState: nextLiftedState2,
          },
        })
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: {
            type: 'IMPORT_STATE',
            nextLiftedState: nextLiftedState3,
          },
        })

        expect(api1.getState()).toStrictEqual({
          ...initialState1,
          ...nextLiftedState1.computedStates.slice(-1)[0]?.state,
        })
        expect(api2.getState()).toStrictEqual({
          ...initialState2,
          ...nextLiftedState2.computedStates.slice(-1)[0]?.state,
        })
        expect(api3.getState()).toStrictEqual({
          ...initialState3,
          ...nextLiftedState3.computedStates.slice(-1)[0]?.state,
        })
        const [connection1, connection2, connection3] = connections
        expect(connection1.send).toHaveBeenLastCalledWith(
          null,
          nextLiftedState1,
        )
        expect(connection2.send).toHaveBeenLastCalledWith(
          null,
          nextLiftedState2,
        )
        expect(connection3.send).toHaveBeenLastCalledWith(
          null,
          nextLiftedState3,
        )
      })

      it('PAUSE_RECORDING, it toggles the sending of actions, connections are isolated from each other', async () => {
        const options1 = { testConnectionId: 'asdf' }
        const options2 = { testConnectionId: '2f' }
        const options3 = { testConnectionId: 'd2e' }
        const api1 = createStore(
          devtools(() => ({ count: 0 }), { enabled: true, ...options1 }),
        )
        const api2 = createStore(
          devtools(() => ({ count: 2 }), { enabled: true, ...options2 }),
        )
        const api3 = createStore(
          devtools(() => ({ count: 4 }), { enabled: true, ...options3 }),
        )

        const newState1 = { count: 1 }
        const newState2 = { count: 12 }
        const newState3 = { count: 30 }
        api1.setState(newState1, false, 'increment')
        api2.setState(newState2, false, 'increment')
        api3.setState(newState3, false, 'increment')

        const [connection1, connection2, connection3] =
          getUnnamedConnectionApis(
            options1.testConnectionId,
            options2.testConnectionId,
            options3.testConnectionId,
          )
        const [
          connectionSubscriber1,
          connectionSubscriber2,
          connectionSubscriber3,
        ] = getUnnamedConnectionSubscribers(
          options1.testConnectionId,
          options2.testConnectionId,
          options3.testConnectionId,
        )

        expect(connection1.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState1,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api1.setState({ count: 2 }, false, 'increment')
        expect(connection1.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState1,
        )
        connectionSubscriber1({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api1.setState({ count: 3 }, false, 'increment')
        expect(connection1.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          { count: 3 },
        )

        expect(connection2.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState2,
        )
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api2.setState({ count: 2 }, false, 'increment')
        expect(connection2.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState2,
        )
        connectionSubscriber2({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api2.setState({ count: 3 }, false, 'increment')
        expect(connection2.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          { count: 3 },
        )

        expect(connection3.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState3,
        )
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api3.setState({ count: 2 }, false, 'increment')
        expect(connection3.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          newState3,
        )
        connectionSubscriber3({
          type: 'DISPATCH',
          payload: { type: 'PAUSE_RECORDING' },
        })
        api3.setState({ count: 3 }, false, 'increment')
        expect(connection3.send).toHaveBeenLastCalledWith(
          { type: 'increment' },
          { count: 3 },
        )
      })
    })

})
})

describe('when create devtools was called multiple times with `name` and `store` options defined', () => {
describe('when `type` was provided in store state methods as option', () => {
describe('When state changes...', () => {
it("sends { type: setStateName || 'anonymous`, ...rest } as the action with current state", async () => {
const options = {
name: 'testOptionsName',
store: 'someStore',
enabled: true,
}
const api = createStore(
devtools(() => ({ count: 0, foo: 'bar' }), options),
)

        const testStateActionType = 'testSetStateName'

        api.setState({ count: 10 }, false, testStateActionType)
        const [connection] = getNamedConnectionApis(options.name)
        expect(connection.send).toHaveBeenLastCalledWith(
          { type: `${options.store}/${testStateActionType}` },
          { [options.store]: { count: 10, foo: 'bar' } },
        )

        api.setState({ count: 15 }, false, {
          type: testStateActionType,
          payload: 15,
        })
        expect(connection.send).toHaveBeenLastCalledWith(
          { type: `${options.store}/${testStateActionType}`, payload: 15 },
          { [options.store]: { count: 15, foo: 'bar' } },
        )

        api.setState({ count: 5, foo: 'baz' }, true)
        expect(connection.send).toHaveBeenLastCalledWith(
          { type: `${options.store}/anonymous` },
          { [options.store]: { count: 5, foo: 'baz' } },
        )
      })
    })

    describe('when it receives a message of type...', () => {
      describe('ACTION...', () => {
        it('does nothing, connections isolated from each other', async () => {
          const options1 = { testConnectionId: '123', store: 'store1' }
          const options2 = { testConnectionId: '231', store: 'store2' }
          const initialState1 = { count: 0 }
          const initialState2 = { count: 2 }
          const initialState3 = { count: 5 }
          const initialState4 = { count: 6 }
          const api1 = createStore(
            devtools(() => initialState1, {
              enabled: true,
              ...options1,
            }),
          )
          const api2 = createStore(
            devtools(() => initialState2, {
              enabled: true,
              ...options1,
            }),
          )
          const api3 = createStore(
            devtools(() => initialState3, {
              enabled: true,
              ...options2,
            }),
          )
          const api4 = createStore(
            devtools(() => initialState4, {
              enabled: true,
              ...options2,
            }),
          )
          const setState1 = vi.spyOn(api1, 'setState')
          const setState2 = vi.spyOn(api2, 'setState')
          const setState3 = vi.spyOn(api3, 'setState')
          const setState4 = vi.spyOn(api4, 'setState')

          const [subscriber] = getUnnamedConnectionSubscribers(
            options1.testConnectionId,
          )
          subscriber({
            type: 'ACTION',
            payload: '{ "type": "INCREMENT" }',
          })

          expect(api1.getState()).toBe(initialState1)
          expect(api2.getState()).toBe(initialState2)
          expect(api3.getState()).toBe(initialState3)
          expect(api4.getState()).toBe(initialState4)
          expect(setState1).not.toBeCalled()
          expect(setState2).not.toBeCalled()
          expect(setState3).not.toBeCalled()
          expect(setState4).not.toBeCalled()
        })

        it('unless action type is __setState, connections isolated from each other', async () => {
          const name1 = 'name1'
          const name2 = 'name2'
          const store1 = 'someStore1'
          const store2 = 'someStore2'
          const options1 = {
            name: name1,
            store: store1,
            testStore: store1,
          }
          const options2 = {
            name: name2,
            store: store2,
            testStore: store2,
          }
          const initialState1 = { count: 0 }
          const initialState2 = { count: 2 }
          const api1 = createStore(
            devtools(() => initialState1, { enabled: true, ...options1 }),
          )
          const api2 = createStore(
            devtools(() => initialState2, { enabled: true, ...options2 }),
          )
          const originalConsoleError = console.error
          console.error = vi.fn()

          const [connectionSubscriber] = getNamedConnectionSubscribers(
            getKeyFromOptions(options1),
          )
          connectionSubscriber({
            type: 'ACTION',
            payload:
              '{ "type": "__setState", "state": { "foo": "bar", "foo2": "bar2" } }',
          })

          expect(console.error).toHaveBeenCalledWith(
            expect.stringContaining(
              '[zustand devtools middleware] Unsupported __setState',
            ),
          )
          connectionSubscriber({
            type: 'ACTION',
            payload: `{ "type": "__setState", "state": { "${options1.store}": { "foo": "bar" } } }`,
          })

          expect(console.error).toHaveBeenCalledTimes(1)

          expect(api1.getState()).toStrictEqual({
            ...initialState1,
            foo: 'bar',
          })
          expect(api2.getState()).toStrictEqual({ ...initialState2 })

          console.error = originalConsoleError
        })

        it('does nothing even if there is `api.dispatch`, connections isolated from each other', async () => {
          const { devtools: newDevtools } = await import('zustand/middleware')

          const name1 = 'name1'
          const name2 = 'name2'
          const store1 = 'someStore1'
          const store2 = 'someStore2'
          const options1 = {
            name: name1,
            store: store1,
            testStore: store1,
          }
          const options2 = {
            name: name2,
            store: store2,
            testStore: store2,
          }
          const initialState1 = { count: 0 }
          const initialState2 = { count: 2 }
          const api1 = createStore(
            newDevtools(() => initialState1, { enabled: true, ...options1 }),
          )
          const api2 = createStore(
            newDevtools(() => initialState2, { enabled: true, ...options2 }),
          )
          ;(api1 as any).dispatch = vi.fn()
          ;(api2 as any).dispatch = vi.fn()
          const setState1 = vi.spyOn(api1, 'setState')
          const setState2 = vi.spyOn(api2, 'setState')

          const subscribers = getNamedConnectionSubscribers(
            getKeyFromOptions(options1),
            getKeyFromOptions(options2),
          )
          const testPayload = {
            type: 'ACTION',
            payload: '{ "type": "INCREMENT" }',
          }
          subscribers.forEach((sub) => sub(testPayload))

          expect(api1.getState()).toBe(initialState1)
          expect(api2.getState()).toBe(initialState2)
          expect(setState1).not.toBeCalled()
          expect(setState2).not.toBeCalled()
          expect((api1 as any).dispatch).not.toBeCalled()
          expect((api2 as any).dispatch).not.toBeCalled()
        })

        it('dispatches with `api.dispatch` when `api.dispatchFromDevtools` is set to true, connections are isolated from each other', async () => {
          const { devtools: newDevtools } = await import('zustand/middleware')
          const name1 = 'name1'
          const name2 = 'name2'
          const store1 = 'someStore1'
          const store2 = 'someStore2'
          const options1 = {
            name: name1,
            store: store1,
            testStore: store1,
          }
          const options2 = {
            name: name2,
            store: store2,
            testStore: store2,
          }
          const initialState1 = { count: 0 }
          const initialState2 = { count: 2 }
          const api1 = createStore(
            newDevtools(() => initialState1, { enabled: true, ...options1 }),
          )
          const api2 = createStore(
            newDevtools(() => initialState2, { enabled: true, ...options2 }),
          )
          ;(api1 as any).dispatch = vi.fn()
          ;(api1 as any).dispatchFromDevtools = true
          ;(api2 as any).dispatch = vi.fn()
          ;(api2 as any).dispatchFromDevtools = true
          const setState1 = vi.spyOn(api1, 'setState')
          const setState2 = vi.spyOn(api2, 'setState')

          const subscribers = getNamedConnectionSubscribers(
            getKeyFromOptions(options1),
            getKeyFromOptions(options2),
          )
          const getTestPayload = (n: number) => ({
            type: 'ACTION',
            payload: `{ "type": "INCREMENT${n}" }`,
          })
          subscribers.forEach((sub, i) => sub(getTestPayload(i + 1)))

          expect(api1.getState()).toBe(initialState1)
          expect(api2.getState()).toBe(initialState2)
          expect(setState1).not.toBeCalled()
          expect(setState2).not.toBeCalled()
          expect((api1 as any).dispatch).toHaveBeenLastCalledWith({
            type: 'INCREMENT1',
          })
          expect((api2 as any).dispatch).toHaveBeenLastCalledWith({
            type: 'INCREMENT2',
          })
        })
      })
    })

})
})
</file>

<file path="tests/middlewareTypes.test.tsx">
/* eslint @typescript-eslint/no-unused-expressions: off */ // FIXME
/* eslint react-compiler/react-compiler: off */

import { describe, expect, expectTypeOf, it } from 'vitest'
import { create } from 'zustand'
import type { StateCreator, StoreApi, StoreMutatorIdentifier } from 'zustand'
import {
combine,
devtools,
persist,
redux,
subscribeWithSelector,
} from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { createStore } from 'zustand/vanilla'

type CounterState = {
count: number
inc: () => void
}

type ExampleStateCreator<T, A> = <
Mps extends [StoreMutatorIdentifier, unknown][] = [],
Mcs extends [StoreMutatorIdentifier, unknown][] = [],
U = T,

> (
> f: StateCreator<T, [...Mps, ['org/example', A]], Mcs>,
> ) => StateCreator<T, Mps, [['org/example', A], ...Mcs], U & A>

type Write<T, U> = Omit<T, keyof U> & U
type StoreModifyAllButSetState<S, A> = S extends {
getState: () => infer T
}
? Omit<StoreApi<T & A>, 'setState'>
: never

declare module 'zustand/vanilla' {
interface StoreMutators<S, A> {
'org/example': Write<S, StoreModifyAllButSetState<S, A>>
}
}

describe('counter state spec (no middleware)', () => {
it('no middleware', () => {
const useBoundStore = create<CounterState>((set, get) => ({
count: 0,
inc: () => set({ count: get().count + 1 }, false),
}))
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
return <></>
}
TestComponent
})
})

describe('counter state spec (single middleware)', () => {
it('immer', () => {
const useBoundStore = create<CounterState>()(
immer((set, get) => ({
count: 0,
inc: () =>
set((state) => {
state.count = get().count + 1
}),
})),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      immer(() => ({ count: 0 })),
    )
    expect(testSubtyping).toBeDefined()

    const exampleMiddleware = ((initializer) =>
      initializer) as ExampleStateCreator<CounterState, { additional: number }>

    const testDerivedSetStateType = create<CounterState>()(
      exampleMiddleware(
        immer((set, get) => ({
          count: 0,
          inc: () =>
            set((state) => {
              state.count = get().count + 1
              type OmitFn<T> = Exclude<T, (...args: any[]) => any>
              expectTypeOf<
                OmitFn<Parameters<typeof set>[0]>
              >().not.toMatchTypeOf<{ additional: number }>()
              expectTypeOf<ReturnType<typeof get>>().toMatchTypeOf<{
                additional: number
              }>()
            }),
        })),
      ),
    )
    expect(testDerivedSetStateType).toBeDefined()
    // the type of the `getState` should include our new property
    expectTypeOf(testDerivedSetStateType.getState()).toMatchTypeOf<{
      additional: number
    }>()
    // the type of the `setState` should not include our new property
    expectTypeOf<
      Parameters<typeof testDerivedSetStateType.setState>[0]
    >().not.toMatchTypeOf<{
      additional: number
    }>()

})

it('redux', () => {
const useBoundStore = create(
redux<{ count: number }, { type: 'INC' }>(
(state, action) => {
switch (action.type) {
case 'INC':
return { ...state, count: state.count + 1 }
default:
return state
}
},
{ count: 0 },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) \* 2
useBoundStore((s) => s.dispatch)({ type: 'INC' })
useBoundStore().dispatch({ type: 'INC' })
useBoundStore.dispatch({ type: 'INC' })
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      redux((x) => x, { count: 0 }),
    )
    expect(testSubtyping).toBeDefined()

})

it('devtools', () => {
const useBoundStore = create<CounterState>()(
devtools(
(set, get) => ({
count: 0,
inc: () => set({ count: get().count + 1 }, false, 'inc'),
}),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      devtools(() => ({ count: 0 })),
    )
    expect(testSubtyping).toBeDefined()

})

it('devtools #2700', () => {
type TableStore = {
table: string
}
const useStoreA = create<TableStore | null>()(
devtools((\_set) => null, { name: 'table-storage' }),
)
expect(useStoreA).toBeDefined()
const useStoreB = create<TableStore | null>()(
devtools(() => null, { name: 'table-storage' }),
)
expect(useStoreB).toBeDefined()
const useStoreC = create<TableStore | null>()((\_set) => null)
expect(useStoreC).toBeDefined()
const useStoreD = create<TableStore | null>()(() => null)
expect(useStoreD).toBeDefined()
})

it('subscribeWithSelector', () => {
const useBoundStore = create<CounterState>()(
subscribeWithSelector((set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false),
})),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      subscribeWithSelector(() => ({ count: 0 })),
    )
    expect(testSubtyping).toBeDefined()

})

it('combine', () => {
const useBoundStore = create(
combine({ count: 1 }, (set, get) => ({
inc: () => set({ count: get().count + 1 }, false),
})),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      combine({ count: 0 }, () => ({})),
    )
    expect(testSubtyping).toBeDefined()

})

it('persist', () => {
const useBoundStore = create<CounterState>()(
persist(
(set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false),
}),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent

    const testSubtyping: StoreApi<object> = createStore(
      persist(() => ({ count: 0 }), { name: 'prefix' }),
    )
    expect(testSubtyping).toBeDefined()

})

it('persist with partialize', () => {
const useBoundStore = create<CounterState>()(
persist(
(set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false),
}),
{ name: 'prefix', partialize: (s) => s.count },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.persist.hasHydrated()
useBoundStore.persist.setOptions({
// @ts-expect-error to test if the partialized state is inferred as number
partialize: () => 'not-a-number',
})
return <></>
}
TestComponent
})

it('persist without custom api (#638)', () => {
const useBoundStore = create<CounterState>()(
persist(
(set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false),
}),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
return <></>
}
TestComponent
})
})

describe('counter state spec (double middleware)', () => {
it('immer & devtools', () => {
const useBoundStore = create<CounterState>()(
immer(
devtools(
(set, get) => ({
count: 0,
inc: () =>
set(
(state) => {
state.count = get().count + 1
},
false,
{ type: 'inc', by: 1 },
),
}),
{ name: 'prefix' },
),
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent
})

it('devtools & redux', () => {
const useBoundStore = create(
devtools(
redux(
(state, action: { type: 'INC' }) => {
switch (action.type) {
case 'INC':
return { ...state, count: state.count + 1 }
default:
return state
}
},
{ count: 0 },
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) \* 2
useBoundStore((s) => s.dispatch)({ type: 'INC' })
useBoundStore().dispatch({ type: 'INC' })
useBoundStore.dispatch({ type: 'INC' })
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent
})

it('devtools & combine', () => {
const useBoundStore = create(
devtools(
combine({ count: 1 }, (set, get) => ({
inc: () => set({ count: get().count + 1 }, false, 'inc'),
})),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent
})

it('subscribeWithSelector & combine', () => {
const useBoundStore = create(
subscribeWithSelector(
combine({ count: 1 }, (set, get) => ({
inc: () => set({ count: get().count + 1 }, false),
})),
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
return <></>
}
TestComponent
})

it('devtools & subscribeWithSelector', () => {
const useBoundStore = create<CounterState>()(
devtools(
subscribeWithSelector((set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false, 'inc'),
})),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent
})

it('devtools & persist', () => {
const useBoundStore = create<CounterState>()(
devtools(
persist(
(set, get) => ({
count: 1,
inc: () => set({ count: get().count + 1 }, false, 'inc'),
}),
{ name: 'count' },
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.setState({ count: 0 }, false, 'reset')
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})
})

describe('counter state spec (triple middleware)', () => {
it('devtools & persist & immer', () => {
const useBoundStore = create<CounterState>()(
devtools(
persist(
immer((set, get) => ({
count: 0,
inc: () =>
set((state) => {
state.count = get().count + 1
}),
})),
{ name: 'count' },
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count \* 2
useBoundStore.getState().inc()
useBoundStore.setState({ count: 0 }, false, 'reset')
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})

it('devtools & subscribeWithSelector & combine', () => {
const useBoundStore = create(
devtools(
subscribeWithSelector(
combine({ count: 1 }, (set, get) => ({
inc: () => set({ count: get().count + 1 }, false, 'inc'),
})),
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
useBoundStore.setState({ count: 0 }, false, 'reset')
return <></>
}
TestComponent
})

it('devtools & subscribeWithSelector & persist', () => {
const useBoundStore = create<CounterState>()(
devtools(
subscribeWithSelector(
persist(
(set, get) => ({
count: 0,
inc: () => set({ count: get().count + 1 }, false),
}),
{ name: 'count' },
),
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
useBoundStore.setState({ count: 0 }, false, 'reset')
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})
})

describe('counter state spec (quadruple middleware)', () => {
it('devtools & subscribeWithSelector & persist & immer (#616)', () => {
const useBoundStore = create<CounterState>()(
devtools(
subscribeWithSelector(
persist(
immer((set, get) => ({
count: 0,
inc: () =>
set((state) => {
state.count = get().count + 1
}),
})),
{ name: 'count' },
),
),
{ name: 'prefix' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
useBoundStore.setState({ count: 0 }, false, 'reset')
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})
})

describe('more complex state spec with subscribeWithSelector', () => {
it('#619, #632', () => {
const useBoundStore = create(
subscribeWithSelector(
persist(
() => ({
foo: true,
}),
{ name: 'name' },
),
),
)
const TestComponent = () => {
useBoundStore((s) => s.foo)
useBoundStore().foo
useBoundStore.getState().foo
useBoundStore.subscribe(
(state) => state.foo,
(foo) => console.log(foo),
)
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})

it('#631', () => {
type MyState = {
foo: number | null
}
const useBoundStore = create<MyState>()(
subscribeWithSelector(
() =>
({
foo: 1,
}) as MyState, // NOTE: Asserting the entire state works too.
),
)
const TestComponent = () => {
useBoundStore((s) => s.foo)
useBoundStore().foo
useBoundStore.getState().foo
useBoundStore.subscribe(
(state) => state.foo,
(foo) => console.log(foo),
)
return <></>
}
TestComponent
})

it('#650', () => {
type MyState = {
token: string | undefined
authenticated: boolean
authenticate: (username: string, password: string) => Promise<void>
}
const useBoundStore = create<MyState>()(
persist(
(set) => ({
token: undefined,
authenticated: false,
authenticate: async (\_username, \_password) => {
set({ authenticated: true })
},
}),
{ name: 'auth-store' },
),
)
const TestComponent = () => {
useBoundStore((s) => s.authenticated)
useBoundStore((s) => s.authenticate)('u', 'p')
useBoundStore().authenticated
useBoundStore().authenticate('u', 'p')
useBoundStore.getState().authenticated
useBoundStore.getState().authenticate('u', 'p')
return <></>
}
TestComponent
})
})

describe('create with explicitly annotated mutators', () => {
it('subscribeWithSelector & persist', () => {
const useBoundStore = create<
CounterState,
[
['zustand/subscribeWithSelector', never],
['zustand/persist', CounterState],
] >(
subscribeWithSelector(
persist(
(set, get) => ({
count: 0,
inc: () => set({ count: get().count + 1 }, false),
}),
{ name: 'count' },
),
),
)
const TestComponent = () => {
useBoundStore((s) => s.count) _ 2
useBoundStore((s) => s.inc)()
useBoundStore().count _ 2
useBoundStore().inc()
useBoundStore.getState().count _ 2
useBoundStore.getState().inc()
useBoundStore.subscribe(
(state) => state.count,
(count) => console.log(count _ 2),
)
useBoundStore.setState({ count: 0 }, false)
useBoundStore.persist.hasHydrated()
return <></>
}
TestComponent
})
})
</file>

<file path="tests/persistAsync.test.tsx">
import { StrictMode, useEffect } from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { replacer, reviver } from './test-utils'

const createPersistantStore = (initialValue: string | null) => {
let state = initialValue

const getItem = async (): Promise<string | null> => {
getItemSpy()
return state
}
const setItem = async (name: string, newState: string) => {
setItemSpy(name, newState)
state = newState
}

const removeItem = async (name: string) => {
removeItemSpy(name)
state = null
}

const getItemSpy = vi.fn()
const setItemSpy = vi.fn()
const removeItemSpy = vi.fn()

return {
storage: { getItem, setItem, removeItem },
getItemSpy,
setItemSpy,
removeItemSpy,
}
}

describe('persist middleware with async configuration', () => {
const consoleError = console.error
afterEach(() => {
console.error = consoleError
})

it('can rehydrate state', async () => {
const onRehydrateStorageSpy = vi.fn()
const storage = {
getItem: async (name: string) =>
JSON.stringify({
state: { count: 42, name },
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(
        () => ({
          count: 0,
          name: 'empty',
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        },
      ),
    )

    function Counter() {
      const { count, name } = useBoundStore()
      return (
        <div>
          count: {count}, name: {name}
        </div>
      )
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0, name: empty')
    await screen.findByText('count: 42, name: test-storage')
    expect(onRehydrateStorageSpy).toBeCalledWith(
      { count: 42, name: 'test-storage' },
      undefined,
    )

})

it('can throw rehydrate error', async () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: async () => {
        throw new Error('getItem error')
      },
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith(
        undefined,
        new Error('getItem error'),
      )
    })

})

it('can persist state', async () => {
const { storage, setItemSpy } = createPersistantStore(null)

    const createStore = () => {
      const onRehydrateStorageSpy = vi.fn()
      const useBoundStore = create(
        persist(() => ({ count: 0 }), {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        }),
      )
      return { useBoundStore, onRehydrateStorageSpy }
    }

    // Initialize from empty storage
    const { useBoundStore, onRehydrateStorageSpy } = createStore()

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 }, undefined)
    })

    // Write something to the store
    act(() => useBoundStore.setState({ count: 42 }))
    await screen.findByText('count: 42')
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({ state: { count: 42 }, version: 0 }),
    )

    // Create the same store a second time and check if the persisted state
    // is loaded correctly
    const {
      useBoundStore: useBoundStore2,
      onRehydrateStorageSpy: onRehydrateStorageSpy2,
    } = createStore()
    function Counter2() {
      const { count } = useBoundStore2()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter2 />
      </StrictMode>,
    )

    await screen.findByText('count: 42')
    await waitFor(() => {
      expect(onRehydrateStorageSpy2).toBeCalledWith({ count: 42 }, undefined)
    })

})

it('can async migrate persisted state', async () => {
const setItemSpy = vi.fn()
const onRehydrateStorageSpy = vi.fn()
const migrateSpy = vi.fn(() => Promise.resolve({ count: 99 }))

    const storage = {
      getItem: async () =>
        JSON.stringify({
          state: { count: 42 },
          version: 12,
        }),
      setItem: setItemSpy,
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
        migrate: migrateSpy,
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')
    await screen.findByText('count: 99')
    expect(migrateSpy).toBeCalledWith({ count: 42 }, 12)
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({
        state: { count: 99 },
        version: 13,
      }),
    )
    expect(onRehydrateStorageSpy).toBeCalledWith({ count: 99 }, undefined)

})

it('can merge partial persisted state', async () => {
const storage = {
getItem: async () =>
JSON.stringify({
state: { count: 42 },
}),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create<{
      count: number
      name: string
      setName: (name: string) => void
    }>()(
      persist(
        (set) => ({
          count: 0,
          name: 'unknown',
          setName: (name: string) => {
            set({ name })
          },
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
        },
      ),
    )

    function Component() {
      const { count, setName, name } = useBoundStore()
      useEffect(() => {
        setName('test')
      }, [setName])
      return (
        <div>
          <div>count: {count}</div>
          <div>name: {name}</div>
        </div>
      )
    }

    render(
      <StrictMode>
        <Component />
      </StrictMode>,
    )

    await screen.findByText('count: 42')
    await screen.findByText('name: test')

    expect(useBoundStore.getState()).toEqual(
      expect.objectContaining({
        count: 42,
        name: 'test',
      }),
    )

})

it('can correclty handle a missing migrate function', async () => {
console.error = vi.fn()
const onRehydrateStorageSpy = vi.fn()
const storage = {
getItem: async () =>
JSON.stringify({
state: { count: 42 },
version: 12,
}),
setItem: (\_: string, \_value: string) => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled()
    })

    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 }, undefined)
    })

})

it('can throw migrate error', async () => {
console.error = vi.fn()
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: async () =>
        JSON.stringify({
          state: {},
          version: 12,
        }),
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        migrate: () => {
          throw new Error('migrate error')
        },
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith(
        undefined,
        new Error('migrate error'),
      )
    })

})

it('passes the latest state to onRehydrateStorage and onHydrate on first hydrate', async () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: async () => JSON.stringify({ state: { count: 1 } }),
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: onRehydrateStorageSpy,
      }),
    )

    /**
     * NOTE: It's currently not possible to add an 'onHydrate' listener which will be
     * invoked prior to the first hydration. This is because, during first hydration,
     * the 'onHydrate' listener set (which will be empty) is evaluated before the
     * 'persist' API is exposed to the caller of 'create'/'createStore'.
     *
     * const onHydrateSpy = vi.fn()
     * useBoundStore.persist.onHydrate(onHydrateSpy)
     * ...
     * await waitFor(() => expect(onHydrateSpy).toBeCalledWith({ count: 0 }))
     */

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 1')

    // The 'onRehydrateStorage' spy is invoked prior to rehydration, so it should
    // be passed the default state.
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 })
    })

})

it('gives the merged state to onRehydrateStorage', async () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: async () =>
        JSON.stringify({
          state: { count: 1 },
          version: 0,
        }),
      setItem: () => {},
      removeItem: () => {},
    }

    const unstorableMethod = () => {}

    const useBoundStore = create(
      persist(() => ({ count: 0, unstorableMethod }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 0')
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith(
        { count: 1, unstorableMethod },
        undefined,
      )
    })

})

it('can custom merge the stored state', async () => {
const storage = {
getItem: async () =>
JSON.stringify({
state: {
count: 1,
actions: {},
},
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const unstorableMethod = () => {}

    const useBoundStore = create(
      persist(() => ({ count: 0, actions: { unstorableMethod } }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        merge: (_persistedState, currentState) => {
          const persistedState = _persistedState as any
          delete persistedState.actions

          return {
            ...currentState,
            ...persistedState,
          }
        },
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 1')
    expect(useBoundStore.getState()).toEqual({
      count: 1,
      actions: {
        unstorableMethod,
      },
    })

})

it("can merge the state when the storage item doesn't have a version", async () => {
const storage = {
getItem: async () =>
JSON.stringify({
state: {
count: 1,
},
}),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 1')
    expect(useBoundStore.getState()).toEqual({
      count: 1,
    })

})

it('can manually rehydrate through the api', async () => {
const storageValue = '{"state":{"count":1},"version":0}'

    const storage = {
      getItem: async () => '',
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    storage.getItem = async () => storageValue
    await useBoundStore.persist.rehydrate()
    expect(useBoundStore.getState()).toEqual({
      count: 1,
    })

})

it('can check if the store has been hydrated through the api', async () => {
const storage = {
getItem: async () => null,
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )
    expect(useBoundStore.persist.hasHydrated()).toBe(false)
    await new Promise((resolve) =>
      useBoundStore.persist.onFinishHydration(resolve),
    )
    expect(useBoundStore.persist.hasHydrated()).toBe(true)

    await useBoundStore.persist.rehydrate()
    expect(useBoundStore.persist.hasHydrated()).toBe(true)

})

it('can skip initial hydration', async () => {
const storage = {
getItem: async (name: string) => ({
state: { count: 42, name },
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const onRehydrateStorageSpy = vi.fn()
    const useBoundStore = create(
      persist(
        () => ({
          count: 0,
          name: 'empty',
        }),
        {
          name: 'test-storage',
          storage: storage,
          onRehydrateStorage: () => onRehydrateStorageSpy,
          skipHydration: true,
        },
      ),
    )

    expect(useBoundStore.getState()).toEqual({
      count: 0,
      name: 'empty',
    })

    // Because `skipHydration` is only in newImpl and the hydration function for newImpl is now a promise
    // In the default case we would need to await `onFinishHydration` to assert the auto hydration has completed
    // As we are testing the skip hydration case we await nextTick, to make sure the store is initialised
    await new Promise((resolve) => process.nextTick(resolve))

    // Asserting store hasn't hydrated from nextTick
    expect(useBoundStore.persist.hasHydrated()).toBe(false)

    await useBoundStore.persist.rehydrate()

    expect(useBoundStore.getState()).toEqual({
      count: 42,
      name: 'test-storage',
    })
    expect(onRehydrateStorageSpy).toBeCalledWith(
      { count: 42, name: 'test-storage' },
      undefined,
    )

})

it('handles state updates during onRehydrateStorage', async () => {
const storage = {
getItem: async () => JSON.stringify({ state: { count: 1 } }),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create<{ count: number; inc: () => void }>()(
      persist(
        (set) => ({
          count: 0,
          inc: () => set((s) => ({ count: s.count + 1 })),
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => (s) => s?.inc(),
        },
      ),
    )

    function Counter() {
      const { count } = useBoundStore()
      return <div>count: {count}</div>
    }

    render(
      <StrictMode>
        <Counter />
      </StrictMode>,
    )

    await screen.findByText('count: 2')
    expect(useBoundStore.getState().count).toEqual(2)

})

it('can rehydrate state with custom deserialized Map', async () => {
const onRehydrateStorageSpy = vi.fn()
const storage = {
getItem: async () =>
JSON.stringify({
state: {
map: { type: 'Map', value: [['foo', 'bar']] },
},
}),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(
        () => ({
          map: new Map(),
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage, { replacer, reviver }),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        },
      ),
    )

    function MapDisplay() {
      const { map } = useBoundStore()
      return <div>map: {map.get('foo')}</div>
    }

    render(
      <StrictMode>
        <MapDisplay />
      </StrictMode>,
    )

    await screen.findByText('map: bar')
    expect(onRehydrateStorageSpy).toBeCalledWith(
      { map: new Map([['foo', 'bar']]) },
      undefined,
    )

})

it('can persist state with custom serialization of Map', async () => {
const { storage, setItemSpy } = createPersistantStore(null)
const map = new Map()

    const createStore = () => {
      const onRehydrateStorageSpy = vi.fn()
      const useBoundStore = create(
        persist(() => ({ map }), {
          name: 'test-storage',
          storage: createJSONStorage(() => storage, { replacer, reviver }),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        }),
      )
      return { useBoundStore, onRehydrateStorageSpy }
    }

    // Initialize from empty storage
    const { useBoundStore, onRehydrateStorageSpy } = createStore()

    function MapDisplay() {
      const { map } = useBoundStore()
      return <div>map-content: {map.get('foo')}</div>
    }

    render(
      <StrictMode>
        <MapDisplay />
      </StrictMode>,
    )

    await screen.findByText('map-content:')
    await waitFor(() => {
      expect(onRehydrateStorageSpy).toBeCalledWith({ map }, undefined)
    })

    // Write something to the store
    const updatedMap = new Map(map).set('foo', 'bar')
    act(() => useBoundStore.setState({ map: updatedMap }))
    await screen.findByText('map-content: bar')

    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({
        state: { map: { type: 'Map', value: [['foo', 'bar']] } },
        version: 0,
      }),
    )

    // Create the same store a second time and check if the persisted state
    // is loaded correctly
    const {
      useBoundStore: useBoundStore2,
      onRehydrateStorageSpy: onRehydrateStorageSpy2,
    } = createStore()
    function MapDisplay2() {
      const { map } = useBoundStore2()
      return <div>map-content: {map.get('foo')}</div>
    }

    render(
      <StrictMode>
        <MapDisplay2 />
      </StrictMode>,
    )

    await screen.findByText('map-content: bar')
    await waitFor(() => {
      expect(onRehydrateStorageSpy2).toBeCalledWith(
        { map: updatedMap },
        undefined,
      )
    })

})
})
</file>

<file path="tests/persistSync.test.tsx">
import { afterEach, describe, expect, it, vi } from 'vitest'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { replacer, reviver } from './test-utils'

const createPersistentStore = (initialValue: string | null) => {
let state = initialValue

const getItem = (): string | null => {
getItemSpy()
return state
}
const setItem = (name: string, newState: string) => {
setItemSpy(name, newState)
state = newState
}
const removeItem = (name: string) => {
removeItemSpy(name)
state = null
}

const getItemSpy = vi.fn()
const setItemSpy = vi.fn()
const removeItemSpy = vi.fn()

return {
storage: { getItem, setItem, removeItem },
getItemSpy,
setItemSpy,
}
}

describe('persist middleware with sync configuration', () => {
const consoleError = console.error
afterEach(() => {
console.error = consoleError
})

it('can rehydrate state', () => {
const storage = {
getItem: (name: string) =>
JSON.stringify({
state: { count: 42, name },
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const onRehydrateStorageSpy = vi.fn()
    const useBoundStore = create(
      persist(
        () => ({
          count: 0,
          name: 'empty',
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        },
      ),
    )

    expect(useBoundStore.getState()).toEqual({
      count: 42,
      name: 'test-storage',
    })
    expect(onRehydrateStorageSpy).toBeCalledWith(
      { count: 42, name: 'test-storage' },
      undefined,
    )

})

it('can throw rehydrate error', () => {
const storage = {
getItem: () => {
throw new Error('getItem error')
},
setItem: () => {},
removeItem: () => {},
}

    const spy = vi.fn()
    create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => spy,
      }),
    )

    expect(spy).toBeCalledWith(undefined, new Error('getItem error'))

})

it('can persist state', () => {
const { storage, setItemSpy } = createPersistentStore(null)

    const createStore = () => {
      const onRehydrateStorageSpy = vi.fn()
      const useBoundStore = create(
        persist(() => ({ count: 0 }), {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        }),
      )
      return { useBoundStore, onRehydrateStorageSpy }
    }

    // Initialize from empty storage
    const { useBoundStore, onRehydrateStorageSpy } = createStore()
    expect(useBoundStore.getState()).toEqual({ count: 0 })
    expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 }, undefined)

    // Write something to the store
    useBoundStore.setState({ count: 42 })
    expect(useBoundStore.getState()).toEqual({ count: 42 })
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({ state: { count: 42 }, version: 0 }),
    )

    // Create the same store a second time and check if the persisted state
    // is loaded correctly
    const {
      useBoundStore: useBoundStore2,
      onRehydrateStorageSpy: onRehydrateStorageSpy2,
    } = createStore()
    expect(useBoundStore2.getState()).toEqual({ count: 42 })
    expect(onRehydrateStorageSpy2).toBeCalledWith({ count: 42 }, undefined)

})

it('can non-async migrate persisted state', () => {
const setItemSpy = vi.fn()
const onRehydrateStorageSpy = vi.fn()
const migrateSpy = vi.fn(() => ({ count: 99 }))

    const storage = {
      getItem: () =>
        JSON.stringify({
          state: { count: 42 },
          version: 12,
        }),
      setItem: setItemSpy,
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
        migrate: migrateSpy,
      }),
    )

    expect(useBoundStore.getState()).toEqual({ count: 99 })
    expect(migrateSpy).toBeCalledWith({ count: 42 }, 12)
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({
        state: { count: 99 },
        version: 13,
      }),
    )
    expect(onRehydrateStorageSpy).toBeCalledWith({ count: 99 }, undefined)

})

it('can correclty handle a missing migrate function', () => {
console.error = vi.fn()
const onRehydrateStorageSpy = vi.fn()
const storage = {
getItem: () =>
JSON.stringify({
state: { count: 42 },
version: 12,
}),
setItem: (\_: string, \_value: string) => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    expect(useBoundStore.getState()).toEqual({ count: 0 })
    expect(console.error).toHaveBeenCalled()
    expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 }, undefined)

})

it('can throw migrate error', () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: () =>
        JSON.stringify({
          state: {},
          version: 12,
        }),
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        version: 13,
        storage: createJSONStorage(() => storage),
        migrate: () => {
          throw new Error('migrate error')
        },
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    expect(useBoundStore.getState()).toEqual({ count: 0 })
    expect(onRehydrateStorageSpy).toBeCalledWith(
      undefined,
      new Error('migrate error'),
    )

})

it('passes the latest state to onRehydrateStorage and onHydrate on first hydrate', () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: () => JSON.stringify({ state: { count: 1 } }),
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: onRehydrateStorageSpy,
      }),
    )

    /**
     * NOTE: It's currently not possible to add an 'onHydrate' listener which will be
     * invoked prior to the first hydration. This is because, during first hydration,
     * the 'onHydrate' listener set (which will be empty) is evaluated before the
     * 'persist' API is exposed to the caller of 'create'/'createStore'.
     *
     * const onHydrateSpy = vi.fn()
     * useBoundStore.persist.onHydrate(onHydrateSpy)
     * expect(onHydrateSpy).toBeCalledWith({ count: 0 })
     */

    // The 'onRehydrateStorage' and 'onHydrate' spies are invoked prior to rehydration,
    // so they should both be passed the default state.
    expect(onRehydrateStorageSpy).toBeCalledWith({ count: 0 })
    expect(useBoundStore.getState()).toEqual({ count: 1 })

})

it('gives the merged state to onRehydrateStorage', () => {
const onRehydrateStorageSpy = vi.fn()

    const storage = {
      getItem: () =>
        JSON.stringify({
          state: { count: 1 },
          version: 0,
        }),
      setItem: () => {},
      removeItem: () => {},
    }

    const unstorableMethod = () => {}

    const useBoundStore = create(
      persist(() => ({ count: 0, unstorableMethod }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        onRehydrateStorage: () => onRehydrateStorageSpy,
      }),
    )

    const expectedState = { count: 1, unstorableMethod }

    expect(useBoundStore.getState()).toEqual(expectedState)
    expect(onRehydrateStorageSpy).toBeCalledWith(expectedState, undefined)

})

it('can custom merge the stored state', () => {
const storage = {
getItem: () =>
JSON.stringify({
state: {
count: 1,
actions: {},
},
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const unstorableMethod = () => {}

    const useBoundStore = create(
      persist(() => ({ count: 0, actions: { unstorableMethod } }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        merge: (_persistedState, currentState) => {
          const persistedState = _persistedState as any
          delete persistedState.actions

          return {
            ...currentState,
            ...persistedState,
          }
        },
      }),
    )

    expect(useBoundStore.getState()).toEqual({
      count: 1,
      actions: {
        unstorableMethod,
      },
    })

})

it("can merge the state when the storage item doesn't have a version", () => {
const storage = {
getItem: () =>
JSON.stringify({
state: {
count: 1,
},
}),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    expect(useBoundStore.getState()).toEqual({
      count: 1,
    })

})

it('can filter the persisted value', () => {
const setItemSpy = vi.fn()

    const storage = {
      getItem: () => '',
      setItem: setItemSpy,
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(
        () => ({
          object: {
            first: '0',
            second: '1',
          },
          array: [
            {
              value: '0',
            },
            {
              value: '1',
            },
            {
              value: '2',
            },
          ],
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          partialize: (state) => {
            return {
              object: {
                first: state.object.first,
              },
              array: state.array.filter((e) => e.value !== '1'),
            }
          },
        },
      ),
    )

    useBoundStore.setState({})
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({
        state: {
          object: {
            first: '0',
          },
          array: [
            {
              value: '0',
            },
            {
              value: '2',
            },
          ],
        },
        version: 0,
      }),
    )

})

it('can access the options through the api', () => {
const storage = {
getItem: () => null,
setItem: vi.fn(),
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )
    expect(useBoundStore.persist.getOptions().name).toBeDefined()
    expect(useBoundStore.persist.getOptions().name).toBe('test-storage')

})

it('can change the options through the api', () => {
const setItemSpy = vi.fn()

    const storage = {
      getItem: () => null,
      setItem: setItemSpy,
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
        partialize: (s) => s as Partial<typeof s>,
      }),
    )

    useBoundStore.setState({})
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      '{"state":{"count":0},"version":0}',
    )

    useBoundStore.persist.setOptions({
      name: 'test-storage-2',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key !== 'count'),
        ),
    })
    useBoundStore.setState({})
    expect(setItemSpy).toBeCalledWith(
      'test-storage-2',
      '{"state":{},"version":0}',
    )

})

it('can clear the storage through the api', () => {
const removeItemSpy = vi.fn()

    const storage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: removeItemSpy,
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    useBoundStore.persist.clearStorage()
    expect(removeItemSpy).toBeCalledWith('test-storage')

})

it('can manually rehydrate through the api', () => {
const storageValue = '{"state":{"count":1},"version":0}'

    const storage = {
      getItem: () => '',
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    storage.getItem = () => storageValue
    useBoundStore.persist.rehydrate()
    expect(useBoundStore.getState()).toEqual({
      count: 1,
    })

})

it('can check if the store has been hydrated through the api', async () => {
const storage = {
getItem: () => null,
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    expect(useBoundStore.persist.hasHydrated()).toBe(true)

    await useBoundStore.persist.rehydrate()
    expect(useBoundStore.persist.hasHydrated()).toBe(true)

})

it('can wait for rehydration through the api', async () => {
const storageValue1 = '{"state":{"count":1},"version":0}'
const storageValue2 = '{"state":{"count":2},"version":0}'

    const onHydrateSpy1 = vi.fn()
    const onHydrateSpy2 = vi.fn()
    const onFinishHydrationSpy1 = vi.fn()
    const onFinishHydrationSpy2 = vi.fn()

    const storage = {
      getItem: () => '',
      setItem: () => {},
      removeItem: () => {},
    }

    const useBoundStore = create(
      persist(() => ({ count: 0 }), {
        name: 'test-storage',
        storage: createJSONStorage(() => storage),
      }),
    )

    const hydrateUnsub1 = useBoundStore.persist.onHydrate(onHydrateSpy1)
    useBoundStore.persist.onHydrate(onHydrateSpy2)

    const finishHydrationUnsub1 = useBoundStore.persist.onFinishHydration(
      onFinishHydrationSpy1,
    )
    useBoundStore.persist.onFinishHydration(onFinishHydrationSpy2)

    storage.getItem = () => storageValue1
    await useBoundStore.persist.rehydrate()
    expect(onHydrateSpy1).toBeCalledWith({ count: 0 })
    expect(onHydrateSpy2).toBeCalledWith({ count: 0 })
    expect(onFinishHydrationSpy1).toBeCalledWith({ count: 1 })
    expect(onFinishHydrationSpy2).toBeCalledWith({ count: 1 })

    hydrateUnsub1()
    finishHydrationUnsub1()

    storage.getItem = () => storageValue2
    await useBoundStore.persist.rehydrate()
    expect(onHydrateSpy1).not.toBeCalledTimes(2)
    expect(onHydrateSpy2).toBeCalledWith({ count: 1 })
    expect(onFinishHydrationSpy1).not.toBeCalledTimes(2)
    expect(onFinishHydrationSpy2).toBeCalledWith({ count: 2 })

})

it('can skip initial hydration', async () => {
const storage = {
getItem: (name: string) => ({
state: { count: 42, name },
version: 0,
}),
setItem: () => {},
removeItem: () => {},
}

    const onRehydrateStorageSpy = vi.fn()
    const useBoundStore = create(
      persist(
        () => ({
          count: 0,
          name: 'empty',
        }),
        {
          name: 'test-storage',
          storage: storage,
          onRehydrateStorage: () => onRehydrateStorageSpy,
          skipHydration: true,
        },
      ),
    )

    expect(useBoundStore.getState()).toEqual({
      count: 0,
      name: 'empty',
    })

    // Because `skipHydration` is only in newImpl and the hydration function for newImpl is now a promise
    // In the default case we would need to await `onFinishHydration` to assert the auto hydration has completed
    // As we are testing the skip hydration case we await nextTick, to make sure the store is initialised
    await new Promise((resolve) => process.nextTick(resolve))

    // Asserting store hasn't hydrated from nextTick
    expect(useBoundStore.persist.hasHydrated()).toBe(false)

    await useBoundStore.persist.rehydrate()

    expect(useBoundStore.getState()).toEqual({
      count: 42,
      name: 'test-storage',
    })
    expect(onRehydrateStorageSpy).toBeCalledWith(
      { count: 42, name: 'test-storage' },
      undefined,
    )

})

it('handles state updates during onRehydrateStorage', () => {
const storage = {
getItem: () => JSON.stringify({ state: { count: 1 } }),
setItem: () => {},
removeItem: () => {},
}

    const useBoundStore = create<{ count: number; inc: () => void }>()(
      persist(
        (set) => ({
          count: 0,
          inc: () => set((s) => ({ count: s.count + 1 })),
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => (s) => s?.inc(),
        },
      ),
    )

    expect(useBoundStore.getState().count).toEqual(2)

})

it('can rehydrate state with custom deserialized Map', () => {
const storage = {
getItem: () =>
JSON.stringify({
map: { type: 'Map', value: [['foo', 'bar']] },
}),
setItem: () => {},
removeItem: () => {},
}

    const map = new Map()
    const onRehydrateStorageSpy = vi.fn()
    const useBoundStore = create(
      persist(
        () => ({
          map,
        }),
        {
          name: 'test-storage',
          storage: createJSONStorage(() => storage),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        },
      ),
    )

    const updatedMap = map.set('foo', 'bar')
    expect(useBoundStore.getState()).toEqual({
      map: updatedMap,
    })
    expect(onRehydrateStorageSpy).toBeCalledWith({ map: updatedMap }, undefined)

})

it('can persist state with custom serialization of Map', () => {
const { storage, setItemSpy } = createPersistentStore(null)
const map = new Map()

    const createStore = () => {
      const onRehydrateStorageSpy = vi.fn()
      const useBoundStore = create(
        persist(() => ({ map }), {
          name: 'test-storage',
          storage: createJSONStorage(() => storage, { replacer, reviver }),
          onRehydrateStorage: () => onRehydrateStorageSpy,
        }),
      )
      return { useBoundStore, onRehydrateStorageSpy }
    }

    // Initialize from empty storage
    const { useBoundStore, onRehydrateStorageSpy } = createStore()
    expect(useBoundStore.getState()).toEqual({ map })
    expect(onRehydrateStorageSpy).toBeCalledWith({ map }, undefined)

    // Write something to the store
    const updatedMap = map.set('foo', 'bar')
    useBoundStore.setState({ map: updatedMap })
    expect(useBoundStore.getState()).toEqual({
      map: updatedMap,
    })
    expect(setItemSpy).toBeCalledWith(
      'test-storage',
      JSON.stringify({
        state: { map: { type: 'Map', value: [['foo', 'bar']] } },
        version: 0,
      }),
    )

    // Create the same store a second time and check if the persisted state
    // is loaded correctly
    const {
      useBoundStore: useBoundStore2,
      onRehydrateStorageSpy: onRehydrateStorageSpy2,
    } = createStore()
    expect(useBoundStore2.getState()).toEqual({ map: updatedMap })
    expect(onRehydrateStorageSpy2).toBeCalledWith(
      { map: updatedMap },
      undefined,
    )

})

it('does not call setItem when hydrating from its own storage', async () => {
const setItem = vi.fn()
const storage = {
getItem: (name: string) => ({
state: { count: 42, name },
version: 0,
}),
setItem,
removeItem: () => {},
}

    const useBoundStore = create(
      persist(() => ({}), {
        name: 'test-storage',
        storage: storage,
      }),
    )

    expect(useBoundStore.persist.hasHydrated()).toBe(true)
    expect(setItem).toBeCalledTimes(0)

})
})
</file>

<file path="tests/setup.ts">
import '@testing-library/jest-dom/vitest'
</file>

<file path="tests/shallow.test.tsx">
import { useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/vanilla/shallow'

describe('types', () => {
it('works with useBoundStore and array selector (#1107)', () => {
const useBoundStore = createWithEqualityFn(() => ({
villages: [] as { name: string }[],
}))
const Component = () => {
const villages = useBoundStore((state) => state.villages, shallow)
return <>{villages.length}</>
}
expect(Component).toBeDefined()
})

it('works with useBoundStore and string selector (#1107)', () => {
const useBoundStore = createWithEqualityFn(() => ({
refetchTimestamp: '',
}))
const Component = () => {
const refetchTimestamp = useBoundStore(
(state) => state.refetchTimestamp,
shallow,
)
return <>{refetchTimestamp.toUpperCase()}</>
}
expect(Component).toBeDefined()
})
})

describe('useShallow', () => {
const testUseShallowSimpleCallback = vi.fn()
const TestUseShallowSimple = ({
selector,
state,
}: {
state: Record<string, unknown>
selector: (state: Record<string, unknown>) => string[]
}) => {
const selectorOutput = selector(state)
const useShallowOutput = useShallow(selector)(state)

    return (
      <div
        data-testid="test-shallow"
        onClick={() =>
          testUseShallowSimpleCallback({ selectorOutput, useShallowOutput })
        }
      />
    )

}

beforeEach(() => {
testUseShallowSimpleCallback.mockClear()
})

it('input and output selectors always return shallow equal values', () => {
const { rerender } = render(
<TestUseShallowSimple state={{ a: 1, b: 2 }} selector={Object.keys} />,
)

    expect(testUseShallowSimpleCallback).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByTestId('test-shallow'))

    const firstRender = testUseShallowSimpleCallback.mock.lastCall?.[0]

    expect(testUseShallowSimpleCallback).toHaveBeenCalledTimes(1)
    expect(firstRender).toBeTruthy()
    expect(firstRender?.selectorOutput).toEqual(firstRender?.useShallowOutput)

    rerender(
      <TestUseShallowSimple
        state={{ a: 1, b: 2, c: 3 }}
        selector={Object.keys}
      />,
    )

    fireEvent.click(screen.getByTestId('test-shallow'))
    expect(testUseShallowSimpleCallback).toHaveBeenCalledTimes(2)

    const secondRender = testUseShallowSimpleCallback.mock.lastCall?.[0]

    expect(secondRender).toBeTruthy()
    expect(secondRender?.selectorOutput).toEqual(secondRender?.useShallowOutput)

})

it('returns the previously computed instance when possible', () => {
const state = { a: 1, b: 2 }
const { rerender } = render(
<TestUseShallowSimple state={state} selector={Object.keys} />,
)

    fireEvent.click(screen.getByTestId('test-shallow'))
    expect(testUseShallowSimpleCallback).toHaveBeenCalledTimes(1)
    const output1 =
      testUseShallowSimpleCallback.mock.lastCall?.[0]?.useShallowOutput
    expect(output1).toBeTruthy()

    // Change selector, same output
    rerender(
      <TestUseShallowSimple
        state={state}
        selector={(state) => Object.keys(state)}
      />,
    )

    fireEvent.click(screen.getByTestId('test-shallow'))
    expect(testUseShallowSimpleCallback).toHaveBeenCalledTimes(2)

    const output2 =
      testUseShallowSimpleCallback.mock.lastCall?.[0]?.useShallowOutput
    expect(output2).toBeTruthy()

    expect(output2).toBe(output1)

})

it('only re-renders if selector output has changed according to shallow', () => {
let countRenders = 0
const useMyStore = create(
(): Record<string, unknown> => ({ a: 1, b: 2, c: 3 }),
)
const TestShallow = ({
selector = (state) => Object.keys(state).sort(),
}: {
selector?: (state: Record<string, unknown>) => string[]
}) => {
const output = useMyStore(useShallow(selector))

      ++countRenders

      return <div data-testid="test-shallow">{output.join(',')}</div>
    }

    expect(countRenders).toBe(0)
    render(<TestShallow />)

    expect(countRenders).toBe(1)
    expect(screen.getByTestId('test-shallow')).toHaveTextContent('a,b,c')

    act(() => {
      useMyStore.setState({ a: 4 }) // This will not cause a re-render.
    })

    expect(countRenders).toBe(1)

    act(() => {
      useMyStore.setState({ d: 10 }) // This will cause a re-render.
    })

    expect(countRenders).toBe(2)
    expect(screen.getByTestId('test-shallow')).toHaveTextContent('a,b,c,d')

})

it('does not cause stale closure issues', () => {
const useMyStore = create(
(): Record<string, unknown> => ({ a: 1, b: 2, c: 3 }),
)
const TestShallowWithState = () => {
const [count, setCount] = useState(0)
const output = useMyStore(
useShallow((state) => Object.keys(state).concat([count.toString()])),
)

      return (
        <div
          data-testid="test-shallow"
          onClick={() => setCount((prev) => ++prev)}
        >
          {output.join(',')}
        </div>
      )
    }

    render(<TestShallowWithState />)

    expect(screen.getByTestId('test-shallow')).toHaveTextContent('a,b,c,0')

    fireEvent.click(screen.getByTestId('test-shallow'))

    expect(screen.getByTestId('test-shallow')).toHaveTextContent('a,b,c,1')

})
})
</file>

<file path="tests/ssr.test.tsx">
import React, { useEffect } from 'react'
import { act, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { create } from 'zustand'

interface BearStoreState {
bears: number
}

interface BearStoreAction {
increasePopulation: () => void
}

const initialState = { bears: 0 }
const useBearStore = create<BearStoreState & BearStoreAction>((set) => ({
...initialState,
increasePopulation: () => set(({ bears }) => ({ bears: bears + 1 })),
}))

function Counter() {
const bears = useBearStore(({ bears }) => bears)
const increasePopulation = useBearStore(
({ increasePopulation }) => increasePopulation,
)

useEffect(() => {
increasePopulation()
}, [increasePopulation])

return <div>bears: {bears}</div>
}

describe.skipIf(!React.version.startsWith('18'))(
'ssr behavior with react 18',
() => {
it('should handle different states between server and client correctly', async () => {
const { hydrateRoot } =
await vi.importActual<typeof import('react-dom/client')>(
'react-dom/client',
)

      const view = renderToString(
        <React.Suspense fallback={<div>Loading...</div>}>
          <Counter />
        </React.Suspense>,
      )

      const container = document.createElement('div')
      document.body.appendChild(container)
      container.innerHTML = view

      expect(container).toHaveTextContent(/bears: 0/)

      await act(async () => {
        hydrateRoot(
          container,
          <React.Suspense fallback={<div>Loading...</div>}>
            <Counter />
          </React.Suspense>,
        )
      })

      const bearCountText = await screen.findByText('bears: 1')
      expect(bearCountText).toBeInTheDocument()
      document.body.removeChild(container)
    })
    it('should not have hydration errors', async () => {
      const useStore = create(() => ({
        bears: 0,
      }))

      const { hydrateRoot } =
        await vi.importActual<typeof import('react-dom/client')>(
          'react-dom/client',
        )

      const Component = () => {
        const bears = useStore((state) => state.bears)
        return <div>bears: {bears}</div>
      }

      const view = renderToString(
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component />
        </React.Suspense>,
      )

      const container = document.createElement('div')
      document.body.appendChild(container)
      container.innerHTML = view

      expect(container).toHaveTextContent(/bears: 0/)

      const consoleMock = vi.spyOn(console, 'error')

      const hydratePromise = act(async () => {
        hydrateRoot(
          container,
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component />
          </React.Suspense>,
        )
      })

      // set state during hydration
      useStore.setState({ bears: 1 })

      await hydratePromise

      expect(consoleMock).toHaveBeenCalledTimes(0)

      const bearCountText = await screen.findByText('bears: 1')
      expect(bearCountText).toBeInTheDocument()
      document.body.removeChild(container)
    })

},
)
</file>

<file path="tests/subscribe.test.tsx">
import { describe, expect, it } from 'vitest'
import { create } from 'zustand'

describe('subscribe()', () => {
it('should correctly have access to subscribe', () => {
const { subscribe } = create(() => ({ value: 1 }))
expect(typeof subscribe).toBe('function')
})
})
</file>

<file path="tests/test-utils.ts">
type ReplacedMap = {
  type: 'Map'
  value: [string, unknown][]
}

export const replacer = (
key: string,
value: unknown,
): ReplacedMap | unknown => {
if (value instanceof Map) {
return {
type: 'Map',
value: Array.from(value.entries()),
}
} else {
return value
}
}

export const reviver = (key: string, value: ReplacedMap | unknown): unknown => {
if (isReplacedMap(value)) {
return new Map(value.value)
}
return value
}

const isReplacedMap = (value: any): value is ReplacedMap => {
if (value && value.type === 'Map') {
return true
}

return false
}
</file>

<file path="tests/types.test.tsx">
import { expect, it } from 'vitest'
import { create } from 'zustand'
import type {
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
  UseBoundStore,
} from 'zustand'
import { persist } from 'zustand/middleware'

it('can use exposed types', () => {
type ExampleState = {
num: number
numGet: () => number
numGetState: () => number
numSet: (v: number) => void
numSetState: (v: number) => void
}

const listener = (state: ExampleState) => {
if (state) {
const value = state.num _ state.numGet() _ state.numGetState()
state.numSet(value)
state.numSetState(value)
}
}
const selector = (state: ExampleState) => state.num
const partial: Partial<ExampleState> = {
num: 2,
numGet: () => 2,
}
const partialFn: (state: ExampleState) => Partial<ExampleState> = (
state,
) => ({
...state,
num: 2,
})
const equalityFn = (state: ExampleState, newState: ExampleState) =>
state !== newState

const storeApi = create<ExampleState>((set, get) => ({
num: 1,
numGet: () => get().num,
numGetState: () => {
// TypeScript can't get the type of storeApi when it trys to enforce the signature of numGetState.
// Need to explicitly state the type of storeApi.getState().num or storeApi type will be type 'any'.
const result: number = storeApi.getState().num
return result
},
numSet: (v) => {
set({ num: v })
},
numSetState: (v) => {
storeApi.setState({ num: v })
},
}))
const useBoundStore = storeApi

const stateCreator: StateCreator<ExampleState> = (set, get) => ({
num: 1,
numGet: () => get().num,
numGetState: () => get().num,
numSet: (v) => {
set({ num: v })
},
numSetState: (v) => {
set({ num: v })
},
})

function checkAllTypes(
\_getState: StoreApi<ExampleState>['getState'],
\_partialState:
| Partial<ExampleState>
| ((s: ExampleState) => Partial<ExampleState>),
\_setState: StoreApi<ExampleState>['setState'],
\_state: object,
\_stateListener: (state: ExampleState, previousState: ExampleState) => void,
\_stateSelector: (state: ExampleState) => number,
\_storeApi: StoreApi<ExampleState>,
\_subscribe: StoreApi<ExampleState>['subscribe'],
\_equalityFn: (a: ExampleState, b: ExampleState) => boolean,
\_stateCreator: StateCreator<ExampleState>,
\_useBoundStore: UseBoundStore<StoreApi<ExampleState>>,
) {
expect(true).toBeTruthy()
}

checkAllTypes(
storeApi.getState,
Math.random() > 0.5 ? partial : partialFn,
storeApi.setState,
storeApi.getState(),
listener,
selector,
storeApi,
storeApi.subscribe,
equalityFn,
stateCreator,
useBoundStore,
)
})

type AssertEqual<Type, Expected> = Type extends Expected
? Expected extends Type
? true
: never
: never

it('should have correct (partial) types for setState', () => {
type Count = { count: number }

const store = create<Count>((set) => ({
count: 0,
// @ts-expect-error we shouldn't be able to set count to undefined
a: () => set(() => ({ count: undefined })),
// @ts-expect-error we shouldn't be able to set count to undefined
b: () => set({ count: undefined }),
c: () => set({ count: 1 }),
}))

const setState: AssertEqual<
typeof store.setState,
StoreApi<Count>['setState']

> = true
> expect(setState).toEqual(true)

// ok, should not error
store.setState({ count: 1 })
store.setState({})
store.setState((previous) => previous)

// @ts-expect-error type undefined is not assignable to type number
store.setState({ count: undefined })
// @ts-expect-error type undefined is not assignable to type number
store.setState((state) => ({ ...state, count: undefined }))
})

it('should allow for different partial keys to be returnable from setState', () => {
type State = {
count: number
something: string
}

const store = create<State>(() => ({
count: 0,
something: 'foo',
}))

const setState: AssertEqual<
typeof store.setState,
StoreApi<State>['setState']

> = true
> expect(setState).toEqual(true)

// ok, should not error
store.setState((previous) => {
if (previous.count === 0) {
return { count: 1 }
}
return { count: 0 }
})
store.setState((previous) => {
if (previous.count === 0) {
return { count: 1 }
}
if (previous.count === 1) {
return previous
}
return { something: 'foo' }
})

// @ts-expect-error Type '{ something: boolean; count?: undefined; }' is not assignable to type 'State'.
store.setState((previous) => {
if (previous.count === 0) {
return { count: 1 }
}
return { something: true }
})
})

it('state is covariant', () => {
const store = create<{ count: number; foo: string }>()(() => ({
count: 0,
foo: '',
}))

const \_testIsCovariant: StoreApi<{ count: number }> = store

// @ts-expect-error should not compile
const \_testIsNotContravariant: StoreApi<{
count: number
foo: string
baz: string
}> = store
})

it('StateCreator<T, [StoreMutatorIdentfier, unknown][]> is StateCreator<T, []>', () => {
interface State {
count: number
increment: () => void
}

const foo: <M extends [StoreMutatorIdentifier, unknown][]>() => StateCreator<
State,
M

> = () => (set, get) => ({

    count: 0,
    increment: () => {
      set({ count: get().count + 1 })
    },

})

create<State>()(persist(foo(), { name: 'prefix' }))
})

it('StateCreator subtyping', () => {
interface State {
count: number
increment: () => void
}

const foo: () => StateCreator<State, []> = () => (set, get) => ({
count: 0,
increment: () => {
set({ count: get().count + 1 })
},
})

create<State>()(persist(foo(), { name: 'prefix' }))

const \_testSubtyping: StateCreator<State, [['zustand/persist', unknown]]> =
{} as StateCreator<State, []>
})

it('set state exists on store with readonly store', () => {
interface State {
count: number
increment: () => void
}

const useStore = create<State>()((set, get) => ({
count: 0,
increment: () => set({ count: get().count + 1 }),
}))

useStore.setState((state) => ({ ...state, count: state.count + 1 }))
})
</file>

<file path=".gitignore">
node_modules/
dist/
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
.DS_Store
.vscode
.docz/
coverage/
.rpt2_cache/
.idea
examples/**/*/package-lock.json
examples/**/*/yarn.lock
examples/**/*/pnpm-lock.yaml
examples/**/*/bun.lockb
</file>

<file path=".prettierignore">
dist
pnpm-lock.yaml
</file>

<file path="CONTRIBUTING.md">
# Contributing

## General Guideline

### Reporting Issues

If you have found what you think is a bug, please [start a discussion](https://github.com/pmndrs/zustand/discussions/new?category=bug-report).

For any usage questions, please [start a discussion](https://github.com/pmndrs/zustand/discussions/new?category=q-a).

### Suggesting New Features

If you are here to suggest a feature, first [start a discussion](https://github.com/pmndrs/zustand/discussions/new?category=ideas) if it does not already exist. From there, we will discuss use-cases for the feature and then finally discuss how it could be implemented.

### Committing

We are applying [conventional commit spec](https://www.conventionalcommits.org/en/v1.0.0/) here. In short, that means a commit has to be one of the following types:

Your commit type must be one of the following:

- **feat**: A new feature.
- **fix**: A bug fix.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **chore**: Changes to the build process, configuration, dependencies, CI/CD pipelines, or other auxiliary tools and libraries.
- **docs**: Documentation-only changes.
- **test**: Adding missing or correcting existing tests.

If you are unfamiliar with the usage of conventional commits,
the short version is to simply specify the type as a first word,
and follow it with a colon and a space, then start your message
from a lowercase letter, like this:

```
feat: add a 'foo' type support
```

You can also specify the scope of the commit in the parentheses after a type:

```
fix(react): change the 'bar' parameter type
```

### Development

If you would like to contribute by fixing an open issue or developing a new feature you can use this suggested workflow:

#### General

1. Fork this repository.
2. Create a new feature branch based off the `main` branch.
3. Follow the [Core](#Core) and/or the [Documentation](#Documentation) guide below and come back to this once done.
4. Run `pnpm run fix:format` to format the code.
5. Git stage your required changes and commit (review the commit guidelines below).
6. Submit the PR for review.

##### Core

1. Run `npm install` to install dependencies.
2. Create failing tests for your fix or new feature in the [`tests`](./tests/) folder.
3. Implement your changes.
4. Run `pnpm run build` to build the library. _(Pro-tip: `pnpm run build-watch` runs the build in watch mode)_
5. Run the tests by running `pnpm run test` and ensure that they pass.
6. You can use `pnpm link` to sym-link this package and test it locally on your own project. Alternatively, you may use CodeSandbox CI's canary releases to test the changes in your own project. (requires a PR to be created first)
7. Follow step 4 and onwards from the [General](#General) guide above to bring it to the finish line.

### Pull Requests

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or request improvements, therefore, please check ✅ ["Allow edits from maintainers"](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) on your PR.

## Zustand-specific Guideline

##### Documentation

Our [docs](https://zustand.docs.pmnd.rs) are based on [`pmndrs/docs`](https://github.com/pmndrs/docs).

1. Separately, clone the `pmndrs/docs`. (you don't need to fork it).
2. Inside the `pmndrs/docs` directory:
   1. Create a `.env` file in the root directory with the next environment variables: `MDX=docs/zustand/docs` and `HOME_REDIRECT=/getting-started/introduction`.
   2. Run `npm install` to install dependencies.
   3. Run `npm run dev` to start the dev server.
   4. Navigate to [`http://localhost:3000`](http://localhost:3000) to view the documents.
3. Go Back to the forked repository:
   1. Run `pnpm install` to install dependencies.
   2. Navigate to the [`docs`](./docs/) folder and make necessary changes to the documents.
   3. Add your changes to the documents and see them live reloaded in the browser. (if you don't see changes, try `control + c`, then run `npm run dev` in the cloned `pnmdrs/docs` repository)
4. Follow step 4 and onwards from the [General](#General) guide above to bring it to the finish line.

Thank you for contributing! :heart:
</file>

<file path="eslint.config.mjs">
import eslint from '@eslint/js'
import vitest from '@vitest/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import jestDom from 'eslint-plugin-jest-dom'
import react from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'

export default tseslint.config(
{
ignores: ['dist/', 'examples/'],
},
eslint.configs.recommended,
importPlugin.flatConfigs.recommended,
tseslint.configs.recommended,
react.configs.flat.recommended,
react.configs.flat['jsx-runtime'],
reactHooks.configs['recommended-latest'],
reactCompiler.configs.recommended,
{
settings: {
react: {
version: 'detect',
},
'import/resolver': {
typescript: true,
},
},
rules: {
eqeqeq: 'error',
curly: ['warn', 'multi-line', 'consistent'],
'sort-imports': [
'error',
{
ignoreDeclarationSort: true,
},
],
'import/no-unresolved': ['error', { commonjs: true, amd: true }],
'import/named': 'off',
'import/namespace': 'off',
'import/no-named-as-default-member': 'off',
'import/no-duplicates': 'error',
'import/extensions': ['error', 'always'],
'import/order': [
'error',
{
alphabetize: { order: 'asc', caseInsensitive: true },
groups: [
'builtin',
'external',
'internal',
'parent',
'sibling',
'index',
'object',
],
'newlines-between': 'never',
pathGroups: [
{
pattern: 'react',
group: 'builtin',
position: 'before',
},
],
pathGroupsExcludedImportTypes: ['builtin'],
},
],
'@typescript-eslint/no-explicit-any': 'off',
'@typescript-eslint/no-unused-vars': [
'warn',
{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
],
},
},
{
files: ['tests/**/*.{ts,tsx}'],
...testingLibrary.configs['flat/react'],
...jestDom.configs['flat/recommended'],
...vitest.configs.recommended,
rules: {
'import/extensions': ['error', 'never'],
'@typescript-eslint/no-unused-vars': 'off',
'testing-library/no-node-access': 'off',
'vitest/expect-expect': 'off',
'vitest/consistent-test-it': [
'error',
{ fn: 'it', withinDescribe: 'it' },
],
},
},
{
files: ['*.js'],
rules: {
'@typescript-eslint/no-require-imports': 'off',
},
},
)
</file>

<file path="FUNDING.json">
{
  "drips": {
    "ethereum": {
      "ownedBy": "0xBA918e34bed77Ba7a9fCF53be0A81FA538d56FA7"
    }
  }
}
</file>

<file path="LICENSE">
MIT License

Copyright (c) 2019 Paul Henschel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</file>

<file path="package.json">
{
  "name": "zustand",
  "description": "🐻 Bear necessities for state management in React",
  "private": true,
  "type": "commonjs",
  "version": "5.0.3",
  "main": "./index.js",
  "types": "./index.d.ts",
  "typesVersions": {
    ">=4.5": {
      "esm/*": [
        "esm/*"
      ],
      "*": [
        "*"
      ]
    },
    "*": {
      "esm/*": [
        "ts_version_4.5_and_above_is_required.d.ts"
      ],
      "*": [
        "ts_version_4.5_and_above_is_required.d.ts"
      ]
    }
  },
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "import": {
        "types": "./esm/index.d.mts",
        "default": "./esm/index.mjs"
      },
      "default": {
        "types": "./index.d.ts",
        "default": "./index.js"
      }
    },
    "./*": {
      "import": {
        "types": "./esm/*.d.mts",
        "default": "./esm/*.mjs"
      },
      "default": {
        "types": "./*.d.ts",
        "default": "./*.js"
      }
    }
  },
  "files": [
    "**"
  ],
  "sideEffects": false,
  "scripts": {
    "prebuild": "shx rm -rf dist",
    "build": "pnpm run prebuild && pnpm run \"/^build:.*/\" && pnpm run postbuild",
    "build:base": "rollup -c",
    "build:vanilla": "rollup -c --config-vanilla",
    "build:react": "rollup -c --config-react",
    "build:middleware": "rollup -c --config-middleware",
    "build:middleware:immer": "rollup -c --config-middleware_immer",
    "build:shallow": "rollup -c --config-shallow",
    "build:vanilla:shallow": "rollup -c --config-vanilla_shallow",
    "build:react:shallow": "rollup -c --config-react_shallow",
    "build:traditional": "rollup -c --config-traditional",
    "postbuild": "pnpm run patch-d-ts && pnpm run copy && pnpm run patch-old-ts && pnpm run patch-esm-ts",
    "fix": "pnpm run fix:lint && pnpm run fix:format",
    "fix:format": "prettier . --write",
    "fix:lint": "eslint . --fix",
    "test": "pnpm run \"/^test:.*/\"",
    "test:format": "prettier . --list-different",
    "test:types": "tsc --noEmit",
    "test:lint": "eslint .",
    "test:spec": "vitest run",
    "patch-d-ts": "node --input-type=module -e \"import { entries } from './rollup.config.mjs'; import shelljs from 'shelljs'; const { find, sed } = shelljs; find('dist/**/*.d.ts').forEach(f => { entries.forEach(({ find, replacement }) => { sed('-i', new RegExp(' from \\'' + find.source.slice(0, -1) + '\\';$'), ' from \\'' + replacement + '\\';', f); }); sed('-i', / from '(\\.[^']+)\\.ts';$/, ' from \\'\\$1\\';', f); });\"",
    "copy": "shx cp -r dist/src/* dist/esm && shx cp -r dist/src/* dist && shx rm -rf dist/src && shx rm -rf dist/{src,tests} && shx cp package.json README.md LICENSE dist && json -I -f dist/package.json -e \"this.private=false; this.devDependencies=undefined; this.optionalDependencies=undefined; this.scripts=undefined; this.prettier=undefined;\"",
    "patch-old-ts": "shx touch dist/ts_version_4.5_and_above_is_required.d.ts",
    "patch-esm-ts": "node -e \"require('shelljs').find('dist/esm/**/*.d.ts').forEach(f=>{var f2=f.replace(/\\.ts$/,'.mts');require('fs').renameSync(f,f2);require('shelljs').sed('-i',/ from '(\\.[^']+)';$/,' from \\'\\$1.mjs\\';',f2);require('shelljs').sed('-i',/^declare module '(\\.[^']+)'/,'declare module \\'\\$1.mjs\\'',f2)})\""
  },
  "engines": {
    "node": ">=12.20.0"
  },
  "prettier": {
    "semi": false,
    "singleQuote": true
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pmndrs/zustand.git"
  },
  "keywords": [
    "react",
    "state",
    "manager",
    "management",
    "redux",
    "store"
  ],
  "author": "Paul Henschel",
  "contributors": [
    "Jeremy Holcomb (https://github.com/JeremyRH)",
    "Daishi Kato (https://github.com/dai-shi)"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/pmndrs/zustand/issues"
  },
  "homepage": "https://github.com/pmndrs/zustand",
  "packageManager": "pnpm@9.15.5",
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@redux-devtools/extension": "^3.3.0",
    "@rollup/plugin-alias": "^5.1.1",
    "@rollup/plugin-node-resolve": "^16.0.0",
    "@rollup/plugin-replace": "^6.0.2",
    "@rollup/plugin-typescript": "^12.1.2",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.3",
    "@types/react-dom": "^19.0.2",
    "@types/use-sync-external-store": "^0.0.6",
    "@vitest/coverage-v8": "^2.1.8",
    "@vitest/eslint-plugin": "^1.1.24",
    "@vitest/ui": "^2.1.8",
    "esbuild": "^0.24.2",
    "eslint": "9.17.0",
    "eslint-import-resolver-typescript": "^3.7.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jest-dom": "^5.5.0",
    "eslint-plugin-react": "^7.37.3",
    "eslint-plugin-react-compiler": "19.0.0-beta-bafa41b-20250307",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-testing-library": "^7.1.1",
    "immer": "^10.1.1",
    "jsdom": "^25.0.1",
    "json": "^11.0.0",
    "prettier": "^3.4.2",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "redux": "^5.0.1",
    "rollup": "^4.30.1",
    "rollup-plugin-esbuild": "^6.1.1",
    "shelljs": "^0.8.5",
    "shx": "^0.3.4",
    "tslib": "^2.8.1",
    "typescript": "^5.7.2",
    "typescript-eslint": "^8.19.1",
    "use-sync-external-store": "^1.4.0",
    "vitest": "^2.1.8"
  },
  "peerDependencies": {
    "@types/react": ">=18.0.0",
    "immer": ">=9.0.6",
    "react": ">=18.0.0",
    "use-sync-external-store": ">=1.2.0"
  },
  "peerDependenciesMeta": {
    "@types/react": {
      "optional": true
    },
    "immer": {
      "optional": true
    },
    "react": {
      "optional": true
    },
    "use-sync-external-store": {
      "optional": true
    }
  }
}
</file>

<file path="README.md">
<p align="center">
  <img src="docs/bear.jpg" />
</p>

[![Build Status](https://img.shields.io/github/actions/workflow/status/pmndrs/zustand/lint-and-type.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/pmndrs/zustand/actions?query=workflow%3ALint)
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/zustand)
[![Downloads](https://img.shields.io/npm/dt/zustand.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/zustand)
[![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)

A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.

Don't disregard it because it's cute. It has quite the claws, lots of time was spent dealing with common pitfalls, like the dreaded [zombie child problem](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children), [react concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md), and [context loss](https://github.com/facebook/react/issues/13332) between mixed renderers. It may be the one state-manager in the React space that gets all of these right.

You can try a live demo [here](https://githubbox.com/pmndrs/zustand/tree/main/examples/demo).

```bash
npm install zustand
```

:warning: This readme is written for JavaScript users. If you are a TypeScript user, be sure to check out our [TypeScript Usage section](#typescript-usage).

## First create a store

Your store is a hook! You can put anything in it: primitives, objects, functions. State has to be updated immutably and the `set` function [merges state](./docs/guides/immutable-state-and-merging.md) to help it.

```jsx
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## Then bind your components, and that's it!

Use the hook anywhere, no providers are needed. Select your state and the component will re-render on changes.

```jsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

### Why zustand over redux?

- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- [Can inform components transiently (without causing render)](#transient-updates-for-often-occurring-state-changes)

### Why zustand over context?

- Less boilerplate
- Renders components only on changes
- Centralized, action-based state management

---

# Recipes

## Fetching everything

You can, but bear in mind that it will cause the component to update on every state change!

```jsx
const state = useBearStore();
```

## Selecting multiple state slices

It detects changes with strict-equality (old === new) by default, this is efficient for atomic state picks.

```jsx
const nuts = useBearStore((state) => state.nuts);
const honey = useBearStore((state) => state.honey);
```

If you want to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps, you can use [useShallow](./docs/guides/prevent-rerenders-with-use-shallow.md) to prevent unnecessary rerenders when the selector output does not change according to shallow equal.

```jsx
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useBearStore = create((set) => ({
  nuts: 0,
  honey: 0,
  treats: {},
  // ...
}));

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useBearStore(
  useShallow((state) => ({ nuts: state.nuts, honey: state.honey }))
);

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  useShallow((state) => [state.nuts, state.honey])
);

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useBearStore(useShallow((state) => Object.keys(state.treats)));
```

For more control over re-rendering, you may provide any custom equality function (this example requires the use of [`createWithEqualityFn`](./docs/migrations/migrating-to-v5.md#using-custom-equality-functions-such-as-shallow)).

```jsx
const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
);
```

## Overwriting state

The `set` function has a second argument, `false` by default. Instead of merging, it will replace the state model. Be careful not to wipe out parts you rely on, like actions.

```jsx
import omit from "lodash-es/omit";

const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ["tuna"]), true),
}));
```

## Async actions

Just call `set` when you're ready, zustand doesn't care if your actions are async or not.

```jsx
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));
```

## Read from state in actions

`set` allows fn-updates `set(state => result)`, but you still have access to state outside of it through `get`.

```jsx
const useSoundStore = create((set, get) => ({
  sound: 'grunt',
  action: () => {
    const sound = get().sound
    ...
```

## Reading/writing state and reacting to changes outside of components

Sometimes you need to access state in a non-reactive way or act upon the store. For these cases, the resulting hook has utility functions attached to its prototype.

:warning: This technique is not recommended for adding state in [React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md) (typically in Next.js 13 and above). It can lead to unexpected bugs and privacy issues for your users. For more details, see [#2200](https://github.com/pmndrs/zustand/discussions/2200).

```jsx
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log)
// Updating state, will trigger listeners
useDogStore.setState({ paw: false })
// Unsubscribe listeners
unsub1()

// You can of course use the hook as you always would
function Component() {
  const paw = useDogStore((state) => state.paw)
  ...
```

### Using subscribe with selector

If you need to subscribe with a selector,
`subscribeWithSelector` middleware will help.

With this middleware `subscribe` accepts an additional signature:

```ts
subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe
```

```js
import { subscribeWithSelector } from "zustand/middleware";
const useDogStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
);

// Listening to selected changes, in this case when "paw" changes
const unsub2 = useDogStore.subscribe((state) => state.paw, console.log);
// Subscribe also exposes the previous value
const unsub3 = useDogStore.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
);
// Subscribe also supports an optional equality function
const unsub4 = useDogStore.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
);
// Subscribe and fire immediately
const unsub5 = useDogStore.subscribe((state) => state.paw, console.log, {
  fireImmediately: true,
});
```

## Using zustand without React

Zustand core can be imported and used without the React dependency. The only difference is that the create function does not return a hook, but the API utilities.

```jsx
import { createStore } from 'zustand/vanilla'

const store = createStore((set) => ...)
const { getState, setState, subscribe, getInitialState } = store

export default store
```

You can use a vanilla store with `useStore` hook available since v4.

```jsx
import { useStore } from "zustand";
import { vanillaStore } from "./vanillaStore";

const useBoundStore = (selector) => useStore(vanillaStore, selector);
```

:warning: Note that middlewares that modify `set` or `get` are not applied to `getState` and `setState`.

## Transient updates (for often occurring state-changes)

The subscribe function allows components to bind to a state-portion without forcing re-render on changes. Best combine it with useEffect for automatic unsubscribe on unmount. This can make a [drastic](https://codesandbox.io/s/peaceful-johnson-txtws) performance impact when you are allowed to mutate the view directly.

```jsx
const useScratchStore = create((set) => ({ scratches: 0, ... }))

const Component = () => {
  // Fetch initial state
  const scratchRef = useRef(useScratchStore.getState().scratches)
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  useEffect(() => useScratchStore.subscribe(
    state => (scratchRef.current = state.scratches)
  ), [])
  ...
```

## Sick of reducers and changing nested states? Use Immer!

Reducing nested structures is tiresome. Have you tried [immer](https://github.com/mweststrate/immer)?

```jsx
import { produce } from "immer";

const useLushStore = create((set) => ({
  lush: { forest: { contains: { a: "bear" } } },
  clearForest: () =>
    set(
      produce((state) => {
        state.lush.forest.contains = null;
      })
    ),
}));

const clearForest = useLushStore((state) => state.clearForest);
clearForest();
```

[Alternatively, there are some other solutions.](./docs/guides/updating-state.md#with-immer)

## Persist middleware

You can persist your store's data using any kind of storage.

```jsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
```

[See the full documentation for this middleware.](./docs/integrations/persisting-store-data.md)

## Immer middleware

Immer is available as middleware too.

```jsx
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by;
      }),
  }))
);
```

## Can't live without redux-like reducers and action types?

```jsx
const types = { increase: "INCREASE", decrease: "DECREASE" };

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by };
    case types.decrease:
      return { grumpiness: state.grumpiness - by };
  }
};

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}));

const dispatch = useGrumpyStore((state) => state.dispatch);
dispatch({ type: types.increase, by: 2 });
```

Or, just use our redux-middleware. It wires up your main-reducer, sets the initial state, and adds a dispatch function to the state itself and the vanilla API.

```jsx
import { redux } from "zustand/middleware";

const useGrumpyStore = create(redux(reducer, initialState));
```

## Redux devtools

Install the [Redux DevTools Chrome extension](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to use the devtools middleware.

```jsx
import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore = create(devtools((set) => ...))
// Usage with a redux store, it will log full action types
const useReduxStore = create(devtools(redux(reducer, initialState)))
```

One redux devtools connection for multiple stores

```jsx
import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore1 = create(devtools((set) => ..., { name, store: storeName1 }))
const usePlainStore2 = create(devtools((set) => ..., { name, store: storeName2 }))
// Usage with a redux store, it will log full action types
const useReduxStore = create(devtools(redux(reducer, initialState)), { name, store: storeName3 })
const useReduxStore = create(devtools(redux(reducer, initialState)), { name, store: storeName4 })
```

Assigning different connection names will separate stores in redux devtools. This also helps group different stores into separate redux devtools connections.

devtools takes the store function as its first argument, optionally you can name the store or configure [serialize](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize) options with a second argument.

Name store: `devtools(..., {name: "MyStore"})`, which will create a separate instance named "MyStore" in the devtools.

Serialize options: `devtools(..., { serialize: { options: true } })`.

#### Logging Actions

devtools will only log actions from each separated store unlike in a typical _combined reducers_ redux store. See an approach to combining stores https://github.com/pmndrs/zustand/issues/163

You can log a specific action type for each `set` function by passing a third parameter:

```jsx
const useBearStore = create(devtools((set) => ({
  ...
  eatFish: () => set(
    (prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }),
    undefined,
    'bear/eatFish'
  ),
  ...
```

You can also log the action's type along with its payload:

```jsx
  ...
  addFishes: (count) => set(
    (prev) => ({ fishes: prev.fishes + count }),
    undefined,
    { type: 'bear/addFishes', count, }
  ),
  ...
```

If an action type is not provided, it is defaulted to "anonymous". You can customize this default value by providing an `anonymousActionType` parameter:

```jsx
devtools(..., { anonymousActionType: 'unknown', ... })
```

If you wish to disable devtools (on production for instance). You can customize this setting by providing the `enabled` parameter:

```jsx
devtools(..., { enabled: false, ... })
```

## React context

The store created with `create` doesn't require context providers. In some cases, you may want to use contexts for dependency injection or if you want to initialize your store with props from a component. Because the normal store is a hook, passing it as a normal context value may violate the rules of hooks.

The recommended method available since v4 is to use the vanilla store.

```jsx
import { createContext, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const store = createStore(...) // vanilla store without hooks

const StoreContext = createContext()

const App = () => (
  <StoreContext.Provider value={store}>
    ...
  </StoreContext.Provider>
)

const Component = () => {
  const store = useContext(StoreContext)
  const slice = useStore(store, selector)
  ...
```

## TypeScript Usage

Basic typescript usage doesn't require anything special except for writing `create<State>()(...)` instead of `create(...)`...

```ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
```

A more complete TypeScript guide is [here](docs/guides/typescript.md).

## Best practices

- You may wonder how to organize your code for better maintenance: [Splitting the store into separate slices](./docs/guides/slices-pattern.md).
- Recommended usage for this unopinionated library: [Flux inspired practice](./docs/guides/flux-inspired-practice.md).
- [Calling actions outside a React event handler in pre-React 18](./docs/guides/event-handler-in-pre-react-18.md).
- [Testing](./docs/guides/testing.md)
- For more, have a look [in the docs folder](./docs/)

## Third-Party Libraries

Some users may want to extend Zustand's feature set which can be done using third-party libraries made by the community. For information regarding third-party libraries with Zustand, visit [the doc](./docs/integrations/third-party-libraries.md).

## Comparison with other libraries

- [Difference between zustand and other state management libraries for React](https://docs.pmnd.rs/zustand/getting-started/comparison)
  </file>

<file path="rollup.config.mjs">
/* global process*/
import path from 'path'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import esbuild from 'rollup-plugin-esbuild'

const extensions = ['.js', '.ts', '.tsx']
const { root } = path.parse(process.cwd())
export const entries = [
{ find: /.*\/vanilla\/shallow\.ts$/, replacement: 'zustand/vanilla/shallow' },
{ find: /.*\/react\/shallow\.ts$/, replacement: 'zustand/react/shallow' },
{ find: /.*\/vanilla\.ts$/, replacement: 'zustand/vanilla' },
{ find: /.*\/react\.ts$/, replacement: 'zustand/react' },
]

function external(id) {
return !id.startsWith('.') && !id.startsWith(root)
}

function getEsbuild() {
return esbuild({
target: 'es2018',
supported: { 'import-meta': true },
tsconfig: path.resolve('./tsconfig.json'),
})
}

function createDeclarationConfig(input, output) {
return {
input,
output: {
dir: output,
},
external,
plugins: [
typescript({
declaration: true,
emitDeclarationOnly: true,
outDir: output,
}),
],
}
}

function createESMConfig(input, output) {
return {
input,
output: { file: output, format: 'esm' },
external,
plugins: [
alias({ entries: entries.filter((entry) => !entry.find.test(input)) }),
resolve({ extensions }),
replace({
...(output.endsWith('.js')
? {
'import.meta.env?.MODE': 'process.env.NODE_ENV',
}
: {
'import.meta.env?.MODE':
'(import.meta.env ? import.meta.env.MODE : undefined)',
}),
// a workaround for #829
'use-sync-external-store/shim/with-selector':
'use-sync-external-store/shim/with-selector.js',
delimiters: ['\\b', '\\b(?!(\\.|/))'],
preventAssignment: true,
}),
getEsbuild(),
],
}
}

function createCommonJSConfig(input, output) {
return {
input,
output: { file: output, format: 'cjs' },
external,
plugins: [
alias({ entries: entries.filter((entry) => !entry.find.test(input)) }),
resolve({ extensions }),
replace({
'import.meta.env?.MODE': 'process.env.NODE_ENV',
delimiters: ['\\b', '\\b(?!(\\.|/))'],
preventAssignment: true,
}),
getEsbuild(),
],
}
}

export default function (args) {
let c = Object.keys(args).find((key) => key.startsWith('config-'))
if (c) {
c = c.slice('config-'.length).replace(/\_/g, '/')
} else {
c = 'index'
}
return [
...(c === 'index' ? [createDeclarationConfig(`src/${c}.ts`, 'dist')] : []),
createCommonJSConfig(`src/${c}.ts`, `dist/${c}.js`),
createESMConfig(`src/${c}.ts`, `dist/esm/${c}.mjs`),
]
}
</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "target": "esnext",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "skipLibCheck": true /* FIXME remove this once vite fixes it */,
    "allowImportingTsExtensions": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "declaration": true,
    "isolatedDeclarations": true,
    "types": ["@testing-library/jest-dom"],
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "zustand": ["./src/index.ts"],
      "zustand/*": ["./src/*.ts"]
    }
  },
  "include": ["src/**/*", "tests/**/*"],
  "exclude": ["node_modules", "dist"]
}
</file>

<file path="vitest.config.mts">
import { resolve } from 'path'
// eslint-disable-next-line import/extensions
import { defineConfig } from 'vitest/config'

export default defineConfig({
resolve: {
alias: [
{ find: /^zustand$/, replacement: resolve('./src/index.ts') },
{ find: /^zustand(.*)$/, replacement: resolve('./src/$1.ts') },
],
},
test: {
name: 'zustand',
// Keeping globals to true triggers React Testing Library's auto cleanup
// https://vitest.dev/guide/migration.html
globals: true,
environment: 'jsdom',
dir: 'tests',
reporters: process.env.GITHUB_ACTIONS
? ['default', 'github-actions']
: ['default'],
setupFiles: ['tests/setup.ts'],
coverage: {
include: ['src/**/'],
reporter: ['text', 'json', 'html', 'text-summary'],
reportsDirectory: './coverage/',
provider: 'v8',
},
},
})
</file>

</files>
