# pnpm-monorepo-template

## Create new package

Create a package folter that can be used in the workspace apps.

```shell
cd packages
pnpm create vite <folder-name> --template <template-name>
cd ../
pnpm install
npm pkg set scripts.<folder-name>="pnpm --filter <folder-name>"
```

## Create new apps

```shell
cd apps
pnpm create ts-express <folder-name>
cd ../
pnpm install
npm pkg set scripts.<folder-name>="pnpm --filter <folder-name>"
```

or

```shell
cd apps
pnpm dlx nuxi init <folder-name>
cd ../
pnpm install
npm pkg set scripts.<folder-name>="pnpm --filter <folder-name>"
```
