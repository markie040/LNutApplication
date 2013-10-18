	function Database()
	{
		this.obj;
		this.id ; 
	}
	
	Database.prototype = 
	{
		constructor: Database,
		
		insert: function(o) 
		{
			this.id  = o.id; 
			this.obj = o;
			localStorage.setItem(this.obj.id , JSON.stringify(this.obj));
		},
		
		update:function() 
		{
		},
		
		Select:function(id) 
		{
			if (localStorage.getItem(id) === null) 
			{
				return false;
			}
			else
			{
				return this.getFromStorage(id);
			}
		},
		
		getFromStorage: function(id)
		{
			var json = jQuery.parseJSON(localStorage.getItem(id));
			return json; 
		},
		
		Delete:function() 
		{
		},
		
		sync:function()
		{
		},
		
		clear:function()
		{
		},
		
	}
	
