import React from 'react';
import useConversation from '../store/useConnversation';

const Conversation = ({ conversation, lastIdx, emoji}) => {
  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`relative flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-sky-500":""}
        `}
        onClick={()=>setSelectedConversation(conversation)}
        >
        <div className='avatar online'>
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="User Profile" />
          </div>
        </div>
        <div className='flex flex-cols flex-1'>
          <div className="flex gap-3 justify-between">
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
          </div>
        </div>
        <span className='text-xl absolute top-0 right-0 p-1'>{emoji}</span>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;


/**
 * Base Code
 * 
 * import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
       <div className='avatar online'>
        <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Profile" />
        </div>
       </div>
       <div className='flex flex-cols flex-1'>
        <div className="flex gap-3 justify-between">
            <p className=' font-bold text-gray-200'>Peter Grand</p>
            <span className='text-xl'>😇</span>
        </div>
       </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>
    </> 
  )
}

export default Conversation
 */