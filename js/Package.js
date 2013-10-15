	function Package()
	{
		this.id = " "; 
		this.package_type; 	
	}
	
	Package.prototype = 
	{
		constructor: Package,
		
		init:function()
		{
			var url = "";
			var connection = new Connection();
			this.parseJson(connection.getData());
		},
		
		parseJson:function() // parse the json and update the store 
		{
			
			
		}, 
		
		draw:function()
		{
		
		}
			
	}