	var paper; 
	var app_instance; 
	
	window.onload = function()
	{
		paper = new ScaleRaphael("APPLICATION",1280,800);   
      	
      	paper.changeSize($(window).width(), $(window).height(), true, true);
      	var uid = device.uuid ;
      	var app_instance = new Application()
      	$(window).resize
      	(
			function() 
			{
				var win = $(this);
        		paper.changeSize(win.width(), win.height(), true, true);
			}
		); 
	}