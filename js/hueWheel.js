
class HueWheel{

    animate(hueVal){
        let hues = document.getElementsByClassName('hue');

        for(let i=0; i<hues.length; i++){
            hues[i].style.filter = 'hue-rotate(' + hueVal + 'deg)';
        }

        hueVal++;
        if(hueVal >= 360) hueVal = 0;

        setTimeout(() => {
            this.animate(hueVal);
        }, 400)
    }
}

let hueWheel = new HueWheel();
hueWheel.animate(0);