// Get search items from user input, split to array, use in url.
var searchURL;
var searchTerms = "my search string";
// var searchTerms = event.target.value
var searchTermsString = searchTerms.replace(/\s/g, "%20");
var baseURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch="
function createSearchURL() {
  return searchURL = baseURL + searchTermsString
  console.log(searchURL);
};

createSearchURL();
