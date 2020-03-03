module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'airbnb-base',
    'plugin:sonarjs/recommended'
  ],
  plugins: [
    'immutable',
    'sonarjs'
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'global-require': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
  }
};
