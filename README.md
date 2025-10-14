# eighteen73 Create Block Template

## Overview

Template for use with @wordpress/create-block to scaffold blocks to eighteen73 standards.

## Features

- Single block plugin
-- Default (dynamic)
-- innerBlocks
-- Interactive
- Create another block inside plugin
- Create a plugin

## Usage

Basic usage:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template
```

Then follow the options to pick the variant.


### Create another block inside a block plugin:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template --no-plugin
```

### Create a plugin without blocks:

```
npx @wordpress/create-block@latest --template @eighteen73/create-block-template --variant noBlocks
```
