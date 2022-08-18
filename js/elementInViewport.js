
class ViewportController{

    static checkIfInViewportAndRunScript(element, tickTime, script, menuSetter = undefined){

        const rect = element.getBoundingClientRect();
        if(rect.top >= 0 && rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)){

            if(menuSetter != undefined) this.keepMenu(element, tickTime, menuSetter);
            script();
  
        }else{
            setTimeout(() => {
                this.checkIfInViewportAndRunScript(element, tickTime, script, menuSetter);
            }, tickTime);
        }
    }


    static keepMenu(element, tickTime, menuSetter){
        const rect = element.getBoundingClientRect();
        if(rect.top >= 0 && rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)){

            menuSetter();
        }

        setTimeout(() => {
            this.keepMenu(element, tickTime, menuSetter);
        }, tickTime);
    }
}