		new Vue(
	{
		el:'#product_box',
		data:{
			products:[
				{src:'image/product/item1.jpg',title:'民族服饰_纯手工绣花青蓝色',price:220,author:'小飞象',id:1},
				{src:'image/product/item2.jpg',title:'做个东西_月球灯挂壁灯家居装饰纯手工',price:15,author:'做个东西',id:2},
				{src:'image/product/item3.jpg',title:'做个东西_流光灯床头灯家居装饰纯手工',price:166,author:'做个东西',id:3},
				{src:'image/product/item4.jpg',title:'入云屋_水洗帆布袋秋叶系列原创',price:125,author:'入云屋',id:4},{src:'image/product/item1.jpg',title:'民族服饰_纯手工绣花青蓝色',price:220,author:'小飞象',id:5},
				{src:'image/product/item2.jpg',title:'做个东西_月球灯挂壁灯家居装饰纯手工',price:15,author:'做个东西',id:6},
				{src:'image/product/item3.jpg',title:'做个东西_流光灯床头灯家居装饰纯手工',price:166,author:'做个东西',id:7},
				{src:'image/product/item4.jpg',title:'入云屋_水洗帆布袋秋叶系列原创',price:125,author:'入云屋',id:8}
			]
		},
		methods:{
			getProductInfo:function(val)
			{
				return "productinfo.html?productid="+val;
			}
		}
	}
)