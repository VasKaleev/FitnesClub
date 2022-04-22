const validateInputs = () => {
  const phoneInputs = document.querySelectorAll('input[placeholder="Ваш номер телефона..."]');
  const nameInputs = document.querySelectorAll('input[placeholder="Ваше имя..."]');

  const customValidator = val => {
    val = val.replace(/\s+/g, ' ');
    val = val.replace(/-+/g, '-');
    val = val.replace(/^[ |\-+]/g, '');
    val = val.replace(/[ |\-+]$/g, '');

    return val;
  };

  nameInputs.forEach(item => {
    item.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
      val = customValidator(val);
      const arr = val.split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
        }
      }
      val = arr.join(' ');
      item.value = customValidator(val);
    });
  });

  phoneInputs.forEach(item => {
    item.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/^\+[^\d()\-]/g, '');
      val = customValidator(val);
      val = '+' + val;
      if (val.length === 18) {
        target.value = val;
      } else {
        alert('Введите корректный номер телефона длиной 11 символов');
        target.value = '';
      }
    });
  });
}

export default validateInputs;