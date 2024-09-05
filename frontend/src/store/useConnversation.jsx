import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,  // Fixed typo
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),  // Fixed typo
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
