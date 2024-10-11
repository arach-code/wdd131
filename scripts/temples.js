let showHambuger = true;
const closebutton = document.querySelector(".close")
const hambugerbutton = document.querySelector(".menu")
const navMenu = document.querySelector(".nav")



const handleButtonClick = () => {
    showHambuger = !showHambuger

    if(showHambuger)
    {
        closebutton.style.display = "none"
        hambugerbutton.style.display = "flex"
        navMenu.style.display = "none"
    }
    else{
        closebutton.style.display = "grid"
        hambugerbutton.style.display = "none"

        navMenu.style.display = "flex"
    }

}