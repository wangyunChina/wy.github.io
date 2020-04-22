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
	function getUrlParam(name) {
			   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			   var r = window.location.search.substr(1).match(reg); //匹配目标参数
			
			   if (r != null) return unescape(r[2]); return null; //返回参数值
  			}
