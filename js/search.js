function $(a) {
	if (document.getElementById) {
		return document.getElementById(a)
	} else if (document.layers) {
		return document.layers[a]
	} else {
		return false
	}
}(function() {
	function initHead() {
		setTimeout(showSubSearch, 0)
	};

	function showSubSearch() {
		$("pt1").onmouseover = function() {
			$("pt2").style.display = "";
			$("pt1").className = "select select_hover"
		};
		$("pt1").onmouseout = function() {
			$("pt2").style.display = "none";
			$("pt1").className = "select"
		};
		$("s1").onclick = function() {
			selSubSearch(1);
			$("q").focus()
		};
		$("s2").onclick = function() {
			selSubSearch(2);
			$("q").focus()
		};
		$("s3").onclick = function() {
			selSubSearch(3);
			$("q").focus()
		};
		$("s4").onclick = function() {
			selSubSearch(4);
			$("q").focus()
		};
		$("s5").onclick = function() {
			selSubSearch(5);
			$("q").focus()
		};
	};

	function selSubSearch(a) {
		hbb = [];
		hbb = {
			1: ["<spanb>&nbsp;</spanb>", "1"],
			2: ["<spang>&nbsp;</spang>", "2"],
			3: ["<span360>&nbsp;</span360>", "3"],
			4: ["<spanbi>&nbsp;</spanbi>", "4"],
			5: ["<spanso>&nbsp;</spanso>", "5"]
		};
		$("s0").innerHTML = hbb[a][0];
		$("pt2").style.display = "none";
		$("catid").value = hbb[a][1]
	};
	initHead()
})();
hbb = [];
hbb = {
	1: ["<spanb>&nbsp;</spanb>", "1"],
	2: ["<spang>&nbsp;</spang>", "2"],
	3: ["<span360>&nbsp;</span360>", "3"],
	4: ["<spanbi>&nbsp;</spanbi>", "4"],
	5: ["<spanso>&nbsp;</spanso>", "5"]
};
function bottomForm(a) {
	if (a.catid.value == 1) {
		window.open("http://www.baidu.com/baidu?word=" + encodeURI(a.infos.value));
		return false
	} else if (a.catid.value == 2) {
		window.open("http://www.google.com/search?hl=zh-CN&q=" + encodeURI(a.infos.value));
		return false
	} else if (a.catid.value == 3) {
		window.open("http://www.so.com/s?q=" + encodeURI(a.infos.value));
		return false
	} else if (a.catid.value == 4) {
		window.open("http://www.bing.com/search?q=" + encodeURI(a.infos.value));
		return false
	} else if (a.catid.value == 5) {
		window.open("http://www.sogou.com/sogou?query=" + encodeURI(a.infos.value));
		return false
	} else {
		window.open("http://www.baidu.com/baidu?word=" + encodeURI(a.infos.value));
		return false
	}
}