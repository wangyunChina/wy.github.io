var arr=["image/product/haibao1.jpg",
			"image/product/haibao2.jpg",
			"image/product/haibao3.jpg"];
	var point=["#point1","#point2","#point3"];
	
	var i=1;
		
setInterval(function(){
				index=i%3;
				$("#img-haibao1").attr('src',arr[index]);
				for(var j=0;j<point.length;j++)
					{	if(j==index)
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
	
	window.open("login.html", "_blank", "scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,width=425px,height=577px");
}