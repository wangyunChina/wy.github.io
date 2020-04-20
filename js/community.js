var recommend=new Vue({
	el:'#midbody',
	data:{
		product:[
			{src:'image/product/item1.jpg',head:'image/head_imh/head1.jpg',title:'晴天项链挂坠手工制作教程'},
			{src:'image/product/item2.jpg',head:'image/head_imh/head2.jpg',title:'小熊毛毡耳坠手工制作教程'},
			{src:'image/product/item3.jpg',head:'image/head_imh/head3.jpg',title:'月球座灯手工制作教程'},
			{src:'image/product/item4.jpg',head:'image/head_imh/head4.jpg',title:'手绘年历日历手工制作教程'},
			{src:'image/product/item1.jpg',head:'image/head_imh/head1.jpg',title:'晴天项链挂坠手工制作教程'},
			{src:'image/product/item2.jpg',head:'image/head_imh/head2.jpg',title:'小熊毛毡耳坠手工制作教程'},
			{src:'image/product/item3.jpg',head:'image/head_imh/head3.jpg',title:'月球座灯手工制作教程'},
			{src:'image/product/item4.jpg',head:'image/head_imh/head4.jpg',title:'手绘年历日历手工制作教程'}
			
		]
	}
	
})
function load(){
	console.log(recommend);
	/*<div class="recommend-item-box" v-for="item in product">
					<img class="recommend-item-img" alt="" :src="{{item.src}}" />
					<div class="item-desc">
						<img :src="{{item.head}}" alt="" />
						<div>{{item.title}}</div>
					</div>
					<img src="image/icon/心.png" alt="" class="item-love"/>
				</div>*/
var	str="";
console.log(recommend.$data.product);
	var arr=recommend.$data.product;
console.log(arr);
	for(var i=0; i< arr.length;i++)
		{	console.log(i);
			str+="<div class=\"recommend-item-box\" >"
					+"<img class=\"recommend-item-img\" alt=\"\" src=\""+arr[i].src+"\" />"+
					"<div class=\"item-desc\">"+
					"<img src=\""+arr[i].head+"\" alt=\"\" />"+
						"<div>"+arr[i].title+"</div></div>"+
					"<img src=\"image/icon/心.png\" alt=\"\" class=\"item-love\"/></div>"
		}
	$("#midbody").html(str);
	$("#recommend").css({"color":'#ff0000'})
	
}
load();
$(".community-bar-item").click(function(){
			console.log(this.id)
			$(this).css({"color":'#ff0000'})
			var that=this;
			$(".community-bar-item").each(
			function (){
				if(that!=this)
					{
						$(this).css({"color":'#707070'})
					}
			}
			)
		})
 