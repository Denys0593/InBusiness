import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animat from "../components/header/animat";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

// const laptop1280 = window.matchMedia("(min-width: 1281px)");
// const laptop1024 = window.matchMedia("(min-width: 1025px)");
export default function animation() {
  animat();

  tl.from(".corporateStructuring", {
    yPercent: -100,
    opacity: 0,
    duration: 1,
  })
    .fromTo(
      ".corporateStructuring__home",
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
      ".corporateStructuring__title",
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

  gsap.from(".expertise__left", {
    scrollTrigger: {
      trigger: ".expertise",
      start: "100 bottom",
    },
    duration: 1,
    xPercent: -100,
    opacity: 0,
  });
  gsap.from(".expertise__right", {
    scrollTrigger: {
      trigger: ".expertise",
      start: "100 bottom",
    },
    duration: 1,
    delay: 0.5,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".structuringApproach__title", {
    scrollTrigger: {
      trigger: ".structuringApproach",
      start: "200 bottom",
    },
    opacity: 0,
    x: -200,
    duration: 1,
  });

  gsap.from(".structuringApproach__item", {
    scrollTrigger: {
      trigger: ".structuringApproach",
      start: "300 bottom",
    },
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.25,
  });

  gsap.from(".whatWeDo__leftside", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "top center",
    },
    duration: 1,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".whatWeDo__rightside", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "top center",
    },
    duration: 1,
    delay: 0.5,
    xPercent: -100,
    opacity: 0,
  });

  gsap.from(".whatWeDo__item", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "center bottom",
    },
    duration: 0.25,
    ease: "CustomEase",
    stagger: 0.5,
    yPercent: 100,
    opacity: 0,
    background: "#000",
  });

  gsap.from(".strategic__right_top", {
    scrollTrigger: {
      trigger: ".strategic",
      start: "400 bottom",
      end: "+=300px",
    },
    y: -120,
    opacity: 0,
  });

  gsap.from(".strategic__descr", {
    scrollTrigger: {
      trigger: ".strategic",
      start: "600 bottom",
      end: "+=300px",
    },
    yPercent: -40,
    opacity: 0,
  });

  gsap.from(".related__title", {
    scrollTrigger: {
      trigger: ".related",
      start: "200 bottom",
    },
    duration: 1,
    display: "none",
    opacity: 0,
    xPercent: -100,
  });
  gsap.from(".related__item", {
    scrollTrigger: {
      trigger: ".related",
      start: "350 bottom",
    },
    duration: 1,
    display: "none",
    xPercent: -100,
    opacity: 0,
    background: "#fff",
    stagger: 0.25,
  });

  gsap.from(".related__btn > span", {
    scrollTrigger: {
      trigger: ".related__btn",
      start: "100 bottom",
      end: "+=300",
      // scrub: true,
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
}

// По кліку запуск анімашки. Вивчити пізніше

// let clickCount = 0,
// boxes = gsap.utils.toArray('[data-word="word"]');

// document.addEventListener("click", () => {
// gsap.to(gsap.utils.shuffle(boxes), {
// scale: clickCount++ % 2 ? 1 : 0,
// duration: 0.3,
// stagger: {
//   amount: 0.5,
// },
// });
// });
