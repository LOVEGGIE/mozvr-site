(function () {
  function toArray(obj) {
    return Array.prototype.slice.apply(obj);
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return toArray(document.querySelectorAll(selector));
  }

  // Adding a class so we can disable certain :hover styles on touch.
  // NOTE: Not using classList for IE compatibility.
  document.body.className += 'ontouchstart' in window ? ' has-touch' : ' lacks-touch';

  // Google Analytics.
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49796218-16', 'auto');
  ga('send', 'pageview');

  $$('.highlight__item').forEach(function (el) {
    el.addEventListener('click', function () {
      ga('send', 'event', 'click.demo',
         el.querySelector('.highlight__item__title').textContent);
    });
  });

  $$('#mozilla a').forEach(function (el) {
    el.addEventListener('click', function () {
      ga('send', 'event', 'click.footer', el.textContent);
    });
  });


  // Outsmart spam bots.
  var pressEmail = $('.footer__press');

  function setPressEmail() {
    pressEmail.href = 'mailto:press';
    pressEmail.href += '@mozilla.com';
  }

  pressEmail.addEventListener('click', setPressEmail);
  $('#mozilla').addEventListener('mouseover', setPressEmail);


  // Open external links in new tabs.
  toArray(
    document.querySelectorAll('[href^="//"], [href*="://"]')
  ).forEach(function (link) {
    link.setAttribute('target', '_blank');
  });
})();
