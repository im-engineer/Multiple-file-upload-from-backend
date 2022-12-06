import multer from 'multer'
var image = multer.diskStorage({
    destination: function (req, file, callback) {
        if (file.fieldname == "image") {
            callback(null, 'Image')
        }
        else {
            // console.log("Image error")
        }
        if (file.fieldname == "video") {
            callback(null, 'Video')
        }
        else {
            // console.log("Image error")
        }
    },
    filename: function (req, file, callback) {
        console.log(file.mimetype);
        const ext = file.mimetype.split("/")[1];
        callback(null, file.fieldname + "-" + Date.now() + "." + ext)
    }
})
export const document = multer({
    storage: image
})