# c9.snippets

Code completion snippets for AWS Cloud9

## Including snippets in AWS Cloud9

The documentation is out of date and centered around C9.io (not AWS Cloud9), but from what I've pieced together, the following should work:

- You can add snippets for code completion for various languages using the snippet syntax defined in the [C9.io Documentation on Snippets](https://cloud9-sdk.readme.io/docs/snippets).
- In order to "register" a snippet for AWS Cloud9, you must load it as a plugin.
- AWS Cloud9 does not currently support local plugins, so you must host the plugin somewhere and then load it in your `init.js` script on Cloud9 (click on `AWS Cloud9` > `Open Your Init Script` in the menu bar).
- You should load the `package.SOME_PLUGIN_NAME.js` file inside the `c9build` folder (see examples below).
- Try loading your snippet as the first plugin if you're having issues.

Example `init.js` script

```js
// init.js
services.pluginManager.loadPackage([
   "https://rawgit.com/kristiehowboutdat/c9.snippets/master/c9build/package.c9.snippets.js",
   "https://nanowerx.github.io/plugin.ide.language.terraform/c9build/package.plugin.ide.language.terraform.js",
]);
```

## Building your own snippets

There is a very specific file structure and format that the snippets must be created in so that the `c9` build tool will package it properly. The documentation [here](https://cloud9-sdk.readme.io/docs/snippets#section-adding-snippets-to-a-bundle) explains it briefly - substitute "plugin" for "bundle".

#### TL;DR:

- You **must** put your snippets inside a folder called `snippets` that is at the same level as the `package.json`.
- Your snippets files should end with `.snippets`
- Your `package.json` should have a field `"name"` that matches the name of the parent folder
- Snippets need to be indented with tabs (not spaces)
- You need to escape the `$` character if trying to insert it as part of a snippet's body: ex. `// \$FlowFixMe` instead of `// $FlowFixMe`

See the sample below:

```
// Directory structure

└─ myPluginName
    ├─ snippets
    |    └─ javascript.snippets
    |    └─ go.snippets
    ├─ package.json
    └─ README.md
```

```json
// package.json

{
  "name":"myPluginName",
  "plugins": {}
}

```

- To make changes, edit the `.snippets` file(s) and save
- To publish changes, run `c9 build` in the root directory (where the `package.json` is). This will create or update the `c9build` directory.
- To include your plugin/snippet, host your git repo somewhere, and then include the path to your `.js` file (ex. `https://path.to.your.repo.com/c9build/package.YOUR_PLUGIN_NAME.js`) inside the `c9build` directory in your `init.js` script
- Make sure to refresh your AWS Cloud9 window after you make changes to your hosted snippets


