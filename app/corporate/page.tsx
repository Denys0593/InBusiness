"use client";

import { useState, useEffect } from "react";

import animation from "../animations/corporate";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./corporate.scss";
import Link from "next/link";

export default function Corporate() {
  // const [showText, setShowText] = useState(false);
  // const her = showText ? (
  //   <button className="related__right_imageUp">
  //     <img src="up.svg" alt="up" />
  //   </button>
  // ) : (
  //   <button className="related__right_image">
  //     <img src="down.svg" alt="down" />
  //   </button>
  // );
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Header logo={"/Logo.png"} />

      <section className="corporateStructuring">
        <div className="corporateStructuring__frame">
          <div className="corporateStructuring__home">
            Home &gt; Services &gt;
            <span> Corporate Structuring</span>
          </div>
          <h1 className="corporateStructuring__title">Corporate Structuring</h1>
          <div className="line header__line" />
        </div>
      </section>

      <section className="expertise ">
        <div className="title expertise__left">
          <div className="line small" />
          <div className="expertise__title">Expertise</div>
        </div>
        <div className="expertise__right">
          <p className="expertise__top">
            At InBusiness, we believe that the proper structuring of a business
            is the key to its long-term success.
          </p>
          <p className="expertise__bottom">
            Our Company Formation and Corporate Services team possesses
            expertise in analysing the appropriate form of entity through which
            a client should conduct business in the UAE or any other
            jurisdiction in order to maximise the value of its assets while
            minimising its risks.
          </p>
          <div className="expertise__image">
            <img src="img_first.png" alt="first" />
          </div>
        </div>
      </section>

      <section className="structuringApproach">
        <h2 className="structuringApproach__title">
          <span data-word="word">S</span>
          <span data-word="word">t</span>
          <span data-word="word">r</span>
          <span data-word="word">u</span>
          <span data-word="word">c</span>
          <span data-word="word">t</span>
          <span data-word="word">u</span>
          <span data-word="word">r</span>
          <span data-word="word">i</span>
          <span data-word="word">n</span>
          <span data-word="word">g&nbsp;</span>
          <span data-word="word">A</span>
          <span data-word="word">p</span>
          <span data-word="word">p</span>
          <span data-word="word">r</span>
          <span data-word="word">o</span>
          <span data-word="word">a</span>
          <span data-word="word">c</span>
          <span data-word="word">h</span>
        </h2>
        <div className="structuringApproach__wrapper">
          <div className="structuringApproach__item">
            <img src="logo_first.svg" alt="firstLogo" />
            <h3 className="structuringApproach__item_title">
              Client’s business and tax goals
            </h3>
            <div className="structuringApproach__item_text">
              Aliquam sodales, tellus at consequat malesuada, neque dolor auctor
              sapien, eget vehicula quam diam at est. Donec quis dui quis magna
              dictum hendrerit aunchema.{" "}
            </div>
          </div>
          <div className="structuringApproach__item">
            <img src="logo_second.svg" alt="second" />
            <h3 className="structuringApproach__item_title">
              Risk assessments
            </h3>
            <div className="structuringApproach__item_text">
              Aliquam sodales, tellus at consequat malesuada, neque dolor auctor
              sapien, eget vehicula quam diam at est. Donec quis dui quis magna
              dictum hendrerit aunchema.{" "}
            </div>
          </div>
          <div className="structuringApproach__item">
            <img src="logo_third.svg" alt="third" />
            <h3 className="structuringApproach__item_title">
              Investment criteria{" "}
            </h3>
            <div className="structuringApproach__item_text">
              Aliquam sodales, tellus at consequat malesuada, neque dolor auctor
              sapien, eget vehicula quam diam at est. Donec quis dui quis magna
              dictum hendrerit aunchema.{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="whatWeDo">
        <div className="whatWeDo__top">
          <div className="title whatWeDo__left">
            <div className="line small" />
            <div className="whatWeDo__title">What we do in structuring</div>
          </div>
          <div className="whatWeDo__right">
            We represent clients of all sizes, types and industries in every
            aspect of:
          </div>
        </div>
        <div className="whatWeDo__wrapper">
          <div className="whatWeDo__item">Setup</div>
          <div className="whatWeDo__item">Mergers</div>
          <div className="whatWeDo__item">Acquisitions</div>
          <div className="whatWeDo__item">Reorganisations</div>
          <div className="whatWeDo__item">Recapitalisations</div>
          <div className="whatWeDo__item">Redomicilation</div>
        </div>
        <div className="whatWeDo__bottom">
          We also help with other corporate amendment implementations, including
          liquidation of organisations of any type of structural complexity.
        </div>
      </section>

      <section className="strategic">
        <div className="strategic__left">
          <img src="img_second.png" alt="second" />
        </div>
        <div className="strategic__right">
          <div className="title strategic__right_top">
            <div className="line small" />
            <div className="strategic__title">Strategic advising</div>
          </div>
          <p className="strategic__descr">
            When we are requested to advise clients on operational issues that
            confront the business owner, the parent company or the holding
            company of multiple subsidiaries and affiliates, we strive to
            support them by advising on concerns related to strategic alliances
            or joint ventures with other parties, on corporate form, on
            employment matters and on contractual arrangements with suppliers,
            distributors, commercial agents and others conducting business with
            our clients.
          </p>
        </div>
      </section>

      <section className="related">
        <h2 className="related__title">Related FAQs</h2>
        <ul className="related__wrapper">
          <li className="related__item">
            <div className="related__left">01</div>
            <div className="related__right">
              <h3 className="related__right_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et faucibus quam?{" "}
              </h3>
              <div className="related__right_bottom">
                Aliquam sodales, tellus at consequat malesuada, neque dolor
                auctor sapien, eget vehicula quam diam at est. Donec quis dui
                quis magna dictum hendrerit. Suspendisse porttitor lacinia
                scelerisque. In ullamcorper convallis arcu, id rhoncus est
                sodales id. Maecenas ultrices neque in neque viverra, non
                lobortis velit vestibulum. Etiam auctor laoreet libero quis
                aliquet. Nulla lacinia augue et velit gravida, in tempor purus
                rutrum. To know more details see{" "}
                <span>Our Client Handbook.</span>
              </div>
            </div>
            <button className="related__right_imageUp">
              <img src="up.svg" alt="up" />
            </button>
            <button className="related__right_image">
              <img src="down.svg" alt="down" />
            </button>
          </li>
          <li className="related__item">
            <div className="related__left">02</div>
            <div className="related__right">
              <h3 className="related__right_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et faucibus quam?{" "}
              </h3>
              <div className="related__right_bottom">
                Aliquam sodales, tellus at consequat malesuada, neque dolor
                auctor sapien, eget vehicula quam diam at est. Donec quis dui
                quis magna dictum hendrerit. Suspendisse porttitor lacinia
                scelerisque. In ullamcorper convallis arcu, id rhoncus est
                sodales id. Maecenas ultrices neque in neque viverra, non
                lobortis velit vestibulum. Etiam auctor laoreet libero quis
                aliquet. Nulla lacinia augue et velit gravida, in tempor purus
                rutrum. To know more details see{" "}
                <span>Our Client Handbook.</span>
              </div>
            </div>
            <button className="related__right_imageUp">
              <img src="up.svg" alt="up" />
            </button>
            <button className="related__right_image">
              <img src="down.svg" alt="down" />
            </button>
          </li>
          <li className="related__item">
            <div className="related__left">03</div>
            <div className="related__right">
              <h3 className="related__right_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et faucibus quam?{" "}
              </h3>
              <div className="related__right_bottom">
                Aliquam sodales, tellus at consequat malesuada, neque dolor
                auctor sapien, eget vehicula quam diam at est. Donec quis dui
                quis magna dictum hendrerit. Suspendisse porttitor lacinia
                scelerisque. In ullamcorper convallis arcu, id rhoncus est
                sodales id. Maecenas ultrices neque in neque viverra, non
                lobortis velit vestibulum. Etiam auctor laoreet libero quis
                aliquet. Nulla lacinia augue et velit gravida, in tempor purus
                rutrum. To know more details see{" "}
                <span>Our Client Handbook.</span>
              </div>
            </div>
            <button className="related__right_imageUp">
              <img src="up.svg" alt="up" />
            </button>
            <button className="related__right_image">
              <img src="down.svg" alt="down" />
            </button>
          </li>
          <li className="related__item">
            <div className="related__left">04</div>
            <div className="related__right">
              <h3 className="related__right_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et faucibus quam?{" "}
              </h3>
              <div className="related__right_bottom">
                Aliquam sodales, tellus at consequat malesuada, neque dolor
                auctor sapien, eget vehicula quam diam at est. Donec quis dui
                quis magna dictum hendrerit. Suspendisse porttitor lacinia
                scelerisque. In ullamcorper convallis arcu, id rhoncus est
                sodales id. Maecenas ultrices neque in neque viverra, non
                lobortis velit vestibulum. Etiam auctor laoreet libero quis
                aliquet. Nulla lacinia augue et velit gravida, in tempor purus
                rutrum. To know more details see{" "}
                <span>Our Client Handbook.</span>
              </div>
            </div>
            <button className="related__right_imageUp">
              <img src="up.svg" alt="up" />
            </button>
            <button className="related__right_image">
              <img src="down.svg" alt="down" />
            </button>
          </li>
          <li className="related__item">
            <div className="related__left">05</div>
            <div className="related__right">
              <h3 className="related__right_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et faucibus quam?{" "}
              </h3>
              <div className="related__right_bottom">
                Aliquam sodales, tellus at consequat malesuada, neque dolor
                auctor sapien, eget vehicula quam diam at est. Donec quis dui
                quis magna dictum hendrerit. Suspendisse porttitor lacinia
                scelerisque. In ullamcorper convallis arcu, id rhoncus est
                sodales id. Maecenas ultrices neque in neque viverra, non
                lobortis velit vestibulum. Etiam auctor laoreet libero quis
                aliquet. Nulla lacinia augue et velit gravida, in tempor purus
                rutrum. To know more details see{" "}
                <span>Our Client Handbook.</span>
              </div>
            </div>
            <button className="related__right_imageUp">
              <img src="up.svg" alt="up" />
            </button>
            <button className="related__right_image">
              <img src="down.svg" alt="down" />
            </button>
          </li>
        </ul>
        <button className="related__btn">
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>w&nbsp;</span>
          <span>m</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
        </button>
      </section>

      <div className="beforeFooter">
        <div className="beforeFooter__left">
          Next:&nbsp; <span>Corporate Secretarial Services</span>
        </div>
        <button className="beforeFooter__left">
          <img src="right.svg" alt="right" />
        </button>
      </div>
      <Footer logo={"topBlack.png"} />
    </>
  );
}
