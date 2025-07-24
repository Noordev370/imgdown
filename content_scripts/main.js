function getimgElements() {
  const elements = document.querySelectorAll("img");
  console.log(elements);
  return elements;
}

function getimgURLs() {
  let URLs = [];
  const elements = getimgElements();
  elements.forEach((element) => {
    URLs.push(element);
  })
  console.log(URLs);
  return URLs;
}

function download(url) {
  browser.downloads.download({ url: url });
}

function downloadAll() { }

getimgElements();
getimgURLs();
