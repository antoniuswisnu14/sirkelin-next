import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Montserrat, Yantramanav } from '@next/font/google'

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"]
  })

export default function Messages() {
    
    const [ chats, setChat ] = useState(null)


    fetch('https://malakh.space/api/private/', {
        method: 'GET',
        credentials: 'include',
      })
      .then((res) => res.json())
      .then((json) => {
          setChat([json.data.rooms.username])
      })
      .catch((err) => {
          console.log(err);
      });

    return (
        <div className='grow-5 text-2xl'> 
            <h1 className=' pt-8 text-center' style={montserrat}>Messages</h1>
            <div className="flex items-center">
            <div className="flex items-center gap-3 m-4 py-2 px-4 backdrop-blur-sm bg-[#323232]/30 rounded-full">
                <FontAwesomeIcon className='text-base text-gray-700' icon={faSearch}></FontAwesomeIcon>
                <input
                    type="text"
                    className="block w-30 h-7 text-base bg-transparent text-white focus:outline-none"
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
    )
}