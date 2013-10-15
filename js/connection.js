function Connection()
{
}

Connection.prototype =
{
	constructor: Connection,
	
	getData:function(url )
	{
		$.getJSON( url, function( data ) 
		{
				return data;
		});
	}
	
}