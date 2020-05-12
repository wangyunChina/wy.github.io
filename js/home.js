var home=new Vue(
{
	el:'#home_body',
	data:{
		user:{username:"13668429330",name:"汉织Demo",id:'1000001',sex:'女',birthday:'2020-04-01',address:"北京市海淀区",label:["针织","乐高","美食","剪纸","民族手工艺品"],headimg:"image/head_imh/head1.jpg"},
		acount:{id:1,username:"13668429330",balance:100},
		messageArray:[[{"id":9,"messageFrom":"root","messageTo":"wy","sendTime":"2020-04-27T07:16:22.000+0000","message":"asdas","isread":0}
					 ]],
		orderArray:[
			{orderid:1,productid:1,productimg:"image/product/item1.jpg",producttitle:"民族服饰_纯手工绣花青蓝色" },
			{orderid:2,productid:2,productimg:"image/product/item2.jpg",producttitle:"做个东西_月球灯挂壁灯家居装饰纯手工" },
			{orderid:3,productid:3,productimg:"image/product/item3.jpg",producttitle:"做个东西_流光灯床头灯家居装饰纯手工" },
			{orderid:4,productid:4,productimg:"image/product/item4.jpg",producttitle:"入云屋_水洗帆布袋秋叶系列原创" },
		],
		myproduct:[{productid:2,productimg:"image/product/item2.jpg",producttitle:"做个东西_月球灯挂壁灯家居装饰纯手工"},
				  	{productid:3,productimg:"image/product/item3.jpg",producttitle:"做个东西_流光灯床头灯家居装饰纯手工"}
				  ]
	},
	created(){
		$(".home-left-bar-text").each(function(){
			if($(this).attr("data-index")==0)
				$(this).css({'color':'#ff0000'})
		});
		
	},
	methods:{
		getchartUrl:function(aim){
			console.log(aim)
			var url="chart.html?aim="+aim
			window.open(url, "_blank", "scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");
		}
	}
}
)
function caseone(index){
	$(".chart-item").each
	(
	function(){
		
		var j=$(this).attr("index")
		console.log(j);
		if(j==(index+5)%6)
			{
				$(this).css({"z-index":'10',"left":'530px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
			}
		else if(j==(index%6))
			{
				$(this).css({"z-index":'60',"left":'30px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
			}
		else if(j==(index+1)%6){
		$(this).css({"z-index":'50',"left":'130px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
	}
		else if(j==(index+2)%6){
				$(this).css({"z-index":'40',"left":'230px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
				}
		else if(j==(index+3)%6){
				$(this).css({"z-index":'30',"left":'330px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
				}
		else if(j==(index+4)%6){
			$(this).css({"z-index":'20',"left":'430px',"-webkit-transition": "all .28s ease-in .1s","transition": "all .28s ease-in .1s"});
			}
	}
	)
}
$(".home-left-bar-text").click(
function(){
	console.log($(this).attr("data-index"));
	var index=$(this).attr("data-index");
	console.log(this.parentElement);
	$(this).css({"color":'#ff0000'});
	var that=this;
	$(".home-left-bar-text").each(
	function(){
		var i=$(this).attr("data-index");
		if(i!=index)
			{
				$(this).css({"color":'#707070'});
			}
	}
	);
	switch(index){
		case '0': {caseone(0);break;}
		case '1': {caseone(1);break;}
		case '2': {caseone(2);break;}
		case '3': {caseone(3);break;}
		case '4': {caseone(4);break;}
		case '5': {caseone(5);break;}
		default:{caseone(0);break;}
	}
	
}
)
 function initPage(){
		let username1=$.cookie("handsUsername");
		$.ajax({
			url:"http://localhost:8280/hands/myMessage",
			data:{username:username1},
			dataType:"JSON",
			headers:{
                "Content-Type": "application/json"
                },
			success:function(res){
			
				console.log(res);
				home.$data.messageArray=res.data;
			}
			
		})
	}
initPage()
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
					home.user=res.data;
					console.log(home.user)
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