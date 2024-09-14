const pageContent = document.body.innerText || document.body.textContent;
console.log("Page content:", pageContent);
chrome.runtime.sendMessage({ content: pageContent });

