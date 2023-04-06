
window.addEventListener('load',getQuote);

const quoteButton=document.querySelector(".new-quote"); //new quote button

quoteButton.addEventListener('click',getQuote);//eventlistener that checks if button clicked

const endpoint='https://trivia.cyberwisp.com/getrandomchristmasquestion'; // holds API endpoint

async function getQuote(){
    let t = await fetch(endpoint); // using fetch method to get random quote from endpoint
    let response = await t.text();

    let jsonResponse=JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['question']);
    displayQuote(jsonResponse['question']); // runs displayquote

}

function displayQuote(x){
    //displays text of fetched quote
    document.getElementById('js-quote-text').textContent= x;
}