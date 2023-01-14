import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <h1 className="brand">StudySpot</h1>
        <div className="navlinks">
          <a href="">Search</a>
          <a href="">Leaderboard</a>
        </div>
      </header>
      <img src="/img/hero-background.png" alt="" className="background" />

      <div className="content">
        <div className="card">
          <h2 className="title">Time Spent Studying</h2>
          <h1 className="timer">Time</h1>
          <h2 className="studyscore">StudyScore: </h2>
          <h2 className="location">H.G. Thode Library</h2>
        </div>
      </div>
    </>
  );
}
