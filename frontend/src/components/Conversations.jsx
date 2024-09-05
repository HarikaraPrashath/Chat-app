import React from 'react';
import Conversation from '../components/Conversation';
import useGetConversations from '../hooks/useGetConversations';
import { getRandomEmoji } from '../utils/emoji';

const Conversations = () => {
    const { loading, conversation } = useGetConversations();
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversation.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversation.length - 1}
                />
            ))}
        </div>
    );
};

export default Conversations;


/**
 BASE CODE
 import React from 'react'
import Conversation from '../components/Conversation'
const Conversations = () => {
  return (
    <div className ='py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations
 */