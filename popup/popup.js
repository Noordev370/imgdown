function clickHandler() {
  browser.tabs.executeScript({ file: "/content_scripts/main.js" });
}

function download(url) {
  browser.downloads.download({ url: url });
  console.log("download called");
}

function downloadAll(URLs) {
  URLs.forEach((url) => {
    download(url);
    console.log("inside download all foreach");
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", clickHandler);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  downloadAll(message.urls);
});
