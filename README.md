# eighteen73 Create Block Template

## Overview

Template for use with @wordpress/create-block to scaffold blocks to eighteen73 standards.

## Features

- Single block plugin
- Multi block plugin
- Create another block inside multi block plugin
- Create a block without the build tools (for theme use)

## Usage

Basic usage:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template
```

Then follow the options to pick the variant

Create single block plugin:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template --variant basic
```

Create multi block plugin:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template --variant multi
```

Create another block inside multi block plugin:

```
npm run new-plugin-block -- block-name
```

Create a block without the build tools (for theme use):

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template --no-plugin
```
