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

// Track "Beli Sekarang" / checkout-bound clicks with the Meta Pixel (InitiateCheckout).
// Fires once per click on any link heading to the ToyyibPay payment page, from anywhere
// on the site (sticky bar, hero, pricing, FAQ CTA, etc). Purchase itself can't be tracked
// here since payment happens off-site on ToyyibPay — this is the strongest signal we can
// give Meta short of that.
(function () {
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href*="toyyibpay.com"]');
    if (!link) return;
    if (typeof fbq === "function") {
      fbq("track", "InitiateCheckout", {
        content_name: "Math Mastery Bundle",
        value: 39,
        currency: "MYR",
      });
    }
  });
})();
