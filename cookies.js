const cookieModel = document.querySelector(".cookie-consent-model ")
const cancelCookieBtn = document.querySelector(".btn.cancel")
const acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModel.classList.remove("active")
}) 
acceptCookieBtn.addEventListener("click", function (){
    cookieModel.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    const cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModel.classList.add("active")
    }
}, 2000)