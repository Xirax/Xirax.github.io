CURTAIN_STATE = true

function curtainUp(){
    let menu = document.getElementById('menu');
    menu.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('wheel', (ev) => {
    if(CURTAIN_STATE && ev.deltaY > 0) {
        curtainUp();
        CURTAIN_STATE = false;
    }
})


console.log('ZARAZ CI Z BUTA WYJEBE')

window.onscroll = function() {
    manageCurtain();
    manageMenu();
}


function manageCurtain(){
    let curtain = document.getElementById('landing-page');
    let menu = document.getElementById('menu');
     let firstSection = document.getElementById('first-section');
     console.log('KURWA: ' + curtain.getBoundingClientRect().bottom);
   if(curtain.getBoundingClientRect().bottom <= 0) {
        menu.style.position = "fixed";
        firstSection.style.marginTop = "380px";
   }else{
        menu.style.position = "relative";
        firstSection.style.marginTop = "240px";
   } 
}


function manageMenu(){
    let sections = document.getElementsByClassName('section');
    let menuElements = document.getElementsByClassName('menu-dot');

    let distances = [];

    for(let i=0; i<sections.length; i++){
        let topDist = sections[i].getBoundingClientRect().top;
        distances.push(Math.abs(topDist - 380));
        menuElements[i].style.backgroundColor = "var(--bcgColor)";
        menuElements[i].getElementsByTagName('span')[0].style.fontWeight = "normal";
    }

    let minDistance = Math.min(...distances);
    let closestSectionIndex = distances.findIndex((d) => { return d == minDistance; });
    menuElements[closestSectionIndex].style.backgroundColor = "white";
    menuElements[closestSectionIndex].getElementsByTagName('span')[0].style.fontWeight = "bold";
}