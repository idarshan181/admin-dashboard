module.exports = {
  '*.{ts,js,tsx,jsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run typecheck',
  '*.json': ['prettier --write']
};
