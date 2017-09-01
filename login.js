var loginbtn=document.getElementsByClassName("message_box-login");
var accountbox=document.getElementsByClassName("message_box-account");
var passwordbox=document.getElementsByClassName("message_box-password");
var firstcontain=document.getElementsByClassName("contain");
var secondcontain=document.getElementsByClassName("secondcontain");
var logintips=document.getElementsByClassName("message_box-logintips");
var secondexit=document.getElementsByClassName("second_header-exit");
var account,password;
var text;
loginbtn[0].onclick=function(){
	account=accountbox[0].value;
	password=passwordbox[0].value;
	var request=new XMLHttpRequest();
	request.open("post","carrots-admin-ajax/a/login");
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send("name="+account+"&pwd="+password);
	request.onreadystatechange=function(){
	text=request.responseText;
	if(request.readyState===4&&request.status===200) 
		{
			if(text.indexOf("success") != -1)
				{firstcontain[0].style.display='none';
				secondcontain[0].style.display='block';}
			else
			{logintips[0].innerHTML="账号未注册或密码错误";}
			}
	}
}
secondexit[0].onclick=function(){
	firstcontain[0].style.display='block';
	secondcontain[0].style.display='none';
}