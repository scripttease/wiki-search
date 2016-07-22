var createSearchURL = require("./create-search-url");

// Assign function to user input box
document.querySelector("#inputBox").onchange = handleInput;

// Get search items from user input, split to array, use in url.
function handleInput(event) {
  var searchTerms = event.target.value;
  var url = createSearchURL(searchTerms);
  return fetch(url, { mode: "cors", Origin: "http://localhost8080/", headers: new Headers({
		'Api-User-Agent': 'wiki-search (http://localhost8080/; amyalicedee@gmail.com)',
    "User-Agent": "(http://localhost8080/)"
	})})
    .then(function(response) {
    return response.json();
    })
    .then(function(searchObjs) {
      console.log(searchObjs);
    });
  // do something with the URL here.
};

module.exports = {
  handleInput: handleInput,
  createSearchURL: createSearchURL,
}
