var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var styleSRC = './src/scss/style.scss';
var styleDIST = './public_html/dist/css/';

var jsSRC = './src/js/script.js';
var jsDIST = './public_html/dist/js/';

gulp.task('style', function(){
    gulp.src( styleSRC )
        .pipe( sourcemaps.init() )
        .pipe( sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on( '', console.error.bind( console ) )
        .pipe( autoprefixer ( { 
                browsers: ['last 2 versions'],
                cascade: false
            } )
        )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write('./') )
        .pipe( gulp.dest( styleDIST ) )
    ;
});

gulp.task('js', function(){
    gulp.src( jsSRC )
            .pipe( gulp.dest( jsDIST ) )
});

gulp.task('default', ['style', 'js'], function(){
    //TO DO
});