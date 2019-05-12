


var gulp = require('gulp')
var sass = require('gulp-sass')

var defaultTask = function () {

    return gulp.src("css/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("app.css"))
}

exports.default = defaultTask