import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    tseslint.configs.eslintRecommended,
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            parser: tseslint.parser,
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            "no-var": "error",
            "prefer-const": "error",
        },
    },
];
