const pageContent = document.title;

const data = [
    { id: 0, w:200, h:200},
    { id: 1, w:250, h:250},
    { id: 2, w:400, h:400},
    { id: 3, w:600, h:600},
    { id: 4, w:900, h:900},
];


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
                appendToTop(1);
            }
            else
            {
                appendToTop(-1);
            }
            
            chrome.runtime.sendMessage({ content: response.text });

        
        }
    });



function appendToTop(change)
{
    var index = 0;

    chrome.storage.local.get(["index"], function(items) {
        if (chrome.runtime.lastError) {
            console.error('Error occurred: ');
        } else {
            if (items.index === undefined) {
                index = 0;
            } else {
                index = items.index + change;
                chrome.runtime.sendMessage({ content: index });

                if (index > 4) {index = 4;}
                if (index < 0) {index = 0;}
            }

            chrome.storage.local.set({ "index": index }, function() {
                if (chrome.runtime.lastError) {
                    console.error('Error');
                } else {
                    chrome.runtime.sendMessage({ content: "success" });
                }
            });

            if (change == 1)
            {
                const passIndex = encodeURIComponent(index);
                window.open(chrome.runtime.getURL(`./popup.html?data=${passIndex}`), "extension_popup", `width=${data[index].w} height=${data[index].h},status=no,scrollbars=yes,resizable=no`);
            }

            header = document.createElement("div");
            header.style.backgroundColor = "#1A2940";
            header.style.padding = "2px";

            tldr = document.createElement("p");
            tldr.textContent = `${index + 1} / 5 anger`;
            tldr.style.fontSize = "small";
            tldr.style.color = "white";
            tldr.style.textAlign = "center";
            tldr.style.fontFamily = "Verdana, Geneva, sans-serif";
            header.appendChild(tldr);

            document.body.parentNode.insertBefore(header, document.body);

        }
    });
}