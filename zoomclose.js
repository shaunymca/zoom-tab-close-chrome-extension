
function removeTab(tabId) {
  try {
    chrome.tabs.remove(tabId, function() {
      
    });
  } catch (e) {
    alert(e);
  }
}

chrome.webNavigation.onCompleted.addListener(function(e) {
  removeTab(e.tabId);
}, {url: [{urlMatches : 'zoom.us/postattendee'}]});
