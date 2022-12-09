

function copyCode(index){
    let ID = 'code-' + index;
    let selfID = 'prev-' + index;
    let code = document.getElementById(ID);
    let self = document.getElementById(selfID);
    navigator.clipboard.writeText(code.innerText);

    self.classList.add('refade');
    setTimeout(() => {
        self.classList.remove('refade');
    }, 4100);
    
}