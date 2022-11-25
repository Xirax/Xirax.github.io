const WRITE_SPEED = 62;
const PHRASE_CHANGE_SPEED = 3500;
const QUOTE_WORDS_BASE = ['creative', 'motivated', 'ambitious', 'open-minded', 'focused', 'chilled out', 'stubborn', 'prepared', 'conscious', 'productive', 'patient', 'kind'];
var NOT_USED_WORDS = [...QUOTE_WORDS_BASE];

async function writeText(elementID, phrase='', delayTime=0){
    let writenPhrase = '';
    let letterIndex = 0;
    let element = document.getElementById(elementID);
    if(phrase == '') phrase = element.innerText;

    await delay(delayTime);
    removeWritingPointer();

    return new Promise(resolve => {
        let intv = setInterval(() => {
            if(writenPhrase != phrase){
                writenPhrase += phrase[letterIndex];
                letterIndex++;
                element.innerHTML = writenPhrase + '<em id="writing-pointer">\\<em>';
            }else {
                clearInterval(intv);
                resolve();
            }
        }, WRITE_SPEED);
    })
}

function delay(time){
    return new Promise(resolve => {
        setTimeout(() => { resolve(); }, time);
    })
}


function removeWritingPointer(){
    let wrtPointer = document.getElementById('writing-pointer');
    if(wrtPointer) wrtPointer.remove();
}

function clearText(elementID){

    return new Promise(resolve => {

        let element = document.getElementById(elementID);
        let phrase = element.innerHTML;

        let intv = setInterval(() => {
            phrase = phrase.slice(0, -1);
            element.innerHTML = phrase + '<em id="writing-pointer">\\<em>';
    
            if(phrase.length == 0){
                clearInterval(intv);
                resolve();
            } 
        }, WRITE_SPEED)
    })


}


async function rewirteFromBase(){
    removeWritingPointer();
    await clearText('changing-word');
    let word = selectNewWord();
    await writeText('changing-word', word);
    setTimeout(() => { rewirteFromBase() }, PHRASE_CHANGE_SPEED);
}

function selectNewWord(){
    let index = Math.round(Math.random() * (NOT_USED_WORDS.length - 1));
    let word = NOT_USED_WORDS[index];
    NOT_USED_WORDS.splice(index, 1);
    
    if(NOT_USED_WORDS.length == 0) NOT_USED_WORDS = [...QUOTE_WORDS_BASE];
    return word;
}


async function runEverything(){
    await writeText('welcome-phrase', 'Welcome to my world', 800);
    let quoteWord = selectNewWord();
    let quoteText = 'Maybe let\'s try by more ' + quoteWord + ' today...'; 
    await writeText('quote', quoteText, 800);
    document.getElementById('quote').innerHTML = 'Maybe let\'s try by more <em id="changing-word">' + quoteWord + '</em> today...<em id="writing-pointer">\\<em>';
    await delay(PHRASE_CHANGE_SPEED);
    rewirteFromBase();
}


runEverything();



