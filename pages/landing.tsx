import React, { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function landing() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      // redirect to dashboard
      window.location.href = "/";
    }
  }, [user, loading]);

  return (
    <div>
      {/* <img
        src="/img/hero-background.png"
        alt=""
        className="landingbackground"
      /> */}

      <Navbar loggedOut={true} />

      <section id="intro">
        <div className="landingintro">
          <div className="introinfo">
            <h2 className="landingtitle">Level Up Your Productivity</h2>
            <p className="landingtext">Discover study spots</p>
            <p className="landingtext">Get rewarded for studying</p>
            <p className="landingtext">Web 3 smart contract integration</p>
            <br />
            <Login />
          </div>
          <div className="landingrightintro">
            <img src="/img/map.png" alt="" className="mapgraphic" />
          </div>
        </div>
      </section>

      <section id="about">
        <img src="/img/wave.svg" alt="" className="wave" />
        <div className="infopage">
          <h1 className="infotitle">How it Works</h1>

          <div className="howitworks">
            <div className="block">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                1. Locate Study locations
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Find a library and begin studying.
              </p>
            </div>

            <div className="block">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                2. Track time spent studying{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                StudySpot automatically tracks your productivity and gives you a
                score.{" "}
              </p>
            </div>
            <div className="block">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                3. Move up the leader board
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Compete against others to boost your productivity.{" "}
              </p>
            </div>

            <div className="block">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                4. Show off your own NFTs
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Mint StudySpot NFTs with unique metadata
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-4 bg-violet-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap ml-8 dark:text-white">
              StudySpot
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
              <a href="#" className="mr-8 hover:underline md:mr-6 ">
                Login
              </a>
            </li>
            <li>
              <a href="#about" className="mr-8 hover:underline md:mr-6">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="mr-8 hover:underline md:mr-6">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-white sm:text-center mr-10 dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            StudySpot
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
