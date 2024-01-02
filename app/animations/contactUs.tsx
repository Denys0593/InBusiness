import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animat from "../components/header/animat";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

export default function animation() {
  animat();

  tl.from(".contactUs__title", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    color: "#f53d3d",
  })
    .from(
      ".line",
      {
        width: 0,
        opacity: 0,
      },
      "-=.4"
    )
    .fromTo(
      '[data-hr="topHr"]',
      {
        width: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        width: "100%",
      },
      "-=.3"
    )
    .from(".contactUs__image", {
      y: -100,
      opacity: 0,
    })
    .from(".contactUs__subtitle", {
      opacity: 0,
      yPercent: -100,
      duration: 1,
    })
    .from(".contactUs__item", {
      yPercent: -100,
      scale: 0.7,
      opacity: 0,
      stagger: 0.5,
    });
  gsap.from(".contactForm__title", {
    scrollTrigger: {
      trigger: ".contactForm__title",
      start: "150 bottom",
    },
    color: "#5ba266",
    yoyo: true,
    repeat: -1,
    duration: 3,
  });

  gsap.from(".formContact__input", {
    scrollTrigger: {
      trigger: ".formContact",
      start: "200 bottom",
      end: "+=300",
    },
    y: 100,
    opacity: 0,
    stagger: 0.5,
  });
}
