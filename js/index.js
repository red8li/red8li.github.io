/**
 * Created by Administrator on 2017/9/15 0015.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        //为每个屏幕设置颜色
        sectionsColor : ['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //滚到某个屏幕后的回调函数
        afterLoad: function(anchorLink, index){
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);

        }

    });
});