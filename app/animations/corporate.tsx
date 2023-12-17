import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animat from "../components/header/animat";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default function animation() {
  animat();

  tl.from(".corporateStructuring", {
    width: 0,
    height: 0,
    duration: 2,
    scale: 0.4,
    borderRadius: "100%",
    marginLeft: "50%",
  })
    .from(
      ".corporateStructuring__home",
      {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      "-=1.5"
    )
    .from(".corporateStructuring__title", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    })
    .from(
      ".header__line",
      {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      },
      "-=0.5"
    );

  gsap.set(".expertise", {
    background: "#000",
  });
  gsap.to(".expertise", {
    scrollTrigger: {
      trigger: ".expertise",
      start: "-100 center",
      end: "+=300",
      scrub: true,
    },
    background: "#fff",
    padding: "170px 238px 170px 87px",
    display: "flex",
    justifyContent: "space-between",
  });
  gsap.set(".line.small", {
    display: "none",
  });
  gsap.to(".line.small", {
    scrollTrigger: {
      trigger: ".expertise",
      start: "-100 center",
      end: "+=300",
      scrub: true,
    },
    display: "block",
  });

  gsap.from(".structuringApproach", {
    scrollTrigger: {
      trigger: ".structuringApproach",
      start: "180 bottom",
      end: "+=400",
      scrub: true,
    },
    height: 0,
  });
  gsap.from('[data-word="word"]', {
    scrollTrigger: {
      trigger: ".structuringApproach",
      start: "300 bottom",
      end: "+=500",
      scrub: true,
    },
    opacity: 0.5,
    yPercent: -200,
    x: -200,
    stagger: {
      amount: 1.5,
      from: 11,
    },
  });

  gsap.from(".structuringApproach__item", {
    scrollTrigger: {
      trigger: ".structuringApproach",
      start: "300 bottom",
      end: "+=400",
      scrub: true,
    },
    yPercent: -100,
    opacity: 0,
  });
  gsap.to(".structuringApproach__item img", {
    scrollTrigger: {
      trigger: ".structuringApproach__item",
      start: "top 85%",
      scrub: true,
    },
    rotate: 360,
    repeatDelay: 0,
    repeat: -1,
  });

  gsap.from(".whatWeDo__leftside", {
    scrollTrigger: {
      trigger: ".whatWeDo__leftside",
      start: "top 100",
      end: "+=300",
      scrub: true,
    },
    scale: 1.8,
    opacity: 0,
  });

  gsap.from(".whatWeDo__rightside", {
    scrollTrigger: {
      trigger: ".whatWeDo",
      start: "top 150",
      end: "+=250",
      scrub: true,
    },
    xPercent: -100,
    opacity: 0,
    scale: 0.5,
  });

  gsap.from(".whatWeDo__item", {
    scrollTrigger: {
      trigger: ".whatWeDo__item",
      start: "top 50",
      end: "+=300",
      scrub: true,
    },

    ease: "bounce.inOut",
    stagger: {
      from: "center",
      amount: 0.5,
    },
    yPercent: 100,
    opacity: 0,
    background: "#000",
  });

  gsap.from(".related__title", {
    scrollTrigger: {
      trigger: ".related",
      start: "300px center",
      end: "+=550",
      scrub: true,
    },
    display: "none",
    opacity: 0,
    skewY: "38deg",
    scaleX: 3,
    scaleY: 3,
  });
  gsap.from(".related__item", {
    scrollTrigger: {
      trigger: ".related",
      start: "-100px top",
      end: "+=bottom",
    },
    display: "none",
    xPercent: 100,
    yPercent: -100,
    opacity: 0,
    scaleX: 3,
    scaleY: 3,
    background: "#fff",
    stagger: {
      amount: 1,
    },
  });

  gsap.from(".related__btn > span", {
    scrollTrigger: {
      trigger: ".beforeFooter",
      start: "bottom bottom",
      scrub: true,
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

  // Запитати в Юри про херню з стартом
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
