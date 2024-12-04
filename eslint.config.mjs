/* 
* https://github.com/eslint/eslint?tab=readme-ov-file#installation-and-usage 
*/
export default [
  {
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      rules: {
          "prefer-const": "warn", // or off or error
          "no-constant-binary-expression": "error"
      }
  }
];