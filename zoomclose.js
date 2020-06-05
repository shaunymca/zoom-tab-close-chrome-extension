
function removeTab(tabId) {
  try {
    chrome.tabs.remove(tabId, function() {
      
    });
  } catch (e) {
    alert(e);
  }
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.url == 'https://zoom.us/postattendee') {
		removeTab(tabId)
	}
}); 
