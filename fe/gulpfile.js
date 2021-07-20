const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const gap = require('gulp-append-prepend');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

const clientsPath = 'public/clients/';

function getFolders(dir){
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

function generateCss(dir){
  const clientPath = clientsPath + dir;
  return gulp.src(clientPath + '/*.less')
    .pipe(gap.prependText('@import \'../../../node_modules/bootstrap/dist/css/bootstrap.css\';'))
  //  .pipe(gap.appendFile('src/fixes.less'))
  //  .pipe(gap.appendFile('src/reactTable.less'))
    .pipe(rename('theme.less'))
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest(clientPath));
}

gulp.task('css', (done) => {
  console.log('Compiling theme files...');
  getFolders(clientsPath).map((clientFolder) => {
    return generateCss(clientFolder);
  });
  done();
});

gulp.task('clean', () => {
  console.log('removing the old build directory...');
  return gulp.src('build', {read: false, allowEmpty: true}).pipe(clean());
});
