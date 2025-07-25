function getimgElements() {
  const elements = document.querySelectorAll("img");
  return elements;
}

function getimgURLs() {
  let URLs = [];
  const elements = getimgElements();
  elements.forEach((element) => {
    URLs.push(element.src);
  });
  console.log(URLs);
  return URLs;
}

getimgElements();
const URLs = getimgURLs();
browser.runtime.sendMessage({ urls: URLs });
