var navMain = document.querySelector(".main-nav");
var navMainMobile = document.querySelector(".main-nav-not-mobile");
var navToggle = document.querySelector(".main-nav__toggle");
var modalFailure = document.querySelector(".modal-failure");
var modalFailureButton = document.querySelector(".button-failure");
var modalSuccess = document.querySelector(".modal-success");
var modalSuccessButton = document.querySelector(".button-success");
var reviewsForm = document.querySelector(".form");
var formName = document.querySelector(".form__input-name");
var formSurname = document.querySelector(".form__input-surname");
var formTel = document.querySelector(".form__input-tel");
var formEmail = document.querySelector(".form__input-email");

//Navigation

navMain.classList.remove("main-nav--nojs");
navMainMobile.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//Pop Up

reviewsForm.addEventListener("submit", function (evt) {
  console.log(formName.value);
  if (!formName.value || !formSurname.value || !formTel.value || !formEmail.value) {
    evt.preventDefault();
    modalFailure.classList.add("modal--open");
  } else {
    modalSuccess.classList.add("modal--open");
    }
});

//Failure

modalFailureButton.addEventListener("click", function() {
  if (modalFailure.classList.contains("modal--open")) {
    modalFailure.classList.remove("modal--open");
  } else {
  }
});

//Success

modalSuccessButton.addEventListener("click", function() {
  if (modalSuccess.classList.contains("modal--open")) {
    modalSuccess.classList.remove("modal--open");
  } else {
    }
});
