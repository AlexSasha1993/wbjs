const openButton = document.getElementById('open_pop_up_payment_method');
const closeButton = document.getElementById('closeButton');
const mainPopUpPaymentMethod = document.querySelector(
  '.main_pop_up_payment_method'
);

openButton.addEventListener('click', function () {
  mainPopUpPaymentMethod.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  mainPopUpPaymentMethod.style.display = 'none';
});
