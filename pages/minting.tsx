import Link from 'next/link'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'
import Head from 'next/head'

function minting({ nfts }) {
  console.log(nfts.nfts)

  return (
    <div>
      <Navbar loggedOut={false} />

      <div className="content mb-60">
        {/* map through nft array */}
        {nfts.nfts && (
          <div className="">
            {/* @ts-ignore */}
            <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
            <nft-card
              contractAddress={nfts.nfts[6]?.contractAddress}
              tokenId={nfts.nfts[6]?.tokenID}
              network="rinkeby"
            >
              {/* @ts-ignore */}
            </nft-card>
            {/* @ts-ignore */}
            <nft-card
              contractAddress={nfts.nfts[7]?.contractAddress}
              tokenId={nfts.nfts[7]?.tokenID}
              network="rinkeby"
            >
              {/* @ts-ignore */}
            </nft-card>
            <nft-card
              contractAddress={nfts.nfts[8]?.contractAddress}
              tokenId={nfts.nfts[8]?.tokenID}
              network="rinkeby"
            >
              {/* @ts-ignore */}
            </nft-card>
          </div>
        )}

        {/* <div className='card-minting bg-[#b5a1f2]'>
          <h1 className='minthero'>Mint an NFT with your study progress!</h1>
          <h2 className='minting-description'>
            Thanks to the help of Verbwire API, you can now mint your studying
            progress to an NFT! Simply enter the information and click the
            button to mint!
          </h2>
          <form
            action=''
            method='POST'
            encType='multipart/form-data'
            onSubmit={mintNFT}
          >
            <input
              value={input}
              type='text'
              className='addressinput'
              placeholder='Enter Wallet Address'
              name='recipientAddress'
              onChange={handleChange}
            />
            <button type='submit' className='mint-button ml-6'>
              Mint NFT
            </button>
          </form>
        </div> */}
      </div>
    </div>
  )
}

export default minting

export async function getStaticProps() {
  const url =
    'https://api.verbwire.com/v1/nft/data/owned?walletAddress=0xe13145628d322285fADeEAaD55D2db8456F90ccC&chain=goerli'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-Key': 'sk_live_f1a35199-d5b7-4277-be64-a838a210ceb2',
    },
  }

  let data

  await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      data = json
    })
    .catch((err) => console.error('error:' + err))

  return {
    props: {
      nfts: JSON.parse(JSON.stringify(data)),
    },
  }
}
