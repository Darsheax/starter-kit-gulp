/*==================/
  IMPORTS
/==================*/
import  {dest, src}         from "gulp";
import  imagemin            from "gulp-imagemin";
import  imageResize         from "gulp-image-resize";
import  imageminPngquant    from "imagemin-pngquant";
import  rename              from "gulp-rename";

/*==================/
  SETTINGS
/==================*/
const   imgDIST             = "assets/images"
const   imgOUTPUT           = "prod/images/"

const   imgSIZES            =   [
                                    {width: 360, name: 'phone'},
                                    {width: 768, name: 'tablet'},
                                    {width: 1279, name: 'desktop'},
                                    {width: -1, name: 'lgdesktop'},
                                ]

/*==================/
  TASKS
/==================*/
export const image = (o) =>
{
    imgSIZES.forEach((size) => {
        return src(`${imgDIST}/**/*.{jpg,jpeg,png}`)
        .pipe(imageResize({
            width: size.width,
            quality: 1,
            filter: "Catrom",
            sharpen: "-1.5x1+0.7+0.02",
            upscale: false,
            imageMagick: true
        }))
        .pipe(
            rename((path) => {
                path.basename += `/${size.name}`;
            }),
        )
        .pipe(imagemin([
            imageminPngquant({
                speed: 1,
                quality: [0.95, 1]
            }),
            imagemin.mozjpeg({
                progressive: true
            }),
        ]))
        .pipe(dest(imgOUTPUT));
    })
    o()
}