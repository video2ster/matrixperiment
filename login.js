var MXLOGIN = new XMLHttpRequest();
function mx_sendLogin(mxid, password) {
	MXLOGIN.onreadystatechange = function () {
		var response = JSON.parse(MXLOGIN.responseText);
  		window.location.href = "cookie?atoken="+response.access_token+"&uid="+response.user_id;
	}
	
	MXLOGIN.open("POST","https://matrix.org/_matrix/client/r0/login");
	MXLOGIN.send(JSON.stringify({
    	  "password": password,
   	  "user": mxid,
  	  "type": "m.login.password"
	}));
}
