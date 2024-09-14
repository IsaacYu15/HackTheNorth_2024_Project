const pageContent = document.title;

options = {
    "method": "POST",
    "headers": {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": "Bearer fQJJWiAjAOIWzI9FEwSjpDXpuxIx25wYQbivXW0b",
        "Request-Source": "sandbox-condense"
    },
    // These are the chat endpt paramters.
    // Try playing around with them and reloading the extension to see
    // how they affect the summarization behaviour.
    // Reference: https://docs.cohere.com/reference/chat
    "body": JSON.stringify({
        "message": `${pageContent}`,
        "preamble": "This message is a title of a page the user is on. Based on this title, is the potential content on this page related to the user's goals of studying math?" +
        "Give your response as yes for the user's title is related and no for the user's title is unrelated",
        "temperature": 0.1
    })
};

fetch('https://api.cohere.ai/v1/chat', options)
    .then((response) => response.json())
    .then((response) => {
        if (response.text === undefined) {
            // If there's no text in the endpoint's response,
            // display whatever error message it returned
            console.log(response.text);
        } else {
            // Otherwise, display the summary
            console.log(response.text);
            chrome.runtime.sendMessage({ content: response.text });
        }
    });
