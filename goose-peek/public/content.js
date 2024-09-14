const pageContent = document.title;
chrome.runtime.sendMessage({ content: pageContent });