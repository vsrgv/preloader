$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    setTimeout(function(){
        $('#loader-wrapper').remove();
    },5000);
});
