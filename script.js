// Math Mastery landing page

// Show the sticky mini-CTA bar once the visitor scrolls past the hero section.
(function () {
  var stickyCta = document.getElementById("stickyCta");
  var hero = document.querySelector(".hero");
  if (!stickyCta || !hero) return;

  function toggleSticky() {
    var heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      stickyCta.classList.add("is-visible");
    } else {
      stickyCta.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleSticky, { passive: true });
  toggleSticky();
})();
