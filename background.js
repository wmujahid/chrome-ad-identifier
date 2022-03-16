// function reddenPage() {
//   document.body.style.backgroundColor = 'red';
// }
function reddenAds() {
  let ads = document.getElementById('taw');
  ads.style.backgroundColor = "red";
  console.log('Ads should be red')
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      // function: reddenPage,
      function: reddenAds
    });
  }
});
