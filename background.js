
browser.tabs.onUpdated.addListener(function() {
  browser.tabs.executeScript( {
  	file: "download.js"
  });
});