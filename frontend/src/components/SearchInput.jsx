import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import useConversation from '../store/useConnversation';
import useGetConversation from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    if (conversation && conversation.length > 0) {
      const conversations = conversation.find((c) => 
        c.fullName.toLowerCase().includes(search.toLowerCase())
      );

      if (conversations) {
        setSelectedConversation(conversations);
        setSearch("");
      } else {
        toast.error("No such user found!");
      }
    } else {
      toast.error("No conversations available");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'> 
      <input 
        type="text" 
        placeholder='Search' 
        className='input input-bordered rounded-full' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;


/**
 Base Code
 import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'> 
        <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle  bg-sky-500 text-white'>
        <IoSearch className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput
 */