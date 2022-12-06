import multer from 'multer'
var image = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file, "checking file")
        // console.log(file.originalname.split(/[#?]/)[0].split('.').pop().trim(), "sadasasd")
        if (file.fieldname == "image") {
            callback(null, 'file')
        }
        else {
            // console.log("Image error")
        }
        if (file.fieldname == "audio") {
            callback(null, 'file')
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
export const upload = multer({
    storage: image
})