"use client";

import { useEffect, useState } from "react";

import "./styles.scss";
import "./_media_styles.scss";

import { animation, loader } from "./animation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Link from "next/link";
import Card from "./components/card/Card";
import ContactForm from "./components/contactForm/ContactForm";
import Navigation from "./components/navigation/Navigation";

export default function Home() {
  // const pi = () => {
  //   const x = document.getElementById("#") as HTMLElement;
  //   x.scrollIntoView({ behavior: "smooth" });
  // };

  const [width768, setWidth768] = useState<number>(0);
  useEffect(() => {
    loader();
  }, []);
  useEffect(() => {
    setWidth768((width768) => document.documentElement.clientWidth);
    width768 > 400 ? animation() : null;
  }, [width768]);

  return (
    <main>
      <div className="loader">
        <div className="loader__hello">
          <img src="topBlack.png" alt="logo" />
        </div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
      </div>
      <Header logo={"/mainBus.png"} />
      <section className="tailor">
        <div className="tailor__frame">
          <div className="tailor__subtitle">Best solutions for business</div>
          <h1 className="tailor__title">
            Tailor-Made
            <br />
            Corporate Secretarial Services in Dubai
          </h1>
        </div>

        <div className="tailor__down">
          <img src="downMain.svg" alt="downMain" />
        </div>
      </section>

      <section className="whoWeAre">
        <h2 className="whoWeAre__title">Who we are</h2>
        <hr data-hr="header" />
        <div className="whoWeAre__text">
          We provide tailor-made corporate secretarial services, including
          company formation, bank account opening, accounting, taxation,
          immigration support and compliance maintenance solutions.
          <br />
          <br />
          InBusiness is a leading corporate service provider firm streamlined to
          provide individual entrepreneurs, single family offices, cross border
          corporations, small and medium-sized enterprises.
        </div>
        <hr data-hr="bottom" />
        <button className="whoWeAre__btn">
          <div className="whoWeAre__left">Learn more</div>
          {/* <img src="arrowRight.svg" alt="right" className="whoWeAre__right" /> */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.871 30.0001L31.8425 31.069L25 37.5619L26.5158 39L36 30.0414L35.9568 30.0001L34.4842 28.603L26.5158 21L25 22.4384L32.871 30.0001Z"
              fill="#5E5E5E"
            />
          </svg>
        </button>
      </section>

      <section className="whatWeDo">
        <h2 className="whatWeDo__title">What we do</h2>
        <Card />
      </section>

      <section className="truly">
        <div className="truly__wrapper">
          <h2 className="truly__title">Truly Transparent</h2>
          <hr />
          <div className="truly__text">
            InBusiness is a leading corporate service provider firm streamlined
            to provide individual entrepreneurs, single family offices, cross
            border corporations, small and medium-sized enterprises with a
            one-stop destination to fulfill their corporate needs.
            <br />
            <br />
            We provide tailor-made corporate secretarial services, including
            company formation, bank account opening, accounting, taxation,
            immigration support and compliance maintenance solutions
          </div>
        </div>
        <hr className="truly__hr" />
        <div className="truly__values375">
          <span>Our values</span>
          <div className="truly__img">
            <img src="arrowRight.svg" alt="arrowRight" />
          </div>
        </div>
        <div className="truly__bottomWrapper">
          <hr data-hr="small" />
          <a href="#" className="truly__btn">
            <div className="truly__left">Our values</div>
            <img
              src="./arrowRightBlack.svg"
              alt="arrowRightBlack"
              className="truly__right"
            />
          </a>
          <div className="truly__image">
            <img src="./Uptown.png" alt="Uptown" />
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer logo={"mainBusBlack.png"} />
    </main>
  );
}
function display(value: any) {
  throw new Error("Function not implemented.");
}
