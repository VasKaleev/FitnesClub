const gallerySlider = () => {


  if (document.querySelector('.gallery-slider') && document.querySelectorAll('.slide') && document.querySelectorAll('.gallery-slider-dot')) {
    const slider = document.querySelector('.gallery-slider');
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.gallery-slider-dot');

    if (slider && slides && dots) {
      let interval;
      let currentSlide = 2;
      const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
      }
      const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
      }
    
      const autoPlaySlider = () => {
        prevSlide(slides, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
      };
    
      const startSlider = (time = 1500) => {
        interval = setInterval(autoPlaySlider, time);
      };
    
      const stopSlider = () => {
        clearInterval(interval);
      };
    
      slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
    
        if (target.closest('.slider-arrow') || target.closest('.gallery-slider-dot')) {
          prevSlide(slides, currentSlide, 'active')
          prevSlide(dots, currentSlide, 'slick-active');
    
          if (target.closest('.slider-arrow-next')) {
            currentSlide++;
          } else if (target.closest('.slider-arrow-prev')) {
            currentSlide--;
          } else if (target.matches('.gallery-slider-dot')) {
            dots.forEach((elem, index) => {
              if (elem === target) {
                currentSlide = index;
              }
            })
          }
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
          }
    
          nextSlide(slides, currentSlide, 'active');
          nextSlide(dots, currentSlide, 'slick-active');
        } else  {
          return;
        }
      });
    
      slider.addEventListener('mouseover', event => {
        if (event.target.closest('.slider-arrow') || event.target.matches('.gallery-slider-dot')) {
          stopSlider();
        }
      });
      slider.addEventListener('mouseout', event => {
        if (event.target.closest('.slider-arrow') || event.target.matches('.gallery-slider-dot')) {
          startSlider();
        }
      });
    
      startSlider(1500);
  
    }

  }
}

export default gallerySlider;