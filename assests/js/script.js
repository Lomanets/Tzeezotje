"use strict";

/* Form module */
document.querySelector('.header-offer__btn').addEventListener('click', () => {
  document.querySelector('.form-module').style.display = 'block';
})

document.querySelector('.form-module__image').addEventListener('click', () => {
  document.querySelector('.form-module').style.display = 'none';
})

/* Slider */
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Form submit server */

const applicationForm = document.querySelectorAll('.form');

applicationForm.addEventListener('submit', event => {
  event.preventDefault();

  let firstName = applicationForm.elements.firstname.value;
  let email = applicationForm.elements.email.value;
  let request = applicationForm.elements.request.value

  let formData = new FormData();

  formData.append("firstName", firstName);
  formData.append("email", email);
  if (request) formData.append("request", request);

  fetch("/", {
    method: "POST",
    body: formData
  })
    .then(function(response) {
      if (response.ok) {
        // Здесь можно выполнить дополнительные действия при успешной отправке формы
        alert("Форма успешно отправлена");
        myForm.reset();
      } else {
        alert("Ошибка при отправке формы");
      }
    })
    .catch(function(error) {
      alert("Ошибка при отправке формы", error);
    });
  });





