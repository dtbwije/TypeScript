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

I instantiated the project with following command. This would be the option to use if we are starting with an existing project. But if we do not have a package.json it would be better to have it mannually or use step 1 of NX/NPX section

```
npx nx@latest init
```



At this point we need to start two separate paths
1. NX learning path
2. typescript test project
3. If possible .github workflow.

So for part one refer to NX/NPX part and typescript/Node/NPM section for the code development

## NX/NPX
1. Created the nx workspace with following command. Use the --preset  offset to set the repo to typescript. (THIS)[https://nx.dev/docs/technologies/typescript/introduction] is the tutorial for nx infered tasks.
```
 1. npx create-nx-workspace@latest
 2. npx create-nx-workspace my-org --preset=ts

 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Where would you like to create your workspace? · my-mono-repo
√ Which stack do you want to use? · node
√ What framework should be used? · nest
√ Application name · crud-server
√ Would you like to generate a Dockerfile? [https://docs.docker.com/] · Yes
√ Which unit test runner would you like to use? · jest
√ Would you like to use ESLint? · Yes
√ Would you like to use Prettier for code formatting? · Yes
√ Which CI provider would you like to use? · gitlab

 NX   Creating your v22.1.3 workspace.

✔ Installing dependencies with npm
✔ Successfully created the workspace: my-mono-repo
✔ Nx Cloud has been set up successfully
✔ CI workflow has been generated successfully

 NX   Directory is already under version control. Skipping initialization of git.


 NX   Your CI setup is almost complete.

Push your repo, then go to Nx Cloud and finish the setup: https://cloud.nx.app/connect/OZxlmXzpVr
```

2.Project is configured with jest, nestJS, and docker and end to end testing. So there are following (infered tasks)[https://nx.dev/docs/concepts/inferred-tasks].
  
```
1. nx build <project name>
2. nx graph

Running builds on affected projects

1. nx affected:build
2. nx affected:test
3. nx affected:lint
```


## TypeScript/Node/NPM



### Created a submodule

```
npm install @nx/nest
nx g @nx/nest:app server
```

# testlib

This library was generated with [Nx](https://nx.dev).

## Creating the library testlib

`npx nx g @nx/js:lib packages/testlib --bundler=tsc --unitTestRunner=jest --linter=none`



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

  *delete folder with its content.
    rmdir /s vertualEnv

  * windows kill a task with PID

  ```
  taskkill /PID 12345 /F
  netstat -ano  | findstr :3000
  ```

* In order to install python in windows following is the step needed.

```
C:\Users\dtbwi\WebstormProjects\TypeScript>python

This will open windows package manager and through this it can be installed
```

## Robot tests
We are using windows. So these instructions are windoes specific. Since we need pip python we will create a virtual envieronment.

```
1. Running robot tests
robot test.robot


```



### Sources
1. https://www.typescripttutorial.net/
2. https://docs.nestjs.com/first-steps
3. https://nx.dev/docs/features/run-tasks


[medium](https://medium.com/@sidharrthnix/nx-monorepo-essentials-a-beginners-guide-to-modern-workspaces-0bcddd8ad7ca)



## Trash or not trash

