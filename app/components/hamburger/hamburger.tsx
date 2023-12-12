"use client";

import { useState } from "react";
import "./hamburger.scss";

export default function Hamburger({ show, close }: any) {
  return (
    <div onClick={show} className="hamburger">
      <img src={close ? "close.png" : "hamburger.png"} alt="hamburger" />
    </div>
  );
}
