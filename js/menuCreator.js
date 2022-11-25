
function createMenu(){
    
    let sections = document.getElementsByClassName('section');
    let menu = document.getElementById('menu');

    for(let i=0; i<sections.length; i++){
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-dot');
        menuItem.innerHTML = '<span> ' + sections[i].innerHTML + ' </span>';
        menuItem.addEventListener('click', (ev) => {
            goToElement(i);
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


createMenu();