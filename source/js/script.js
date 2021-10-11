class Tabs{
  constructor(){
    this.tabList = document.querySelectorAll('.places-tab__tabItem');
    this.contentList = document.querySelectorAll('.places-tab__contentItem');
    let nav = document.querySelector('.places-tab');

    nav.addEventListener('click', e => this.show(e));

    this.setIndex();
  }

  show(e){
    let t = e.target;
    if (!t.classList.contains('places-tab__tabItem')) return;
    this.removePrev();

    let index = t.getAttribute('data-index');
    let content = document.querySelector('.places-tab__contentItem[data-index="'+index+'"]');

    t.classList.add('places-tab__tabItem--active');
    content.classList.add('places-tab__contentItem--active');
  }

  setIndex(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].setAttribute('data-index', i);
      this.contentList[i].setAttribute('data-index', i);
    }
  }

  removePrev(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].classList.remove('places-tab__tabItem--active');
      this.contentList[i].classList.remove('places-tab__contentItem--active');
    }
  }

}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new Tabs();
})

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
