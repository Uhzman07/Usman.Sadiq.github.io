toggleMenu = () =>{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Then to add elements
    /*
        This line toggles the presence of the "open" class on the .menu-links element. 
        If the element does not have the "open" class, it adds it; if it already has the "open" class, it removes it.
     */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}