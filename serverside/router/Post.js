import express from "express";
const router = express.Router();
import { document } from "../middleware/Upload";


import {addDocument} from '../controller/Post'



router.post("/document",document.fields([{name: 'image', maxCount: 10}, 
{name: 'video', maxCount: 10}]),addDocument)

export default router;