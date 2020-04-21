var shopcart=new Vue({
			el:'#shopcart-body',
			data:{
				user:{address:["北京市海淀区中关村南大街27号"],name:"会飞的象",phone:"136****9330"},
				shopcart_item:[{id:1,src:"image/product/item1.jpg",name:"民族服饰_纯手工绣花青蓝色",preprice:220,number:1,isSelected:true,isError:false,
				errorMessage:''},
							  	{id:2,src:"image/product/item1.jpg",name:"民族服饰_纯手工绣花青蓝色",preprice:220,number:1,isSelected:false,isError:false,
				errorMessage:''}
							  ],
				selected:1,
				count_all:220,
				isSelectedAll:false
				
			},
			methods:{
				selectAll:function(){
					
					if(this.isSelectedAll==false){
					var j=0;
					for(var i=0;i<this.shopcart_item.length;i++){
						this.shopcart_item[i].isSelected=true;
						j+=this.shopcart_item[i].preprice*this.shopcart_item[i].number;
					}
					this.selected=this.shopcart_item.length;
					this.count_all=j;
					
					}
					else{
						var j=0;
					for(var i=0;i<this.shopcart_item.length;i++){
						this.shopcart_item[i].isSelected=false;
						j+=this.shopcart_item[i].preprice*this.shopcart_item[i].number;
					}
						this.selected=0;
					this.count_all=0;
					}
					
				},
				getNewMessage:function(){
					console.log(this);
					var j=0;
					var k=0;
					for(var i=0;i<this.shopcart_item.length;i++){
						if(this.shopcart_item[i].isSelected==true)
							{
								console.log(this.shopcart_item[i].number)
								if(this.shopcart_item[i].number<0)
									{
										this.shopcart_item[i].errorMessage="商品数量只能是大于0整数！"
										this.shopcart_item[i].isError=true; 
										return 0;
									}
								else if(this.shopcart_item[i].number%1!=0)
									{
										this.shopcart_item[i].errorMessage="商品数量只能整数！"
										this.shopcart_item[i].isError=true; 
										return 0;
									}
								else{
									j+=this.shopcart_item[i].preprice*this.shopcart_item[i].number;
									k+=1;
									this.shopcart_item[i].errorMessage=""
									this.shopcart_item[i].isError=false; 
									}
							}
					}
					this.selected=k;
					this.count_all=j;
				},
				CheckItem:function(item){
					console.log(item);
					console.log(item.isSelected)
					if(item.isSelected)
						{
							this.isSelectedAll=false;
							item.isSelected=false;
							this.getNewMessage();
						}
					else{
						item.isSelected=true;
						this.getNewMessage();
					}
				},
				RemoveItem:function(item){
					this.shopcart_item.splice(item,1);
					console.log(this.shopcart_item);
				}
				
			}
			
		})
		
			