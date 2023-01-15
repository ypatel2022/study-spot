import React from 'react'
import Link from 'next/link'

function minting() {
  const mintNFT = () => {}

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
          <button className="mint-button">Mint NFT</button>
        </div>
      </div>
    </>
  )
}

export default minting
