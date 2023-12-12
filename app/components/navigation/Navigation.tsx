import Link from "next/link";

import "./navigation.scss";
import { useState } from "react";

export default function Navigation({ active }: any) {
  const [flex, setFlex] = useState(false);
  const [arrow, setArrow] = useState(false);

  const showServices = () => {
    setFlex(!flex);
  };

  const changeImg = () => {
    setArrow(!arrow);
  };

  return (
    // <div className={`navigation ${active ? "active" : null}`}>
    <div className="navigation">
      <nav className="navigation__aside">
        <ul className="navigation__list">
          <li
            onClick={showServices}
            data-arrow="arrow"
            className="navigation__item"
          >
            <button onClick={changeImg}>Services</button>
            <button onClick={changeImg} className="navigation__arrow">
              <img
                src={`${arrow ? "arrowUp.png" : "arrowDown.png"} `}
                alt="arrowRight"
              />
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
