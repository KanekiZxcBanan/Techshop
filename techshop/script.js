const buyBtn = document.getElementById('buy');
const detailsBtn = document.getElementById('details');
const deliveryBtn = document.getElementById('delivery');
const clearBtn = document.getElementById('clear');


const messageBox = document.getElementById('message');
const infoBox = document.getElementById('info');
const deliveryBox = document.getElementById('delivery-info');

buyBtn.addEventListener('click', function () {
  messageBox.textContent = 'Товар добавлен в корзину!';
});


detailsBtn.addEventListener('click', function () {
  if (infoBox.textContent === '') {
    infoBox.textContent = 'Характеристики: Bluetooth 5.3, радиус действия до 10 м, зарядка через USB-C, вес 180 г.';
  } else {
    infoBox.textContent = '';
  }
});


deliveryBtn.addEventListener('click', function () {
  if (deliveryBox.textContent === '') {
    deliveryBox.textContent = 'Доставка курьером по городу — 300 руб. (1–2 дня). Самовывоз из пункта выдачи — бесплатно.';
  } else {
    deliveryBox.textContent = '';
  }
});


clearBtn.addEventListener('click', function () {
  messageBox.textContent = '';
  infoBox.textContent = '';
  deliveryBox.textContent = '';
});