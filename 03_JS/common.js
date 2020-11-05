
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.4.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$('#nav-icon').on('click', function () {
    
    toggleNavIcon();
    toggleMenuBarDisplayFlex();
    toggleContentFade();
    toggleLogoFade();
    $('html','.header','.lang-header').toggleClass('hidden');
    $('#overlay').fadeToggle();
    
});
$(window).on('resize', function () {
    var windowWidth = $(window).width();
    var menubar = $('.menuBar');

    if (windowWidth > 719 && $(menubar).css('display') == 'flex') {
        toggleNavIcon();
        toggleContentFade();
        toggleLogoFade();
        $(menubar).css('display', 'inline-block');
    }
    if (windowWidth < 719 && $(menubar).css('display') == 'inline-block') {
        $(menubar).css('display', 'none');
    }
});
function toggleContentFade() {
    var content = $('.container');
    if ($(content).css('display') != "none") {
        $(content).css('display', 'none');
    } else {
        $(content).fadeToggle();
    }
}
function toggleLogoFade() {
    var logo = $('.logo');
    $(logo).fadeToggle();
}
function toggleMenuBarDisplayFlex() {
    var menubar = $('.menuBar');
    if ($(menubar).css('display') == "none") {
        menubar.css('display', 'flex');
    } else {
        menubar.css('display', 'none');
    }

}
function toggleNavIcon() {
    var nav = $('#nav-icon');
    if (!$(nav).hasClass('animate-icon')) {
        $(nav).addClass('animate-icon');
    } else {
        $(nav).removeClass('animate-icon');
    }
}
