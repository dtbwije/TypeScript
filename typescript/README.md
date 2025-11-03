TypeScript with NX Tutorial
--

I installed nx with the following but had to run terminal as administrator.

```
choco install nx
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


### Sources

[medium](https://medium.com/@sidharrthnix/nx-monorepo-essentials-a-beginners-guide-to-modern-workspaces-0bcddd8ad7ca)

