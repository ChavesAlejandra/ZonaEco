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