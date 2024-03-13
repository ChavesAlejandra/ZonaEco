let menuButton = document.getElementById("menu-button")

menuButton.addEventListener("click", function(){
    let menuIcon = document.getElementById("menu")
    let closeIcon = document.getElementById("close")
    let categories = document.getElementById("categories")
    
    if (menuIcon.style.display == "none")
    {
        menuIcon.style.display = "block"
        closeIcon.style.display = "none"
        categories.style.visibility = "hidden"
        
        categories.style.animationName = null
    } else
    {
        menuIcon.style.display = "none"
        closeIcon.style.display = "block"
        categories.style.visibility = "visible"
        
        categories.style.animationName = "CategoriesSpawn"
        categories.style.animationDuration = "2s"
    }
})


let loveIcon = document.getElementById("empty-love")
let filledLoveIcon = document.getElementById("filled-love")

loveIcon.addEventListener("click", function(){
    loveIcon.style.display = "none"
    filledLoveIcon.style.display = "block"
})
filledLoveIcon.addEventListener("click", function(){
    loveIcon.style.display = "block"
    filledLoveIcon.style.display = "none"
})


let addToCart = document.getElementById("add-to-cart")
let addedToCart = document.getElementById("added-to-cart")
let addToCartText = document.getElementById("add-to-cart-text")

addToCart.addEventListener("click", function(){
    addToCart.style.display = "none"
    addedToCart.style.display = "block"
    addToCartText.innerHTML = "Añadido"
    addToCartText.style.marginLeft = "20px"
})
addedToCart.addEventListener("click", function(){
    addToCart.style.display = "block"
    addedToCart.style.display = "none"
    addToCartText.innerHTML = "Añadir al carrito"
    addToCartText.style.marginLeft = "0px"
})

let chairGrey = document.getElementById("chair-grey")
let chairBeige = document.getElementById("chair-beige")
let chairBlack = document.getElementById("chair-black")
let chairWhite = document.getElementById("chair-white")

let grey = document.getElementById("grey")
let beige = document.getElementById("beige")
let black = document.getElementById("black")
let white = document.getElementById("white")

grey.addEventListener("click", function(){
    chairGrey.style.display = "block"
    chairBeige.style.display = "none"
    chairBlack.style.display = "none"
    chairWhite.style.display = "none"
})
beige.addEventListener("click", function(){
    chairGrey.style.display = "none"
    chairBeige.style.display = "block"
    chairBlack.style.display = "none"
    chairWhite.style.display = "none"
})
black.addEventListener("click", function(){
    chairGrey.style.display = "none"
    chairBeige.style.display = "none"
    chairBlack.style.display = "block"
    chairWhite.style.display = "none"
})
white.addEventListener("click", function(){
    chairGrey.style.display = "none"
    chairBeige.style.display = "none"
    chairBlack.style.display = "none"
    chairWhite.style.display = "block"
})