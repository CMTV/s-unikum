$().ready(function()
{
    $('.reviews-container').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        adaptiveHeight: true,

        prevArrow: '<button class="slick-prev slick-arrow" title="Предыдущий отзыв" type="button"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" title="Следующий отзыв" type="button"><i class="fas fa-arrow-right"></i></button>'
    });
});