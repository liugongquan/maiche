/*搜索框的焦点获得*/
function search_f(x){
	x.style.borderColor = "#cccccc";
	document.getElementById("search_btn").style.opacity = "1";
}
function search_b(x){
	x.style.borderColor = "#e6e6e6";
	document.getElementById("search_btn").style.opacity = "0.5";
}
//实例化banner方法的data数组
var bannerData = [
	{
		href:"https://www.baidu.com/",
		title:"车主义",
		url:"./images/chezhuyi.jpg"
	},
	{
		href:"https://www.baidu.com/",
		title:"车牛",
		url:"./images/cheniu.jpg"
	},
	{
		href:"https://www.baidu.com/",
		title:"大风车",
		url:"./images/dafengche.jpg"
	}
];
/*banner区的图片轮播*/
createBanner({
	element:"banner",
	data : bannerData
});
//创建banner的方法
function createBanner(option){
	var data = option.data,//定义一个数组
		dataLen = data.length,//数组的长度
		element = document.getElementById(option.element),//获取元素div
		fragment = document.createDocumentFragment(),//定义一个banner的文档碎片，存储节点。
		a = 0,//帮全局定义一个a，局部自己决定干什么
		images = data.map(function(item){//定义一个images数组，用map遍历data
			return fragment.appendChild(createImage(item));//执行，并将得到的结果放在fragment里面
		}),
		timer = createTimer();//定义一个定时器
	function createImage(option){//创建一个存放图片的Image的方法
		var a  = document.createElement("a");//创建一个元素,a标签
		a.href = option.href;//给a标签调用实例化的实参
		a.title = option.title;
		a.style.backgroundImage = "url(" + option.url + ")";
		return a;
	}
	function createTimer(){//创建一个定时器方法
		return setInterval(function(){//执行setInterval方法
			var _a = a;
			a = a >= dataLen -1 ? 0 : a +1;
			images[_a].className = "";
			images[a].className = "current";
		},1000);
	}
	function createButton(className){
		var i = document.createElement("i");//创建一个元素,i标签
		i.className = "icon " + className;//给i标签添加一个共同class,和不同的class
		i.onclick = function(){//创建一个i标签的点击事件方法
			clearInterval(timer);//停止定时器,对应setInterval
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	//创建左右按钮
	fragment.appendChild(createButton("previous"));//创建上一个按钮放在fragment中
	fragment.appendChild(createButton("next"));//创建下一个按钮放在fragment中
	element.appendChild(fragment);//将fragment碎片放在banner元素中
}

var main = document.getElementById("main");//获取divmain
(function(){//给divmain添加属性和div.封装在一个方法里面自执行
	var div1 = document.createElement("div");
	div1.className = "main_title";
	(function(){
		div1.appendChild(document.createTextNode("生活的智慧，就是选我所爱"));
		div1.style.fontSize = "32px";
		div1.style.color ="#333333";
		div1.style.lineHeight = "50px";
	})();
	var div2 = document.createElement("div");
	div2.className = "main_sub";
	(function(){
		div2.appendChild(document.createTextNode("总有一款车,能天衣无缝地融入你的生活"));
		div2.style.fontSize = "16px";
		div2.style.color = "#999999";
		div2.style.lineHeight = "40px";
	})();
	main.appendChild(div1);
	main.appendChild(div2);
	main.style.textAlign = "center";
	main.style.paddingBottom = "30px";
	main.style.paddingTop = "80px";
})();

function createfix(option){//创建一个方法
	var a = document.createElement("a");//创建一个a标签
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>" 
				+ "<p>" +option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData =[
	{
		href : "/a",
		bigUrl : "./images/exhibition.jpg",
		smallUrl : "./images/dexi.png",
		title : "豪车不止BBA",
		label : "德系三架马车,是时候退位让贤了"
	},
	{
		href : "/a",
		bigUrl : "./images/exhibition1.jpg",
		smallUrl : "./images/shijian.png",
		title : "百年大厂杰作",
		label : "时间在流逝，品质永流传！"
	},
	{
		href : "/a",
		bigUrl : "./images/exhibition2.jpg",
		smallUrl : "./images/pianyi.png",
		title : "便宜才是王道",
		label : "谁说便宜没好车？"
	},
	{
		href : "/a",
		bigUrl : "./images/exhibition3.jpg",
		smallUrl : "./images/jiaxiao.png",
		title : "驾校毕业生",
		label : "那些年，我们练过的普桑和捷达。"
	},
	{
		href : "/a",
		bigUrl : "./images/exhibition4.jpg",
		smallUrl : "./images/mingxing.png",
		title : "明星也抠门",
		label : "明星都买二手车了你还等什么"
	},
	{
		href : "/a",
		bigUrl : "./images/exhibition5.jpg",
		smallUrl : "./images/quanneng.png",
		title : "全能的大玩具",
		label : "越野帮手、四驱利器"
	},

];
var fragment = document.createDocumentFragment();//创建一个碎片
exhibitionData.forEach(function(project){//将exhibitionData进行遍历
	fragment.appendChild(createfix(project));//将得到的数据放入fragment碎片
});
document.getElementById("exhibition").appendChild(fragment);//将fragment碎片放在exhibition元素中

var main = document.getElementById("life");//获取divmain
(function(){//给divmain添加属性和div.封装在一个方法里面自执行
	var div1 = document.createElement("div");
	div1.className = "main_title";
	(function(){
		div1.appendChild(document.createTextNode("生活的智慧，就是选我所爱"));
		div1.style.fontSize = "32px";
		div1.style.color ="#333333";
		div1.style.lineHeight = "50px";
	})();
	var div2 = document.createElement("div");
	div2.className = "main_sub";
	(function(){
		div2.appendChild(document.createTextNode("总有一款车,能天衣无缝地融入你的生活"));
		div2.style.fontSize = "16px";
		div2.style.color = "#999999";
		div2.style.lineHeight = "40px";
	})();
	main.appendChild(div1);
	main.appendChild(div2);
	main.style.textAlign = "center";
	main.style.paddingBottom = "30px";
	main.style.paddingTop = "80px";
})();