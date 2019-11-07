/* attach Google Analytics */
var _gaq = [['_setAccount', 'UA-20644777-6'], ['_trackPageview']];
function loadGoogleAnalytics() {
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  document.body.appendChild(ga);
}
loadGoogleAnalytics();

/* inject anchor links for headings (h1-6 elements) with id attributes */
var headingWithIds = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
headingWithIds.forEach(function(headingWithId) {
  var anchorEl = document.createElement('a');
  anchorEl.href = '#' + headingWithId.id;
  anchorEl.className = 'heading-anchor';
  anchorEl.textContent = '#';
  headingWithId.appendChild(anchorEl);
});
