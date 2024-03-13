let hide = document.getElementsByClassName("hide")
let view = document.getElementsByClassName("view")
let password = document.getElementById("password")
let repeatPassword = document.getElementById("password-repeat")

hide[0].addEventListener("click", function(){
    hide[0].style.display = "none"
    view[0].style.display = "block"
    password.type = "text"
})
view[0].addEventListener("click", function(){
    hide[0].style.display = "block"
    view[0].style.display = "none"
    password.type = "password"
})

hide[1].addEventListener("click", function(){
    hide[1].style.display = "none"
    view[1].style.display = "block"
    repeatPassword.type = "text"
})
view[1].addEventListener("click", function(){
    hide[1].style.display = "block"
    view[1].style.display = "none"
    repeatPassword.type = "password"
})