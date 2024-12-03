import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		ignores: ['node_modules/**'], // Исключаем папку node_modules
	},
	{
		languageOptions: {
			globals: {
				...globals.browser, // Глобальные переменные для браузера
				...globals.node, // Глобальные переменные для Node.js
				$: 'readonly', // Обозначаем $ как глобальную переменную
				require: true, // Add this line to disable the 'require' is not  defined
				// warning
				global: true // Добавьте эту строку, чтобы отключить предупреждение
				// 'global' is not defined
			},
		}
	},
	{
		rules: {
			'no-mixed-spaces-and-tabs': 'off', // Запретить смешивание пробелов и
																				 // табуляций
			'semi': ['error', 'always'],
			'quotes': ['warn', 'single', { // Предупреждение за использование одинарных кавычек
				'avoidEscape': true, // Позволяет использовать одинарные кавычки для
														 // экранирования
				'allowTemplateLiterals': true // Позволяет использовать шаблонные
																			// литералы
			}],
		},
	},
	{
		'env': {
			'node': true
		},
		'files': [
			'.eslintrc.{js,jsx}'
		],
		'parserOptions': {
			'sourceType': 'script'
		}
	},
	pluginJs.configs.recommended,
];