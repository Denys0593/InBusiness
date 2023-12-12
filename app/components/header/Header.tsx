import "./header.scss";
import Xyu from "../hamburger/Hamburger";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import { CSSTransition } from "react-transition-group";

import { gsap } from "gsap";

export default function Header({ logo }: any) {
  const [color, setColor] = useState(false);
  const [image, setImage] = useState(true);
  const [close, setClose] = useState(false);
  const [body, setBody] = useState(false);
  const [active, setActive] = useState(false);

  const showNav = () => {
    setColor((color) => !color);
    setImage((image) => !image);
    setActive((active: any) => !active);
    setClose(!close);
    setBody(!body);
  };

  const x = document.querySelector("body") as HTMLBodyElement;
  x.style.overflow = body ? "hidden" : "auto";

  return (
    <>
      <header className={` ${color ? "white" : "black"}`} id="header">
        <Link className="link" href="/">
          {image ? (
            <img src={logo} alt="" />
          ) : (
            <img src="topBlack.png" alt="topBlack" />
          )}
        </Link>

        <div
          style={color ? { display: "none" } : { display: "block" }}
          className="divider"
        ></div>

        <Xyu show={showNav} close={close} />
      </header>
      <CSSTransition
        in={active}
        timeout={1000}
        classNames="active"
        unmountOnExit
        onEnter={() => {
          gsap.to(".white", {
            background: "#f5f5f5",
            duration: 1,
          });
        }}
        onExited={() => {
          gsap.to(".black", {
            background: "#080708",
          });
        }}
      >
        <Navigation active={active} />
      </CSSTransition>
    </>
  );
}
