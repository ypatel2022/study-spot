import Login from '../components/Login'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithGoogle, db, addLog, addUser } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  query,
  collection,
  getDocs,
  where,
  Timestamp,
  GeoPoint,
} from 'firebase/firestore'
import { LogData } from '../types/data'

export default function home() {
  const [user, loading, error] = useAuthState(auth)
  const [log, setLog] = useState(null)
  const fetchLogData = async () => {
    try {
      const q = query(collection(db, 'logs'), where('uid', '==', user?.uid))
      let doc = await getDocs(q)
      let data = doc.docs[0].data()

      if (!data) {
        //@ts-ignore
        addUser(user.uid)

        doc = await getDocs(q)
        data = doc.docs[0].data()
      }

      setLog(data.data)
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
        // fetchUserName()
        let logData: LogData = {
          uid: user.uid,
          data: [
            {
              enter_time: Timestamp.fromDate(new Date()),
              exit_time: null,
              location: new GeoPoint(0, 0),
            },
          ],
        }

        if (log) {
          let latestLog = log[log.length - 1]

          if (!latestLog.exit_time) {
          }
        } else {
          fetchLogData()
        }

        // if (latestLog.exit_time) {
        // addLog(user.uid, logData)
        // }

        // look at data to see if there is exit_time
        // if there is, add new object to data
        // if there isn't, update the exit_time

        // addLog(user.uid, logData)
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred while logging data')
    }

    // if (user) navigate('/dashboard')
  }, [user, loading, log])

  return (
    <div>
      <Login />
    </div>
  )
}
