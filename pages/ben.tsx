import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getPositionOfLineAndCharacter } from 'typescript'

export default function Ben() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      position.coords.accuracy
    })
  })

  return (
    <div>
      <h4>Using geolocation JavaScript API in React</h4>
      <p>
        Your location is {latitude}, {longitude}
      </p>
      <p>Timer=</p>
    </div>
  )
}
