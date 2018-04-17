$(function() {
    var topBtn = $(".nav");
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});