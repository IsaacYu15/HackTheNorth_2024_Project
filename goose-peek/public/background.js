chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('http')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'TASKS_UPDATE') {
      console.log('Updated tasks:', message.payload);
      // You can now use the task data here
    }
    else if (message.content) {
      console.log(message.content);
    }
});
