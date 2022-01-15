/*==================/
  IMPORTS
/==================*/
import  { parallel, series, watch }     from 'gulp';
import  {server, proxy, _reload}        from "./gulpconfig/tasks/server";

/*==================/
  TASKS FILES
/==================*/
const   {jsDEV, jsPROD, jsDIST}         = require('./gulpconfig/tasks/js')
const   {sassDEV, sassPROD, sassDIST}   = require('./gulpconfig/tasks/sass')
const   {image}                         = require('./gulpconfig/tasks/image')

/*==================/
  TASKS
/==================*/
const watchTask = () =>
{
    watch([sassDIST + '**/*.scss', jsDIST + '**/*.js'], series(sassDEV, jsDEV, _reload));
}

/*==================/
  EXPORTS
/==================*/
exports.image   = image
exports.sass    = sassDEV
exports.dev     = series(parallel(sassDEV, jsDEV), server, watchTask)
exports.prod    = parallel(sassPROD, jsPROD)
