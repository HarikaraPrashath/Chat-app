import mongoose from "mongoose";

const convertationSchema = new mongoose.Schema({
    participants :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    message :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[],
        },
    ],
},{timestamps:true})

const Converation = mongoose.model("Convertation",convertationSchema);

export default Converation;