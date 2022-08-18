class MenuConstructor{

    constructor(){

        this.buttons = [
            {page: '#description', text: 'O mnie'},
            {page: '#skills-p', text: 'Umiejętności'},
            {page: '#experience-p', text: 'Doświadczenie'},
            {page: '#education-p', text: 'Wykształcenie'},
            {page: '#portfolio-p', text: 'Kontakt'}
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


           // menuButton.onclick = 'alert("JEBAĆ")';

            console.log(menuButton);
          //  menuButton.addEventListener('mouseover', () => { alert("JEBAĆ!"); })

            menu.appendChild(menuButton);
        })

        let allButtons = document.getElementsByClassName('menu-button');
        allButtons[0].classList.add('first-element');
        allButtons[allButtons.length - 1].classList.add('last-element');

        allButtons[0].addEventListener('click', () => { alert("JEBAĆ!"); } );
        allButtons[0].onclick = () => {alert("JEBAĆ")};

        console.log(allButtons[0]);

        this.selectActivePage(0);

        menu.innerHTML += '<div id="top-line-short" class="hue"></div>';
    }

    selectActivePage(btnIndex){

        console.log('CALLED TO ' + btnIndex);
        let buttons = document.getElementsByClassName('menu-button');

        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.remove('active');
        }

        buttons[btnIndex].classList.add('active');
    }
}


let menuConstructor = new MenuConstructor();
menuConstructor.construct();
