'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Message from '@/components/message';
import { Paperclip, Smile } from 'lucide-react';  // Importing icons from react-lucide

const MessagePage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Don\'t forget to check on all responsive sizes.', time: 'May 6' },
    { id: 2, text: 'Use the buttons above the editor to test on them', time: 'May 6' }
  ]);

  return (
    <div className="mx-auto h-screen flex flex-col">
      <div className="py-2 px-6 border-b-2 border-gray-300">
        <div className="flex items-center">
          <Image
            width={200}
            height={200}
            src="/icons/android-chrome-192x192.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">Karen</p>
            <p className="text-sm">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-300">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} time={message.time} />
        ))}
      </div>

      <div className="px-4 py-2 rounded-b-lg flex items-center justify-between shadow-md">
        <button className="text-gray-500 mr-2">
          <Paperclip className='w-[20px] h-[20x] text-gray-700 me-2'/> 
        </button>
        <input
          type="text"
          className="w-full px-4 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="text-gray-500 ml-2">
          <Smile />  
        </button>
      </div>
    </div>
  );
};

export default MessagePage;
