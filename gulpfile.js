const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('config', () => {
	return gulp.src(['config/**/*.js'])
		.pipe(gulp.dest('dist/config'));
});

gulp.task('src', () => {
	return gulp.src(['app.js', 'src/**/*.js'])
		.pipe(babel({
			plugins: ['transform-async-to-generator', 'transform-runtime'],
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', [
    'config',
    'src'
]);