// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function updateOnlineStatus () {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
  }
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  
  updateOnlineStatus();


  
  

        