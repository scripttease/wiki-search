// var main = require("../src/main.js");
var createSearchURL = require("../src/create-search-url");

describe("createSearchURL", function() {
  it("should replace whitespace in search string with %20", function() {

    expect(createSearchURL("my search string")).to.equal("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch=my%20search%20string");
  });
});
