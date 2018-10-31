import * as $ from 'jquery';
import {MDCRipple} from '@material/ripple';

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

$(document).ready(function () {
    $("#nav-mobile-res-btn").click(function () {
        $('#nav-list').slideToggle(300);
        if ($("#c-nav-bar").hasClass('mob-res-on')) {
            $("#c-nav-bar").removeClass('mob-res-on');
        } else {
            $("#c-nav-bar").addClass('mob-res-on');
        }
    });
    let buttonRipple = new MDCRipple(document.querySelector('.mdc-button')!);
});

