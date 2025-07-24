function clickHandler() {
  broswser.tabs.executeScript({ file: "/content_scripts/main.js" });
  console.log("download btn click");
}


const btn = document.querySelector("button");
btn.addEventListener("click",clickHandler);

document.addEventListener("click",()=>{console.log("clicked")});
