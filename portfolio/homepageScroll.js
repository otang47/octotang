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

$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "assets/thumbnailChennaiSmall.png";

    $(".text-hover-image").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("width", "30%")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});

$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "assets/yleanaThumbnailSmall.png";

    $(".text-hover-image-two").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("width", "30%")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image-two").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});
$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "assets/MockUpSlide2Small.png";

    $(".text-hover-image-three").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("width", "30%")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image-three").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});

$(document).ready(function () {
    var yOff = 15;
    var xOff = -20;
    var pathToImage = "assets/communionGifSmall.gif";

    $(".text-hover-image-four").hover(function (e) {
        $("body").append("<p id='image-when-hovering-text'><img src='" + pathToImage + "'/></p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("width", "30%")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image-four").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});