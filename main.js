// TODO: refactor this out
$(document).on("scroll", function() {
  var scrollTop = $(document).scrollTop();
  var scrollBottom = scrollTop + $(window).height();
  var pageBottom = $(document).height();

  var diff = pageBottom - scrollTop;

  var opacity = 1 - (diff / 300) + 3;
  $("div.fade-bg").css("opacity", opacity);
})

// slideshows
const slideshow = document.querySelector("section.slideshow")
const images = slideshow.querySelectorAll("img")

slideshow.addEventListener("mousemove", function (e) {
  const x = e.offsetX
  const width = this.offsetWidth
  const percentage = x / width
  const imageNumber = Math.floor(percentage * images.length)

  images.forEach(image => {
    image.style.zIndex = 0
  })

  images[imageNumber].style.zIndex = 1
})
