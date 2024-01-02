"use client";

import "./aboutus.scss";
import "./_media_aboutUs.scss";
import { useEffect, useState } from "react";

import animation from "../animations/aboutUs";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import { Metadata } from "next";

export default function AboutUs() {
  const [width768, setWidth768] = useState<number>(0);

  useEffect(() => {
    setWidth768((width768) => document.documentElement.clientWidth);
    width768 > 768 ? animation() : null;
  }, [width768]);

  return (
    <main>
      <Header logo={"/Logo.png"} />
      <section className="about">
        <div className="about__frame">
          <div className="about__home">
            Home &gt;
            <span> About Us</span>
          </div>
          <h1 className="about__title">About Us</h1>
          <div className="line header__line" />
        </div>
      </section>

      <section className="whoWeAre">
        <div className="title whoWeAre__left">
          <div className="line small" />
          <div className="whoWeAre__title">Who we are</div>
        </div>
        <div className="whoWeAre__right">
          <p className="whoWeAre__top">
            InBusiness Advisory DMCC, a leading management consultancy firm, is
            streamlined to provide entrepreneurs with a one-stop destination to
            fulfil their corporate needs.{" "}
          </p>
          <p className="whoWeAre__bottom">
            Here at InBusiness Advisory DMCC, we are professional corporate
            services providers supporting individual entrepreneurs, cross-border
            corporations and small and medium-sized enterprises in going global
            by setting up a company in the United Arab Emirates (UAE) or other
            jurisdictions.
          </p>
        </div>
      </section>

      <section className="approach">
        <div className="approach__left">
          <img src="/first_img.png" alt="city" />
        </div>
        <div className="approach__right">
          <div className="title approach__right_top">
            <div className="line small" />
            <div className="approach__title">How we approach</div>
          </div>
          <p className="approach__descr">
            As our dictums are at the highest level of confidentiality,
            reliability and professionalism, we strive to shape our
            administrative services specifically around client requirements.
            This can range from assistance in choosing the most befitting
            jurisdiction to the development of a specific commercial strategy
            before going global.
          </p>
        </div>
      </section>

      <div className="someText">
        Informed by the combined commercial, financial and legal backgrounds of
        our executives and staff, we aim to understand your business and its
        objectives.
      </div>

      <section className="inAddition">
        <div className="inAddition__left">
          <img src="second_img.png" alt="city" />
        </div>
        <div className="inAddition__right">
          <div className="title inAddition__right_top">
            <div className="line small" />
            <div className="inAddition__title">In addition</div>
          </div>
          <p className="inAddition__descr">
            In our opinion, the starting point of all our client relationships
            is gaining a deep understanding and insight into their business, its
            core issues and their priorities before performing the corporate
            structuring and administration.
            <br />
            <br />
            <span>
              This, combined with respect, trust and integrity, enables us to
              identify opportunities for our clients in order to increase their
              revenue, reduce costs and improve margins and operating
              efficiencies.
            </span>
          </p>
        </div>
      </section>

      <section className="values">
        <div className="values__title">
          <span data-go="go">O</span>
          <span data-go="go">u</span>
          <span data-go="go">r&nbsp;</span>
          <span data-go="go">v</span>
          <span data-go="go">a</span>
          <span data-go="go">l</span>
          <span data-go="go">u</span>
          <span data-go="go">e</span>
          <span data-go="go">s</span>
        </div>
        <div className="values__wrapper">
          <div className="values__top">
            <div className="values__item">
              <div className="values__item_title">Solutions driven</div>
              <div className="values__descr">
                We look for approaches that may not be obvious to find original
                solutions. We try to deeply understand the task and think ahead
                for you.
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
            <div className="values__item">
              <div className="values__item_title">Competency</div>
              <div className="values__descr">
                We take ownership of tasks, at the same time looking for
                continual improvement. We believe that you cannot properly
                represent a client without understanding their business.
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
            <div className="values__item">
              <div className="values__item_title">Confidentiality</div>
              <div className="values__descr">
                Our main value is to keep all information confidential.
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
          </div>
          <div className="values__bottom">
            <div className="values__item">
              <div className="values__item_title">Honesty</div>
              <div className="values__descr">
                Behaving with deep levels of honesty is fundamental to who we
                are.
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
            <div className="values__item">
              <div className="values__item_title">Partnership oriented</div>
              <div className="values__descr">
                Our philosophy has always been to have fewer clients and to
                focus on strong, long-term business relationships.{" "}
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
            <div className="values__item">
              <div className="values__item_title">Attention</div>
              <div className="values__descr">
                Our main value is to keep all information confidential.
              </div>
              <img
                src="placeholder.png"
                alt="placeholder"
                className="values__image"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="beforeFooter">
        <div className="beforeFooter__background">
          <div data-shot="her">If you are an individual entrepreneur or an</div>
          <div data-shot="him">
            international business in need of professional
          </div>
          <div data-shot="her">
            corporate services with linkage to local expertise,
          </div>
          <div data-shot="him">
            please do not hesitate to contact us for more
          </div>
          <div data-shot="her">information on how we can assist you.</div>
        </div>
        <div className="beforeFooter__bottom">
          <div className="beforeFooter__left">
            Let’s make something remarkable, together.
          </div>
          <button className="beforeFooter__right">Contact Us</button>
        </div>
      </div>

      <Footer logo={"topBlack.png"} />
    </main>
  );
}
