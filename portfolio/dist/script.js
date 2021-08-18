// gsap.to()... infinity and beyond!
// To learn how to use GSAP, go to greensock.com/get-started

gsap.registerPlugin(ScrollTrigger);

circle = document.getElementById("circle");


gsap.to(".adjectiveOne", {
  autoAlpha: 1,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-1",
    pin: true,
    // markers: true,
    scrub: true

  }
})
gsap.to(".adjectiveOne", {
  autoAlpha: 0,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-2",
    pin: true,
    // markers: true,
    scrub: true

  }
})
gsap.to(".adjectiveTwo", {
  autoAlpha: 1,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-2",
    pin: true,
    // markers: true,
    scrub: true,
    delay: 1

  }
})
gsap.to(".adjectiveTwo", {
  autoAlpha: 0,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-3",
    pin: true,
    // markers: true,
    scrub: true

  }
})
gsap.to(".adjectiveThree", {
  autoAlpha: 1,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-3",
    pin: true,
    markers: true,
    scrub: true,
    delay: 1

  }
})
gsap.to(".adjectiveThree", {
  autoAlpha: 0,
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#v-spacer-4",
    pin: true,
    markers: true,
    scrub: true

  }
})

//  black
gsap.to(blackOne, {
    morphSVG: "#blackTwo", 
    duration: 1,
    scrollTrigger:{
      trigger:"#v-spacer-1",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(blackOne, {
    morphSVG: "#blackThree", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(blackOne, {
    morphSVG: "#blackFour", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-3",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")

// blue
gsap.to(blueOne, {
    morphSVG: "#blueTwo", 
    duration: 1,
    scrollTrigger:{
      trigger:"#v-spacer-1",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(blueOne, {
    morphSVG: "#blueThree", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(blueOne, {
    morphSVG: "#blueFour", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-3",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")

// green
gsap.to(greenOne, {
    morphSVG: "#greenTwo", 
    duration: 1,
    scrollTrigger:{
      trigger:"#v-spacer-1",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(greenOne, {
    morphSVG: "#greenThree", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(greenOne, {
    morphSVG: "#greenFour", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-3",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")

// orange
gsap.to(orangeOne, {
    morphSVG: "#orangeTwo", 
    duration: 1,
    scrollTrigger:{
      trigger:"#v-spacer-1",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(orangeOne, {
    morphSVG: "#orangeThree", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(orangeOne, {
    morphSVG: "#orangeFour", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-3",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")

// red
gsap.to(redOne, {
    morphSVG: "#redTwo", 
    duration: 1,
    scrollTrigger:{
      trigger:"#v-spacer-1",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(redOne, {
    morphSVG: "#redThree", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")
gsap.to(redOne, {
    morphSVG: "#redFour", 
    duration: 1,
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-3",
      // markers:true,
      scrub:true,
      start:"top top",
    }
  }, "+=1")


// gsap.to(circle, {
//     morphSVG: "#hippo", 
//     duration: 1,
//     scrollTrigger:{
//       trigger:"#v-spacer-1",
//       markers:true,
//       scrub:true,
//       start:"top top",
//     }
//   }, "+=1")
// gsap.fromTo(circle, {
//   morphSVG: "#hippo"
// }, {
//     morphSVG: "#star", 
//     duration: 1,
//     immediateRender: false,
//     scrollTrigger:{
//       trigger:"#v-spacer-2",
//       markers:true,
//       scrub:true,
//       start:"top top",
//     }
//   }, "+=1")
// gsap.fromTo(circle, {
//   morphSVG: "#star"
// }, {
//     morphSVG: "#elephant", 
//     duration: 1,
//     immediateRender: false,
//     scrollTrigger:{
//       trigger:"#v-spacer-3",
//       markers:true,
//       scrub:true,
//       start:"top top",
//     }
//   }, "+=1")
// gsap.fromTo(circle, {
//   morphSVG: "#elephant"
// }, {
//     morphSVG: "#circle2", 
//     duration: 1,
//     immediateRender: false,
//     scrollTrigger:{
//       trigger:"#v-spacer-4",
//       markers:true,
//       scrub:true,
//       start:"top top",
//     }
//   }, "+=1")
// gsap.fromTo(starTwo, {
//   morphSVG: "#circle2"
// }, {
//     morphSVG: "#starTwo", 
//     duration: 1,
//     immediateRender: false,
//     scrollTrigger:{
//       trigger:"#v-spacer-2",
//       markers:true,
//       scrub:true,
//       start:"top top",
//     }
//   }, "+=1")