
function Scroll(){

}
Scroll.prototype.upScroll = function (current,_h,inset){
    var current = document.getElementById(current);
    // 设置向上滚动的时间间隔
    var timer = setInterval(function(){

        var _ele = current.firstElementChild;
        _ele.style.marginTop = _h;
        clearInterval(timer);
    },1000);

    setInterval(function(){
        var _ele = current.firstElementChild;

        _ele.style.marginTop = '0px';

        current.appendChild(_ele);

        var _ele = current.firstElementChild;
        _ele.style.marginTop = _h;
    },inset);
}

var myScroll = new Scroll();