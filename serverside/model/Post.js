import mongoose from "mongoose";
const PostSchema = mongoose.Schema({
    // userid: {
    //     type: mongoose.ObjectId,
    //     ref:"olx"
    // },
    name: {
        type: String
    },
    image: {
        type: Array
    },
    pdf:{
        type: Array
    },
    video:{
        type: Array
    },
    created: {
        type: String,
        default: new Date().toISOString(),
    }
});
const userpost = mongoose.model("post", PostSchema);
export default userpost;