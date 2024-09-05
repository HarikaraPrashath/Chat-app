// src/hooks/useLogOut.js
import { useState } from 'react';
import toast from 'react-hot-toast';

const useLogOut = () => {
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      // Call your API to log out
      await fetch('/api/auth/logout', { method: 'POST' });

      // Clear local storage and update context
      localStorage.removeItem('chat-user');
      // Update your auth context here if needed

      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogOut;
