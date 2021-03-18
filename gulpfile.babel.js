// based on https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/

import { src, dest, watch, series, parallel } from 'gulp';
// for dev and production flag
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
// deleting assets dist folder
import del from 'del';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from "browser-sync";


/**
 * Paths to project folders
 */

var paths = {
	input: 'assets/src/',
	output: 'assets/dist/',
  styles: {
    input: ['assets/src/css/scss/main.scss', 'assets/src/css/scss/editor-styles.scss'],
    output: 'assets/dist/css/',
    watch: 'assets/src/css/scss/**/*.scss'
  },
  image: {
    input: 'assets/src/img/**/*.{jpg,JPG,jpeg,png,svg,gif}',
    output: 'assets/dist/img/'
  },
	scripts: {
		input: 'assets/src/js/main.js',
		output: 'assets/dist/js',
    watch: 'assets/src/js/**/*.js',
    name: 'main.min.js'
	},
	copy: {
		input: ['assets/src/**/*','!assets/src/{img,js,css}','!assets/src/{img,js,css}/**/*'],
		output: 'assets/dist'
	},
  php: {
    watch: ["**/*.php", "templates/**/*.twig"]
  }
};


const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src(paths.styles.input)
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest(paths.styles.output))
    .pipe(server.stream());
}

export const images = () => {
  return src(paths.image.input)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest(paths.image.output));
}

export const copy = () => {
  return src(paths.copy.input)
    .pipe(dest(paths.copy.output));
}

export const clean = () => del([paths.output]);

// in case there are multiple js files as entry points add it in an area: return src(['src/js/main.js','src/js/admin.js'])
export const scripts = () => {
  return src(paths.scripts.input)
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: []
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: paths.scripts.name
    },
    externals: {
      jquery: 'jQuery'
    },
  }))
  .pipe(dest(paths.scripts.output));
}

export const watchForChanges = () => {
  watch(paths.styles.watch, styles);
  watch(paths.image.input, series(images, reload));
  watch(paths.copy.input, series(copy, reload));
  watch(paths.scripts.watch, series(scripts, reload));
  watch(paths.php.watch, reload);
}

const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: "starterthemegulp4.local"
  });
  done();
};
export const reload = done => {
  server.reload();
  done();
};

export const dev = series(clean, parallel(styles, images, copy, scripts), serve, watchForChanges)
export const build = series(clean, parallel(styles, images, copy, scripts))
export default dev;




