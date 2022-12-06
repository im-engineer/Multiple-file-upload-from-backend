import mongoose from "mongoose";
import Upload from "../model/fileUpload";

export const fileUploadData = async(req,res) => {
    try{
        const data = new Upload({
            name:req.body.name,
            image:req.file.filename,
            audio:req.file.filename
        })
        const Data = await data.save();
        if(Data){
            res.send({
                isSuccess:true,
                message:"File uploaded successfully",
                result : Data
            })
        }else{
            res.send({
                isSuccess:false,
                message:"Something went wrong"
            })
        }
    }catch{
        res.send({
            isSuccess:false,
            message:err
        })
    }
}