import Link from "next/link";

import "./navigation.scss";
import { useEffect, useState } from "react";

export default function Navigation({ active }: any) {
  const [flex, setFlex] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [anim, setAnim] = useState("notActive");
  const [animAside, setAnimAside] = useState("notActiveAside");

  const showServices = () => {
    setFlex(!flex);
  };

  const changeImg = () => {
    setArrow(!arrow);
  };

  // const changeAnim = () => {
  // active ? setAnim("active") : setAnim("notActive");
  // }
  useEffect(() => {
    active ? setAnim("active") : setAnim("notActive");
    active ? setAnimAside("activeAside") : setAnimAside("notActiveAside");
  }, [active]);

  return (
    <div className={`navigation ${anim}`}>
      {/* <div className="navigation"> */}
      <nav className={`navigation__aside ${animAside}`}>
        <ul className="navigation__list">
          <li
            onClick={showServices}
            data-arrow="arrow"
            className="navigation__item"
          >
            <button onClick={changeImg}>Services</button>
            <button onClick={changeImg} className="navigation__arrow">
              {arrow ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 32L20 16L28 24L36 32"
                    stroke="#080708"
                    stroke-width="4"
                  />
                </svg>
              ) : (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)
                translate(0 -8)"
                >
                  <path
                    d="M4 32L20 16L28 24L36 32"
                    stroke="#080708"
                    stroke-width="4"
                  />
                </svg>
              )}
            </button>
          </li>
          <ul className={`services ${flex ? "flex" : null}`}>
            <li className="services__item">
              <Link href="/corporate">Corporate Structuring</Link>
            </li>
            <li className="services__item">
              <a>Corporate Services</a>
            </li>
            <li className="services__item">
              <a>Bank Account Opening</a>
            </li>
            <li className="services__item">
              <a>Immigration Service</a>
            </li>
            <li className="services__item">
              <a>Accounting & Bookkeeping</a>
            </li>
            <li className="services__item">
              <a>Compliance</a>
            </li>
            <li className="services__item">
              <a>Travels & Events Management</a>
            </li>
          </ul>
          <li className="navigation__item">
            <Link href="/about_us">About Us</Link>
          </li>
          <li className="navigation__item">
            <Link href="#">Why Dubai</Link>
          </li>
          <li className="navigation__item">
            <Link href="#">Insights</Link>
          </li>
          <li className="navigation__item">
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
