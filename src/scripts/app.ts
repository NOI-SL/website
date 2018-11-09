import * as $ from 'jquery';

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop !== undefined) {
        if (scrollTop >= 40.79999923706055) {
            $("#c-nav-bar").addClass('fixed');
            $("#c-nav-bar").removeClass('abs');
        } else {
            $("#c-nav-bar").removeClass('fixed');
            $("#c-nav-bar").addClass('abs');
        }
    }
});
