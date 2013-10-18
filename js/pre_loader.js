	var paper; 
	var app_instance; 
	
	
	window.onload = function()
	{
		paper = new ScaleRaphael("APPLICATION",1280,800);   
      	
      	paper.changeSize($(window).width(), $(window).height(), true, true);
      	
		
      	$(window).resize
      	(
			function() 
			{
				var win = $(this);
        		paper.changeSize(win.width(), win.height(), true, true);
			}
		); 
		
		var user = new User(null);
		user.init();
	}