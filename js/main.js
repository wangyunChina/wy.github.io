function loginStatusCheck(){
	var username=$.cookie("handsUsername")
	if(username!=undefined&&username!=null&&username.length!=0)
		return true;
	else return false;
}
function loginFilter(target){
	var islog=loginStatusCheck();
	console.log(islog)
	if(islog)
		{
			location.replace(target)
		}
	else{
		$.cookie("target",target,{path: '/'} );
		location.replace("login.html")
		
		}
}