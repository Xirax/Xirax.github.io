
function createMenu(){
    
    let sections = document.getElementsByClassName('section');
    let menu = document.getElementById('menu');
    let HAS_BACK_BUTTON = false;

    if(!menu) menu = document.getElementById('menu-fixed');

    for(let i=0; i<sections.length; i++){
        let menuItem = document.createElement('div');
        if(sections[i].classList.contains('back')){
            menuItem.classList.add('menu-arrow');
            menuItem.innerHTML = '<span> Powrót </span>';
        } 
        else{
            menuItem.classList.add('menu-dot');
            menuItem.innerHTML = '<span> ' + sections[i].innerHTML + ' </span>';
        } 
        menuItem.addEventListener('click', (ev) => {
            if(sections[i].classList.contains('back')) goToPage(sections[i].innerHTML);
            else goToElement(i);
        })

        menu.appendChild(menuItem);
    }
}

function goToElement(elementIndex){
    let sections = document.getElementsByClassName('section-scroll');
    let scrollPos = sections[elementIndex].getBoundingClientRect().top + window.pageYOffset - 340;
    window.scrollTo({behavior: "smooth", top: scrollPos});
    // sections[elementIndex].scrollIntoView({behavior: "smooth", block: "end"});
    manageMenu();
}

function goToPage(URL){
    window.location.href = URL;
}


function manageMenu(){
    let sections = document.getElementsByClassName('section');
    let menuElements = document.getElementsByClassName('menu-dot');

    let distances = [];
    let offset = 0;

    if(sections[0].classList.contains('back')) offset = 1;

    for(let i=0; i<sections.length - offset; i++){
        let topDist = sections[i + offset].getBoundingClientRect().top;
        distances.push(Math.abs(topDist - 380));

        menuElements[i].style.backgroundColor = "var(--bcgColor)";
        menuElements[i].getElementsByTagName('span')[0].style.fontWeight = "normal"; 
    }

    let minDistance = Math.min(...distances);
    let closestSectionIndex = distances.findIndex((d) => { return d == minDistance; });
    if(menuElements[closestSectionIndex].classList.contains('back')) closestSectionIndex++;
    if(menuElements[closestSectionIndex]){
        menuElements[closestSectionIndex].style.backgroundColor = "white";
        menuElements[closestSectionIndex].getElementsByTagName('span')[0].style.fontWeight = "bold";
    }

    console.log('CLOSEST IS: ' + menuElements[closestSectionIndex].innerHTML);
}


createMenu();