var MXLOGIN = new XMLHttpRequest();

function mx_sendLogin(mxid, password) {
	MXLOGIN.onreadystatechange = function () {
  	console.log(MXLOGIN.responseText);
	}
	
	MXLOGIN.open("POST","https://matrix.org/_matrix/client/r0/login");
	MXLOGIN.send(JSON.stringify({
    	  "password": password,
   	  "user": mxid,
  	  "type": "m.login.password"
	}));
}
