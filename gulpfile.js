/**
 * Created by Administrator on 2017/1/10 0010.
 */
var gulp=require('gulp'),
    connect=require('gulp-connect')
gulp.task('connect',function () {
     connect.server({
         livereload:true
         });
})
gulp.task('html',function () {
    gulp.src('*.html')               //todo: ./*.html not effective
        .pipe(connect.reload())
})

gulp.task('watch',function () {
    gulp.src('*.html')
        .pipe(connect.reload())
})
gulp.task('watch',function () {
    gulp.watch(['*.html'],['html']);
})
gulp.task('default',['connect','watch']);