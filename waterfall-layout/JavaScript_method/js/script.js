window.onload = function(){
	waterfall('main', 'box');
	var dataInt = {"data":[{"src":'0.jpg'},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};
	window.onscroll = function(){
		if (checkScrollSlide()) {
			var oParent = document.getElementById('main');
			//将数据块渲染到页面的尾部
			for (var i = 0; i < dataInt.data.length; i++) {
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);//添加一个盒子模块
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);//添加一个图片模块
				var oImg = document.createElement('img');
				oImg.src = "../images/" + dataInt.data[i].src;
				oPic.appendChild(oImg);//添加图片
			}
			waterfall('main', 'box');
		}
	};
};

function waterfall(parent, box){
	//将main下的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent, box);
	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
	//设置main的宽
	oParent.style.cssText = 'width: ' + oBoxW * cols + 'px;margin: 0 auto;';
	//存放每一列高度的数组
	var hArr = [];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}
		else {
			//找出一行中最小的高度，将图片放置在高度最小的图片下
			var minH = Math.min.apply(null, hArr);
			var index = getMinIndex(hArr, minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			//以下两种方法均可
			//oBoxs[i].style.left = oBoxW*index + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
			//改变加了图片之后的高度，避免图片重叠在一个地方
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
}

//根据class获取元素
function getByClass(parent, clsName){
	var boxArr = new Array(),	//用来存储获取到的所有class为box的元素
		oElements = parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if (oElements[i].className == clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinIndex(arr, val){
	for (var i in arr) {
		if (arr[i] == val) {
			return i;
		}
	}
}

//检测是否具备了加载数据块的条件
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent, 'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//混杂模式和标准模式，考虑浏览器兼容
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH < (scrollTop + height)) ? true : false;
}