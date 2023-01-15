import React, { useState } from 'react'
import Login from './Login'
import Link from 'next/link'

export default function Navbar(props: any) {
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', changeNavbarColor)
  }

  return (
    <div className={colorChange ? 'landingnavbartoggle' : 'landingnavbar'}>
      <h1 className={colorChange ? 'landingbrandtoggle' : 'landingbrand'}>
        <Link href='/'>StudySpot</Link>
      </h1>
      <div className='Lnavlinks'>
        {props.loggedOut && <Link href='/landing#about'>Features</Link>}
        <Link href='/leaderboard'>Leaderboard</Link>
        <Link href='/minting'>Minting</Link>
        <Login />
      </div>
    </div>
  )
}
