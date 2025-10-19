

let who = ['My cat', 'The unicorn', 'A ninja', 'The pizza delivery guy'];
let action = ['ate', 'stole', 'destroyed', 'exploded'];
let what = ['my homework', 'my phone', 'my sandwich', 'the toilet paper'];
let when = ['while I was dancing', 'during nap time', 'when I was summoning aliens', 'before my tea time'];


function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex]; 
}

const whoWho = getRandomElement(who);
const actionAction = getRandomElement(action);
const whatWhat = getRandomElement(what);
const whenWhen = getRandomElement(when);

const excuse = `${whoWho} ${actionAction} ${whatWhat} ${whenWhen}`;


console.log(excuse);


document.querySelector('.excusa').textContent = excuse;