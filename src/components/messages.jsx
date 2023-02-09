import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"]
  })

export default function Messages() {
  const [ chats, setChat ] = useState([])

  useEffect(() => {
    fetch('https://malakh.space/api/private/', {
      method: 'GET',
      credentials: 'include',
    })
    .then((res) => res.json())
    .then((json) => {
      setChat(json.data.rooms.username)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [ chats ])

  return (
    <main>
      <header>
        <h1 className='text-2xl text-center'>Messages</h1>
      </header>
      <div className='w-96 p-4' style={montserrat.style}>
        <div className=''>
          <div className='flex items-center gap-3 py-2 px-4 rounded-full backdrop-blur-sm bg-[#323232]/30 hover:bg-[#404040]/30 focus-within:bg-[#404040]/30'>
            <FontAwesomeIcon className='text-base text-gray-700' icon={faSearch}></FontAwesomeIcon>
            <input
              style={montserrat.style}
              type='text'
              className='grow h-7 text-sm bg-transparent text-gray-200 focus:outline-none'
              placeholder='Search...'
              />
          </div>
          {
            () => {
              for (chat of chats) "<span>"+chats+"</br></span>"
            }
          }
        </div>
      </div>
    </main>
  )
}