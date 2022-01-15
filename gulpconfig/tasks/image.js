/*==================/
  IMPORTS
/==================*/
import  {dest, src}         from "gulp";
import  imagemin            from "gulp-imagemin";
import  imageminPngquant    from "imagemin-pngquant";

/*==================/
  SETTINGS
/==================*/
const   imgDIST             = "assets/images"
const   imgOUTPUT           = "prod/images/"

/*==================/
  TASKS
/==================*/
exports.image = function image()
{
    return src(`${imgDIST}/**/*.{jpg,jpeg,png}`)
        .pipe(imagemin([
            imageminPngquant({
                speed: 1,
                quality: [0.95, 1] //lossy settings
            }),
            imagemin.mozjpeg({
                progressive: true
            }),
        ]))
        .pipe(dest(imgOUTPUT));
}