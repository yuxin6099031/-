/**
 * Created by Administrator on 2017/8/13.
 */
window.onload = function () {
/*侧道航*/
    let bannerLeft = document.getElementsByClassName('bannerLeft')[0]
    let bannerLeftLI = bannerLeft.getElementsByTagName('li')
    let bannerLeftYc = document.getElementsByClassName('bannerLeftYc')
    for ( let i=0;i<bannerLeftYc.length;i++){
        bannerLeftLI[i].onmouseover = function () {
            bannerLeftYc[i].style.display = 'block';
        }
        bannerLeftLI[i].onmouseout = function () {
            bannerLeftYc[i].style.display = 'none';
        }
    }
/*轮播*/
let lis = document.getElementsByClassName('imgli');
let lbds = document.getElementsByClassName('lbdxiao');
let banner = document.getElementsByClassName('bannerRight')[0]
let a = 0;
for (let i=0;i<lbds.length;i++){
    lbds[i].onclick = function () {
        lbds[a].classList.remove('hot');
        lbds[i].classList.add('hot');
        lis[a].style.display = 'none';
        lis[i].style.display = 'block';
        a = i;
    }
}
t= setInterval(fn,3000)
function fn() {
    a++;
    if (a == lis.length) {
        a = 0;
    }
    for (let j = 0; j < lis.length; j++) {
        lis[j].style.display = 'none'
        lbds[j].classList.remove('hot');
    }
    lis[a].style.display = 'block';
    lbds[a].classList.add('hot');

}
banner.onmouseover = function () {
    clearInterval(t)
}
banner.onmouseout = function () {
    t= setInterval(fn,3000)
}

/*固定导航*/
 let sli = document.querySelectorAll('.slide>li');
 let slide = document.querySelector('.slide');
 let ycscBox = document.querySelector('.ycscBox')
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
 
        if (t>=700){
            slide.style.width = '36px';
            slide.style.height= '332px';
            ycscBox.style.height = '50px'

                       
        }else{
            slide.style.width = '0px';
            slide.style.height= '0px';
            ycscBox.style.height = '0px'
         }
    }
}
        // posArr.forEach(function (value,index) {
            //     if (ch+st >=value+300){
            //         sli[nthFloor].classList.remove('active');
            //         sli[index].classList.add('active');
            //         nthFloor = index;
            //         let imgs = floor[index].getElementsByTagName('img');
            //         for (let i=0;i<imgs.length;i++){
            //             imgs[i].src = imgs[i].getAttribute('imgPath');
            //         }
            //     }
            // })