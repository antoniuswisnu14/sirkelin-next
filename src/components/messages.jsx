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
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block ml-5 mt-5 w-30 h-7 px-4 py-1 text-white bg-gray-600 rounded-full  focus:outline-none "
                />
            {
                () => {
                    for (chat of chats) "<span>"+chats+"</br></span>"
                }
            }
            </div>
        </div>
        </div>
    )
}