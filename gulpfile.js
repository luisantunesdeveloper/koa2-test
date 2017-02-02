const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
	return gulp.src(['app.js', 'src/**/*.js'])
		.pipe(babel({
			plugins: ['transform-async-to-generator', 'transform-runtime'],
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});