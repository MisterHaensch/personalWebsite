$(document).ready(function(){
    $('.chatIcon').click(function(event){
        $('.chatBox').toggleClass('active')
        $('.conv-form-wrapper').convform({selectInputStyle: 'disable'})
    });
    //$('.conv-form-wrapper').convform({selectInputStyle: 'disable'}); 
})
