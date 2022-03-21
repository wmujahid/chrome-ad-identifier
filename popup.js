(function () {
  chrome.storage.local.get(['color','opacity'], function (result) {
      if(result && result.color && result.opacity){
          document.getElementById('color-picker').value = result.color;
          document.getElementById('opacity').value = result.opacity;
      }
  });

  document.getElementById('form').addEventListener('change', function(){
      var color = document.getElementById('color-picker').value;
      var opacity = document.getElementById('opacity').value;
      
      chrome.storage.local.set({color: color, opacity:opacity},function() {
          document.getElementById('message').innerHTML = 'Settings Updated.';
        });

      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
          var activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, {color: color, opacity:opacity});
         });
  });
})();