require(['bs', 'sw'], function(BScroll, Swiper) {
    BScroll.bs();
    Swiper.sw();
    $('footer dl').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
})