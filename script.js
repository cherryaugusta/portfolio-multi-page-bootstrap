(function () {
  "use strict";

  // inject curentt year into all #current-year elements
  var yearEls = document.querySelectorAll("#current-year");
  var year = String(new Date().getFullYear());
  yearEls.forEach(function (el) {
    el.textContent = year;
  });
})();