import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getPositionOfLineAndCharacter } from 'typescript'

export default function Ben() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [time, setTime] = useState(0)
  const [enterTime, setEnterTime] = useState(1673731254882)
  const [currentTime, setCurrentTime] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      position.coords.accuracy
    })

    setInterval(() => {
      console.log('This will run every second!')
      setCurrentTime(Date.now())
    }, 1000)
  }, [])

  return (
    <div>
      <h4>Using geolocation JavaScript API in React</h4>
      <p>
        Your location is {latitude}, {longitude}
      </p>
      <p>Timer={Math.round((currentTime - enterTime) / 1000)}</p>
    </div>
  )
}
