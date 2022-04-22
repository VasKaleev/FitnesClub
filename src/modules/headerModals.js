const headerModals = () => {
  const headMain = document.querySelector('.head-main');
  const freeVisitModal = document.querySelector('#free_visit_form');
  const callBackModal = document.querySelector('#callback_form');


  const handlerModals = (modal) => {
    modal.classList.toggle('active');
  }

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.open-popup')) {
      handlerModals(freeVisitModal);
    } else if ((target.matches('img.close_icon') || target.matches('.overlay')) && 
    freeVisitModal.classList.contains('active')) {
      handlerModals(freeVisitModal);
    }
    if (target.matches('.open-callback-popup')) {
      handlerModals(callBackModal);
    } else if ((target.matches('img.close_icon') || target.matches('.overlay')) && 
    callBackModal.classList.contains('active')) {
      handlerModals(callBackModal);
    }
  })
}

export default headerModals;