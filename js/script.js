//Random quote generator. 


//array of quote objects, sources, year, citation. 
var quotes = [
  {quote : 'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.' ,
  source : 'Vince Lombardi',
  
},
  {quote : 'We May Encounter Many Defeats But We Must Not Be Defeated.',
  source : "Maya Angelou",
  
  },
  {quote : 'Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.',
  source : 'Lao Tzu',
  year : 'Long ago'
  },
  {quote : 'The artist is nothing without the gift, but the gift is nothing without work.',
  source : 'Emile Zola',
  year : '1840-1902'
  },
  {quote : 'In theory, there is no difference between theory and practice. But in practice, there is.',
  source : 'Yogi Berra',
 
  },
  {quote : 'Each problem that I solved became a rule which served afterwards to solve other problems.',
  source : 'Rene Descartes',
  year : '1596-1650'
  },
  {quote : 'Do, or do not. There is no try.',
  source : 'Yoda',
  year : 'Long time ago',
  citation : 'Star Wars: Empire Strikes Back'
  },

];

console.log(quotes);



//get random quote function. Makes a random number from 0-6. returns the 
// quote from quotes array according to randomNumber.0-6

function getRandomQuote () {
  var randomNumber = Math.floor( Math.random () * 7);
  return quotes[randomNumber]
};

//just testing function
var rquote = getRandomQuote ();
console.log (rquote.source);


//Print quote function. html starts as an empty string.  Random quotes, sources, years are inserted into html variable using conditional statements.
// Html variable is printed by document.getElementById. 

function printQuote () {
  var html = '';
  var randomQuote = getRandomQuote();
  html += "<p class = 'quote'>" + randomQuote.quote + "</p>";
  html += "<p class = 'source'>" + randomQuote.source ;
  if (randomQuote.citation) {
    html += "<span class = 'citation' >" + randomQuote.citation + "</span>";
    
  }
  if (randomQuote.year) {
    html += "<span class = 'year ' >" + randomQuote.year + "</span>";
  
   
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;

};

//added so new quote is displayed when page is refreshed. 
printQuote ();


//Script for the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


