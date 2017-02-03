const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('config', () => {
	return gulp.src(['config/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/config'));
});

gulp.task('src', () => {
	return gulp.src(['app.js', 'src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(babel({
			plugins: ['transform-async-to-generator', 'transform-runtime'],
			presets: ['es2015']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', [
    'config',
    'src'
]);