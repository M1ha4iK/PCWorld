// БУРГЕР МЕНЮ
const dropdownMenu = document.querySelector('.main-header_dropdown-menu');
if(dropdownMenu){
    const menuList = document.querySelector('.top-header_menu-list');
    const searchField = document.querySelector('.main-header_search');
    const shopingBasket = document.querySelector('.main-header_menu-shopping-basket');
    dropdownMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        dropdownMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');
        searchField.classList.toggle('_active');
        shopingBasket.classList.toggle('_active');
        
    });
   
}
// БУРГЕР МЕНЮ