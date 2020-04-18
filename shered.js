var OpenButtonCatalog = document.querySelector('.down-item__button');
var BlackDrop = document.querySelector('.black__brop');
var CatalogMenu = document.querySelector(".catalog__menu");
var NumberButton = document.querySelector(".number")
var NumberMenu = document.querySelector(".number__menu")
var IconLibra = document.querySelector(".down__rigth__image_one")
var IconLike = document.querySelector(".down__rigth__image_two")
var IconShop = document.querySelector(".down__rigth__image_tree")

OpenButtonCatalog.addEventListener('click', function(){
    BlackDrop.classList.add("open");
    CatalogMenu.style.display = "block"
    CatalogMenu.classList.add("open");
})

BlackDrop.addEventListener("click", function() {
    BlackDrop.classList.remove("open")
    CatalogMenu.classList.remove("open");
    NumberMenu.classList.remove("open");
    BlackDrop.style.zIndex = "20"
})

NumberButton.addEventListener("click", function() {
    BlackDrop.classList.add("open");
    BlackDrop.style.zIndex = "30"
    NumberMenu.classList.add("open");
})


