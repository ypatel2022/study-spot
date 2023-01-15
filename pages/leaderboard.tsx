import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { auth, getAllLogs, getName } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../components/Navbar'

export default function leaderboard() {
  const [user, loading, error] = useAuthState(auth)
  const [logs, setLogs] = useState(null)
  const [users, setUsers] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    let _data = []

    getAllLogs().then((data) => {
      // find all unique users and their total study time
      // store in an array of objects including uid and total study time
      // data is in form [{uid: "uid", study_time: 123}, {uid: "uid", study_time: 123}]
      // sort array by study time

      let users = []
      let userExists = false
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < users.length; j++) {
          if (data[i].uid === users[j].uid) {
            users[j].study_time += data[i].study_time
            userExists = true
          }
        }
        if (!userExists) {
          users.push({ uid: data[i].uid, study_time: data[i].study_time })
        }
        userExists = false
      }

      users.sort((a, b) => {
        return b.study_time - a.study_time
      })

      // create a new object and replace all the uid's with the user's name
      // then set the state of users to the new object
      let newUsers = []
      for (let i = 0; i < users.length; i++) {
        getName(users[i].uid).then((name) => {
          newUsers.push({ uid: name, studyTime: users[i].study_time })
          if (i === users.length - 1) {
            setUsers(newUsers)
            setLoading(false)
          }
        })
      }
    })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img
        src='/img/hero-background.png'
        alt=''
        className='background'
        draggable='false'
      />

      <Navbar loggedOut={true} />

      <div className='content'>
        <div className='leaderboardcard'>
          <h1 className='leaderboardtitle'>Leaderboard</h1>
          <div className='legend'></div>

          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    User
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* map through logs */}

                {users &&
                  users.map((user) => {
                    return (
                      <tr className='bg-white border-b'>
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                        >
                          {user.uid}
                        </th>
                        <td className='px-6 py-4'>{user.studyTime * 3.73}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
