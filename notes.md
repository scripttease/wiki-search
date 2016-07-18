# The Wikipedia API

The endpoint url is:
```
https://en.wikipedia.org/w/api.php
```

The `format` we want (most useful) is JSON: `format=json`.

The `action` required is `query` meaning, in this case, we are requesting information from the API.

The property `prop` we require is `extracts`. (This is an extension to the standard properties available for the wiki API so backend requests will need to download the extension module.)
Property queries get various data about a list of pages specified with either the titles=, pageids=, or revids= parameters, or by using generators. 
Extracts has various options, such as exsentences (how many sentences to return), exintro (return only content before the first section), exlimit (how many extracts to return) and explaintext which returns the content as pain text rather than html.

We do not know in advance the title, page ID or revision of the document we want so we use a generator with a search.

You use a generator if you want to get data about a set of pages that would be the result of another API call. For example, if you want to get extracts for all the search results in a category, instead of querying `list=srsearch&search={your search string here}` and then querying again with `extracts` set to all the returned pages, you should combine the two API calls into one by specifying `generator=gsrsearch&search{your string here}&prop=extracts...` in place of the list parameter. 

Putting this together we get the following URL

`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exsentences=1&explaintext&generator=search&gsrsearch=`


App layout:

1) the app needs to have a search box into which the user can enter text
2) the app must be able to take the user input from the search box and use it in a get request to the wikipedia api
3) the get request should return a list of articles that match the search term(s)
 -- an error/no matching terms would be nice
4) the returned articles should be listed, with extracts, in hte view, and include links to the relevant wikipedia pages.
5) there should also be a button which opens a random wikipedia article in a new tab.

Things I learned!!!
1. After the return in a function, that's it, it's over. If you want to do a console log or anything - it goes BEFORE the return! You can't get anything out of it after that.

2. The thing that you return is just a thing that can be used by another function. It doesn't matter what you call it or if you gave it a variable name inside the function because any other function will only see the return value not its name or its variable name. If you wanted that you would have to define a global variable outside the functions.

3. You need to export the functions you are testing, and require them in your test folder!!!

