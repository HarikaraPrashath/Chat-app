import React from 'react';
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useLogOut from '../hooks/useLogOut';

const LogoutButton = () => {
  const { loading, logout } = useLogOut(); // Correctly call the hook
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = async () => {
    await logout(); // Call the logout function
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut 
          className='w-6 h-6 text-white cursor-pointer' 
          onClick={handleLogout} // Attach the onClick handler to the icon
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};


export default LogoutButton;


/**
 Base Code
 import React from 'react'
import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className='mt-auto'>
        <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
    </div>
  )
}

export default LogoutButton
 */