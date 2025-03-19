import mongoose from "mongoose";

const festitle = mongoose.Schema({
    title:String,
    line1:String,
    line2:String
})
const Title = mongoose.model("Title",festitle);

export default Title;