import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConnversation'; 
import { extractTime } from '../../utils/extractTime';

const Message = ({ message = {} }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
  const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-gray-500';
  const formatedTime = message.createdAt ? extractTime(message.createdAt) : "00:00";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic || 'default-profile-pic.jpg'} alt="Profile" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>
        {message.message || "No message content"}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
