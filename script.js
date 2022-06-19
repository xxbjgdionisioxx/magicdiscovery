$(document).ready(function () {
    var onScroll = function () {
        var scrollTop = $(this).scrollTop();
        $('.paralax-image').each(function (index, elem) {
            var $elem = $(elem);
            $elem.find('img').css('top', scrollTop - $elem.offset().top);
        });
    };
    onScroll.apply(window);
    $(window).on('scroll', onScroll);
});

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {
        if (this.hash !== "") {

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 1000, function () {

                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    window.location.hash = hash;
                }
            });
            return false;
        }
    });
    