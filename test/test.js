describe("array", function() {
  it("should have two elements", function() {
    var arr = [1, 2];

    expect(arr.length).to.equal(2);
  });
});

describe ("createSearchURL", function() {
  it("should convert the user-entered search terms into a space seperated url", function() {
    var searchURL;
    var searchTermsString = "my search terms";
    var baseURL = "search="

    expect(searchURL).to.equal("search=my%20search%20terms")
  });
});
