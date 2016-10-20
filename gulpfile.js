var gulp = require('gulp');
var sass = require('gulp-sass');

// 定义 sass 构建
// gulp 如果需要 sourcemap ，需要用插件 gulp-sourcemaps
gulp.task('sass', function() {
    var configs = {
        outputStyle: 'expanded'
    };
    return gulp.src('./scss/**/*.scss')
        .pipe(sass(configs).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// 监听 sass 文件修改
gulp.task('sass:watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

// 默认执行
gulp.task('default', ['sass']);
gulp.task('watch', ['sass', 'sass:watch']);
