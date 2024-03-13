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
let loveIconFilled = document.getElementsByClassName("filled-love")

loveIcon[0].addEventListener("click", function(){
    loveIcon[0].style.display = "none"
    loveIconFilled[0].style.display = "block"
})
loveIconFilled[0].addEventListener("click", function(){
    loveIcon[0].style.display = "block"
    loveIconFilled[0].style.display = "none"
})

loveIcon[1].addEventListener("click", function(){
    loveIcon[1].style.display = "none"
    loveIconFilled[1].style.display = "block"
})
loveIconFilled[1].addEventListener("click", function(){
    loveIcon[1].style.display = "block"
    loveIconFilled[1].style.display = "none"
})

loveIcon[2].addEventListener("click", function(){
    loveIcon[2].style.display = "none"
    loveIconFilled[2].style.display = "block"
})
loveIconFilled[2].addEventListener("click", function(){
    loveIcon[2].style.display = "block"
    loveIconFilled[2].style.display = "none"
})

loveIcon[3].addEventListener("click", function(){
    loveIcon[3].style.display = "none"
    loveIconFilled[3].style.display = "block"
})
loveIconFilled[3].addEventListener("click", function(){
    loveIcon[3].style.display = "block"
    loveIconFilled[3].style.display = "none"
})

loveIcon[4].addEventListener("click", function(){
    loveIcon[4].style.display = "none"
    loveIconFilled[4].style.display = "block"
})
loveIconFilled[4].addEventListener("click", function(){
    loveIcon[4].style.display = "block"
    loveIconFilled[4].style.display = "none"
})

loveIcon[5].addEventListener("click", function(){
    loveIcon[5].style.display = "none"
    loveIconFilled[5].style.display = "block"
})
loveIconFilled[5].addEventListener("click", function(){
    loveIcon[5].style.display = "block"
    loveIconFilled[5].style.display = "none"
})

loveIcon[6].addEventListener("click", function(){
    loveIcon[6].style.display = "none"
    loveIconFilled[6].style.display = "block"
})
loveIconFilled[6].addEventListener("click", function(){
    loveIcon[6].style.display = "block"
    loveIconFilled[6].style.display = "none"
})

loveIcon[7].addEventListener("click", function(){
    loveIcon[7].style.display = "none"
    loveIconFilled[7].style.display = "block"
})
loveIconFilled[7].addEventListener("click", function(){
    loveIcon[7].style.display = "block"
    loveIconFilled[7].style.display = "none"
})