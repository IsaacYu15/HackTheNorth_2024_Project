const pageContent = document.title;

const data = [
    { id: 0, w:200, h:200},
    { id: 1, w:250, h:250},
    { id: 2, w:400, h:400},
    { id: 3, w:600, h:600},
    { id: 4, w:900, h:900},
];

var index = 0;

options = {
    "method": "POST",
    "headers": {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": "Bearer fQJJWiAjAOIWzI9FEwSjpDXpuxIx25wYQbivXW0b",
        "Request-Source": "sandbox-condense"
    },
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
            var res = response.text.trim().toLowerCase();

            if (res == "no")
            {
                const passIndex = encodeURIComponent(index);
                window.open(chrome.runtime.getURL(`./popup.html?data=${passIndex}`), "extension_popup", `width=${data[index].w} height=${data[index].h},status=no,scrollbars=yes,resizable=no`);
            }

            chrome.runtime.sendMessage({ content: response.text });
        }
    });



