import React from "react";
import Link from "next/link";
import Login from "../components/Login";

export default function landing() {
      
  return (
    <div>
      <img src="/img/hero-background.png" alt="" className="background" />

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

      <div className="infopage">

        

      </div>
    </div>
  );
}
