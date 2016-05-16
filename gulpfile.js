var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const watch = require('gulp-watch');
var uglify = require('gulp-uglify');

gulp.watch('public/images/*', ['imageMin']);

gulp.watch('public/js/*.js', ['compress']);

gulp.task('imageMin', function() {
  return gulp.src('public/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/images/optimized'));
});

gulp.task('default', function() {
  return console.log('Gulp is running!')
});

gulp.task('compress', function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});
