var arr=["image/product/haibao1.jpg",
			"image/product/haibao2.jpg",
			"image/product/haibao3.jpg"];
	var point=["#point1","#point2","#point3"];
	
	var i=1;
		
setInterval(function(){
				index=i%3;
				$("#img-haibao1").attr('src',arr[index]);
				for(var j=0;j<point.length;j++)
					{	
						if(j==index)
						$(point[j]).css({"background-color":'#999999'});
					 	else
						$(point[j]).css({"background-color":'#FFFFFF'});	
						}
				i++;
			},3000);
function changeimg(index){
				
				$("#img-haibao1").attr('src',arr[index]);
				for(var j=0;j<point.length;j++)
					{	if(j==index)
						$(point[j]).css({"background-color":'#999999'});
					 	else
						$(point[j]).css({"background-color":'#FFFFFF'});	
						}
				i++;
			}		
function openloginPage(){
	
	$(".loginpage").show();
}
function openregisterPage(){
	$(".regpage").show();
}
setInterval(function(){
	
},3000)
function start()
{	
	var username=$.cookie("handsUsername");
	var hpassword=$.cookie("handsPassword");
	console.log(hpassword)
	$.ajax({
			url:"http://localhost:8180/hands/login",
			type:'GET',
			data:{username:username,password:hpassword},
			dataType:'JSON',
			headers:{
                "Content-Type": "application/json"
                },
			success:function(res)
			{	console.log(res);
				if(res.result=="success"){
					index.user=res.data;
					console.log(index.user)
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
function setlogStatus(){
	
	var username=$.cookie("handsUsername")
	var password=$.cookie("handsPassword")
		console.log(password);
		if(username!=null&&username.length!=0)
			{
				
				start();
				$(".log-url").hide();
				$(".reg-url").hide();
				$(".userhome-url").show();
				$(".logout-url").show();
				
			}	
}



			
