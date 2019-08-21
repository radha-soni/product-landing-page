$(function() {
  // Only set the timer if you have a hash
  if (window.location.hash) {
    setTimeout(delayedFragmentTargetOffset, 500);
  }
});

function delayedFragmentTargetOffset() {
  var offset = $(":target").offset();
  console.log(offset);
  if (offset) {
    var scrollto = offset.top - 50; // minus fixed header height
    $("html, body").animate({ scrollTop: scrollto }, 0);
    $(":target").highlight();
  }
}
