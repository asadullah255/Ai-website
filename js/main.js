const mybtn = document.getElementById("my__btn")
window.addEventListener("scroll", () => {
        if(pageYOffset > 500){
            mybtn.style.display = "block"
        }
        else{
            mybtn.style.display = "none"
        }

        mybtn.addEventListener("click", () => {
            window.scrollTo({
                top:0,
                behavior:"smooth"
                
            })
        })
})

const icon = document.getElementById("social")
window.addEventListener("scroll", () => {
    if(pageYOffset > 3000){
        icon.style.display = "flex"
    }
    else{
        icon.style.display = "none"
    }
})

