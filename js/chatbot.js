$(document).ready(function(){
    $('.chatIcon').click(function(event){
        $('.chatBox').toggleClass('active')
        $('.conv-form-wrapper').convform({selectInputStyle: 'disable'})
        $('')
    });
    //$('.conv-form-wrapper').convform({selectInputStyle: 'disable'}); 
});

$(document).ready(function(){
    $('.chatIcon').click(function(event){
        $('.chatIcon').removeAttr('id');
    })
});

var num = 10; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});