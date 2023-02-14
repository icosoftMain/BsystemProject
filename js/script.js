// var slideIndex = 1;
// showSlides(slideIndex);

// function pulsSlides(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");

//     if(n > slides.length){slideIndex = 1}
//     if(n <  1){slideIndex = slides.length}
//     for(i =0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     for(i =0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";
// }

const arr = ["a", "ab", "c", "d"];
let firsVal = 0;
let intervalId = null;
// loop and set the current or add to current
function picScroll() {
    // if (firsVal < 0) firsVal = 0;
    // intervalId = setInterval(() => {
    //     if (firsVal === arr.length) {
    //         firsVal = 0;
    //     }
    //     console.log(arr[firsVal]);
    //     ++firsVal;
    //     if (time === 0) {
    //         clearInterval(intervalId);
    //     }
    // if (firsVal >= 0) {
    //     setInterval(() => {
    //         console.log(++firsVal);
    //     }, 2000);
    // }
    // ++firsVal;
}
// picScroll();
//prev
// const btnext = document.querySelector("#btn--pnext");
// const btnprev = document.querySelector("#btn-prev");
// btnext.addEventListener("click", function() {
//     //     //first get value and set it to --
//     if (firsVal >=1) {
//         --firsVal;
//     } else {
//         firsVal = 4;
//     }
// });

// btnprev.addEventListener("click", function() {
//     //first get value and set it to --
//     // second is to diplay the value 1 -1 = 0
// clearInterval(intervalId);
// --firsVal;
// picScroll(0);
// picScroll(5000);
// });
//next