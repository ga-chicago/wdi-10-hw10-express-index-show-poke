const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("watch", () => {
    gulp.watch(["./less/**/*.less"],["less"]);
    // listenign for a 'save' in any .less file 
})



gulp.task("less", () => {
    // Find the file we want to convert 
    // then we need to convert it
    // then we need to send it to the where we want
    gulp.src("./less/style.less")
        .pipe(less())
        .pipe(gulp.dest("./public/css/"));
});
