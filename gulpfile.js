var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    concat = require('gulp-concat');

gulp.task('css', function(){
    return gulp.src('./assets/styles/**.css')
        .pipe(postcss([nested, autoprefixer]))
        .pipe(gulp.dest('./temp/styles'));
});

gulp.task('scripts', function(){
    return gulp.src(['./assets/scripts/jquery.js', './assets/scripts/app.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./temp/scripts'));
});

gulp.task('watch', function(){
    watch('./assets/styles/**.css', function(){
        gulp.start('css');
    });

    watch('./assets/scripts/**.js', function(){
        gulp.start('scripts');
    });
});
