'use client'
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const contacts = [
  { name: 'Lauri Edmon', status: 'Writing...', time: '12.52', unread: 2, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Julian Gruber', status: 'Send audio...', time: '20.25', unread: 2, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Karlien Nihen', status: 'Writing...', time: '2.28', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Meg Rigden', status: 'Washington D.C.', time: '12.52', unread: 2, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
  { name: 'Mark Green', status: 'I do not remember anything', time: '05.41', unread: 0, imgSrc: '/icons/android-chrome-192x192.png' },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('All');

  const handleClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <aside className="min-w-1/4 w-full md:w-1/4 h-screen bg-white shadow-md  overflow-y-auto sidebar">
      <div className="flex items-center px-4 py-2">
        <button
          aria-haspopup="true"
          className="p-2 text-gray-700 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="nonzero"
              d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"
            ></path>
          </svg>
        </button>
        <div className="flex items-center flex-grow bg-gray-300 rounded-full ml-2 p-2">
          <Search className='w-[20px] h-[20px] ml-2 text-gray-600 me-2'/>
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none px-2"
          />
        </div>
      </div>
      <div className='flex items-center justify-between px-6 border-b-2 w-full '>
        <span
          onClick={() => handleClick('All')}
          className={`cursor-pointer flex flex-col ${activeItem === 'All' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-300'}`}
        >
          All
          <span className='mt-2'>
            {" "}
          </span>
        </span>
        <span
          onClick={() => handleClick('Work')}
          className={`cursor-pointer flex flex-col ${activeItem === 'Work' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-300'}`}
        >
          Work
          <span className='mt-2'>
            {" "}
          </span>
        </span>
        <span
          onClick={() => handleClick('Private')}
          className={`cursor-pointer flex flex-col ${activeItem === 'Private' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-300'}`}
        >
          Private
          <span className='mt-2'>
            {" "}
          </span>
        </span>
        <span
          onClick={() => handleClick('Groups')}
          className={`cursor-pointer flex flex-col ${activeItem === 'Groups' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-300'}`}
        >
          Groups
          <span className='mt-2'>
            {" "}
          </span>
        </span>
        <span
          onClick={() => handleClick('Channels')}
          className={`cursor-pointer flex flex-col ${activeItem === 'Channels' ? 'border-b-2 border-blue-500' : 'hover:bg-gray-300'}`}
        >
          Channels
          <span className='mt-2'>
            {" "}
          </span>
        </span>
      </div>
      <ul className="space-y-4 p-2">
        {contacts.map((contact, index) => (
          <Link href={`/message/${index}`} key={index}>
            <li  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Image height={200} width={200} src={contact.imgSrc} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{contact.name}</h4>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-600">{contact.status}</p>
              </div>
              {contact.unread > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 rounded-full">
                  {contact.unread}
                </span>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
