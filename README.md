# Bug Reproduction Repo

Based on [this example](https://webpack.js.org/api/loaders/#thisimportmodule) from the webpack docs.

## How to reproduce

Running `npm run build` results in the following error:

```
ERROR in webpack/runtime/css loading
Cannot read properties of undefined (reading 'getChunkConditionMap')
TypeError: Cannot read properties of undefined (reading 'getChunkConditionMap')
    at CssLoadingRuntimeModule.generate (.../webpack-async-css-bug/node_modules/webpack/lib/css/CssLoadingRuntimeModule.js:72:35)
    at CssLoadingRuntimeModule.getGeneratedCode (.../webpack-async-css-bug/node_modules/webpack/lib/RuntimeModule.js:182:44)
    at CssLoadingRuntimeModule.codeGeneration (.../webpack-async-css-bug/node_modules/webpack/lib/RuntimeModule.js:137:30)
    at .../webpack-async-css-bug/node_modules/webpack/lib/Compilation.js:3331:22
    at .../webpack-async-css-bug/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (.../webpack-async-css-bug/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Cache.get (.../webpack-async-css-bug/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (.../webpack-async-css-bug/node_modules/webpack/lib/CacheFacade.js:111:15)
    at Compilation._codeGenerationModule (.../webpack-async-css-bug/node_modules/webpack/lib/Compilation.js:3324:9)
    at codeGen (.../webpack-async-css-bug/node_modules/webpack/lib/Compilation.js:4863:11)
```

## Conditions

This error requires the following conditions:
* `experiments.css` is set to `true`
* HMR is enabled
* The `importModule` function is used in a loader

Changing any of these conditions will make the error go away.
