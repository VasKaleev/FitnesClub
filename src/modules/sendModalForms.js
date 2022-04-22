const sendModalForms = () => {
  const modalThanks = document.querySelector('#thanks');
  const preLoader = document.querySelector('.loader-container');
  const errorAlert = document.querySelector('.error-alert');
  const errorAlertClose = document.querySelector('.error-alert-close');
  const freeVisitModal = document.querySelector('#free_visit_form');
  const callBackModal = document.querySelector('#callback_form');


  const successfulExecution = (target) => {
    preLoader.style.display = 'none';
    target.reset();
    if (target.id === 'form1') {
      callBackModal.classList.remove('active');
    } else if (target.id === 'form2') {
      freeVisitModal.classList.remove('active');
    }
    modalThanks.classList.add('active');
    modalThanks.addEventListener('click', event => {
      const target = event.target;
      if ((target.matches('img.close_icon') || 
      target.matches('.overlay') || 
      target.matches('.close-btn')) && 
    modalThanks.classList.contains('active')) {
      modalThanks.classList.remove('active');
    }})
  }

  const badExecution = (error, target) => {
    preLoader.style.display = 'none';
    console.error(error);
    target.reset();
    if (target.id === 'form1') {
      callBackModal.classList.remove('active');
    } else if (target.id === 'form2') {
      freeVisitModal.classList.remove('active');
    }
    errorAlert.classList.add('error-alert-active');
    errorAlertClose.addEventListener('click', () => {
      errorAlert.classList.remove('error-alert-active');
    })
  }

  document.addEventListener('submit', event => {
    const target = event.target;
    console.log(target);
    if (target.matches('#form2') || target.matches('#form1')) {
      const formElements = [...target.elements].filter(item => item.tagName.toLowerCase() !== 'button');
      const formData = new FormData(target);
      let body = {};
      formData.forEach((value, key) => {
        body[key] = value;
      });


      if(formElements[1].value.trim() !== '' &&
        formElements[2].value.trim() !== '' &&
        formElements[3].checked) {
          postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status network not 200')
            }
            successfulExecution(target);
          })
          .catch(error => {
            badExecution(error, target);
          })
      } else {
        event.preventDefault();
        alert('Введите корректные данные во все поля формы и согласитесь на обработку персональных данных')
      }
    }

  })


  const postData = (body) => {
    preLoader.style.display = 'block';
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

}

export default sendModalForms;