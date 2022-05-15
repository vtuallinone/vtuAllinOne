const currentLocationofpage = location.href;
const menuitem = document.querySelectorAll("nav ul li ");
const menuLength = menuitem.length
for(let i=0 ; i < menuLength ; i++){

    if (menuitem[i].href == currentLocationofpage) {
        menuitem[i].classList.add("active");
    }
}
