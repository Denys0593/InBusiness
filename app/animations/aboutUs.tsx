import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animat from "../components/header/animat";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

export default function animation() {
  animat();

  tl.from(".about", {
    opacity: 0,
    duration: 1,
  })
    .fromTo(
      ".about__home",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    )
    .fromTo(
      ".about__title",
      {
        x: 100,
        opacity: 0,
        color: "#000",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        color: "#fff",
      }
    )
    .fromTo(
      ".header__line",
      {
        width: 0,
        opacity: 0,
        background: "#243617",
      },
      {
        opacity: 1,
        width: 64,
        background: "#9ce861",
        duration: 1,
      },
      "-=.5"
    );

  gsap.from(".whoWeAre__left", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "100 bottom",
    },
    duration: 1,
    xPercent: -100,
    opacity: 0,
  });
  gsap.from(".whoWeAre__right", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "100 bottom",
    },
    duration: 1,
    delay: 0.5,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".approach__right_top", {
    scrollTrigger: {
      trigger: ".approach",
      start: "400 bottom",
      end: "+=300px",
    },
    y: -120,
    opacity: 0,
  });
  gsap.from(".approach__descr", {
    scrollTrigger: {
      trigger: ".approach",
      start: "600 bottom",
      end: "+=300px",
    },
    yPercent: -40,
    opacity: 0,
  });

  gsap.from(".someText", {
    scrollTrigger: {
      trigger: ".someText",
      start: "bottom bottom",
      end: "+=450",
    },
    scale: 0.5,
    opacity: 0,
    color: "#578493",
  });

  gsap.from(".inAddition__right_top", {
    scrollTrigger: {
      trigger: ".inAddition",
      start: "400 bottom",
      end: "+=300px",
    },
    y: -120,
    opacity: 0,
  });
  gsap.from(".inAddition__descr", {
    scrollTrigger: {
      trigger: ".inAddition",
      start: "600 bottom",
      end: "+=300px",
    },
    yPercent: -40,
    opacity: 0,
  });

  gsap.from(".values__title", {
    scrollTrigger: {
      trigger: ".values",
      start: "100 bottom",
      // end: '+=150',
      // scrub: true,
    },
    duration: 2,
    ease: "back.out(1.7)",
    y: -100,
    opacity: 0,
  });

  gsap.from(".values__top .values__item", {
    scrollTrigger: {
      trigger: ".values__top",
      start: "150 bottom",
      end: "+=30%",
    },
    display: "none",
    stagger: 0.25,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".values__bottom .values__item", {
    scrollTrigger: {
      trigger: ".values__bottom",
      start: "150 bottom",
      end: "+=30%",
    },
    display: "none",
    stagger: 0.25,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".beforeFooter__background > div", {
    scrollTrigger: {
      trigger: ".beforeFooter",
      start: "100 bottom",
      end: "+=60%",
      scrub: true,
    },
    display: "none",
    xPercent: -100,
    stagger: 0.25,
    opacity: 0,
  });

  gsap.from(".beforeFooter__bottom", {
    scrollTrigger: {
      trigger: ".beforeFooter__bottom",
      start: "200 bottom",
      end: "+=70%",
    },
    opacity: 0,
    y: 40,
  });

  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer .header",
      start: "50px bottom",
      end: "+=250",
      scrub: true,
    },
    background: "#fff",
  });
}
