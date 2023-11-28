$(document).ready(function() {
    $('.btn.b1').click(function() {
        $('.gridbox').removeClass('slide2 slide3').toggleClass('slide1');
        console.log("btn1 pressed");
    });
    
    $('.btn.b2').click(function() {
        $('.gridbox').removeClass('slide1 slide3').toggleClass('slide2');
        console.log("btn2 pressed");
    });
    
    $('.btn.b3').click(function() {
        $('.gridbox').removeClass('slide1 slide2').toggleClass('slide3');
        console.log("btn3 pressed");
    });
});