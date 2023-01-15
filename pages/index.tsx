import Login from '../components/Login'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { secondsToTime, studyScore } from '../utils/time'
import { auth, signInWithGoogle, db, uploadLog } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  query,
  collection,
  getDocs,
  where,
  Timestamp,
  GeoPoint,
} from 'firebase/firestore'

export default function Home() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [time, setTime] = useState(0)
  const [startTime, setStartTime] = useState(1673731254882)
  const [currentTime, setCurrentTime] = useState(0)
  const [location, setLocation] = useState('')
  const [isNearLibrary, setIsNearLibrary] = useState(false)

  // auth stuff
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }

    setInterval(() => {
      // console.log('This will run every second!')
      setCurrentTime(Date.now())
    }, 1000)

    // locate if user is in library
    setInterval(async () => {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        await fetch(
          `/api/getNearby/${position.coords.latitude},${position.coords.longitude}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.results.length > 0 && isNearLibrary === false) {
              setIsNearLibrary(true)

              console.log('you are near a library')
            } else {
              // no library near you. measn you left
              // update the exit time
              try {
                if (user) {
                  const stuff = {
                    uid: user.uid,
                    location: data.results[0].name,
                    study_time: Math.round((currentTime - startTime) / 1000),
                  }

                  uploadLog(stuff)
                }
              } catch (err) {
                console.error(err)
                alert('An error occurred while logging data')
              }
            }
          })
      })
    }, 1000)
  }, [user, loading])

  return (
    <>
      <header className='w-full'>
        <h1 className='brand'>
          <Link href=''>StudySpot</Link>
        </h1>
        <div className='navlinks w-full'>
          <Link href=''>Search</Link>
          <Link href='/leaderboard'>Leaderboard</Link>
          <Login />
        </div>
      </header>
      <img src='/img/hero-background.png' alt='' className='background' />

      <div className='content'>
        <div className='card'>
          <h2 className='title'>Time Spent Studying</h2>
          <h1 className='timer'>
            {secondsToTime(Math.round((currentTime - startTime) / 1000))}
          </h1>
          <h2 className='studyscore'>
            StudyScore:{' '}
            {studyScore(Math.round((currentTime - startTime) / 1000))}
          </h2>
          <h2 className='location'>H.G. Thode Library</h2>

          <button
            onClick={() => {
              setIsNearLibrary(false)
            }}
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Stop Studying
          </button>
        </div>
      </div>
    </>
  )
}
