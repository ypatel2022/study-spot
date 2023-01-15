import Link from 'next/link'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'
import Head from 'next/head'

function minting({ nfts }) {
  console.log(nfts.nfts)

  // const [input, setInput] = useState('')
  // const [user, loading, error] = useAuthState(auth)

  // const handleChange = (e) => {
  //   setInput(e.target.value)
  // }
  // const mintNFT = (e) => {
  //   // e.preventDefault();
  //   alert('submitted')

  //   // const form = new FormData();
  //   // form.append("allowPlatformToOperateToken", "true");
  //   // form.append("chain", "goerli");
  //   // form.append("name", "StudySpotBronze");
  //   // form.append("description", "1 hour of studying, good job!");
  //   // form.append(
  //   //   "recipientAddress",
  //   //   "0xe13145628d322285fADeEAaD55D2db8456F90ccC"
  //   // );
  //   // form.append(
  //   //   "filepath",
  //   //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+L+U4T8ABu8CpCYJ1DQAAAAASUVORK5CYII="
  //   // );

  //   const testObject = {
  //     allowPlatformToOperateToken: 'true',
  //     chain: 'goerli',
  //     name: 'StudySpotBronze',
  //     description: '3 hours of studying, good job!',
  //     recipientAddress: '0xe13145628d322285fADeEAaD55D2db8456F90ccC',
  //     filepath:
  //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+L+U4T8ABu8CpCYJ1DQAAAAASUVORK5CYII=',
  //   }

  //   const options = {
  //     method: 'POST',
  //     url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
  //     headers: {
  //       accept: 'application/json',
  //       'content-type':
  //         'multipart/form-data; boundary=---011000010111000001101001',
  //       'X-API-Key': 'sk_live_f1a35199-d5b7-4277-be64-a838a210ceb2',
  //     },
  //     // data: "[form]",
  //     data: testObject,
  //   }

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data)
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     })
  // }

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return
  //   }

  //   if (!user) {
  //     window.location.href = '/landing'
  //   }
  // }, [user, loading])

  //
  // const [nfts, setNfts] = useState(null)
  // const [isLoading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)

  //   const fetchData = async () => {
  //     const url =
  //       'https://api.verbwire.com/v1/nft/data/owned?walletAddress=0xe13145628d322285fADeEAaD55D2db8456F90ccC&chain=goerli'
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         'X-API-Key': process.env.VERBWIRE_API_KEY,
  //       },
  //     }

  //     const data = await fetch(url, options)

  //     return data.json()
  //   }

  //   // fetch the data and set inside nfts
  //   fetchData().then((data) => {
  //     setNfts(data)
  //     setLoading(false)
  //   })

  //   // let x = await fetch(url, options)
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     _nfts = json
  //   //   })
  //   //   .catch((err) => console.error('error:' + err))

  //   // setNfts(_nfts)
  //   // setLoading(false)
  //   // console.log(_nfts)
  // }, [])

  // if (isLoading && !nfts) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <Navbar loggedOut={false} />

      <div className='content mb-60'>
        {/* map through nft array */}
        {nfts.nfts && (
          <div className=''>
            {/* @ts-ignore */}
            <script src='https://unpkg.com/embeddable-nfts/dist/nft-card.min.js'></script>
            <nft-card
              contractAddress={nfts.nfts[6]?.contractAddress}
              tokenId={nfts.nfts[6]?.tokenID}
              network='rinkeby'
            >
              {/* @ts-ignore */}
            </nft-card>
            {/* @ts-ignore */}
            <nft-card
              contractAddress={nfts.nfts[7]?.contractAddress}
              tokenId={nfts.nfts[7]?.tokenID}
              network='rinkeby'
            >
              {/* @ts-ignore */}
            </nft-card>
            <nft-card
              contractAddress={nfts.nfts[8]?.contractAddress}
              tokenId={nfts.nfts[8]?.tokenID}
              network='rinkeby'
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
