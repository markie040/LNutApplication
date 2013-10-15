	function Application()
	{
		this.run();
	}
	
	Application.prototype = 
	{
	
		constructor: Application,
		
		run:function() // Application must find the package and draw background images and default objects , 
		{
			
		},
		
		PreLoadApplication:function() // Preload Application Script , Reteve all data on enable a offline application
		{
		
		},
		
		ResetApplication:function() // Resets the application clears the cache and starts a blank version if application type offline will reload the cache if not cache will load progressively
		{
		
		},
		
		whereAmI:function() // used for the website version of the app , by adding the correct data in the URL on a hash tag the application will find the correct page and launch said page  
		{
		
		}, 
		
		lanuchController:function(location) // call a controller for the desired page. this will build the page 
		{
			// new Package() // this finds the package type for the application ( draws the correct background images example: desert theme)
		},	
	}