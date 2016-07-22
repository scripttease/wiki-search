// var createSearchURL = require("./create-search-url.js");

// Assign function to user input box
document.querySelector("#inputBox").onchange = getAPIData;

// Create jsonp script
function getAPIData(event) {
  var searchTerms = event.target.value;
  var url = createSearchURL(searchTerms);
  jsonp = document.createElement("script");
  jsonp.id = "jsonp";
  jsonp.type = "text/javascript";
  jsonp.src = createSearchURL(searchTerms); 
  document.body.appendChild(jsonp);
};

// Handle json response

function displayResponse(responses) {
  document.getElementById("response1").innerHTML = responses.query;
};

function createSearchURL(searchTerms) {
  var searchTermsString = searchTerms.replace(/\s/g, "%20");
  var baseURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch=";
  var searchURL;
  var callbackURL = "&callback=displayResponse";
  return searchURL = baseURL + searchTermsString + callbackURL;
};
// There is a javascript function (not even a library!) that already exists that will parse search terms into URL friendly format so if your user puts in a comma, or an = etc etc this will still work - need to look this up.


module.exports = displayResponse;
