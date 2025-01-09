// based on https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/

import { src, dest, watch, series, parallel } from "gulp";
// for dev and production flag
import yargs from "yargs";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import imagemin from "gulp-imagemin";
import gulp from "gulp";
import sass from "gulp-dart-sass";
// deleting assets dist folder
import del from "del";
import webpack from "webpack-stream";
import named from "vinyl-named";
import browserSync from "browser-sync";

/**
 * Paths to project folders
 */

var paths = {
  input: "assets/src/",
  output: "assets/dist/",
  styles: {
    input: [
      "assets/src/css/scss/main.scss",
      "assets/src/css/scss/editor-styles.scss",
    ],
    output: "assets/dist/css/",
    watch: "assets/src/css/scss/**/*.scss",
  },
  image: {
    input: "assets/src/img/**/*.{jpg,JPG,jpeg,png,svg,gif}",
    output: "assets/dist/img/",
  },
  scripts: {
    input: ["assets/src/js/main.js", "assets/src/js/editor.js"],
    output: "assets/dist/js",
    watch: "assets/src/js/**/*.js",
  },
  copy: {
    input: [
      "assets/src/**/*",
      "!assets/src/{img,js,css}",
      "!assets/src/{img,js,css}/**/*",
    ],
    output: "assets/dist",
  },
  php: {
    watch: ["**/*.php", "templates/**/*.twig"],
  },
  json: {
    watch: ["**/*.json"],
  },
};

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src(paths.styles.input)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest(paths.styles.output))
    .pipe(server.stream());
};

export const images = () => {
  return src(paths.image.input)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest(paths.image.output));
};

export const copy = () => {
  return src(paths.copy.input).pipe(dest(paths.copy.output));
};

export const clean = () => del([paths.output]);

// in case there are multiple js files as entry points add it in an area: return src(['src/js/main.js','src/js/admin.js'])
export const scripts = () => {
  return src(["assets/src/js/main.js", "assets/src/js/editor.js"])
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? "production" : "development",
        devtool: !PRODUCTION ? "inline-source-map" : false,
        output: {
          filename: "[name].js",
        },
        externals: {
          jquery: "jQuery",
        },
      })
    )
    .pipe(dest("assets/dist/js"));
};

export const watchForChanges = () => {
  watch(paths.styles.watch, styles);
  watch(paths.image.input, series(images, reload));
  watch(paths.copy.input, series(copy, reload));
  watch(paths.scripts.watch, series(scripts, reload));
  watch(paths.php.watch, reload);
  watch(paths.json.watch, reload);
};

const server = browserSync.create();
export const serve = (done) => {
  server.init({
    proxy: "nina-starter-theme.local",
  });
  done();
};
export const reload = (done) => {
  server.reload();
  done();
};

export const dev = series(
  clean,
  parallel(styles, images, copy, scripts),
  serve,
  watchForChanges
);
export const build = series(clean, parallel(styles, images, copy, scripts));
export default dev;
