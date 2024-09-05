import React, { useRef, useEffect } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage';
import MessageSkeleton from '../Skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div 
          key={message._id}
          ref={index === messages.length - 1 ? lastMessageRef : null} // Use ref only for the last message
        >
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;



/**
 * Base code
 * import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/> 
    </div>
  )
}

export default Messages
 */