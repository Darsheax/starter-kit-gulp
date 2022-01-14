/*==================/
  IMPORTS
/==================*/
import  {dest, src}     from "gulp";
import  sourcemaps      from "gulp-sourcemaps";
const   sass            = require('gulp-sass')(require('sass'));

/*==================/
  SETTINGS
/==================*/
const   sassDIST          = "assets/scss/"
const   sassFILES         = ['index.scss', 'main.scss']


/*==================/
  TASKS
/==================*/
exports.sassDEV = function sassDEV(o)
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
            .pipe(dest('../prod/'))
    })
    o()
}

exports.sassPROD = function sassPROD()
{
    return src(`${sassDIST}index.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}).on('error', sass.logError))
        /*.pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css'}))*/
        .pipe(sourcemaps.write('.'))
        .pipe(dest('../prod/'))
        ;
}