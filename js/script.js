// БУРГЕР МЕНЮ
const dropdownMenu = document.querySelector('.main-header_dropdown-menu');
if(dropdownMenu){
    const menuList = document.querySelector('.top-header_menu-list');
    const searchField = document.querySelector('.main-header_search');
    const shopingBasket = document.querySelector('.main-header_menu-shopping-basket');
    dropdownMenu.addEventListener("click", function(e) {
        const menuListCatalog = document.querySelector('.navigation-container_items');
        if(menuListCatalog.classList.contains('_active')){
            menuListCatalog.classList.remove('_active');
        }
        document.body.classList.toggle('_lock');
        dropdownMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');
        searchField.classList.toggle('_active');
        shopingBasket.classList.toggle('_active');
        
    });
   
}
// БУРГЕР МЕНЮ

// КАТАЛОГ
const dropdownMenuCatalog = document.querySelector('.header-bottom_navigation');
if(dropdownMenuCatalog){
    const menuListCatalog = document.querySelector('.navigation-container_items');
    dropdownMenuCatalog.addEventListener("click", function(e) {
        menuListCatalog.classList.toggle('_active');
    });
    
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');
  } 
  else {
    document.body.classList.add('_pc');
}
// КАТАЛОГ

// СЛАЙДЕР
currentSlide(1);

// var slides = document.getElementsByClassName('slider-slide');
// var dots = document.getElementsByClassName('slider-dot');
// function setSlider(counter){
//     setInterval(() => {
//         slides[counter - 1].style.display = "none";
//         dots[counter - 1].className = dots[counter - 1].className.replace(' _active', "");
//         slides[counter].style.display = "block";
//         dots[counter].className += ' _active';
//         counter++;
//         if(counter === slides.length){
//             slides[counter].style.display = "none";
//             counter = 1;
//         }
//     }, 3000);
// }



function showSlides(){
    var i;
    var slides = document.getElementsByClassName('slider-slide');
    var dots = document.getElementsByClassName('slider-dot');
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' _active', "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += ' _active';
}


function currentSlide(n){
    showSlides(slideIndex = n);
    // setSlider(n);
}
// СЛАЙДЕР


//НАЛИЧИЕ



//НАЛИЧИЕ


//ИЗМЕНЕНИЕ ИКОНКИ ПРИ ДОБАВЛЕНИИ В КОРЗИНУ

// const iconBasket = document.querySelector('.button-add-shop_basket');
// iconBasket.addEventListener("click", function(e) {
//     if(document.getElementById("basket-icon").classList.contains('fa-shopping-bag'))
//     {
//         document.getElementById("basket-icon").classList.remove('fa-shopping-bag');
//         document.getElementById("basket-icon").classList.add('fa-check-square');
//     }
// })

//ИЗМЕНЕНИЕ ИКОНКИ ПРИ ДОБАВЛЕНИИ В КОРЗИНУ