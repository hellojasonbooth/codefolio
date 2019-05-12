


var gulp = require("gulp")
var sass = require("gulp-sass")
// const sourcemaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var autoprefixer = require('gulp-autoprefixer')


var runSass = function () {
    return gulp.src("css/app.scss")
    // .pipe(sourcemaps.init())
    .pipe(sass())

    .pipe(
        cleanCSS(
        {
            compatibility: 'ie8'
        }
    ))

    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    .pipe(gulp.dest("."))

}


var defaultTask = function () {
    return gulp.parallel(runSass)
}

function watch(){
  gulp.watch("css/app.scss", runSass)
}



exports.watch = watch
exports.sass = runSass
exports.default = defaultTask










// var gulp = require('gulp')
// var sass = require('gulp-sass')
// var cleanCss = require('gulp-clean-css')
// var sourcemaps = require('gulp-sourcemaps')
// var autoprefixer = require('gulp-autoprefixer')
 
// var runSass = function (){
//     return gulp.src("css/app.scss")
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(
//       cleanCss({
//         compatibility: 'ie8'
//       })
//     )
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest("."))

// }


// function watch(){
//   gulp.watch("css/app.scss", runSass)
// }



// var defaultTask = function () {
//   return gulp.parallel(runSass)
// }

// exports.watch = watch
// exports.sass = runSass
// exports.default = defaultTask