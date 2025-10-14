/**
 * External dependencies
 */
const { join } = require("path");

module.exports = {
  pluginTemplatesPath: join(__dirname, "plugin"),
  blockTemplatesPath: join(__dirname, "block"),
  defaultValues: {
    title: 'Example Block',
    pluginURI: 'https://eighteen73.co.uk',
    updateURI: 'https://eighteen73.co.uk',
    description: 'Example Block',
    version: '0.1.0',
    requiresAtLeast: '6.8',
    requiresPHP: '7.4',
    author: 'eighteen73',
    domainPath: '/languages',
    license: 'GPL-2.0-or-later',
    licenseURI: 'https://www.gnu.org/licenses/gpl-2.0.html',
    namespace: 'eighteen73',
    slug: 'example-block',
    category: 'text',
    attributes: {},
    supports: {
      html: false,
    },
    wpScripts: false,
    wpEnv: false,
    editorStyle: 'file:./index.css',
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
    transformer: (view) => {
      const plugin = view.plugin;

      return {
        ...view,
        rootDirectory: plugin ? view.rootDirectory : join('src/blocks', view.slug),
        folderName: plugin ? join('src/blocks', view.slug) : view.slug,
        slugScreamingSnakeCase: view.slug.replace(/-/g, "_").toUpperCase(),
        namespaceCamelCase: view.namespace.charAt(0).toLowerCase() + view.namespace.slice(1).toLowerCase(),
      };
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
    noBlocks: {
      blockTemplatesPath: null,
    },
  },
};
