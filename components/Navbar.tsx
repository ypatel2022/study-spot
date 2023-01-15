import React, { useState } from 'react'
import Login from './Login'

export default function Navbar(props) {
  const [colorChange, setColorchange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
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
        <a href='/'>StudySpot</a>
      </h1>
      <div className='Lnavlinks'>
        {props.loggedOut && <a href='/landing#about'>Features</a>}
        <a href='/leaderboard'>Leaderboard</a>
        <Login />
      </div>
    </div>
  )
}
