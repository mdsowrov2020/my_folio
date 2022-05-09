const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
compileSass.compiler = require('node-sass');

const bundleSass = () => {
  return src('./css/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('./dist/css/'));
};

const devWatch = () => {
  watch('./css/**/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
