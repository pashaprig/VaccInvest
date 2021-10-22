//Mobile nav

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
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

