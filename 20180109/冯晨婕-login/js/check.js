 function checkForm() {
 	 
 	if (document.login.username.value=="") {
 		alert("用户名不能为空");
 		return false;
 	}
 	if (document.login.password.value=="") {
 		alert("密码不能为空");
 		return false;
 	}
 }