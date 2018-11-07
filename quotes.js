const lines = ['Lets do this', 'dont take life too seriously','Things happen for a reason'];

function randomQuote(){ 
   return  lines[Math.floor(Math.random()*lines.length)];
}

const quote = randomQuote;

module.exports = {
    // lines,
    quote
};