/**
 * External dependencies
 */
const { join } = require("path");

module.exports = {
  defaultValues: {
    author: 'eighteen73',
    namespace: 'eighteen73-plugin',
    textdomain: 'eighteen73-plugin',
    category: 'text',
    slug: 'example-block',
    title: 'Example Block',
    description: 'Example Block',
    attributes: {},
    supports: {
      html: false,
    },
    wpScripts: false,
    wpEnv: false,
    version: false,
    editorStyle: false,
    style: 'file:./style-index.css',
    render: 'file:./render.php',
    npmDevDependencies: [
      "@eighteen73/eslint-config-wordpress",
      "@eighteen73/stylelint-config-wordpress",
      "@wordpress/browserslist-config",
      "@wordpress/prettier-config",
      "@wordpress/scripts",
      "lefthook",
      "postcss-preset-env",
    ],
    viewScript: "file:./view.js",
    render: "file:./render.php",
    example: {},
    customScripts: {
      "start": "wp-scripts start --blocks-manifest",
      "build": "wp-scripts build --blocks-manifest",
      "check-engines": "wp-scripts check-engines",
      "check-licenses": "wp-scripts check-licenses",
      "format": "npm run format:css && npm run format:js && npm run format:php",
      "format:css": "stylelint --fix './src/**/*.scss'",
      "format:js": "eslint --fix './src/**/*.js'",
      "format:php": "composer run format",
      "lint": "npm run lint:css && npm run lint:js && npm run lint:php",
      "lint:css": "wp-scripts lint-style",
      "lint:js": "wp-scripts lint-js",
      "lint:php": "composer run lint",
      "lint:md:docs": "wp-scripts lint-md-docs",
      "lint:pkg-json": "wp-scripts lint-pkg-json",
      "packages-update": "wp-scripts packages-update",
      "plugin-zip": "wp-scripts plugin-zip",
      "pot": "wp i18n make-pot . languages/{{textdomain}}.pot --domain={{textdomain}} --exclude=node_modules,vendor,.git"
    },
  },
  variants: {
    default: {},
    innerBlocks: {},
    interactive: {
      supports: {
        html: false,
        interactivity: true,
      },
      viewScriptModule: 'file:./view.js',
    },
    noBlocks: {},
  },
  pluginTemplatesPath: join(__dirname, "plugin-templates"),
  blockTemplatesPath: join(__dirname, "block-templates"),
};
