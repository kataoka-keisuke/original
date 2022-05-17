// メインカルーセル
$(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });
});
// アニメーション
$('.styling-item-box img').hover(
    function () {
        $(this).animate({
            'opacity': 0.5
        }, 300);
    },
    function () {
        $(this).animate({
            'opacity': 1
        }, 300);
    }
);



// モーダル（画像クリック時拡大）
$(function () {
    $('.styling-item-box img').click(function () {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
    });
    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function () {
        $('.modal').fadeOut();
        return false
    });
});

// section fadeIn
$(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const browserHeight = $(window).height();
    $('section').each(function () {
        const position = $(this).offset().top;
        if (scrollAmount > position - browserHeight + 100) {
            $(this).addClass('fadeIn');
        }
    });
});