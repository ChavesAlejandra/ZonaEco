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


let loveIcon = document.getElementsByClassName("empty-love")
let filledLoveIcon = document.getElementsByClassName("filled-love")

loveIcon[0].addEventListener("click", function(){
    loveIcon[0].style.display = "none"
    filledLoveIcon[0].style.display = "block"
})
filledLoveIcon[0].addEventListener("click", function(){
    loveIcon[0].style.display = "block"
    filledLoveIcon[0].style.display = "none"
})

loveIcon[1].addEventListener("click", function(){
    loveIcon[1].style.display = "none"
    filledLoveIcon[1].style.display = "block"
})
filledLoveIcon[1].addEventListener("click", function(){
    loveIcon[1].style.display = "block"
    filledLoveIcon[1].style.display = "none"
})

loveIcon[2].addEventListener("click", function(){
    loveIcon[2].style.display = "none"
    filledLoveIcon[2].style.display = "block"
})
filledLoveIcon[2].addEventListener("click", function(){
    loveIcon[2].style.display = "block"
    filledLoveIcon[2].style.display = "none"
})

loveIcon[3].addEventListener("click", function(){
    loveIcon[3].style.display = "none"
    filledLoveIcon[3].style.display = "block"
})
filledLoveIcon[3].addEventListener("click", function(){
    loveIcon[3].style.display = "block"
    filledLoveIcon[3].style.display = "none"
})

loveIcon[4].addEventListener("click", function(){
    loveIcon[4].style.display = "none"
    filledLoveIcon[4].style.display = "block"
})
filledLoveIcon[4].addEventListener("click", function(){
    loveIcon[4].style.display = "block"
    filledLoveIcon[4].style.display = "none"
})

loveIcon[5].addEventListener("click", function(){
    loveIcon[5].style.display = "none"
    filledLoveIcon[5].style.display = "block"
})
filledLoveIcon[5].addEventListener("click", function(){
    loveIcon[5].style.display = "block"
    filledLoveIcon[5].style.display = "none"
})


let carousel = document.getElementById("items-list")
let itemsList = carousel.querySelectorAll("li")
let carouselPos = 0 // posición del carrusel
let imageCount // número de imágenes
let imageWidth // tamaño de imagen
function MediaMatch(){
    if (window.matchMedia("(width<900px)").matches){imageCount = 2; imageWidth = 226}
    else if(window.matchMedia("(width<1300px)").matches){imageCount = 2; imageWidth = 350}
    else {imageCount = 3; imageWidth = 350}
}
let leftArrow = document.getElementById("left-arrow")
let rightArrow = document.getElementById("right-arrow")

leftArrow.addEventListener("click", function(){
    MediaMatch()
    carouselPos += imageWidth*imageCount
    carouselPos = Math.min(carouselPos, 0)
    carousel.style.marginLeft = carouselPos + "px"
})

rightArrow.addEventListener("click", function(){
    MediaMatch()
    carouselPos -= imageWidth*imageCount
    carouselPos = Math.max(carouselPos, -imageWidth*(itemsList.length - imageCount))
    carousel.style.marginLeft = carouselPos + "px"
})