
window.addEventListener('load',getQuote);

const quoteButton=document.querySelector(".new-quote"); //new quote button

quoteButton.addEventListener('click',getQuote);//eventlistener that checks if button clicked

const endpoint='https://www.boredapi.com/api/activity'; // holds API endpoint

async function getQuote(){
    let t = await fetch(endpoint); // using fetch method to get random quote from endpoint
    let response = await t.text();

    let jsonResponse=JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['activity']);
    displayQuote(jsonResponse['activity']); // runs displayquote

}

function displayQuote(x){
    //displays text of fetched quote
    document.getElementById('js-quote-text').textContent= x;
}


const colorButton=document.getElementById('js-tweet');
const body=document.body;

colorButton.addEventListener('click', function() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });