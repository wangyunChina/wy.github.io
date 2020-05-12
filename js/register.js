var ve=new Vue({
	el:'#login-register',
	data:{
		user:{},
		loginurl:'http://localhost:8080/hands/login',
		regurl:'http://localhost:8080/hands/reg',	
		username:'',
		password:'',
		password1:'',
		iserror:false
	},
	methods:{
	checkpassword:function(){
		if(this.password==this.password1)
			this.iserror=false;
		
		else 
			this.iserror=true;
	}
	
}
	}
)
function register(){
	var that=this;
			var url_log='http://localhost:8180/hands/reg';
			console.log(ve.username);
			var headimg=$("#preview_photo").attr("src");
	if(ve.password==ve.password1)
		{
			$.ajax({
			url:url_log,
			type:'GET',
			data:{username:ve.username,password:ve.password,headImg:headimg},
			dataType:'JSON',
			headers:{
                "Content-Type": "application/json"
                },
			success:function(res)
			{	console.log(res);
				if(res.result=="success"){
					
					$.cookie("handsUsername",res.data.username,{path: '/'} );
					$.cookie("handsPassword",res.data.username,{path: '/'} );
					console.log(res.data.username);
					var url=$.cookie("target");
					if(url!=undefined&&url.length!=0)
					window.location.replace(url)
					else
						window.location.replace("index.html")
					//removeCookie("handsUsername")
				}
				else{
				
					alert(res.errorMessage);
				}
				
			},
			fail:function(res){
				console.log(res);
			}
			});
			}
	else{
		alert("两次密码不一致！")
	}
}