import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { Montserrat, Yantramanav } from '@next/font/google'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faHouse,
  faUserGroup,
  faInfinity
} from '@fortawesome/free-solid-svg-icons';
import Messages from '../components/messages'
import Circle from '../components/circle'

const yantramanav = Yantramanav({
  weight: "400",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"]
})

export default function Dashboard() {
  const router = useRouter()
  const { page } = router.query
  const [ view, setView ] = useState(null)

  React.useEffect(() => {    
    switch(page) {
        case "messages":
          setView(<Messages />)
          break
        case "circle":
          setView(<Circle />)
          break
        default:
          <ErrorPage statusCode={404} /> //TODO: ganti ke error page
          break
      }
    }, [ page ])
  const title = page.charAt(0).toUpperCase() + page.slice(1)

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className=''>
        <div className='h-screen'>
          <div className='wh-chat flex'>
            <div className='p-8 navbar-ct'>
              <h1 className='text-3xl text-center' style={montserrat.style}>Sirkelin.</h1>
              <div className='mt-12 grid text-center gap-10 text-xl'>
                <Link href="/messages" legacyBehavior>
                  <button className='flex group gap-4 hover:bg-purple-900 hover:ring-pbg-purple-900 rounded-xl p-2'><FontAwesomeIcon className='self-center group-hover:stroke-white' icon={faComment}/><span style={yantramanav.style} className='ml-4 font-yantramanav'> messages</span></button>
                </Link>
                <Link href="/circle" legacyBehavior>
                  <button className='flex group gap-4 hover:bg-purple-900 hover:ring-pbg-purple-900 rounded-xl p-2'><FontAwesomeIcon className='self-center group-hover:stroke-white' icon={faInfinity} /><span style={yantramanav.style} className=' ml-3 font-yantramanav'> circle</span></button>
                </Link>
                <button className='flex group gap-4 hover:bg-purple-900 hover:ring-pbg-purple-900 rounded-xl p-2'><FontAwesomeIcon className='self-center group-hover:stroke-white' icon={faUserGroup} /><span style={yantramanav.style} className=' ml-3 font-yantramanav'> friend list</span></button>
                <button className='flex group gap-4 hover:bg-purple-900 hover:ring-pbg-purple-900 rounded-xl p-2'><FontAwesomeIcon className='self-center group-hover:stroke-white' icon={faHouse} /><span style={yantramanav.style} className=' ml-3 font-yantramanav'> explore</span></button>
              </div>
            </div>
            { view }
          </div>
        </div>
      </main>
    </>
  )
}