const clubsSelect = function() {
  const dropdownElement = document.querySelector('.dropdown-header');

  const handlerDropdown = () => {
    dropdownElement.classList.toggle('club-list-active');    
  };

  document.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('.club-select p')) {
      handlerDropdown();
    } else if (!target.closest('.club-select') && 
    dropdownElement.classList.contains("clubs-list-active")) {
      handlerDropdown();
    } else if (!target.closest('.dropdown-header') && 
    dropdownElement.classList.contains('club-list-active')) {
      handlerDropdown();
    }
  })
}

export default clubsSelect;

