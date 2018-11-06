define(['Zepto', 'BScroll'], function(Zepto, BScroll) {
    return {
        bs: function() {
            new BScroll('.wrapper', {
                probeType: 2,
                click: true
            });
        }
    }
})