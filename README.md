TypeScript with NX Tutorial
--
During th two weeks I figured that it is useless to initiate coding with typescript without learning nx , which is base for the mono repo project. These tools are very fragile and it is easier to get lost in the builds so that actual coding takes lot more time because the build never works and it is very important learn following steps.

1. Setup build environment
2. Running tests.
3. Running Code
    1. For example Java code can be run as applications and as well as classes using static main.
4. Running all tests
5. Running single tests
6. Clean workspace.


I installed nx with the following but had to run terminal as administrator.

```
choco install nx
```

I instantiated the project with following command.

```
npx nx@latest init
```

Created the nx project with following command

```
npx create-nx-workspace@latest typescript
```

```
nx graph
```

### Running builds on affected projects

```
nx affected:build
nx affected:test
nx affected:lint
```

### Created a submodule

```
npm install @nx/nest
nx g @nx/nest:app server
```

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


### Sources

[medium](https://medium.com/@sidharrthnix/nx-monorepo-essentials-a-beginners-guide-to-modern-workspaces-0bcddd8ad7ca)
