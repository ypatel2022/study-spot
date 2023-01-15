import React from 'react'
import Link from 'next/link'
import axios from 'axios'

function minting() {
  const mintNFT = () => {}
  const form = new FormData()
  form.append('allowPlatformToOperateToken', 'true')
  form.append('chain', 'goerli')
  form.append('name', 'StudySpotBronze')
  form.append('description', '1 hour of studying, good job!')
  form.append('recipientAddress', '0x57873816969c06Eb2dF7b56681E4A7502D2D0F69')

  const options = {
    method: 'POST',
    url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
    headers: {
      accept: 'application/json',
      'content-type':
        'multipart/form-data; boundary=---011000010111000001101001',
      'X-API-Key': 'sk_live_f1a35199-d5b7-4277-be64-a838a210ceb2',
    },
    data: '[form]',
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })

  return (
    <>
      <header className="w-full">
        <h1 className="brand">
          <Link href="/">StudySpot</Link>
        </h1>
        <div className="navlinks w-full ">
          <Link href="">Search</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>
      </header>
      <img src="/img/hero-background.png" alt="" className="background" />

      <div className="content">
        <div className="card-minting">
          <h1 className="minthero">Mint an NFT with your study progress!</h1>
          <h2 className="minting-description">
            Thanks to the help of Verbwire API, you can now mint your studying
            progress to an NFT! Simply enter the information and click the
            button to mint!
          </h2>
          <form action="" method="POST" encType="multipart/form-data">
            <input
              type="text"
              className="addressinput"
              placeholder="Enter Wallet Address"
              name="recipientAddress"
            />
          </form>
          <button type="submit" className="mint-button">
            Mint NFT
          </button>
        </div>
      </div>
    </>
  )
}

export default minting
