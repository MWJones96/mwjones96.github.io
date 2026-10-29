var isUK = (function () {
  var uk = ["Europe/London", "Europe/Belfast", "Europe/Guernsey", "Europe/Isle_of_Man", "Europe/Jersey"];
  try { return uk.indexOf(Intl.DateTimeFormat().resolvedOptions().timeZone) >= 0; } catch (e) { return false; }
})();
