import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const header = gsap.timeline();

export default function animation() {
  header
    .to("header", {
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
        scrub: true,
      },
      opacity: 0.7,
    })
    .to("header", {
      scrollTrigger: {
        trigger: "header",
        start: "1000 top",
        end: "1500",
        scrub: true,
      },
      y: -100,
    });
}
