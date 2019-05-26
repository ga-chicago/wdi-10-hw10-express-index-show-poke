const gulp = require("gulp");
const less = require("gulp-less");

gulp.task('less', () =>{
    //grabed document you want to change (exists one level up)
    gulp.src('./public/less/style.less')
    //this function will be applied to less file we grabbed
    //and it will convert less to css
        .pipe(less())

        //keeps name of your less file and converts it into yourlessfilename.css
        // . means the level ur currently in
        .pipe(gulp.dest('./public/css/'))
});
//call this function in terminal

gulp.task('watch', () =>{
    //takes 2 arg #1 arr we want to WATCH #2 arr we want to RUN
    gulp.watch(['./public/less/*.less'], ['less'])
    // * at end means all files with .less extention in less folder
});

// 1 task that needs to be named 'default'
gulp.task('default', ['less', 'watch']);
// call with "gulp" in terminal