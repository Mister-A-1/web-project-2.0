// slider.js (or slider.jsx)
export function setupSlider(sliderSelector, nextButtonSelector) {
    const slider = document.querySelector(sliderSelector);
    const nextButton = document.querySelector(nextButtonSelector);
    const imageItems = document.querySelectorAll(`${sliderSelector} .image-item`);
    let currentIndex = 0;
  
    nextButton.addEventListener('click', () => {
      const totalImages = imageItems.length;
      const maxIndex = Math.ceil(totalImages / 3) - 1; // Show 3 images per slide
  
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0; // Reset to the first set of images
      }
  
      const sliderWidth = slider.offsetWidth;
      slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
    });
  }
  