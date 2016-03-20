const gulp = require('gulp');

const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const minify = require("gulp-minify-css");
const browserSync = require('browser-sync');
const flatten = require('gulp-flatten');

var browserSyncSettings = {
    proxy: {
        target: "localhost:3000"
    }
}

var jsPath = ["./wwwsrc/js/*/*.js"];
var jsBuildPath = "./wwwbuild/js/";
var jsWatchPath = ["./wwwsrc/js/**/*"];

var scssPath = ["./wwwsrc/scss/*/[^_]*.scss"];
var scssBuildPath = "./wwwbuild/scss/";
var scssWatchPath = ["./wwwsrc/scss/**/*"];

function reload(){
    if (typeof browserSyncSettings != "undefined")
        browserSync.reload();
}

//Build App JS -> Output to JS/.min
gulp.task('js', function(cb) {
    gulp.src(jsPath)
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(flatten())
        .pipe(gulp.dest(jsBuildPath))
        .on('finish', function(){
            reload();
            cb();
        });
});

//Combile SASS -> Output to CSS/.min
gulp.task('scss', function(cb) {
    gulp.src(scssPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest(scssBuildPath))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(gulp.dest(scssBuildPath))
        .on('finish', function(){
            reload();
            cb();
        });
});

gulp.task('watch', function(cb){
    gulp.watch(jsWatchPath, ['js'])
    gulp.watch(scssWatchPath, ['scss'])

    cb();
});

gulp.task('browsersync', function(cb){  
    if (browserSyncSettings) 
        browserSync(browserSyncSettings);

    cb();
});

// The default task
gulp.task('build', ['scss', 'js']);
gulp.task('default', ['build', 'browsersync', 'watch']);