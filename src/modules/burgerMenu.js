const burgerMenu = function() {
  const burgerMenuBtn = document.querySelector('.menu-button');
  const menu = document.querySelector('.popup-menu');
  const firstSectionElement = document.querySelector('.header-main');
  const toTopButton = document.getElementById('totop');
  burgerMenuBtn.addEventListener('click', (event) => {
    const target = event.target;
    menu.style.cssText = "display: flex; animation: fade 0.4s ease-in-out;";

    menu.addEventListener('click', function(event) {
      const target = event.target;
      if (target.closest('.close-menu-btn')) {
        this.style.display = 'none';
      } else if (target.matches('a')) {
        this.style.display = 'none';
      }
    })
  });
  const scrollBurgerMenuValue = burgerMenuBtn.parentElement.parentElement.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > firstSectionElement.clientHeight) {
      toTopButton.classList.add('active');
    } else {
      toTopButton.classList.remove('active');
    }
    if (document.documentElement.clientWidth < 768) {
      if (window.pageYOffset >= scrollBurgerMenuValue) {
        burgerMenuBtn.parentElement.parentElement.style.cssText = 'position: fixed; top: 0; left: 0; z-index: 1009;';
      } else {
        burgerMenuBtn.parentElement.parentElement.style = '';
      }
    } else {
      burgerMenuBtn.parentElement.parentElement.style = '';
    }
  });
}

export default burgerMenu;

