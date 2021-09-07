const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true
    }
  });

  tl.to(container, {
    autoAlpha: 1
  }).to(
    container,
    {
      autoAlpha: 0
    },
    0.5
  );
});

gsap.to(".title", {
  autoAlpha: 0,
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".container3",
    pin: true,
    // markers: true,
    scrub: true,
    duration: 0.2

  }
})
gsap.to(".name", {
  autoAlpha: 1,
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".field",
    pin: true,
    // markers: true,
    scrub: true,
    delay:0.5

  }
})

