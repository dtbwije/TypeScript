# testlib

This library was generated with [Nx](https://nx.dev).

## Creating the library testlib

`npx nx g @nx/js:lib packages/testlib --bundler=tsc --unitTestRunner=jest --linter=none`

## Building

Run `nx build testlib` to build the library.

## Running unit tests

Run `nx test testlib` to execute the unit tests via [Jest](https://jestjs.io).

## Running typescript code

 - add following lines to the package.json 
 ```
   "scripts": {
    "build": "nx run-many --target=build"
  },
 ```

 Then it is possible to run `npm run build`




 ## Learnt lessons.

 * Powershell is very difficult to work with unless you get the permissions correct. So it would be better to use command prompts/git bash or anything else in windows.

 * clean the cache
    `npm cache clean --force`

 * delete files recursively in windows
  `del /s /q *.mjs`


 * Node_modules folder is backed up in AppData/Roaming/npm folder. We need to remove that to remove the caches.

  * windows history
  `doskey /history`