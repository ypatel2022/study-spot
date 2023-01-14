import Login from "../components/Login";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPositionOfLineAndCharacter } from "typescript";
import { secondsToTime, studyScore } from "../utils/time";
import leaderboard from "./leaderboard";

export default function Home() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [time, setTime] = useState(0);
  const [enterTime, setEnterTime] = useState(1673731254882);
  const [currentTime, setCurrentTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      position.coords.accuracy;
    });

    setInterval(() => {
      console.log("This will run every second!");
      setCurrentTime(Date.now());
    }, 1000);
  }, []);

  return (
    <>
      <header className="w-full">
        <h1 className="brand">
          <Link href="">StudySpot</Link>
        </h1>
        <div className="navlinks w-full">
          <Link href="">Search</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Login />
        </div>
      </header>
      <img src="/img/hero-background.png" alt="" className="background" />

      <div className="content">
        <div className="card">
          <h2 className="title">Time Spent Studying</h2>
          <h1 className="timer">
            {secondsToTime(Math.round((currentTime - enterTime) / 1000))}
          </h1>
          <h2 className="studyscore">
            StudyScore:{" "}
            {studyScore(Math.round((currentTime - enterTime) / 1000))}
          </h2>
          <h2 className="location">H.G. Thode Library</h2>
        </div>
      </div>
    </>
  );
}
