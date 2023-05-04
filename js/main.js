//tab-menu

$(function () {
    const tabAnchor = $('.footer-tab ul > li a'),
        tabPanel = $('.contents-box')
    tabAnchor.click(function (e) {
        e.preventDefault();

        tabAnchor.removeClass('active');
        $(e.currentTarget).addClass("active")

        tabPanel.hide();
        let target = $(this).attr('href')
        $(target).show();
    })
    tabAnchor.eq(0).trigger("click")
});

//go-top btn
$(window).scroll(function(){
    if($(this).scrollTop()!=0){
        
        $('.fix-btn').addClass('show'),
        $('.fix-btn').fadeIn(500)
    }else{
        //go_top(화살표버튼)이 숨는다.
        $('.fix-btn').removeClass('show')
        $('.fix-btn').fadeOut(500)
    }
 
})