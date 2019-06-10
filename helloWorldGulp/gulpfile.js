var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var ftp = require('vinyl-ftp');


gulp.task('sass', function(){
    return gulp.src('src/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/style.sass', ['sass']);
});

gulp.task('serve', ['sass'] ,function() {
    browserSync({
        server: {
            baseDir: ['.tmp', 'src']
        }
    });
});

gulp.task('build', ['sass']);


function ftpConnection() {
    return ftp.create({
        host: 'acamica.com',
        user:'me',
        password: process.env.FTP_PWD,
        parallel: 5
    })
};


gulp.task('upload', ['build'], function() {
    var ftp = ftpConnection();
    var remoteFolder = 'everywhere';
    return gulp.src('dist/**', {base: 'dist', buffer: false})
            .pipe(ftp.newer(remoteFolder))
            .pipe(ftp.dest(remoteFolder));
});

gulp.task('default', ['sass']);

