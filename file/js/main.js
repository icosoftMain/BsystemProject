window.addEventListener("scroll", function(){
    const header = document.querySelector(".header__nav");
    const scrolSide = document.querySelector(".sideScro");
    const scrolSide1 = document.querySelector(".sideScro1");
    header.classList.toggle("sticky", window.scrollY > 0);
    scrolSide.classList.toggle("hid",window.scrollY > 150);
    scrolSide1.classList.toggle("hid",window.scrollY > 150);
    
})
