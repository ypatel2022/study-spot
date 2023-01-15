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
          <div className="blockleft">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              1. Locate Study locations
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Find a library and begin studying.
            </p>
          </div>
          <div className="blockright">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2. Track time spent studying{" "}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              StudySpot automatically tracks your productivity and gives you a
              score.{" "}
            </p>
          </div>
          <div className="blockleft">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              3. Move up the leader board
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Compete against others to boost your productivity.{" "}
            </p>
          </div>

          <div className="blockright">
            <h5 className="mb-2     text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              4. Show off your own NFTs
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Mint StudySpot NFTs with unique metadata
            </p>
          </div>
        </div>
      </div>

      <img src="img/sslogopurple.svg" className="logo" alt="logo" />



      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="img/sslogopurple.svg" className="" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">StudySpot</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Login</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Features</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Learn More</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">StudySpot</a>. All Rights Reserved.
    </span>
</footer>

    </div>
  );
}
