import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithGoogle, db, logout } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { query, collection, getDocs, where } from 'firebase/firestore'

export default function login() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    try {
      if (user) {
        fetchUserName()
      }
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }

    // if (user) navigate('/dashboard')
  }, [user, loading])

  return (
    <div className='w-full ml-auto mr-0'>
      {user ? (
        // <div className=''>
        //  Logged in as
        //  <div>{name}</div>
        // <div>{user?.email}</div>
        <button
          className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2'
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        //  </div>
        //
        <div className=''>
          <button
            type='button'
            className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2'
            onClick={signInWithGoogle}
          >
            <svg
              className='w-4 h-4 mr-2 -ml-1'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}
