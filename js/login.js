var ve=new Vue({
	el:'#login-register',
	data:{
		user:{},
		loginurl:'http://localhost:8080/hands/login',
		regurl:'',	
		username:'',
		password:'',
		password1:''
	},
	methods:{
	
	
}
	}
)
	function login(){
			var that=this;
			var url_log='http://localhost:8180/hands/login';
			console.log(ve.username);
			$.ajax({
			url:url_log,
			type:'GET',
			data:{username:ve.username,password:ve.password},
			dataType:'JSON',
			headers:{
                "Content-Type": "application/json"
                },
			success:function(res)
			{	console.log(res);
				if(res.result=="success"){
					
					$.cookie("handsUsername",res.data.username,{path: '/'} );
					$.cookie("handsPassword",res.data.handsPassword,{path: '/'} );
					console.log(res.data.username);
					console.log(res.data.handsPassword);
					var url=$.cookie("target");
					if(url!=undefined&&url.length!=0)
					window.location.replace(url)
					else
						window.location.replace("index.html")
					//removeCookie("handsUsername")
				}
				else{
					alert("登录失败！");
				}
				
			},
			fail:function(res){
				console.log(res);
			}
			});
			
		}
							 
