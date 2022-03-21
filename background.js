// function reddenAds() {
//   let ads = document.getElementById('taw');
//   ads.style.backgroundColor = "red";
//   console.log('Ads should be red')
// }

// chrome.action.onClicked.addListener((tab) => {
//   if(!tab.url.includes("chrome://")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       // function: reddenPage,
//       function: reddenAds
//     });
//   }
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "getSettings") {
      chrome.storage.local.get(['color', 'opacity'], function (result) {
          if (result && result.color && result.opacity) {
              sendResponse({
                  color: result.color,
                  opacity: result.opacity
              });
          } else {
              sendResponse({
                  color: '#feffdd',
                  opacity: 70
              });
          }
      });
  }
  return true;
});