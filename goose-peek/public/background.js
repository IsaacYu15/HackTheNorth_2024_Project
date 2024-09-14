chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('http')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.content) {
      console.log("Content of the page:", message.content);
    }
});