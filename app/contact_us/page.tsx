"use client";

import { useEffect } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./contactus.scss";
import animation from "../animations/contactUs";

export default function ContactUs() {
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Header logo={"/mainBus.png"} />
      <section className="contactUs">
        <div className="contactUs__home">
          Home &gt; Services &gt; Immigration Service &gt;
          <span> Contact</span>
        </div>
        <h1 className="contactUs__title">Contact Us</h1>
        <div className="contactUs__lines">
          <div className="line" />
          <hr data-hr="topHr" />
        </div>
        <div className="contactUs__wrapper">
          <div className="contactUs__image">
            <img src="contactusfirst.png" alt="contactus" />
          </div>

          <div className="contactUs__descr">
            <h3 className="contactUs__subtitle">
              Contact us for any details and inquiries.
            </h3>
            <div className="contactUs__item">
              <div className="contactUs__item_sub">Phone:</div>
              <span>+971 44  56 0771</span>
            </div>
            <div className="contactUs__item">
              <div className="contactUs__item_sub">Fax: </div>
              <span>+971 44  56 0778</span>
            </div>
            <div className="contactUs__item">
              <div className="contactUs__item_sub">Email: </div>
              <span>office@in-business.com</span>
            </div>
            <div className="contactUs__item">
              <div className="contactUs__item_sub">Address: </div>
              <span>
                InBusiness Advisory DMCC Po Box 338425 3910, Platinum Tower,
                JLT, Dubai, UAE
              </span>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="contactUs__lines formLine">
            <div className="line" />
            <hr />
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer logo={"/mainBusBlack.png"} />
    </>
  );
}
