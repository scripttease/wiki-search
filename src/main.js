var createSearchURL = require("./create-search-url");

// Assign function to user input box
document.querySelector("#inputBox").onchange = handleInput;

// Get search items from user input, split to array, use in url.
function handleInput(event) {
  var searchTerms = event.target.value;
  var url = createSearchURL(searchTerms);
  return fetch(url, { mode: "no-cors"})
    .then(function(response) {
      console.log(response.query)
        return response.json()
    });
  // do something with the URL here.
};


function fetchWikiSearch(url) {
  return fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    });
};

handleInput(createSearchURL);

function listSearchArticles() {
  fetchWikiSearch(createSearchURL)
    .then(function(SearchApiObj) {
      console.log(SearchApiObj.query);
    });
};


module.exports = {
  handleInput: handleInput,
  createSearchURL: createSearchURL,
};

if(typeof exports !== 'undefined') {
  exports.createSearchURL = createSearchURL;
}
