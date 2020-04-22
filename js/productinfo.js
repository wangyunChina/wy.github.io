var productinfo=new Vue(
{
	el:"#productinfo_body",
	data:{
		productname:"民族手工绣花上衣",
		img:["image/product/item1.jpg","image/product/item2.jpg"],
		author:"小飞象",
		nowindex:0,
		isshow:true,
		price:220,
		stock:20,
		productid:1,
		number:1,
		others:[
			{productname:"",img:[],price:220,stock:20,productid:1}
		],
		isError:false,
		errorMessage:""
	},
	created(){
			this.getAttrFromUrl();
			this.timerun()
			},
		computed:{
		nextindex(){
			if(this.nowindex === this.img.length -1)
			{
				return 0
			}
			else{
					return this.nowindex + 1
				}
			}
		},
	methods: {
		goto(index){
					let that = this;
					this.ifshow = false;
					setTimeout(
						function(){
									that.ifshow = true;
									that.nowindex = index;
									},
							100
								)

				},
		timerun(){
 					let that = this;
					 setInterval(function(){
					 that.goto(that.nextindex)
					 },2000)
				},

		getAttrFromUrl(){
			console.log(window.location.href)
		this.productid=getUrlParam("productid");
			console.log(this.productid);
			/*进入服务器查询该商品的信息，显示赋值*/
			
		},
		checkNumber(){
			var n=this.number;
			var t=this.stock;
			if(n%1!=0||n<0||n>t)
				{
					this.isError=true;
					this.errorMessage="数量只能是小于库存数量的正整数";
				}
			else{
				this.isError=false;
					this.errorMessage="";
			}
		
		},
		
			}


}
)