	var activeuser = null; // global varible for current user
	
	function User()
	{
		this.id;
		this.avatar_id;
		this.username;
		this.valid;
		this.ExpireDate; 
		this.user_type;
		this.user_language; // in website terms this is the local of the user , in application terms it is the users native language 
	}
	
	User.prototype = 
	{
		constructor: User,
		
		init:function()
		{
			if(activeuser != null)
				this = activeuser; 
			else
				getUser; 
		},
		
		getUser:function()
		{
		
		}, 
		
		validateUser:function() // for internal application 
		{
		
		}
		
		isValidUser:function()
		{
			// is the user vaild ? has the application expired ?? 
		}
	}