async function clickHandler() {
  const tabsList = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const currentTab = tabsList[0];
  browser.scripting.executeScript({
    target: { tabId: currentTab.id },
    files: ["/content_scripts/main.js"],
  });
}

function download(url) {
  browser.downloads.download({ url: url });
}

function downloadAll(URLs) {
  URLs.forEach((url) => {
    download(url);
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", clickHandler);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  downloadAll(message.urls);
});
