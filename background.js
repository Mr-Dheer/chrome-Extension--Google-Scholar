chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sortPublications') {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            function: sortPublications,
            args: [message.order]
        });
    }
});
