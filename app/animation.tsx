import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animat from "./components/header/animat";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();
const tl = gsap.timeline();
const header = gsap.timeline();
const tlForm = gsap.timeline();

// const laptopScreen1024 = window.matchMedia("(min-width: 1024px)");
// const laptopScreen768 = window.matchMedia("(min-width: 768px)");

export default function animation() {
  animat();
  // tlLoader
  //   .to(".loader__item", {
  //     css: {
  //       marginTop: 0,
  //     },
  //     duration: 0.4,
  //     stagger: 0.25,
  //   })
  //   .to(".loader__item", {
  //     css: {
  //       yPercent: -100,
  //     },
  //     duration: 0.5,
  //     stagger: 0.25,
  //   })
  //   .to(".loader__hello", {
  //     opacity: 1,
  //     duration: 1,
  //     scale: 1.1,
  //   })
  //   .to(".loader__hello", {
  //     opacity: 0,
  //     duration: 1,
  //     scale: 0.9,
  //   })
  //   .to(
  //     ".loader",
  //     {
  //       opacity: 0,
  //       duration: 0.5,
  //     },
  //     "-=0.4"
  //   )
  //   .to(".loader", {
  //     visibility: "hidden",
  //     display: "none",
  //   });

  tlForm
    .set(".contactForm", {
      left: "-100%",
      margin: 0,
    })
    .set(".contactForm__formik", {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
      zIndex: "55",
      left: "100%",
    })
    .to(".contactForm", {
      scrollTrigger: {
        trigger: ".contactForm",
        start: "top center",
        end: "+=20%",
        scrub: true,
      },
      left: 0,
      margin: "6.87rem 5.44rem 8.12rem 5.44rem",
    })
    .to(".contactForm__formik", {
      scrollTrigger: {
        trigger: ".contactForm",
        start: "top center",
        end: "+=30%",
        scrub: true,
      },
      display: "none",
      xPercent: 100,
      opacity: 0,
    });

  tl.set(".tailor", {
    yPercent: -100,
    opacity: 0,
  })
    .to(".tailor", {
      yPercent: 0,
      duration: 1,
      opacity: 1,
      // delay: 4,
    })
    .fromTo(
      ".tailor__subtitle",
      {
        y: -100,
        opacity: 0,
        scaleY: -1,
        color: "#000",
      },
      {
        y: 0,
        opacity: 1,
        scaleY: 1,
        duration: 2,
        color: "#fff",
      }
    )
    .fromTo(
      ".tailor__title",
      {
        y: 100,
        opacity: 0,
        color: "#000",
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        color: "#fff",
      },
      "-=1.5"
    );
  gsap.from(".tailor__down", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "top bottom",
      end: "+=300",
    },
    y: -100,
    opacity: 0,
    display: "none",
  });

  gsap.from(".whoWeAre__title", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "top center",
      end: "+=350px",
      scrub: true,
    },
    x: "-150px",
    opacity: 0,
  });
  gsap.from("[data-hr='header']", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "0 center",
      end: "+=300px",
      scrub: true,
    },
    height: "15px",
    xPercent: 110,
    background: "#000",
    display: "none",
  });
  gsap.from(".whoWeAre__text", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "top center",
      end: "+=200px",
      scrub: true,
    },
    x: 200,
    opacity: 0,
    // display: "none",
  });
  gsap.from("[data-hr='bottom']", {
    scrollTrigger: {
      trigger: "[data-hr='bottom']",
      start: "100 bottom",
      end: "+=200px",
      scrub: true,
    },
    height: "15px",
    xPercent: -110,
    background: "#000",
  });
  gsap.from(".whoWeAre__btn", {
    scrollTrigger: {
      trigger: ".whoWeAre__btn",
      start: "bottom 95%",
      end: "+=200px",
      scrub: true,
    },
    opacity: 0,
    y: -60,
  });

  gsap.from(".card__item", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "top center",
    },
    opacity: 0,
    skewY: "-38deg",
    scaleX: 3,
    stagger: {
      amount: 0.5,
      from: 3,
    },
  });

  gsap.from(".whatWeDo__title span", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "200 bottom",
      end: "+=300",
    },
    skewY: "38deg",
    opacity: 0,
    scaleX: 3,
    scaleY: 3,
    stagger: {
      amount: 0.5,
      from: 3,
    },
  });

  gsap.from(".truly", {
    scrollTrigger: {
      trigger: ".truly",
      start: "100 bottom",
      end: "+=40%",
    },
    scale: 0.5,
    borderRadius: "5rem",
    backgroundImage: "linear-gradient(to right, red , yellow)",
  });

  gsap.to(".truly__wrapper", {
    scrollTrigger: {
      trigger: ".truly__btn",
      start: "top center",
      end: "+=60%",
      scrub: true,
    },
    y: -220,
  });
  gsap.to(".truly__bottomWrapper", {
    scrollTrigger: {
      trigger: ".truly__bottomWrapper",
      start: "top center",
      end: "+=60%",
      scrub: true,
    },
    y: -200,
    x: -200,
    scale: 1.2,
  });
}
