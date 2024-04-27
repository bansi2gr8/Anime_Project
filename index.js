const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(
      ".slider-wrapper .slide-button"
    );
    const slideScrollbar = document.querySelector(
      ".container .slider-scrollbar" // Corrected typo "constainer" to "container"
    );
    const scrollbarThumb = slideScrollbar.querySelector(".scrollbar-thumb");
  
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };
  
    // Update scrollbar thumb position based on scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };
  
    // Add event listeners for scroll and load
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });
  
    window.addEventListener("load", () => {
      handleSlideButtons(); // Initial button visibility check
      updateScrollThumbPosition(); // Initial scrollbar thumb position update
    });
};
  
// Call the initSlider function when the window is loaded
window.addEventListener("load", initSlider);
  
