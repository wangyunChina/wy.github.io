	var index=new Vue(
	{
		el:'#index',
		data:{
			products:[
				{src:'image/0.jpg'},
				{src:'image/1.jpg'},
				{src:'image/2.jpg'},
				{src:'image/3.jpg'},
				{src:'image/4.jpg'},
				{src:'image/5.jpg'},
				{src:'image/6.jpg'},
				{src:'image/7.jpg'}
			],
			user:{"username":"","handsPassword":"","fakename":"汉织生活","sex":true,"birthday":"","headimg":"image/icon/头像.png","money":0,"phone":""}
		},
		methods:{
			getProductInfo:function(val)
			{
				return "productinfo.html?productid="+val;
			}
		}
	}
)
