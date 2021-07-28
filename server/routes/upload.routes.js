import multer from "multer"
import path from 'path'
import express from "express"


const uploadRouter = express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({
    storage,
    fileFilter:(req,file,cb)=>{

        if (file.mimetype.startsWith('image')) {
            cb(null,true)
        }else{
            cb("Image Only")
        }

    }
})

uploadRouter.post('/',upload.single('image'),(req,res) => {
    res.send(`/${req.file.path}`)
})

export default uploadRouter



