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

  gsap.to(".whoWeAre", {
    scrollTrigger: {
      trigger: ".whoWeAre",
      start: "center center",
      scrub: true,
    },
    background: "rgba(0, 0, 0, 0.482)",
  });
  gsap.to(".whoWeAre__title", {
    scrollTrigger: {
      trigger: ".whoWeAre__title",
      start: "-300 top",
      scrub: true,
    },
    color: "rgb(197, 197, 197)",
  });
  gsap.to(".whoWeAre__top", {
    scrollTrigger: {
      trigger: ".whoWeAre__top",
      start: "top 200",
      scrub: true,
    },
    color: "rgb(197, 197, 197)",
  });
  gsap.to(".whoWeAre__bottom", {
    scrollTrigger: {
      trigger: ".whoWeAre__bottom",
      start: "top 200",
      scrub: true,
    },
    color: "rgb(197, 197, 197)",
  });

  gsap.from(".approach__left", {
    scrollTrigger: {
      trigger: ".approach",
      start: "100 bottom",
      end: "+=600px",
      scrub: true,
    },
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
      start: "40% bottom",
      end: "+=450px",
      scrub: true,
    },
    scale: 0.5,
    opacity: 0,
    color: "#578493",
  });

  gsap.from(".inAddition__left", {
    scrollTrigger: {
      trigger: ".inAddition",
      start: "-150 50%",
      end: "+=50%",
    },
    xPercent: -100,
    opacity: 0,
    display: "none",
  });

  gsap.from(".inAddition__right", {
    scrollTrigger: {
      trigger: ".inAddition",
      start: "-150 50%",
      end: "+=50%",
    },
    xPercent: 100,
    opacity: 0,
    display: "none",
  });

  gsap.from("[data-go='go']", {
    scrollTrigger: {
      trigger: ".values",
      start: "150 bottom",
      end: "+=50%",
      scrub: true,
    },
    opacity: 0,
    yPercent: -200,
    stagger: {
      amount: 1.5,
      from: "center",
    },
  });

  gsap.from(".values__top .values__item", {
    scrollTrigger: {
      trigger: ".values__top",
      start: "150 bottom",
      end: "+=40%",
      scrub: true,
    },
    display: "none",
    stagger: 1,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".values__bottom .values__item", {
    scrollTrigger: {
      trigger: ".values__bottom",
      start: "150 bottom",
      end: "+=50%",
      scrub: true,
    },
    display: "none",
    stagger: 0.25,
    xPercent: 100,
    opacity: 0,
  });

  gsap.from("[data-shot='her']", {
    scrollTrigger: {
      trigger: ".beforeFooter",
      start: "100 bottom",
      end: "+=70%",
      scrub: true,
    },
    display: "none",
    xPercent: -100,
    stagger: 0.25,
    opacity: 0,
  });

  gsap.from("[data-shot='him']", {
    scrollTrigger: {
      trigger: ".beforeFooter",
      start: "100 bottom",
      end: "+=70%",
      scrub: true,
    },
    display: "none",
    xPercent: 100,
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
