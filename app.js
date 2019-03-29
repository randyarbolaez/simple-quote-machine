let quotesApi = fetch(
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
)
  .then(res => res.json())
  .then(res => {
    randomize(res.quotes);
  });

function randomize(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  var result = array[randomNum];
  function addToPage() {
    let quote = document.getElementById('quote');
    let author = document.getElementById('author');
    quote.innerHTML = result.quote;
    author.innerHTML = `- ${result.author}`;
  }
  return addToPage();
}
