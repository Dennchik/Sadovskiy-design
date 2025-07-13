import { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import pugbem from 'gulp-pugbem';
import TerserPlugin from 'terser-webpack-plugin';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const app = {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						keep_fnames: true, // сохраняем имена функций
						keep_classnames: true, // сохраняем имена классов
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
			runtimeChunk: 'single',
		},

		entry: {
			main: {
				import: ['./#src/js/main.js'],
				dependOn: ['anime-vendors'],
				filename: '[name].min.js'
			},

			//! depend On - vendors
			'anime-vendors': ['animejs', 'swiper/bundle']
		},
		output: {
			filename: 'app/[name].min.js',
		},

		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								api: 'modern-compiler',
								sassOptions: {
									// Your sass options
								},
							},
						}
					],
				},
				// {
				// 	test: /\.scss$/,
				// 	exclude: /node_modules/,
				// 	use: [
				// 		'style-loader',
				// 		'css-loader',
				// 		'sass-loader'   // компилирует Sass в CSS
				// 	]
				// },
			],
		},
		resolve: {
			// разрешаем импорт файлов с расширениями .js и .jsx
			extensions: ['.js', '.jsx'],
		},
	},
	scss: {
		outputStyle: 'expanded',
		silenceDeprecations: ['legacy-js-api'],
		api: 'modern-compiler',
		options: {
			sassOptions: {
				quietDeps: false,
			},
		},
	},
	pug: {
		pretty: true,
		plugins: [pugbem],
		doctype: 'html'
	},
	htmlMin: {
		collapseWhitespace: true,
		removeAttributeQuotes: true,
		collapseBooleanAttributes: true, // ← ключевой момент!
		removeRedundantAttributes: true,
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	csso: {
		restructure: true,
		sourceMap: true
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'Android >= 4',
			'last 3 versions',
			'Firefox >= 24',
			'Safari >= 6',
			'Opera >= 12'
		]
	},
	fonter: {
		// formats: ['ttf', 'woff', 'eot', 'svg'],

		formats: ['ttf', 'woff', 'svg'],
	},
	svgMin: {
		js2svg: {
			indent: 4,
			pretty: true
		}
	},
	cheerio: {
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: { xmlMode: true }
	},
	svgSprite: {
		shape: {
			id: {
				separator: '--',
				pseudo: '~',
				whitespace: '_',
			},
			dimension: { // Максимальные размеры иконок
				maxWidth: 500,
				maxHeight: 500,
			},
			spacing: { // Отступы вокруг иконок
				padding: 0,
			},
			transform: [{
				svgo: {
					plugins: [
						'cleanupAttrs',
						'convertColors',
						'removeEmptyAttrs',
					],
				},
			}],
		},
		mode: {
			symbol: {       // Режим symbol для создания <symbol> спрайта
				dest: './',   // Папка назначения относительно gulp.dest
				sprite: 'sprite.svg',  // Имя итогового файла спрайта
				example: false, // Если true - создаст пример использования спрайта (html файл)
			},
		},
	},

	imageMin: (
		[
			svgo({
				plugins: [
					{ optimizationLevel: 5 },
					{ progessive: true },
					{ interlaced: true },
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false }
				],
			}),
			gifsicle({ interlaced: true }),
			optipng({ optimizationLevel: 3 }),
			mozjpeg({ quality: 75, progressive: true }),
		]),
	include: {
		prefix: '@@',
		basepath: '@#src'
	},
}; 