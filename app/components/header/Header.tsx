import "./header.scss";
import Hamburger from "../hamburger/Hamb";
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
  const [zalypa, setZalypa] = useState("");

  const showNav = () => {
    setColor((color) => !color);
    setImage((image) => !image);
    setActive((active: any) => !active);
    setClose(!close);
    setBody(!body);
  };

  useEffect(() => {
    const x = document.querySelector("body") as HTMLBodyElement;
    x.style.overflow = body ? "hidden" : "auto";
  }, [body]);

  useEffect(() => {
    setZalypa(color ? "white" : "black");
  }, [color]);

  return (
    <>
      <header className={zalypa} id="header">
        {/* <header className="white" id="header"> */}
        <Link className="link" href="/">
          {image ? (
            <img src={logo} alt="topWhite" />
          ) : (
            <img src="topBlack.png" alt="topBlack" />
          )}
        </Link>

        <div
          style={color ? { display: "none" } : { display: "block" }}
          className="divider"
        ></div>

        <Hamburger show={showNav} close={close} />
      </header>

      {/* <CSSTransition
        in={active}
        timeout={3000}
        classNames="active"
        unmountOnExit
        onEnter={() => {
          gsap.to(".white", {
            background: "#f5f5f5",
            duration: 3,
          });
        }}
        onExited={() => {
          gsap.to(".white", {
            background: "#080708",
            duration: 3,
          });
        }}
      >
        <Navigation active={active} />
      </CSSTransition> */}
      <Navigation active={active} />
    </>
  );
}
