/* Language toggle for the document pages.
   The page's own head script has already settled `data-lang` before first
   paint; this only wires the buttons and writes the choice down, so the
   two never disagree about what is on screen. */
(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-set-lang]'));

  function apply(l) {
    document.documentElement.dataset.lang = l;
    document.documentElement.lang = l === 'fr' ? 'fr-CA' : 'en';
    try { localStorage.setItem('lang', l); } catch (e) {}
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === l));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-set-lang')); });
  });

  apply(document.documentElement.getAttribute('data-lang') === 'fr' ? 'fr' : 'en');
})();
