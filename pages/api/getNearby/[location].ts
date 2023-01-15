// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { connectFirestoreEmulator } from 'firebase/firestore'

export default async function handler(req: NextApiRequest, res: any) {
  let location = req.query.location

  // split the location into longitude and latitude from req.query

  //@ts-ignore
  const longitude = location?.split(',')[0]
  //@ts-ignore
  const latitude = location?.split(',')[1]

  let config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${longitude}%2C${latitude}&radius=1000&type=library&keyword=library&key=${process.env.MAPS_API_KEY}`,
    headers: {},
  }

  let data = {}

  await axios(config)
    //@ts-ignore
    .then(function (response) {
      data = response.data
    })
    //@ts-ignore
    .catch(function (error) {
      console.log(error)
    })

  res.status(200).json(data)
}
