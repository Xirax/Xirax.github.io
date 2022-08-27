
class ViewportController{

    static checkIfInViewportAndRunScript(element, tickTime, script, menuSetter = undefined){

        const rect = element.getBoundingClientRect();
        
        if((rect.bottom + 120) <= (window.innerHeight || document.documentElement.clientHeight)){

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

        if((rect.bottom + 120) <= (window.innerHeight || document.documentElement.clientHeight)){

            menuSetter();
        }

        setTimeout(() => {
            this.keepMenu(element, tickTime, menuSetter);
        }, tickTime);
    }
}