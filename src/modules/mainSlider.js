const mainSlider = () => {

  if (document.querySelector('.main-slider') && document.querySelectorAll('.slide')) {
    const slider = document.querySelector('.main-slider');
  const slides = slider.querySelectorAll('.slide');

  let interval;
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlider = () => {
    prevSlide(slides, currentSlide, 'main-slider-slide-active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'main-slider-slide-active');
  }

  const startSlider = (time = 1500) => {
    interval = setInterval(autoPlaySlider, time);
  }

  startSlider(1500);
  }
  
}

export default mainSlider;