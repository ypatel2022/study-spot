import React, { useEffect, useState } from 'react'
import { auth, getLogs } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function home() {
  const [user, loading, error] = useAuthState(auth)
  const [logs, setLogs] = useState(null)

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    try {
      if (user) {
        getLogs(user.uid).then((data) => {
          //@ts-ignore
          setLogs(data)

          console.log(data)
        })
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred while logging data')
    }

    // if (user) navigate('/dashboard')
  }, [user, loading])

  return <div></div>
}
