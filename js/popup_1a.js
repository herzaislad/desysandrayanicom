$(document).ready(function() {	

		var id = '#dialog';
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(5000);
		
	    setTimeout (function(){
        $('#mom').fadeIn(5000);
        }, 5000 /*milisecond*/)
			
	
});