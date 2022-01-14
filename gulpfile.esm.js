import { src, dest, parallel, series, watch } from 'gulp';
const browserSync       = require('browser-sync').create();

/*==================/
  TASKS FILES
/==================*/
const {jsDEV, jsPROD} = require('./gulpconfig/tasks/js')
const {sassDEV, sassPROD} = require('./gulpconfig/tasks/sass')
const {image} = require('./gulpconfig/tasks/sass')

const browsersyncServe = (cb) =>
{
    browserSync.init(null, {
        proxy: 'http://be-etcb.local/', // Site web url
        open: false,
    });
    /*browserSync.init({
        server: {
            baseDir: "./"
        }
    });*/
    cb()
}

const browsersyncReload = (cb) =>
{
    browserSync.reload();
    cb()
}

//const watchTask = () =>{watch([sassDIST + '**/*.scss', jsDIST + '**/*.js'], series(sassDEV, jsDEV, browsersyncReload));}

exports.image = imageTask;
exports.sass = sassDEV;
//exports.default = series(parallel(sassDEV, jsDEV), browsersyncServe, watchTask);
//exports.default = series(jsTask);