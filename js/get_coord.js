function getCoords(el_id) { // crossbrowser version
			var elem = document.getElementById(el_id);
		    var box = elem.getBoundingClientRect();

		    var body = document.body;
		    var docEl = document.documentElement;

		    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		    var clientTop = docEl.clientTop || body.clientTop || 0;
		    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		    var top  = box.top +  scrollTop - clientTop;
		    var left = box.left + scrollLeft - clientLeft;

		    // return { top: Math.round(top), left: Math.round(left) };
		    return Math.round(top);
		}
		

$(document).ready(function(){
  $(window).scroll(function() {
	if ($(document).scrollTop() > getCoords("gbr3")) {
       $("#cloud1, #cloud2, #cloud3").removeClass("cloud-off").addClass("cloud-on"); 
	} else {
      $("#cloud1, #cloud2, #cloud3").removeClass("cloud-on").addClass("cloud-off");
    }
  });
});