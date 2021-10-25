//Mobile nav

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navItems = document.querySelectorAll('.main-nav__item');

navMain.classList.remove('main-nav--nojs');

const closeMobileMenu = () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
}

navToggle.addEventListener('click', function () {
  closeMobileMenu();
});


//Calculate profit

const dark = document.querySelector('.calculate__profit--dark');
const blue = document.querySelector('.calculate__profit--blue');
const calculateValue = document.querySelector('#value');

const calculateProfit = () => {
  dark.textContent = calculateValue.value * 1 + '$';
  blue.textContent = calculateValue.value * 4 + '$';
  witdh = dark.offsetWidth;
  const doubleWidth = witdh * 2
  dark.style.padding = '5px';
  blue.style.padding = '5px';
  blue.style.width = doubleWidth + 'px';
}

calculateValue.addEventListener('input', function () {

  if (calculateValue.value.length < 7) {
    calculateProfit()
  } else {
    calculateValue.value = 1000000
    calculateProfit()
  }
})


//localStorage

if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
