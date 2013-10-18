function Login()
{
	this.objs; 
	this.viewer;
	this.init();
}

Login.prototype = 
{
	constructor: Login,
	
	init:function()
	{
		this.viewer = new loginView();
		this.objs = this.viewer.objs;
		
		this.addEvents();
	},
	
	addEvents:function()
	{
		me = this
		
		this.objs[2].click(function() {
   			me.submitLogin();
		});
	},
	
	submitLogin:function()
	{
		
		var username = $( "#username_input" ).val();
		var password = $( "#password_input" ).val();
		
		var tosend = {
		'uname': username,
		'pass' : password
		
		}
		
		var url = "/applicationapi/login/submit/details";
		
		me = this; 
		var connection = new Connection();
		var response = connection.sumbitData(url , tosend , function(data){me.response(data)});
	
	},
	
	response:function(data)
	{
		this.viewer.destory();
		var user = new User(data.token);
		user.init();
	},
	
	validate:function(response)
	{
		var user    = new User(Token);
		new Application();
	},
	
}

function loginView()
{
	this.objs = new Array()
	this.draw();
}

loginView.prototype = 
{
	constructor: loginView,
	
	draw:function()
	{
		
		//var t = paper.add(logbackgoun);
	 // 	var b = paper.add(loginfooer);
	  //	var t = b;
		var c = paper.add(LOGINTREE).translate(150,0);
		
		var username = paper.text(458, 418, 'Username:').attr({'text-anchor': 'start', 'font-size': '20px'});
      	var passowrd = paper.text(458, 458, 'Password:').attr({'text-anchor': 'start', 'font-size': '20px'});
		var login_button = new paper.set();
		
		var user_input = $('#APPLICATION').prepend('<input id="username_input" 		type="text" name="username">');
		var password_input =  $('#APPLICATION').prepend('<input id="password_input" type="password" name="password">');
		
		login_button.push(paper.add(buttonlogin).translate(150,0) , paper.text(250, 250, 'Login').attr({'text-anchor': 'start', 'font-size': '35px'}).transform(['T', 552, 364, 'R', 5.9973]));
		
		this.objs = new Array (username , passowrd , login_button ,c , $("#username_input") , $("#password_input"));
		
		return this.objs;
	},
	
	destory:function()
	{
		me = this; 
		for(i=0; i< this.objs.length; i++)
		{
			me.objs[i].remove();
		}
	}
	
}
