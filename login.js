var MXLOGIN = new XMLHttpRequest();

function sendReq(mxid, password) {
	MXLOGIN.onreadystatechange = function () {
  	console.log(MXLOGIN.responseText);
	}
	
	MXLOGIN.open("POST","https://matrix.org/_matrix/client/r0/login");
	MXLOGIN.send({
    	"password": password,
   		"user": mxid,
  	  "type": "m.login.password"
	});
}