// /**
//  * Settings
//  * Turn on/off build features
//  */
//
// var settings = {
// 	clean: true,
// 	scripts: true,
// 	polyfills: false,
// 	styles: true,
// 	svgs: false,
// 	copy: false,
// 	reload: true
// };
//
//
// /**
//  * Paths to project folders
//  */
//
// var paths = {
// 	input: 'assets/src/',
// 	output: 'assets/dist/',
// 	scripts: {
// 		input: 'assets/src/js/**/*.js',
// 		output: 'assets/dist/js/'
// 	},
// 	styles: {
// 		input: 'assets/src/css/scss/**/*.scss',
// 		output: 'assets/dist/css/'
// 	},
// 	copy: {
// 		input: 'src/copy/**/*',
// 		output: 'dist/'
// 	},
// 	reload: './dist/'
// };
//
//
// /**
//  * Template for banner to add to file headers
//  */
//
// var banner = {
// 	main:
// 		'/*!' +
// 		' <%= package.name %> v<%= package.version %>' +
// 		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
// 		' | <%= package.license %> License' +
// 		' | <%= package.repository.url %>' +
// 		' */\n'
// };
//
//
// /**
//  * Gulp Packages
//  */
//
// // General
// var {gulp, src, dest, watch, series, parallel} = require('gulp');
// var del = require('del');
// var flatmap = require('gulp-flatmap');
// var lazypipe = require('lazypipe');
// var rename = require('gulp-rename');
// var header = require('gulp-header');
// var package = require('./package.json');
// var webpack       = require('webpack');
// var webpackStream = require('webpack-stream');
// var webpackConfig = require('./webpack.config.js');
//
// // Scripts
// var babel = require('gulp-babel');
// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');
// var concat = require('gulp-concat');
// var uglify = require('gulp-terser');
// var optimizejs = require('gulp-optimize-js');
//
// // Styles
// var sass = require('gulp-sass');
// var postcss = require('gulp-postcss');
// var prefix = require('autoprefixer');
// var minify = require('cssnano');
//
// // SVGs
// // var svgmin = require('gulp-svgmin');
//
// // BrowserSync
// var browserSync = require('browser-sync');
//
//
// /**
//  * Gulp Tasks
//  */
//
// // Remove pre-existing content from output folders
// var cleanDist = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.clean) return done();
//
// 	// Clean the dist folder
// 	del.sync([
// 		paths.output
// 	]);
//
// 	// Signal completion
// 	return done();
//
// };
//
// // Repeated JavaScript tasks
// var jsTasks = lazypipe()
// 	.pipe(header, banner.main, {package: package})
//   .pipe(webpackStream, webpackConfig, webpack)
// 	.pipe(optimizejs)
//   .pipe(babel, {presets: ['@babel/env']})
// 	.pipe(dest, paths.scripts.output)
// 	.pipe(uglify)
// 	.pipe(optimizejs)
// 	.pipe(header, banner.main, {package: package})
// 	.pipe(dest, paths.scripts.output);
//
// // Lint, minify, and concatenate scripts
// var buildScripts = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.scripts) return done();
//
// 	// Run tasks on script files
// 	return src(paths.scripts.input)
// 		.pipe(flatmap(function(stream, file) {
//
// 			// If the file is a directory
// 			if (file.isDirectory()) {
//
// 				// Setup a suffix variable
// 				var suffix = '';
//
// 				// If separate polyfill files enabled
// 				if (settings.polyfills) {
//
// 					// Update the suffix
// 					suffix = '.polyfills';
//
// 					// Grab files that aren't polyfills, concatenate them, and process them
// 					src([file.path + '/*.js', '!' + file.path + '/*' + paths.scripts.polyfills])
// 						.pipe(concat(file.relative + '.js'))
// 						.pipe(jsTasks());
//
// 				}
//
// 				// Grab all files and concatenate them
// 				// If separate polyfills enabled, this will have .polyfills in the filename
// 				src(file.path + '/*.js')
// 					.pipe(concat(file.relative + suffix + '.js'))
// 					.pipe(jsTasks());
//
// 				return stream;
//
// 			}
//
// 			// Otherwise, process the file
// 			return stream.pipe(jsTasks());
//
// 		}));
//
// };
//
// // Lint scripts
// var lintScripts = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.scripts) return done();
//
// 	// Lint scripts
// 	return src(paths.scripts.input)
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('jshint-stylish'));
//
// };
//
// // Process, lint, and minify Sass files
// var buildStyles = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.styles) return done();
//
// 	// Run tasks on all Sass files
// 	return src(paths.styles.input)
// 		.pipe(sass({
// 			outputStyle: 'expanded',
// 			sourceComments: true
// 		}))
// 		.pipe(postcss([
// 			prefix({
// 				cascade: true,
// 				remove: true
// 			})
// 		]))
// 		.pipe(header(banner.main, {package: package}))
// 		.pipe(dest(paths.styles.output))
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(postcss([
// 			minify({
// 				discardComments: {
// 					removeAll: true
// 				}
// 			})
// 		]))
// 		.pipe(dest(paths.styles.output));
//
// };
//
// // Optimize SVG files
// var buildSVGs = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.svgs) return done();
//
// 	// Optimize SVG files
// 	return src(paths.svgs.input)
// 		.pipe(svgmin())
// 		.pipe(dest(paths.svgs.output));
//
// };
//
// // Copy static files into output folder
// var copyFiles = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.copy) return done();
//
// 	// Copy static files
// 	return src(paths.copy.input)
// 		.pipe(dest(paths.copy.output));
//
// };
//
// // Watch for changes to the src directory
// var startServer = function (done) {
//
// 	// Make sure this feature is activated before running
// 	if (!settings.reload) return done();
//
// 	// Initialize BrowserSync
// 	browserSync.init({
//     injectChanges: true,
//     proxy: "nina-startertheme.local"
// 	});
//
// 	// Signal completion
// 	done();
//
// };
//
// // Reload the browser when files change
// var reloadBrowser = function (done) {
// 	if (!settings.reload) return done();
// 	browserSync.reload();
// 	done();
// };
//
// // Watch for changes
// var watchSource = function (done) {
// 	watch(paths.input, series(exports.default, reloadBrowser));
//   watch(['templates/**/*.twig', 'templates/*.twig'], reloadBrowser);
//   watch("**/*.php", reloadBrowser);
// 	done();
// };
//
//
// /**
//  * Export Tasks
//  */
//
// // Default task
// // gulp
// exports.default = series(
// 	cleanDist,
// 	parallel(
// 		buildScripts,
// 		lintScripts,
// 		buildStyles,
// 		buildSVGs,
// 		copyFiles
// 	)
// );
//
// // Watch and reload
// // gulp watch
// exports.watch = series(
// 	exports.default,
// 	startServer,
// 	watchSource
// );
