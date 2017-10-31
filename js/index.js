window.onload = function(){
	(function(){
		var navuls = document.getElementsByClassName('nav_list_ul')[0].getElementsByTagName('ul');
		//var navuls = x[0].getElementsByTagName('ul');
		for(var i=0;i<navuls.length;i++){
			navuls[i].onmouseover = showlist;
			//navuls[i].onmouseout  = hiddenlist;
		}	
		function showlist(){
			for(var i=0;i<navuls.length;i++){
			if(navuls[i].className=="selected")
				navuls[i].className = "no-select";
				this.className = 'selected';
			}
		}

	}());

	var t1 = window.setInterval(changeimg,3000);
}
var changeimg = function(){
	var imgs = document.getElementsByClassName('picture')[0].getElementsByTagName('img');
	var last_index = imgs.length-1;
	if(imgs[last_index].className=="active"){
		imgs[last_index].className="no-active";
		imgs[0].className="active";
		return;
	}else{
		for(var i=0;i<imgs.length-1;i++){
			if(imgs[i].className=="active"){
				imgs[i].className="no-active";
				imgs[i+1].className="active";
				return;
			}
		}
	}
}