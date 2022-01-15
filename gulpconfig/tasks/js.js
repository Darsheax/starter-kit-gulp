/*==================/
  IMPORTS
/==================*/
import  {dest}          from "gulp"
import  browserify      from "browserify"
import  babelify        from "babelify"
import  source          from "vinyl-source-stream"
import  buffer          from "vinyl-buffer"
import  sourcemaps      from "gulp-sourcemaps"
import  uglify          from "gulp-uglify"


/*==================/
  SETTINGS
/==================*/
export const   jsDIST          = "assets/js/"
export const   jsFILES         = ['index.js']
export const   jsOUTPUT        = "prod/"

/*==================/
  TASKS
/==================*/
exports.jsDEV = function jsDEV(o)
{
    jsFILES.map(function(entry){
        return browserify({
            entries: [jsDIST + entry]
        })
            .transform(babelify, {presets: ['@babel/env']})
            .bundle()
            .pipe( source(entry) )
            .pipe( buffer() )
            .pipe( sourcemaps.init({loadMaps: true}) )
            .pipe( uglify() )
            .pipe( sourcemaps.write('.') )
            .pipe( dest(jsOUTPUT))
    })
    o()
}

exports.jsPROD = function jsPROD(o)
{
    jsFILES.map(function(entry){
        return browserify({
            entries: [jsDIST + entry]
        })
            .transform(babelify, {presets: ['@babel/env']})
            .bundle()
            .pipe( source(entry) )
            .pipe( buffer() )
            .pipe( sourcemaps.init({loadMaps: true}) )
            .pipe( uglify() )
            .pipe( sourcemaps.write('.') )
            .pipe( dest(jsOUTPUT))
    })
    o()
}