function highlight(response) {
  var ad_selector = '[aria-label="Ads"]';

  // inject the highligter css style to document
  var sheet = window.document.styleSheets[0];
  var highlighter_css = `${ad_selector} {
      background-color: ${response.color};
      opacity: ${response.opacity}%;
  }`;
  sheet.insertRule(highlighter_css, sheet.cssRules.length);

  // update style when settings change
  if (response && response.color && response.opacity) {
      var ad_elements = document.querySelector(ad_selector);
      for (var i = 0; i < ad_elements.length; i++) {
          ad_elements[i].style.backgroundColor = response.color;
          ad_elements[i].style.opacity = response.opacity + '%';
      }
  }
}

chrome.runtime.sendMessage("getSettings", function (response) {
  if (response) highlight(response);
});

chrome.runtime.onMessage.addListener(function (request) {
  if (request) highlight(request);
});