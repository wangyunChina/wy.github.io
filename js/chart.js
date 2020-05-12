var chat=new Vue(
{
	el:"#chartroom",
	data:{
		user:{username:"",password:""},
		aim:{name:"客服"},
		host:"localhost:8280/websocket/",
		url:""
		},
	created(){
		this.aim.name=getUrlParam("aim");
	}
}
)
 var heartflag = false;
    var webSocket = null;
    var tryTime = 0;
    $(function () {

//        initSocket();
        window.onbeforeunload = function () {

        };
    });

    /**
     * 初始化websocket，建立连接
     */
    function initSocket() {
		var name=getUrlParam("aim");
		var username=$.cookie("handsUsername");
		var password=$.cookie("handsPassword")
		var url="ws://localhost:8280/websocket/"+username+"/"+password+"/"+name
        var serveraddress =url;
      
		console.log(serveraddress);
        if (!window.WebSocket) {
            $("#connectStatu").append(getNowFormatDate() + "  您的浏览器不支持ws<br/>");
            return false;
        }

        webSocket = new WebSocket(serveraddress/* + "/" + userId*/);

        // 收到服务端消息
        webSocket.onmessage = function (msg) {
            if (msg.data !== "&") {
				var str="<div style=\"float:left;width:100%;text-align:left\">";
                $("#receivedMessage").append(str+"<br>"+getNowFormatDate() + "<br>"  + msg.data + "</div>");
            }
        };

        // 异常
        webSocket.onerror = function (event) {
            heartflag = false;
            $("#connectStatu").append(getNowFormatDate() + "  异常<br/>");
        };

        // 建立连接
        webSocket.onopen = function (event) {
            heartflag = true;
            heart();
            tryTime = 0;
        };

        // 断线重连
        webSocket.onclose = function () {
            heartflag = false;
            // 重试10次，每次之间间隔10秒
            if (tryTime < 10) {
                setTimeout(function () {
                    webSocket = null;
                    tryTime++;
                    initSocket();
                    $("#connectStatu").append(getNowFormatDate() + "  第" + tryTime + "次重连<br/>");
                }, 3 * 1000);
            } else {
                alert("重连失败.");
            }
        };

    }

    function send() {
        var message = $("#message").val();
		var str="<div style=\"float:right;width:100%;text-align:right\">";
		$("#receivedMessage").append(str+"<br>"+getNowFormatDate() + "<br>"  + message + "</div><br>");
		
        webSocket.send(message);
    }

    function clearConnectStatu() {
        $("#connectStatu").empty();
    }

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    }

    function heart() {
        if (heartflag) {
            webSocket.send("&");
            $("#heartdiv").append(getNowFormatDate() + "  心跳 <br/>");
        }
        setTimeout("heart()", 10 * 60 * 1000);

    }
function initPage(){
	
	var name=getUrlParam("aim");
	var username=$.cookie("handsUsername");
	var password=$.cookie("handsPassword")
	$.ajax(
	{
		url:"http://localhost:8280/hands/messageFrom",
		data:{send:name,acept:username},
		method:"GET",
		dataType:"JSON",
		success:
		function(res)
		{
			let message=res.data;
			for(var i=0;i<message.length;i++)
				{
			var str="<div style=\"float:left;width:100%;text-align:left\">";
                $("#receivedMessage").append(str+"<br>"+message[i].sendTime + "<br>"  + message[i].message + "</div>");
				}
		}
	})
}
initPage()