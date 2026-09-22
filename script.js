document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion) {
    gsap.set(revealItems, { autoAlpha: 1 });
  } else {
    gsap.fromTo(revealItems, { autoAlpha: 0, y: 28 }, {
      autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.15
    });
    gsap.to(".orb", { y: -22, rotation: 7, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orb-ring", { rotation: "+=360", duration: 24, repeat: -1, ease: "none" });
    gsap.to(".ticker-track", { xPercent: -28, duration: 22, repeat: -1, ease: "none" });
    gsap.to(".cta-orbit", { rotation: 360, duration: 35, repeat: -1, ease: "none" });
    gsap.to(".pulse-visual i", { x: 14, repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut" });
    gsap.to(".ease-ball", { x: -120, y: 100, repeat: -1, yoyo: true, duration: 2.4, ease: "power2.inOut" });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".intro h2", {
      scrollTrigger: { trigger: ".intro", start: "top 80%" },
      y: 90, opacity: 0, duration: 1.1, ease: "power3.out"
    });
    gsap.from(".feature-card", {
      scrollTrigger: { trigger: ".feature-grid", start: "top 80%" },
      y: 55, opacity: 0, duration: .9, stagger: .14, ease: "power3.out"
    });
  }

  const glow = document.querySelector(".cursor-glow");
  if (glow && !reduceMotion) {
    window.addEventListener("pointermove", (event) => {
      gsap.to(glow, { x: event.clientX, y: event.clientY, duration: .45, ease: "power2.out" });
    });
  }

  const range = document.querySelector("#motion-range");
  const value = document.querySelector("#motion-value");
  const play = document.querySelector(".demo-play");
  const ball = document.querySelector(".demo-ball");
  if (range && value && play && ball) {
    range.addEventListener("input", () => {
      value.textContent = `${range.value}%`;
      gsap.set(ball, { x: `${Number(range.value) * 0.55}%` });
    });
    play.addEventListener("click", () => {
      gsap.fromTo(ball, { x: 0, scale: 1 }, {
        x: `${Number(range.value) * 3.1}%`, scale: 1.18, duration: .7,
        ease: "power3.out", yoyo: true, repeat: 1
      });
      gsap.fromTo(".demo-ball span", { scaleX: .7, opacity: .35 }, {
        scaleX: 1.25, opacity: 1, duration: .7, yoyo: true, repeat: 1, ease: "power2.out"
      });
    });
  }
});
