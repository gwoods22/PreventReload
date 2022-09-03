const preventReload = () => {

}

// Prevent Reload
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js'],
        // function: preventReload
    });
});
