var ve=new Vue({
	el:'#login-register',
	data:{
		user:{},
		loginurl:'http://localhost:8080/EnglishStudy/books',
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
			var url_log='http://localhost:8080/EnglishStudy/books';
			$.ajax({
			url:url_log,
			type:'GET',
			dataType:'JSON',
			headers:{
                "Content-Type": "application/json"
                },
			success:function(res)
			{	console.log(res);
				if(res.code==true){
					
					$.cookie("handsUsername",res.user.title,{path: '/'} );
					console.log(res.user);
					console.log(getCookie("handsUsername"));
					var url=$.cookie("target");
					if(url.length!=0)
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
