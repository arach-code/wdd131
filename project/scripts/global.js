

let showHambuger = true;
const closebutton = document.querySelector(".close")
const hambugerbutton = document.querySelector(".menu-icon")
const navMenu = document.getElementById("menu")




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
        navMenu.style.flexDirection = "column"

    }

}


window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width > 1048) {
    closebutton.style.display = "none"
    hambugerbutton.style.display = "none"
    navMenu.style.display = "flex"
    navMenu.style.position = "relative"
    navMenu.style.transform = "translate(0,25%)";
    navMenu.style.flexDirection = "row"

  } else {
    closebutton.style.display = "none"
    hambugerbutton.style.display = "block"

    navMenu.style.display = "none"
    navMenu.style.flexDirection = "column"
  }
});
