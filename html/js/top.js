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

    $(window).resize(function(){
    var w = $(window).width();
    var x = 766;
    if (w <= x) {
        // スマホ時の処理
          console.log('sp');
    } else {
        // ＰＣ時の処理
    // prev,nextをクリックしたときに動かすliの数
    var li_move = 3;
    // prev,nextを追加
    $("#carouselwrap").append('<div id="prev" class="hide"></div><div id="next" class="show"></div>');
    // カルーセルパネルの幅を取得
    var carousel_wid = $("#carouselwrap").width();
    // liのpaddingを含む幅を取得
    var li_wid = $("#carousel li").outerWidth();
    // liの数を取得
    var li_num = $("#carousel li").size();
    // ulの幅を計算(liを全部横に並べた幅)
    var ul_wid = li_wid*li_num;
    // ulにスタイルを追加
    $('#carousel ul').css({
        position: 'absolute',
        top: '0',
        left: '0',
        width: ul_wid+'px'
    });
    $('#prev').click(function(){
        // prevをクリックしたときにclass=hideが指定されていなければ、以下を実行
        if($(this).attr("class") != "hide") {
            // ulのpositionを左に動かすアニメーション(:not(:animated)は動いている最中のクリック防止用)
            $('#carousel ul:not(:animated)').animate(
                {left:'+='+li_wid*li_move},
                600,
                function(){
                    // アニメーションが完了したらulのposition-leftの位置を取得
                    var ul_pos = boxPosition("#carousel ul","left");
                    // nextのclassを「show」に書き換え
                    $('#next').attr("class","show");
                    // ulのposition-leftが0の場合、prevのclassを「hide」に書き換え
                    if(ul_pos === 0) {
                        $('#prev').attr("class","hide");
                    }
                }
            );
        }
    });
    $('#next').click(function(){
        // nextをクリックしたときにclass=hideが指定されていなければ、以下を実行（以下略）
        if($(this).attr("class") != "hide") {
            $('#carousel ul:not(:animated)').animate(
                {left:'-='+li_wid*li_move},
                600,
                function(){
                    var ul_pos = boxPosition("#carousel ul","left");
                    $('#prev').attr("class","show");
                    if(carousel_wid > (ul_wid+ul_pos)) {
                        $('#next').attr("class","hide");
                    }
                }
            );
        }
    });
    function boxPosition(ele,pos) {
        // 指定されたエレメントのpositionの各値を取得
        var position = $(ele).position();
        // 指定された位置の値をリターン
        return position[pos];
    }

    }
});

});