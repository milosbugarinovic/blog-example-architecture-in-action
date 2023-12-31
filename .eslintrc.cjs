// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const namingConvention = () => {
	// prettier-ignore
	/* eslint-disable */
	return [
		{ selector: ['default'], 								 format: null,           modifiers: ['public'],    leadingUnderscore: 'forbid' },
		{ selector: ['default'], 								 format: ['camelCase'],  modifiers: ['protected'], leadingUnderscore: 'require' },
		{ selector: ['default'], 								 format: ['camelCase'],  modifiers: ['private'],   prefix: ['__'] },
		{ selector: ['accessor'], 							 format: ['camelCase'],  modifiers: ['public'],    leadingUnderscore: 'forbid' },
		{ selector: ['accessor'], 							 format: ['camelCase'],  modifiers: ['protected'], leadingUnderscore: 'require' },
		{ selector: ['accessor'], 							 format: ['camelCase'],  modifiers: ['private'],   prefix: ['__'] },
		{ selector: ['enum'], 									 format: ['PascalCase'] },
		{ selector: ['enumMember'], 						 format: ['UPPER_CASE'] },
		{ selector: ['classMethod', 'accessor'], format: ['PascalCase'], modifiers: ['public', 'static'],    leadingUnderscore: 'forbid' },
		{ selector: ['classMethod', 'accessor'], format: ['PascalCase'], modifiers: ['protected', 'static'] , leadingUnderscore: 'require' },
		{ selector: ['classProperty'], 					 format: ['UPPER_CASE'], modifiers: ['public', 'static'] },
		// { selector: ['typeProperty'],   format: null , leadingUnderscore: 'allow'},
	]
	/* eslint-enable */
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
	env: {
		es6: true,
		'jest/globals': true,
		node: true,
	},
	root: true,
	settings: {
		'import/resolver': {
			node: {
				paths: ['./'],
			},
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'ESNext',
		project: './tsconfig.eslint.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'eslint-plugin-import', 'import', 'no-only-tests', 'no-loops', 'jest', 'sort-keys-fix'],
	rules: {
		// ESLINT
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					// {
					// 	group: ['src/dal/typeorm/entity/*'],
					// 	message: 'Please use `src/dal/typeorm/entity` and expose your entity inside `src/dal/typeorm/entity/index.ts`',
					// },
					{
						group: ['@blooms/*/src/*',],
						message: 'Please use /dist/ instead of /src/ folder when importing common libraries',
					},
//					{
//						group: ['**/index'],
//						message: 'Please use `.../something` instead of ``.../something/index`',
//					},
				],
			},
		],

		'prefer-arrow-callback': 'error',
		'no-confusing-arrow': 'error',
		'no-constant-condition': 'error',

		'no-ternary': 'error',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', next: 'return', prev: '*' },
			{ blankLine: 'always', next: ['cjs-export', 'export'], prev: '*' },
		],
		'prefer-template': 'error',
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
			},
		],

		// NO_LOOPS
		'no-loops/no-loops': 'error',

		// DISABLE STRICT
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/dot-notation': 'off',
		'@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
		'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
		'@typescript-eslint/naming-convention': ['error', ...namingConvention()],

		// TYPESCRIPT
		'@typescript-eslint/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description' }],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],

		// IMPORT
		'import/namespace': [
			'error',
			{
				allowComputed: true,
			},
		],
		'import/newline-after-import': 'error',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: false,
					order: 'asc',
				},
				groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object']],
				'newlines-between': 'always',
			},
		],

		// JEST
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'no-console': 'error',
		'no-duplicate-imports': 'error',

		//NO_ONLY_TESTS
		'no-only-tests/no-only-tests': 'error',

		// SORT_KEYS_FIX
		'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],

		// PRETTIER
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		curly: 'error',
		'no-mixed-spaces-and-tabs': 'error',
	},
}
/* eslint-enable sort-keys-fix/sort-keys-fix */
