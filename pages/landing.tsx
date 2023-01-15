import React from "react";
import Link from "next/link";
import Login from "../components/Login";

export default function landing() {
  return (
    <div>

      <header>
        <h1 className="brand">
          <Link href="">StudySpot</Link>
        </h1>
        <div className="Lnavlinks">
          <Link href="">About</Link>
          <Link href="">Login</Link>
        </div>
      </header>

      <img src="/img/hero-background.png" alt="" className="background"/>
    </div>
  );
}
