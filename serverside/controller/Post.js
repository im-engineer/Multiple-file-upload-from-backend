import mongoose from "mongoose";

import post from '../model/Post';


export const addDocument = async (req, res) => {
    const documentEntry = new post({
    
        image: req.files.image,
        video: req.files.video
    })
    const documentData = await documentEntry.save();
    if (documentData) {
        res.send({
            status: true, message: 'Document Added',
            result: documentData
        })
    }
}