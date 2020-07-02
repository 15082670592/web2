act1.onclick = function() {
	u1.style.display = "none"
	act2.style.display = "block"
	act1.style.display = "none"
}
act2.onclick = function() {
	u1.style.display = "flex"
	act2.style.display = "none"
	act1.style.display = "block"
}

// 通过id获取元素
function my$(id) {
	return document.getElementById(id);
}

// 弹出搜索框
if (my$("mask").style.display = "none") {
	my$("seach").onclick = function() {
		my$("mask").style.display = "block"
	}
};
my$("del_search").onclick = function() {
	my$("mask").style.display = "none"
};
// 遍历关键字录入搜索框
var keywords = my$("key").getElementsByTagName("span");
for (var i = 0; i < keywords.length; i++) {
	keywords[i].onclick = function() {
		my$("input_key").value = this.innerText;
	}
}
h6.onclick=function(){
	mask_info.style.display="block";
	h6.style.display="none";
}
