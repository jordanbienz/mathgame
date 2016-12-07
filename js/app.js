/* app.js */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}else alert("failed");

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

function popupmsg(msg) {
	var popuptxt = document.getElementsByClassName("modal-body")[0];
	popuptxt.innerHTML = "<p>" + msg + "</p>";
    modal.style.display = "block";
}

function closepopupmsg() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
