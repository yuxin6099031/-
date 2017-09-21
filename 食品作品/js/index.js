
window.onload = function () {
    /*新闻动态*/
    let XwDtNeiRong = document.querySelector('div>.XwDtNeiRong');
    let XWDTNR = document.querySelector('.XWDTNR');
    let XWDTNR2 =document.querySelectorAll('.XWDTNR2')
    let a =50;
    function Marquee(){
        if(XWDTNR2.offsetTop-XwDtNeiRong.scrollTop<=0){
            XwDtNeiRong.scrollTop-=XWDTNR.offsetHeight
        }else{
            XwDtNeiRong.scrollTop++
        }
        if( XwDtNeiRong.scrollTop == 295){
            XwDtNeiRong.scrollTop = 1
        }
    }
    let t = setInterval(Marquee,a)
    XwDtNeiRong.onmouseover=function() {clearInterval(t)};
    XwDtNeiRong.onmouseout=function() {t = setInterval(Marquee,a)}
    /*新品上架*/
    let SangPing = document.querySelector('.SangPing');
    let AnNiuRight = document.querySelector('.AnNiuRight');
    let AnNiuLeft = document.querySelector('.AnNiuLeft');
    AnNiuRight.onclick = function () {
        SangPing.style.transform = 'translateX(-506px)';
        SangPing.style.transition = 'all 0.5s';
    }
    AnNiuLeft.onclick = function () {
        SangPing.style.transform = 'translateX(0px)';
        SangPing.style.transition = 'all 0.5s';
        SangPing.style.display = 'block';
    }

}












