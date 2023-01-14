// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: any) {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.2631%2C-79.9212&radius=10&type=library&keyword=library&key=${process.env.MAPS_API_KEY}`,
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
