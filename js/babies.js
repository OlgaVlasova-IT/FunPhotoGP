
document.addEventListener('DOMContentLoaded', function () {
  let multipleCardCarousel = document.querySelector("#carouselExampleControls");


  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });

    console.log(document.querySelector(".carousel-inner").scrollWidth)
    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    console.log(document.querySelector(".carousel-item").offsetWidth)
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;


    document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        document.querySelector("#carouselExampleControls .carousel-control-prev").classList.remove("noDisplay")        

      if (scrollPosition > carouselWidth - cardWidth * 3) {
        // console.log("here")
        // console.log(scrollPosition, carouselWidth );
        document.querySelector("#carouselExampleControls .carousel-control-next").classList.add("noDisplay")
      }
      else {
        document.querySelector("#carouselExampleControls .carousel-control-next").classList.add("display")

      }

        if (scrollPosition < carouselWidth - cardWidth * 2) {
        scrollPosition += cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
    
    });


    document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
       console.log("here")
        console.log(scrollPosition, carouselWidth );
    document.querySelector("#carouselExampleControls .carousel-control-next").classList.remove("noDisplay")
    if (scrollPosition <= cardWidth) {
        document.querySelector("#carouselExampleControls .carousel-control-prev").classList.add("noDisplay")
       
      }
      if (scrollPosition > 0 ){
        scrollPosition -= cardWidth;
        document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
      }
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

