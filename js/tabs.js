// $(document).ready(function(){
//
//     var $wrapper = $('.side2_y'),
//         $allTabs = $wrapper.find('.tab_content > div'),
//         $tabMenu = $wrapper.find('.tab_menu li'),
//         $line = $('<div class="line"></div>').appendTo($tabMenu);
//
//     $allTabs.not(':first-of-type').hide();
//     $tabMenu.filter(':first-of-type').find(":first").width('100%');
//
//     $tabMenu.each(function(i){
//         $(this).attr('data-tab','tab'+i);
//     });
//
//     $allTabs.each(function(i){
//         $(this).attr('data-tab','tab'+i);
//     });
//
//     $tabMenu.on('click',function () {
//
//         var dataTab = $(this).data('tab'),
//             $getWrapper = $(this).closest($wrapper);
//
//         $getWrapper.find($tabMenu).removeClass('active');
//
//         $(this).addClass('active');
//
//         $getWrapper.find('.line').width(0);
//
//         $(this).find($line).animate({'width':'100%'},'fast');
//
//         $getWrapper.find($allTabs).hide();
//         $getWrapper.find($allTabs).filter('[data-tab]='+dataTab+']').show();
//
//     })
// })

$(function (){

    $('.side2_y .side_sell a').mouseover(function(){

        $(this).addClass('on').siblings().removeClass('on');

        var index = $(this).index();

        number = index;

        $('.side2_y .tab_content div').hide();

        $('.side2_y .tab_content div:eq('+index+')').show();
    });

    var auto = 1;

    if(auto == 1){

        var number = 0;

        var maxNumber = $('.side2_y .side_sell a').length;

        function autotab(){

            number++;

            number == maxNumber ? number = 0 : number;

            $('.side2_y .side_sell a:eq('+number+')').addClass('on').siblings().removeClass('on');

            $('.side2_y .tab_content div:eq('+number+')').show().siblings().hide();
        }

        var tabChange = setInterval(autotab,3000);

        $('.side2_y').mouseover(function(){
            clearInterval(tabChange);
        });
        $('.side2_y').mouseout(function () {
            tabChange = setInterval(autotab,3000);
        });
    }
});