var tabs = $(".tab>li>a");

function init(idx) {
	selectTab(idx);
}

function selectTab(idx) {
	for (var i = 0; i < tabs.length; i++)
		tabs.eq(i).parent().css("background-color", "rgba(40,40,40,0.15)");

	tabs.eq(idx).parent().css({
		"background-color": "#fff",
		"border-bottom": "#fff",
	});
}