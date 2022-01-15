/*==================/
  IMPORTS
/==================*/
import      { parallel, series, watch }  from 'gulp';
const       browserSync                             = require('browser-sync').create();

/*==================/
  TASKS FILES
/==================*/
const {jsDEV, jsPROD, jsDIST} = require('./gulpconfig/tasks/js')
const {sassDEV, sassPROD, sassDIST} = require('./gulpconfig/tasks/sass')
const {image} = require('./gulpconfig/tasks/image')

const browsersyncServe = (o) =>
{
    /*browserSync.init(null, {
        proxy: 'http://be-etcb.local/', // Site web url
        open: false,
    });*/
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
    o()
}

const browsersyncReload = (o) =>
{
    browserSync.reload();
    o()
}

const watchTask = (o) =>
{
    watch([sassDIST + '**/*.scss', jsDIST + '**/*.js'], series(sassDEV, jsDEV, browsersyncReload));
    o()
}

/*==================/
  EXPORTS
/==================*/
exports.image   = image
exports.sass    = sassDEV
exports.dev     = series(parallel(sassDEV, jsDEV), browsersyncServe, watchTask)
exports.prod    = parallel(sassPROD, jsPROD)
