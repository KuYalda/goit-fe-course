const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};
const callback = function(entries, observer) {
  /* Content excerpted, show below */
};
const observer = new IntersectionObserver(callback, options);
