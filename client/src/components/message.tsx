'use client'
import React from 'react';

const Message = ({ text, time } : {text: string, time: string}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-xs text-gray-500">{time}</div>
      <div className="bg-gray-200 rounded-lg p-4 mt-2 max-w-xs text-sm text-gray-800">
        {text}
      </div>
    </div>
  );
};

export default Message;
