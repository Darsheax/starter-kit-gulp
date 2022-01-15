/*==================/
  IMPORTS
/==================*/
import  {dest, src}     from "gulp";
import  sourcemaps      from "gulp-sourcemaps";
const   sass            = require('gulp-sass')(require('sass'));

/*==================/
  SETTINGS
/==================*/
export const   sassDIST        = "assets/scss/"
export const   sassFILES       = ['index.scss']
export const   sassOUTPUT      = "prod/"

/*==================/
  TASKS
/==================*/
export const sassDEV = (o) =>
{
    sassFILES.map(function(entry) {
        return src(sassDIST + entry)
            .pipe(sourcemaps.init())
            .pipe(sass({errLogToConsole: true}).on('error', sass.logError))
            /*.pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(rename({extname: '.min.css'}))*/
            .pipe(sourcemaps.write('.'))
            .pipe(dest(sassOUTPUT))
    })
    o()
}

export const sassPROD = (o) =>
{
    sassFILES.map(function(entry) {
        return src(sassDIST + entry)
            .pipe(sourcemaps.init())
            .pipe(sass({errLogToConsole: true}).on('error', sass.logError))
            /*.pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(rename({extname: '.min.css'}))*/
            .pipe(sourcemaps.write('.'))
            .pipe(dest(sassOUTPUT))
    })
    o()
}