// Fetching the necessary modules for Gulp
const gulp = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const terser = require('gulp-terser')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create()

// Logs Message
function message() {
    return console.log('Gulp is up and running...')
}

// Compile scss into css
function style() {
    // Folder for scss files
    return gulp.src('src/scss/**/*.scss')
        // Run the files via sass compiler + error checking
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('pub/css'))     // Store the css file
        .pipe(browserSync.stream())     // Make sure changes shows in browsers
}

// Copy all html files from src/ to pub/
function copyHtml() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('pub'))         // Save a copy of html-files to pub-folder
}

// Minifying images by imagemin
function imageMin() {
    return gulp.src('src/img/*')
        .pipe(imagemin())               // gulp-method imageMin
        .pipe(gulp.dest('pub/img'))     // place images in img-folder
}

// Minify JS files
function minify() {
    return gulp.src('src/js/**/*.js')
        .pipe(terser())                 // Removes white spaces fm files
        .pipe(gulp.dest('pub/js'))
}

// Concatenate all scss-files into 1 single css-file
function concatCss() {
    // Folder for scss files
    return gulp.src('src/scss/**/*.scss')
        .pipe(concat('styles.scss'))    // The resultant file
        // Run the files via sass compiler + error checking
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())               // Removes white spaces
        .pipe(gulp.dest('pub/css'))     // Store the css file
        .pipe(browserSync.stream())     // Make sure changes shows in browsers
}

// Concatenate all js-files into 1 single file
function concatJs() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('index.js'))       // The resultant file
        .pipe(terser())                 // Removes white spaces
        .pipe(gulp.dest('pub/js'))      // Place index.js in pub/
}

const all = parallel(concatCss, concatJs, copyHtml, imageMin, message, watchFiles)

// Sets Gulp to automatically update when any changes are made
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: 'pub/'
        }
    })
    gulp.watch('src/scss/**/*.scss', concatCss)
    gulp.watch('src/js/**/*.js', concatJs)
    gulp.watch('src/**/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
    gulp.watch("src/*.html").on('change', browserSync.reload);
}

// Export the function to be used in terminal
exports.message = message
exports.style = style
exports.copyHtml = copyHtml
exports.imageMin = imageMin
exports.minify = minify
exports.concatCss = concatCss
exports.concatJs = concatJs
exports.watchFiles = watchFiles
exports.all = all
