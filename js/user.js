	var activeuser = null; // global varible for current user
	
	function User(token)
	{
		this.id = 'User';
		this.token = token; 
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
				this.parseJson(activeuser); 
			else
				this.getUser(); 
		},
		
		createIdentification:function(a , b , c)
		{
			this.id = a+"_"+b+"_"+c;
		}, 
		
		getUser:function()
		{
			var DB = new Database();
			var result = DB.Select(this.id)
			
			if(result === false && this.token == null)
			{
				new Login();
			}
			else if(result === false)
			{
				this.getUserInformation();
			}
			else
			{
				this.parseJson(DB.Select(this.id));
			}
	
		}, 
		
		getUserInformation:function()
		{
			me = this; 
			
			var url = "/applicationapi/user/get/details";
			
			var tosend = {'token': this.token }; 
			
			var connection = new Connection();
			
			var response = connection.sumbitData(url , tosend , function(data){me.parseJson(data)});
	
		},
		
		
		parseJson:function(json)
		{
			thiz = this;
			
			$.each(json, function(key, value){
    			thiz[key] = value;
			});
			
			activeuser = this;
			
			DB = new Database();
			DB.insert(this);
			new Application();
			
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
			
		},
		
		isValidUser:function(v , d)
		{
			var now = new Date();
			
			now.format("dd/M/yy"); //Edit: changed TT to tt

			if(now < d &&  v != "trial") // within subscripbtion time zones 
			{
				this.vaild = "AllowedAccess";
			}
			else if(now < d &&  v == "trial")
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