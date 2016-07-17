document.querySelector("#inputBox").onchange = handleInput;

function createSearchURL(searchTerms) {
  var searchTermsString = searchTerms.replace(/\s/g, "%20");
  var baseURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch=";
  return baseURL + searchTermsString;
}

// Get search items from user input, split to array, use in url.
function handleInput(event) {
  var searchTerms = event.target.value;
  var url = createSearchURL(searchTerms);
  console.log(url);
  // do something with the URL here.
}


function fetchWikiSearch(url) {
  // var url = searchURL;
  return fetch(url)
    .then(function(response) {
      return response.json();
      console.log(response.json);
    });
};

function listSearchArticles() {
  fetchWikiSearch(createSearchURL)
    .then(function(SearchApiObj) {
      console.log(SearchApiObj.query);
    });
}
