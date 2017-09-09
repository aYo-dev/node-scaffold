module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins":[
    "classes"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-var": "error",
    "no-unused-expressions": "error",
    "eol-last": [
      "error", 
      "always"
    ],
    "quotes": [
      "error", 
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": [
      "error", 
      "always"
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true,
        "ignoreComments": true
      }
    ],
    "no-whitespace-before-property": "error"
  }
};