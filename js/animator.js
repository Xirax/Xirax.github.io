
function runSkillsActions(){
    let skills = new Skills();
    skills.applySkills();
}

function animateInterests(){
    let ints = document.getElementsByClassName('ints');
    
    for(let i=0; i<ints.length; i++){
        let img = ints[i].getElementsByTagName('img')[0];
        let text = ints[i].getElementsByTagName('p')[0];

        img.style.width = 0;
        img.style.height = 0;
        img.style.animationDelay = (i*0.4) + 's';
        text.style.opacity = 0;
        text.style.animationDelay = (i*0.4) + 's';

        img.classList.add('jump-in');
        text.classList.add('fade-in');
    }
}

function animateContacts(){
    let cons = document.getElementsByClassName('con');
    
    for(let i=0; i<cons.length; i++){
        let img = cons[i].getElementsByTagName('img')[0];
        let text = cons[i].getElementsByTagName('a')[0];

        img.style.width = 0;
        img.style.height = 0;
        img.style.animationDelay = (i*0.4) + 's';
        text.style.opacity = 0;
        text.style.animationDelay = (i*0.4) + 's';

        img.classList.add('jump-in');
        text.classList.add('fade-in');
    }
}


function animateList(listID){
    let list = document.getElementById(listID);
    let listElements = list.getElementsByTagName('li');

    for(let i=0; i<listElements.length; i++){
        let el = listElements[i];

        el.style.animationDelay = (i*0.4) + 's';
        el.classList.add('fade-in');
    }
}


function changePage(index){
    menuConstructor.selectActivePage(index);
}

let skills = document.getElementById('skills');
let interests = document.getElementById('interests');
let experience = document.getElementById('experience');
let otherSkills = document.getElementById('other-skills');
let education = document.getElementById('education');
let contact = document.getElementById('portfolio');

let STEP_TIME = 200;

ViewportController.checkIfInViewportAndRunScript(interests, STEP_TIME, animateInterests, () => { changePage(0) });
ViewportController.checkIfInViewportAndRunScript(skills, STEP_TIME, runSkillsActions, () => { changePage(1) });
ViewportController.checkIfInViewportAndRunScript(otherSkills, STEP_TIME, () => { animateList('other-skills') });
ViewportController.checkIfInViewportAndRunScript(experience, STEP_TIME, () => { animateList('experience') }, () => { changePage(2) });
ViewportController.checkIfInViewportAndRunScript(education, STEP_TIME, () => { animateList('education') }, () => { changePage(3) });
ViewportController.checkIfInViewportAndRunScript(contact, STEP_TIME, animateContacts, () => { changePage(4) });

