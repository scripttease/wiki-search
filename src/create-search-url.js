function createSearchURL(searchTerms) {
  var searchTermsString = searchTerms.replace(/\s/g, "%20");
  var baseURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch=";
  var searchURL;
  return searchURL = baseURL + searchTermsString;
};
// There is a javascript function (not even a library!) that already exists that will parse search terms into URL friendly format so if your user puts in a comma, or an = etc etc this will still work - need to look this up.

module.exports = createSearchURL;
