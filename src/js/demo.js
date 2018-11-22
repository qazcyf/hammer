// document.getElementById("test").innerHTML = "存储表v请修HTML、CSS等文件，查看效果。";
function Popout(obj){
	this.bordercolor = obj.bordercolor || "#fff";
	this.bgc = obj.bgc || "white";
	this.nav = obj.nav || "提示消息";
	this.time = obj.time || 1000;
	// if (obj.type == "id") {
		this.btn = document.getElementById(obj.id);
		this.clickEvt1();
	// } else {
	// 	this.btn = document.getElementsByClassName(this.button);
	// 	this.clickEvt2();
	// }
}
Popout.prototype.addEvent = function(){
	var that = this;
	var navs = document.createElement("p");
	var bodys = document.getElementsByTagName('body')[0];
	navs.innerHTML = that.nav;
	navs.style.border = "2px solid " + that.bordercolor;
	navs.style.backgroundColor = that.bgc;
	navs.style.width = "200px";
	navs.style.lineHeight = "30px";
	navs.style.padding = "10px";
	navs.style.textAlign = "center";
	navs.style.position = "fixed";
	navs.style.left = "50%";
	navs.style.marginLeft = "-100px";
	navs.style.display = "block";
	setTimeout(function(){
		navs.style.display = "none";
	},that.time);
	bodys.appendChild(navs);
}
Popout.prototype.clickEvt1 = function(){
	var that = this;
	this.btn.onclick = function(){
		that.addEvent();
	}
}
// Popout.prototype.clickEvt2 = function(){
// 	var that = this;
// 	for (var i = 0; i < this.btn.length; i++) {
// 		this.btn[i].onclick = function(){
// 			that.addEvent();
// 		}
// 	}
// }