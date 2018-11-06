define(['Zepto', 'Swiper'], function(Zepto, Swiper) {
    return {
        sw: function() {
            new Swiper('.container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        }
    }
})