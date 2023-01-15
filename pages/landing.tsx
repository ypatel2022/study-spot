import React from "react";
import Link from "next/link";
import Login from "../components/Login";

export default function landing() {
    
  return (
    <div>
      <img
        src="/img/hero-background.png"
        alt=""
        className="landingbackground"
      />

      <div className="landingnavbar">
        <h1 className="landingbrand">
          <Link href="">StudySpot</Link>
        </h1>
        <div className="Lnavlinks">
          <Link href="">Features</Link>
          <Link href="">Login</Link>
        </div>
      </div>

      <div className="landingintro">
        <div className="introinfo">
          <h2 className="landingtitle">Level Up Your Productivity</h2>
          <p className="landingtext">Discover study spots</p>
          <p className="landingtext">Get rewarded for studying</p>
          <p className="landingtext">Web 3 smart contract integration</p>

          <button type="submit" className="signup-button">
            Sign Up For Free
          </button>
        </div>
        <div className="landingrightintro">
          <img src="/img/map.png" alt="" className="mapgraphic" />
        </div>
      </div>

      <img src="/img/wave.svg" alt="" className="wave" />
      <div className="infopage">
        <h1 className="infotitle">How it Works</h1>

        <div className="howitworks">
          <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              1. Locate Study locations
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Find a library and begin studying.
            </p>
          </div>
          <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2. Track time spent studying{" "}
            </h5>
            <p className="block">
              StudySpot automatically tracks your productivity and gives you a
              score.{" "}
            </p>
          </div>
          <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              3. Move up the leader board
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Compete against others to boost your productivity.{" "}
            </p>
          </div>

          <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              4. Show off your own NFTs
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Mint StudySpot NFTs with unique metadata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
