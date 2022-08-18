
class AutoTyper{

    static TYPE_SPEED = 6;

    static typeFromElement(elementID){
        let element = document.getElementById(elementID);
        let elementText = element.innerText;
        let elementStartHeight = element.offsetHeight;
        let typedText = "";
        let cursorPos = 0;
        element.innerText = "";
        element.style.minHeight = elementStartHeight + "px";

        let writer = setInterval(() => {
            if(typedText == elementText) clearInterval(writer);
            else{
                typedText += elementText[cursorPos];
                document.getElementById(elementID).innerText = typedText;
                cursorPos++;
            }
        }, this.TYPE_SPEED) 
    }
}


AutoTyper.typeFromElement('description');