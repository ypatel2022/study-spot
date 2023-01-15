import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

function minting() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const mintNFT = (e) => {
    // e.preventDefault();
    alert("submitted");

    // const form = new FormData();
    // form.append("allowPlatformToOperateToken", "true");
    // form.append("chain", "goerli");
    // form.append("name", "StudySpotBronze");
    // form.append("description", "1 hour of studying, good job!");
    // form.append(
    //   "recipientAddress",
    //   "0xe13145628d322285fADeEAaD55D2db8456F90ccC"
    // );
    // form.append(
    //   "filepath",
    //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+L+U4T8ABu8CpCYJ1DQAAAAASUVORK5CYII="
    // );

    const testObject = {
      "allowPlatformToOperateToken": "true",
      "chain": "goerli",
      "name": "StudySpotBronze",
      "description": "3 hours of studying, good job!",
      "recipientAddress": "0xe13145628d322285fADeEAaD55D2db8456F90ccC",
      "filepath":
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+L+U4T8ABu8CpCYJ1DQAAAAASUVORK5CYII=",
    };

    const options = {
      method: "POST",
      url: "https://api.verbwire.com/v1/nft/mint/quickMintFromFile",
      headers: {
        accept: "application/json",
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        "X-API-Key": "sk_live_f1a35199-d5b7-4277-be64-a838a210ceb2",
      },
      // data: "[form]",
      data: testObject,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
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
          <form
            action=""
            method="POST"
            encType="multipart/form-data"
            onSubmit={mintNFT}
          >
            <input
              value={input}
              type="text"
              className="addressinput"
              placeholder="Enter Wallet Address"
              name="recipientAddress"
              onChange={handleChange}
            />
            <button type="submit" className="mint-button">
              Mint NFT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default minting;
