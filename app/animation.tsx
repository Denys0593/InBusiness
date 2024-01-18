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
function loader() {
  // tlLoader
  //   .set(".loader__item", {
  //     yPercent: 100,
  //     display: "block",
  //   })
  //   .to(".loader__item", {
  //     yPercent: 0,
  //     duration: 0.4,
  //     stagger: 0.25,
  //   })
  //   .to(".loader__item", {
  //     yPercent: -100,
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
}
function animation() {
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

  gsap.set(".contactForm", {
    xPercent: -100,
    opacity: 0,
    margin: "6.87rem 0 0 0",
  });
  gsap.to(".contactForm", {
    scrollTrigger: {
      trigger: ".contactForm",
      start: "top center",
    },
    duration: 1,
    xPercent: 0,
    opacity: 1,
    margin: "6.87rem 5.44rem 8.12rem 5.44rem",
  });

  tl.set(".tailor", {
    yPercent: -100,
    opacity: 0,
  })
    .to(".tailor", {
      yPercent: 0,
      duration: 1,
      opacity: 1,
      // delay: 4.2,
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
      start: "100 bottom",
      end: "+=400px",
    },
    display: "none",
    x: "-150px",
    opacity: 0,
  });
  gsap.from("[data-hr='header']", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "400 bottom",
      end: "+=300px",
    },
    height: "15px",
    xPercent: -110,
    background: "#000",
    display: "none",
    opacity: 0,
  });
  gsap.from(".whoWeAre__text", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "top center",
      end: "+=200",
    },
    display: "none",
    x: 200,
    opacity: 0,
    // display: "none",
  });
  gsap.from("[data-hr='bottom']", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "0 center",
      end: "+=200px",
    },
    height: "15px",
    xPercent: -110,
    background: "#000",
    opacity: 0,
    display: "none",
  });
  gsap.from(".whoWeAre__btn", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "top 20%",
      end: "+=200px",
    },
    display: "none",
    opacity: 0,
    y: -60,
  });

  gsap.from(".card__item", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "center center",
    },
    x: 200,
    opacity: 0,
    stagger: {
      amount: 0.5,
    },
  });

  gsap.from(".whatWeDo__title", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "top top",
      end: "+=350px",
    },
    x: "-150px",
    opacity: 0,
  });

  gsap.from(".truly__title", {
    scrollTrigger: {
      trigger: ".truly",
      start: "top 50%",
      end: "+=350px",
    },
    display: "none",
    x: "-150px",
    opacity: 0,
  });
  gsap.from(".truly__text", {
    scrollTrigger: {
      trigger: ".truly",
      start: "top center",
      end: "+=30%",
    },
    display: "none",
    x: 200,
    opacity: 0,
  });
}

export { loader, animation };
