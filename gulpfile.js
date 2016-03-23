var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  return gulp.src('public/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/images'));
});


 
gulp.task('compress', function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});