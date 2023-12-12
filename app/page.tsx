"use client";

import { useEffect, useState } from "react";

import "./styles.scss";

import animation from "./animation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Link from "next/link";
import Card from "./components/card/Card";
import ContactForm from "./components/contactForm/ContactForm";
import Navigation from "./components/navigation/Navigation";

export default function Home() {
  // const pi = () => {
  //   const x = document.getElementById("xyu") as HTMLElement;
  //   x.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    animation();
  }, []);

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
        <img src="mainBackground.png" alt="dfg" />
        <div className="tailor__subtitle">Best solutions for business</div>
        <h1 className="tailor__title">
          Tailor-Made
          <br />
          Corporate Secretarial Services in Dubai
        </h1>

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
          <img src="arrowRight.svg" alt="right" className="whoWeAre__right" />
        </button>
      </section>

      <section className="whatWeDo">
        <h2 className="whatWeDo__title">What we do</h2>
        <div className="whatWeDo__left"></div>
        <div className="whatWeDo__right"></div>
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
