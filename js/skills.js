
class Skills{

    constructor(){
        this.skills = [40, 60, 60, 70, 70, 80, 70, 60, 30, 20, 80, 10];
    }

    applySkills(){
        let skillRatings = document.getElementsByClassName('rating-line');
        for(let i=0; i<this.skills.length; i++){
            this.animate(skillRatings[i], 0, this.skills[i]);
        }
    }

    animate(skill, state, max){
        setTimeout(() => {
            if(state < max){
                state += 1;
                let gradient = 'linear-gradient(90deg, white, white ' + state + '%, #7D7D7D ' + state + '% )';
                skill.style.backgroundImage = gradient;
                this.animate(skill, state, max);
            }
        }, 15);
    }
}