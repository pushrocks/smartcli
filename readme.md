# @pushrocks/smartcli
easy observable cli tasks

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartcli)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartcli)
* [github.com (source mirror)](https://github.com/pushrocks/smartcli)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartcli/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartcli/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartcli/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartcli)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartcli)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartcli)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartcli)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartcli)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

this plugin tries to establish some logic in which CLI tools work.

take the following commandline input:

```
mytool command argument1 argument2 --option1 -o2 option2Value
```

- `mytool` obviously is the tool (like git)
- `command` is the main thing the tool shall do (like commit)
- `argument1` and `argument2` are arguments
- `option1` is a longform option you can add (like --message for message)
- `optionValue` is the referenced option value (like a commit message)

When there is no command and no option specified the standardTask applied.
When there is a option specified but no command, standardTask applies,
except when of the options is -v, --version or --help.

```javascript
import { Smartcli } from 'smartcli';
mySmartcli = new Smartcli();
mySmartcli.standardTask().then(argvArg => {
  // do something if program is called without an command
});

mySmartcli.addCommand({ commandname: 'install' }).then(argvArg => {
  // do something if program is called with command "install"
});

mySmartcli.addVersion('1.0.0'); // -v and --version options will display the specified version in the terminal

mySmartCli.addHelp({
  // is triggered by help command and --help option
  helpText: 'some help text to print' // the helpText to display
});

mySmartcli.startParse(); // starts the evaluation and fullfills or rejects promises.
```

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
