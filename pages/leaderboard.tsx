import React from "react";
import Link from "next/link";

export default function leaderboard() {
  return (
    <div>
      {" "}
      <header>
        <h1 className="brand">
          <Link href="/">StudySpot</Link>
        </h1>
        <div className="navlinks">
          <a href="">Search</a>
          <a href="">Leaderboard</a>
        </div>
      </header>
      <img
        src="/img/hero-background.png"
        alt=""
        className="background"
        draggable="false"
      />
      <div className="content">
        <div className="leaderboardcard">
          <h1 className="leaderboardtitle">Leaderboard</h1>
          <div className="legend">
            <h2>User</h2>
            <h2>StudyScore</h2>
          </div>

          <h2 className="studyscore">StudyScore: </h2>
          <h2 className="location">H.G. Thode Library</h2>
        </div>
      </div>
    </div>
  );
}
