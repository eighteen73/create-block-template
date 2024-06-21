/**
 * External dependencies
 */
const { join } = require("path");

module.exports = {
  defaultValues: {
    slug: "eighteen73-block",
    namespace: "eighteen73-block",
    title: "eighteen73 Block",
    author: "eighteen73",
    description: "A block plugin scaffolded from eighteen73's structure",
    dashicon: "smiley",
    npmDependencies: [
      "@eighteen73/eslint-config-wordpress",
      "@eighteen73/stylelint-config-wordpress",
    ],
    customPackageJSON: { files: ["[^.]*"] },
    viewScript: "file:./view.js",
    render: "file:./render.php",
    example: {},
    customScripts: {
      "new-plugin-block":
        "cd src && npx @wordpress/create-block@latest --template @eighteen73/create-block-template --no-plugin",
      "lint:css": "stylelint './src/**/*.scss'",
      "lint:js": "eslint './src/**/*.js'",
      "format:css": "stylelint --fix './src/**/*.scss'",
      "format:js": "eslint --fix './src/**/*.js'",
      build: "wp-scripts build",
      start: "wp-scripts start",
    },
    transformer: (view) => {
      const isMultiBlock = view.variantVars && view.variantVars.isMultiVariant;
      return {
        ...view,
        folderName: isMultiBlock ? `src/${view.slug}` : `src`,
        isMultiBlock,
      };
    },
  },
  variants: {
    basic: {},
    multi: {
      slug: "multi-block-plugin",
      namespace: "multi-block-plugin",
      title: "Multi Block Plugin",
      description: "A plugin containing multiple blocks",
    },
  },
  pluginTemplatesPath: join(__dirname, "plugin-templates"),
  blockTemplatesPath: join(__dirname, "block-templates"),
};
