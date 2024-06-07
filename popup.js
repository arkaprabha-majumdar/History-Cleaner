document.getElementById('deleteButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    if (inputString) {
      // Search without a time restriction and delete all matching results
      chrome.history.search({ text: inputString, startTime: 0, maxResults: 10000 }, function(results) {
        results.forEach(function(page) {
          chrome.history.deleteUrl({ url: page.url });
        });
      });
    }
  });
  