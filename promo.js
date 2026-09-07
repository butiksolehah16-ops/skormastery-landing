// September 30 inclusive, Malaysia time (UTC+08:00).
const mathMasteryOfferEnd = Date.parse('2026-10-01T00:00:00+08:00');
function getMathMasteryTimeLeft(now = Date.now()) {
  const seconds = Math.max(0, Math.ceil((mathMasteryOfferEnd - now) / 1000));
  return {days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60};
}
function isMathMasteryOfferExpired(now = Date.now()) {
  return now >= mathMasteryOfferEnd;
}
if (typeof module !== 'undefined' && module.exports) module.exports = { isMathMasteryOfferExpired, getMathMasteryTimeLeft };
