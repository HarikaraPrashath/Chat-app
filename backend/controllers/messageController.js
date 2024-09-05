import { populate } from "dotenv";
import Conversation from "../models/convertationModel.js";
import Message from "../models/messageModels.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    
    // Ensure req.userId is defined, fallback to req.user if needed
    const senderId = req.userId?._id || req.user?._id;
    
    if (!senderId) {
      return res.status(400).json({ error: "User ID not found" });
    }

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id); 
    }

    //Socket IO function 

    // Save the conversation and the new message
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error in sending message controller:", error.message);
    res.status(500).json({ error: "Internal error" });
  }
};


export const getMessage = async (req,res) =>{
  try{
    const {id:userToChat} = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants:{$all :[senderId,userToChat]},
    }).populate("message");

    if(!conversation){
      return res.status(200).json([])
    }
    const message = conversation.message

    res.status(200).json(conversation.message);
  }
  catch (error) {
    console.log("Error in get message controller:", error.message);
    res.status(500).json({ error: "Internal error" });
  }
}