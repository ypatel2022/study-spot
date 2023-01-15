import Login from "../components/Login";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { secondsToTime, studyScore } from "../utils/time";
import { auth, signInWithGoogle, db, uploadLog } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  query,
  collection,
  getDocs,
  where,
  Timestamp,
  GeoPoint,
} from "firebase/firestore";

export default function Home() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isNearLibrary, setIsNearLibrary] = useState(null);
  const [leftLibrary, setLeftLibrary] = useState(null);
  // auth stuff
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    setInterval(() => {
      // console.log('This will run every second!')
      setCurrentTime(Date.now());
    }, 1000);
  }, []);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }

    // locate if user is in library

    let _isNearLibrary: null | boolean = null;
    let _leftLibrary: null | boolean = null;
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log(
          `/api/getNearby/${position.coords.latitude},${position.coords.longitude}`
        );
        await fetch(
          `/api/getNearby/${position.coords.latitude},${position.coords.longitude}`
        )
          .then((res) => res.json())
          .then(async (data) => {
            console.log(data.results.length > 0 && _isNearLibrary === null);
            console.log(_isNearLibrary);
            console.log(_leftLibrary);
            console.log(data.results.length);
            console.log("--------------------------------");

            if (data.results.length > 0 && _isNearLibrary === null) {
              _isNearLibrary = true;
              setStartTime(Date.now());
            }

            if (data.results.length === 0 && _isNearLibrary === true) {
              _leftLibrary = true;
            }

            if (_leftLibrary === true) {
              // no library near you. measn you left
              // update the exit time
              console.log("testing");
              try {
                if (user) {
                  const stuff = {
                    uid: user.uid,
                    location: data.results[0].name,
                    study_time: Math.round((currentTime - startTime) / 1000),
                  };

                  await uploadLog(stuff);
                } else {
                  alert("You must be logged in to log data");
                }
              } catch (err) {
                console.error(err);
                alert("An error occurred while logging data");
              }

              _isNearLibrary = null;
              _leftLibrary = null;
            }
          });
      });
    }, 10000);
  }, [user, loading]);

  return (
    <>
      <header className="w-full">
        <h1 className="brand">
          <Link href="">StudySpot</Link>
        </h1>
        <div className="navlinks w-full">
          <Link href="">Search</Link>
          <Link href="/minting">Mint</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Login />
        </div>
      </header>
      <img src="/img/hero-background.png" alt="" className="background" />

      <div className="content">
        <div className="card">
          <h2 className="title">Time Spent Studying</h2>
          <h1 className="timer">
            {secondsToTime(Math.round((currentTime - startTime) / 1000))}
          </h1>
          <h2 className="studyscore">
            StudyScore:{" "}
            {studyScore(Math.round((currentTime - startTime) / 1000))}
          </h2>
          <h2 className="location">McMaster University Library</h2>

          <button
            onClick={async () => {
              navigator.geolocation.getCurrentPosition(async (position) => {
                console.log(
                  `/api/getNearby/${position.coords.latitude},${position.coords.longitude}`
                );
                await fetch(
                  `/api/getNearby/${position.coords.latitude},${position.coords.longitude}`
                )
                  .then((res) => res.json())
                  .then(async (data) => {
                    try {
                      if (user) {
                        const stuff = {
                          uid: user.uid,
                          location: data.results[0].name,
                          study_time: Math.round(
                            (currentTime - startTime) / 1000
                          ),
                        };

                        await uploadLog(stuff);
                      } else {
                        alert("You must be logged in to log data");
                      }
                    } catch (err) {
                      console.error(err);
                      alert("An error occurred while logging data");
                    }
                  });
              });

              setStartTime(Date.now());
            }}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Stop Studying
          </button>
        </div>
      </div>
    </>
  );
}
