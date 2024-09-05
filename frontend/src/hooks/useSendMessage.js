import { useState } from 'react';
import useConversation from '../store/useConnversation.jsx'; 
import toast from 'react-hot-toast';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation(); // Call the hook

  const sendMessage = async (message) => {
    if (!selectedConversation) {
      toast.error('No conversation selected');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), 
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]); 
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
