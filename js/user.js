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
				this.getUser(); 
		},
		
		createIdentification(a , b , c)
		{
			this.id = a+"_"+b+"_"+c;
		}, 
		
		getUser:function()
		{
			var url = "/webservice/applicationUse/"+this.id+"/";
			var connection = new Connection();
			this.parseJson(connection.getData(url));
		}, 
		
		parseJson:function(json)
		{
			thiz = this;
			
			$.each(data, function(key, value){
    			thiz[key] = value;
			});
			
		},
		
		UserFound:function(data)
		{
			if(data.nouser == true)
			{
				this.vaild = false; 
				localstroage.clear();
				// show login page; 
			}
		}, 
		
		validateUser:function() // for internal application
		{
			
		}
		
		isValidUser:function(v , d)
		{
			var now = new Date();
			
			now.format("dd/M/yy"); //Edit: changed TT to tt

			if(now < d &&  v != "trial") // within subscripbtion time zones 
			{
				this.vaild = "AllowedAccess";
			}
			elseif(now < d &&  v == "trial")
			{
				this.vaild = "TrialAccess";
			}
			else
			{
				this.vaild = false;
				localstorage.clear(); // if not valid destroy the applications data
			}
		}
	}