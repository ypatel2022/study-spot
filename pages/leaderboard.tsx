import React from "react";

export default function leaderboard() {
  return (
    <div>
      {" "}
      <header>
        <h1 className="brand">StudySpot</h1>
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
          <div className="legend"></div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17 daskljfh adskljhf ksaldhf klasdf kj
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
