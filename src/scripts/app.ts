import * as $ from 'jquery';


var navBar = document.getElementById('c-nav-bar');

window.addEventListener('scroll',function(){
    var scrollTop = this.scrollY;
    if(scrollTop >= 40.79999923706055){
        if (navBar !== null) {
            navBar.classList.replace('abs','fixed');
        }
    }else{
        if (navBar !== null) {
            navBar.classList.replace('fixed','abs');
        }
    }
});

var mob_res_btn = document.getElementById('nav-mobile-res-btn');

if (mob_res_btn !== null) {
    mob_res_btn.addEventListener('click',function(){
        $('#nav-list').slideToggle(300);
        if($("#c-nav-bar").hasClass('mob-res-on')){
            $("#c-nav-bar").removeClass('mob-res-on');
        }else{
            $("#c-nav-bar").addClass('mob-res-on');
        }
    });
}