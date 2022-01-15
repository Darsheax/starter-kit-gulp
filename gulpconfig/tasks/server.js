/*==================/
  IMPORTS
/==================*/
const   browserSync         = require('browser-sync').create();

/*==================/
  SETTINGS
/==================*/
const serverPROXY = ""

/*==================/
  TASKS
/==================*/
export const server = () =>
{
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
}

export const proxy = () =>
{
    browserSync.init(null, {
        proxy: serverPROXY,
        open: false,
    });
}

export const _reload = () =>
{
    browserSync.reload();
}

