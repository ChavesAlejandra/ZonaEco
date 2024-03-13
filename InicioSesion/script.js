let hide = document.getElementsByClassName("hide")[0]
let view = document.getElementsByClassName("view")[0]
let password = document.getElementById("password")

hide.addEventListener("click", function(){
    hide.style.display = "none"
    view.style.display = "block"
    password.type = "text"
})
view.addEventListener("click", function(){
    hide.style.display = "block"
    view.style.display = "none"
    password.type = "password"
})