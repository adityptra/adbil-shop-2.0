const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});

// count
let valueCount = 1;
let increment = document.querySelector(".plus");
let decrement = document.querySelector(".minus");
let count = document.querySelector("#quantity");
let totalcount = document.querySelector("#quantity");

increment.addEventListener("click", () => {
  let add = valueCount++;
  count.value = add;
  totalcount.innerHTML = add * 199.999; 
})
decrement.addEventListener("click", () => {
  if (valueCount >= 2) {
    let sub = --valueCount;
    count.value = sub;
    totalcount.innerHTML = sub * 199.999;
  }

})









// navbar
let menu = document.getElementById("menu")
let close =document.querySelector(".bars-close")    
let bars = document.getElementById("bars")
function muncul (){
    menu.style.left = "40px"
    bars.style.display = "none"
    close.style.display = "inline"
}
function tutup (){
    menu.style.left = "-200px"
    bars.style.display = "inline"
    close.style.display = "none"
}
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY >120;
        navbar.classList.toggle("scrolling-active",positionwindow)
    })

    // swiper effect start
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// swipper effect end
