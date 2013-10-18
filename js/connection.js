
function Connection()
{
}

Connection.prototype =
{
	constructor: Connection,
	
	getData:function(url )
	{	
		url = '/applicationapi/get/user';
		var API = host+url+"/?jsoncallback=?";
		
		$.getJSON( API, {format: "json" }).done(function( data ) {
			return data;
		});
	},
	
	sumbitData:function(url , tosend , callback)
	{	
		var API = host+url+"/?jsoncallback=?";
		
		$.ajax({
    		type: 'POST',
   			url: API,
    		crossDomain: true,
    		data: tosend,
    		dataType: 'json',
    		success: function(responseData, textStatus, jqXHR) {
        		callback(responseData);
   			},
    		error: function (responseData, textStatus, errorThrown) {
        		alert('POST failed.');
   			}
		});
	}
	
}