const calculator = function () {
  const priceTotal = document.getElementById('price-total');
  const calculatorForm = document.getElementById('card_order');
  const checkboxMozaika = document.getElementById('card_leto_mozaika');
  const checkboxShelkovo = document.getElementById('card_leto_schelkovo');
  const timeChangeBlocks = document.querySelectorAll('.time>input');
  const promoInput = document.querySelector('.promo-input');

  const mozaikaPrices = {
    '1' : 1999,
    "6" : 9900,
    "9" : 13900,
    "12" : 19900
  };
  const shelkovoPrices = {
    "1" : 2999,
    "6" : 14990,
    "9" : 21990,
    "12" : 24990,
  };

  calculatorForm.addEventListener('change', function (event) {
    const target = event.target;
    if (target.closest('.time') && checkboxMozaika.checked) {
      priceTotal.textContent = mozaikaPrices[target.value];
      if (promoInput.value === 'ТЕЛО2019') {
        priceTotal.textContent = Math.ceil(Number(Number(priceTotal.textContent) * 0.7))
      }
    } else if (target.closest('.time') && checkboxShelkovo.checked) {
      priceTotal.textContent = shelkovoPrices[target.value];
      if (promoInput.value === 'ТЕЛО2019') {
        priceTotal.textContent = Math.ceil(Number(Number(priceTotal.textContent) * 0.7))
      }
    } else if (target.closest('.club') && target.value === 'schelkovo') {
      timeChangeBlocks.forEach(item => {
        if (item.checked) {
          priceTotal.textContent = shelkovoPrices[item.value];
          if (promoInput.value === 'ТЕЛО2019') {
            priceTotal.textContent = Math.ceil(Number(Number(priceTotal.textContent) * 0.7))
          }
        }

      })
    } else if (target.closest('.club') && target.value === 'mozaika') {
      timeChangeBlocks.forEach(item => {
        if (item.checked) {
          priceTotal.textContent = mozaikaPrices[item.value];
          if (promoInput.value === 'ТЕЛО2019') {
            priceTotal.textContent = Math.ceil(Number(Number(priceTotal.textContent) * 0.7))
          }
        }
      })
    } else if (target.closest('.promo-input') && target.value === 'ТЕЛО2019') {
      target.style.border = '1px solid green'
      priceTotal.textContent = Math.ceil(Number(Number(priceTotal.textContent) * 0.7))
    } else if (target.closest('.promo-input')) {
      target.style.border = '';
    }
  })
}

export default calculator;