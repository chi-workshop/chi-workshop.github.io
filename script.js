jQuery.extend(jQuery.easing,{
    easeInOutExpo: function(x, t, b, c, d){
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

$(document).ready(function(){

    $('a[href=#]').click(function(e){
        e.preventDefault();
        $('nav').removeClass('visible');
        $('html,body').stop().animate({scrollTop: $('.'+$(this).data('scrollto')).offset().top-120 }, 700, 'easeInOutExpo', function(){});
    });

    $('.toggle-menu').click(function(){
        $('nav').toggleClass('visible');
    });

    if($(window).width() < 800){
        $('.pricing > div > div:nth-of-type(3)').insertAfter($('.pricing > div > div:nth-of-type(1)'));
    }

});


$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});