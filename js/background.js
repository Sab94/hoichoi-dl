chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {
        chrome.downloads.download(arg);
    }
);