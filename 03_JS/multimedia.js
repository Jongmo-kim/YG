var tabs = $(".tab>li>a");
var listBoxTabs = $(".btn-wrap>ul>li>a");
var listBoxs = $(".list-box");

function init(idx) {
	selectTab(idx);
	selectListBoxTab(idx);
}

function selectTab(idx) {
	for (var i = 0; i < tabs.length; i++)
		tabs.eq(i).parent().css("background-color", "rgba(40,40,40,0.15)");

	tabs.eq(idx).parent().css({
		"background-color": "#fff",
		"border-bottom": "#fff",
	});
}

function selectListBoxTab(idx) {
	for (var i = 0; i < listBoxTabs.length; i++) {
		listBoxTabs.eq(i).css({
			"color": "#282828",
			"background-color": "#fff"
		});
	}

	listBoxTabs.eq(idx).css({
		"color": "#fff",
		"background-color": "#282828"
	});

	contents(idx);
}

function contents(idx) {
	listBoxs.hide();
	listBoxs.eq(idx).show();
}