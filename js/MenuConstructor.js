class MenuConstructor{

    constructor(){

        this.buttons = [
            {page: '#description', text: 'O mnie'},
            {page: '#skills-p', text: 'Umiejętności'},
            {page: '#experience-p', text: 'Doświadczenie'},
            {page: '#education-p', text: 'Wykształcenie'},
            {page: '#portfolio-p', text: 'Kontakt'},
        ]
    }


    construct(){ 
        let menu = document.getElementById('menu');
        this.buttons.forEach((btn, index) => {
            let menuButton = document.createElement('a');

            menuButton.href = btn.page;
            menuButton.innerText = btn.text;
            menuButton.classList.add('menu-button');
            menuButton.classList.add('hue');

            menu.appendChild(menuButton);
        })

        let allButtons = document.getElementsByClassName('menu-button');
        allButtons[0].classList.add('first-element');
        allButtons[allButtons.length - 1].classList.add('last-element');

        this.selectActivePage(0);

        menu.innerHTML += '<div id="top-line-short" class="hue"></div>';
    }

    selectActivePage(btnIndex){

        let buttons = document.getElementsByClassName('menu-button');

        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.remove('active');
        }

        buttons[btnIndex].classList.add('active');
    }


    toggleMobileMenu(){
        let menu = document.getElementsByTagName('nav')[0];

        console.log(menu.style.height);

        if(menu.style.height == '') menu.style.height = '0px';

        if(menu.style.height == '0px'){
            menu.style.height = '100vh';
        }else{
            menu.style.height = '0px';
        }
    }
}


 let menuConstructor = new MenuConstructor();
// menuConstructor.construct();


document.getElementById('hamburger').addEventListener('click', (ev) => {
    menuConstructor.toggleMobileMenu();
})
