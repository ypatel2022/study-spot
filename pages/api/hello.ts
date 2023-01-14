// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: any,
  longitude: string,
  latitude: string
) {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${longitude}%2C${latitude}&radius=10&type=library&keyword=library&key=${process.env.MAPS_API_KEY}`,
    headers: {},
  };

  let data = {};

  await axios(config)
    //@ts-ignore
    .then(function (response) {
      data = response.data;
    })
    //@ts-ignore
    .catch(function (error) {
      console.log(error);
    });

  res.status(200).json(data);
}
