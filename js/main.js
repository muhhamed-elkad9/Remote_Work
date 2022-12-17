let ArrowOne = document.querySelector("header .parent-link .flex .navbar .item a.arrowone")
let svgOne = document.querySelector("header .parent-link .flex .navbar .item-one a.arrowone span.one .rot")
let menuOne = document.querySelector("header .parent-link .flex .navbar .item-one .menu")

let ArrowTwo = document.querySelector("header .parent-link .flex .navbar .item-two .arrowtwo")
let svgTwo = document.querySelector("header .parent-link .flex .navbar .item-two a.arrowtwo span.two .rot")
let menuTwo = document.querySelector("header .parent-link .flex .navbar .item-two .menu")

ArrowOne.addEventListener('click', () => {
  menuOne.classList.toggle("menuFlex");
  svgOne.classList.toggle("rotate");
  // if (menuOne.classList.contains("menuFlex")) {
  //   menuOne.style.maxHeight = menuOne.scrollHeight + 'px';
  //   setTimeout(() => {
  //     menuOne.style.overflow = 'visible';
  //   }, 300);
  // } else {
  //   menuOne.style.maxHeight = '0px';
  //   menuOne.style.overflow = 'hidden';
  // }
})


ArrowTwo.addEventListener('click', () => {
  menuTwo.classList.toggle("menuFlex");
  svgTwo.classList.toggle("rotate");
})


let menu = document.querySelector("header .parent-icon")
let close = document.querySelector("header .parent-link .icon")
let parentLinks = document.querySelector("header .parent-link")
let shadow = document.querySelector(".shadow")

menu.onclick = function () {
  parentLinks.classList.remove("right")
  shadow.classList.remove("none")
}

close.onclick = function () {
  parentLinks.classList.add("right")
  shadow.classList.add("none")
}