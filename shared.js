var OpenButtonCatalog = document.querySelector('.down-item__button');
var BlackDrop = document.querySelector('.black__brop');
var CatalogMenu = document.querySelector(".catalog__menu");
var NumberButton = document.querySelector(".number")
var NumberMenu = document.querySelector(".number__menu")
var IconLibra = document.querySelector(".down__rigth__image_one")
var IconLike = document.querySelector(".down__rigth__image_two")
var IconShop = document.querySelector(".down__rigth__image_tree")
var MenuIconLibra = document.querySelector(".down__right__down")
var MenuIconLike = document.querySelector(".down__right__down__two")
var MenuIconShop = document.querySelector(".down__right__down__tree")
var CityButton = document.querySelector(".city__button")
var CityMenu = document.querySelector(".city")
var SignIn = document.querySelector(".rigth-sign_in__button")
var SignInMenu = document.querySelector(".sign_in")
var CheckInButton = document.querySelector(".sign_in__reg")
var CheckIn = document.querySelector(".check_in")
var CheckInBackButton = document.querySelector(".check_in__buttom__two")
var CatalogOne = document.querySelector("#catalog__one")
var CatalogTwo = document.querySelector("#catalog__two")
var CatalogOneMenu = document.querySelector(".main-catalog__menu__pc")
var CatalogTwoMenu = document.querySelector(".main-catalog__menu__sp")


OpenButtonCatalog.addEventListener('click', function(){
    BlackDrop.classList.add("open");
    CatalogMenu.classList.add("open");
    CatalogMenu.style.zIndex = "30"
    CatalogOneMenu.classList.add("open")
    CatalogOneMenu.style.zIndex = "30"
})

BlackDrop.addEventListener("click", function() {
    BlackDrop.classList.remove("open")
    BlackDrop.style.top = "0"
    CatalogMenu.classList.remove("open");
    NumberMenu.classList.remove("open");
    BlackDrop.style.zIndex = "20"
    CityMenu.classList.remove("open")
    SignInMenu.classList.remove("open")
    CheckIn.classList.remove("open")
    MenuIconLibra.classList.remove("open")
    MenuIconLike.classList.remove("open")
    MenuIconShop.classList.remove("open")
    CatalogOneMenu.classList.remove("open")
    CatalogTwoMenu.classList.remove("open")
    CatalogTwoMenu.style.zIndex = "-1"
    CatalogOneMenu.style.zIndex = "-1"
    MenuIconShop.style.zIndex = "-1"
    MenuIconLike.style.zIndex = "-1"
    CheckIn.style.zIndex = "-1"
    NumberMenu.style.zIndex = "-1"
    CatalogMenu.style.zIndex = "-1"
    CityMenu.style.zIndex = "-1"
    SignInMenu.style.zIndex = "-1"
    MenuIconLibra.style.zIndex = "-1"
})

NumberButton.addEventListener("click", function() {
    BlackDrop.classList.add("open");
    BlackDrop.style.zIndex = "30"
    NumberMenu.classList.add("open");
    NumberMenu.style.zIndex = "30"
})

CityButton.addEventListener("click", function() {
    BlackDrop.classList.add("open");
    BlackDrop.style.zIndex = "30"
    CityMenu.classList.add("open")
    CityMenu.style.zIndex = "30"
})

SignIn.addEventListener("click", function() {
    SignInMenu.classList.add("open")
    SignInMenu.style.zIndex = "30"
    BlackDrop.classList.add("open");
    BlackDrop.style.zIndex = "30"
})

CheckInButton.addEventListener("click", function(){
    CheckIn.classList.add("open")
    CheckIn.style.zIndex = "30"
    SignInMenu.classList.remove("open")
    SignInMenu.style.zIndex = "-1"
})

CheckInBackButton.addEventListener("click", function(){
    CheckIn.classList.remove("open")
    CheckIn.style.zIndex = "-1"
    SignInMenu.classList.add("open")
    SignInMenu.style.zIndex = "30"
})

IconLibra.addEventListener("mouseover", function() {
    MenuIconLibra.classList.add("open")
    MenuIconLibra.style.zIndex = "30"
})

IconLike.addEventListener("mouseover", function() {
    MenuIconLike.classList.add("open")
    MenuIconLike.style.zIndex = "30"
})

IconShop.addEventListener("mouseover", function() {
    MenuIconShop.classList.add("open")
    MenuIconShop.style.zIndex = "30"
})

IconLibra.addEventListener("mouseout", function() {
    MenuIconLibra.classList.remove("open")
    MenuIconLibra.style.zIndex = "-1"
})

IconLike.addEventListener("mouseout", function() {
    MenuIconLike.classList.remove("open")
    MenuIconLike.style.zIndex = "-1"
})

IconShop.addEventListener("mouseout", function() {
    MenuIconShop.classList.remove("open")
    MenuIconShop.style.zIndex = "-1"
})

CatalogOne.addEventListener("mouseover", function() {
    CatalogOneMenu.classList.add("open")
    CatalogOneMenu.style.zIndex = "30"
    CatalogTwoMenu.classList.remove("open")
    CatalogTwoMenu.style.zIndex = "-1"
})

CatalogTwo.addEventListener("mouseover", function() {
    CatalogTwoMenu.classList.add("open")
    CatalogTwoMenu.style.zIndex = "30"
})



