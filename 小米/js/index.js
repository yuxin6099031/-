/**
 * Created by Administrator on 2017/8/10.
 */
window.onload = function () {
    // /*购物车*/
    let gwcyc = $('.gwcyc');
    let gwcneirong =$('.gwcneirong');
        gwcneirong.mouseenter(function () {
            gwcyc.css({height:'98px'})
        });
        gwcneirong.mouseleave(function () {
            gwcyc.css({height:'0px'})
        });
    /*导航*/
    let navYcReiRong = $('.navYcReiRong');
    let navdhli =$('.navdhli');
        navdhli.mouseenter(function () {
            navYcReiRong.eq($(this).index()).css({height:'229px',borderTop:'1px solid #e0e0e0',boxShadow:'0px 20px 20px -15px rgba(0,0,0,0.1)'})
        });
        navdhli.mouseleave(function () {
            navYcReiRong.eq($(this).index()).css({height:'0',borderTop:'0px solid #e0e0e0',boxShadow:'0px 20px 20px -15px rgba(0,0,0,0)'})
        });
    /*搜索栏*/
    let inputtext = $('.tex');
    let mix = $('.mix');
    let znds = $('.znds');
    let textxl = $('.texyc');
    let sousuoanniu = $('.sousuoanniu');
        inputtext.focus(function () {
            sousuoanniu.css({borderTop:'1px solid #FF6700',borderRight:'1px solid #FF6700',borderBottom:'1px solid #FF6700'});
            textxl.css({border:'1px solid #FF6700',borderTop:'0px',display:'block'});
            inputtext.css({border:'1px solid #FF6700'});
            mix.css({display:'none'});
            znds.css({display:'none'})
        });

        inputtext.blur(function () {
            sousuoanniu.css({border:'1px solid #E0E0E0'});
            inputtext.css({border:'1px solid #E0E0E0'});
            textxl.css({border:'0px',display:'none'});
            mix.css({display:'block'});
            znds.css({display:'block'});
        });
    //轮播点
    let lis = $('.imgli');
    let lbds = $('.lbdxiao');
    let banner = $('.imgbox')
    let a = 0;
    lbds.click(function () {
        $(this).css({backgroundColor: 'rgba(255,255,255,0.8)',border: '2px solid #9B9B9B'})

    })
    for (let i = 0; i < lbds.length; i++) {
        lbds[i].onclick = function () {
            lbds[a].classList.remove('hot');6
            lbds[i].classList.add('hot');
            lis[a].style.display = 'none';
            lis[i].style.display = 'block';
            a = i;
        }
    }
    t = setInterval(fn, 3000)
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
        t = setInterval(fn, 3000)
    }
    function fn1() {
        a--;
        if (a == -1) {
            a = lis.length - 1;
        }
        console.log(a)
        for (let k = 0; k < lis.length; k++) {
            lis[k].style.display = 'none'
            lbds[k].classList.remove('hot');
        }
        lis[a].style.display = 'block';
        lbds[a].classList.add('hot');

    }

    let leftjtbox = document.getElementsByClassName('leftjtbox')[0];
    let rightjtbox = document.getElementsByClassName('rightjtbox')[0];
    rightjtbox.onclick = fn;
    leftjtbox.onclick = fn1;
    /*小米明星单品*/
    let mxdpkuang = document.getElementsByClassName('mxdpkuang')[0]
    let anniuleft = document.getElementsByClassName('anniuleft')[0]
    let anniuright = document.getElementsByClassName('anniuright')[0]
    let kaiguan = true;
    anniuright.onclick = function () {
        mxdpkuang.style.transform = 'translateX(-1225px)'
        mxdpkuang.style.transition = 'all 0.5s';
        anniuleft.style.color = '#b1b1b1'
        anniuright.style.color = '#e0e0e0'

        // mxdpkuang.style.display = 'none';
    }
    anniuleft.onclick = function () {
        mxdpkuang.style.transform = 'translateX(0px)'
        mxdpkuang.style.transition = 'all 0.5s';
        mxdpkuang.style.display = 'block';
        anniuleft.style.color = '#e0e0e0'
        anniuright.style.color = '#b1b1b1'
        // mxdpkuang1.style.display = 'none';
    }
    setInterval(function () {
        if (kaiguan) {
            mxdpkuang.style.transform = 'translateX(-1225px)'
            mxdpkuang.style.transition = 'all 0.5s';
            anniuleft.style.color = '#b1b1b1'
            anniuright.style.color = '#e0e0e0'
            kaiguan = false
        } else {
            mxdpkuang.style.transform = 'translateX(0px)'
            mxdpkuang.style.transition = 'all 0.5s';
            mxdpkuang.style.display = 'block';
            anniuleft.style.color = '#e0e0e0'
            anniuright.style.color = '#b1b1b1'
            kaiguan = true;
        }
    }, 7000)
    // let zd1 = setInterval(zdhs1,3000)
    // function zdhs1() {
    //     let mxdpkuang = document.getElementsByClassName('mxdpkuang')[0]
    //     let anniuleft = document.getElementsByClassName('anniuleft')[0]
    //     let anniuright = document.getElementsByClassName('anniuright')[0]
    //     mxdpkuang.style.transform = 'translateX(0px)'
    //     mxdpkuang.style.transition = 'all 0.5s';
    //     mxdpkuang.style.display = 'block';
    //     anniuleft.style.color = '#e0e0e0'
    //     anniuright.style.color = '#b1b1b1'
    //     clearInterval(zd1)
    // }


    /*为你推荐*/
    let mxdpkuang3 = document.getElementsByClassName('mxdpkuang3')[0]
    let anniuleft1 = document.getElementsByClassName('anniuleft1')[0]
    let anniuright1 = document.getElementsByClassName('anniuright1')[0]
    let kaiguan1 = true;
    anniuright1.onclick = function () {
        mxdpkuang3.style.transform = 'translateX(-1225px)'
        mxdpkuang3.style.transition = 'all 0.5s';
        anniuleft1.style.color = '#b1b1b1'
        anniuright1.style.color = '#e0e0e0'
        // mxdpkuang3.style.display = 'none';
    }
    anniuleft1.onclick = function () {
        mxdpkuang3.style.transform = 'translateX(0px)'
        mxdpkuang3.style.transition = 'all 0.5s';
        // mxdpkuang3.style.display = 'block';
        // mxdpkuang4.style.display = 'none';
        anniuleft1.style.color = '#e0e0e0'
        anniuright1.style.color = '#b1b1b1'
    }
    setInterval(function () {
        if (kaiguan1) {
            mxdpkuang3.style.transform = 'translateX(-1225px)'
            mxdpkuang3.style.transition = 'all 0.5s';
            anniuleft1.style.color = '#b1b1b1'
            anniuright1.style.color = '#e0e0e0'
            kaiguan1 = false
        } else {
            mxdpkuang3.style.transform = 'translateX(0px)'
            mxdpkuang3.style.transition = 'all 0.5s';
            mxdpkuang3.style.display = 'block';
            anniuleft1.style.color = '#e0e0e0'
            anniuright1.style.color = '#b1b1b1'
            kaiguan1 = true;
        }
    }, 7000)

    /*家电-----周边*/
    let BoxLI = document.querySelectorAll('.BoxLI')
    let rms = document.querySelectorAll('.rm')
    let q = 0;

    for (let i = 0; i < rms.length; i++) {
        rms[i].onmouseover = function () {
            BoxLI[q].classList.remove('blockIndex')
            BoxLI[i].classList.add('blockIndex')
            rms[q].classList.remove('rmbiankuang')
            rms[i].classList.add('rmbiankuang')
            q = i;
            console.log(i)

        }

    }
    /*内容*/
    let neirBox1 = document.querySelectorAll('.neirBox1')[0];
    let neirBox2 = document.querySelectorAll('.neirBox2')[0];
    let neirBox3 = document.querySelectorAll('.neirBox3')[0];
    let neirBox4 = document.querySelectorAll('.neirBox4')[0];
    let neirLi = document.querySelectorAll('.neirLi');
    let dian1 = document.querySelectorAll('.dian1');
    let dian2 = document.querySelectorAll('.dian2');
    let dian3 = document.querySelectorAll('.dian3');
    let dian4 = document.querySelectorAll('.dian4');
    let neirLeftJt1 = document.querySelectorAll('.mxdp-one-amleft1')[0];
    let neirLeftJt2 = document.querySelectorAll('.mxdp-one-amleft2')[0];
    let neirLeftJt3 = document.querySelectorAll('.mxdp-one-amleft3')[0];
    let neirLeftJt4 = document.querySelectorAll('.mxdp-one-amleft4')[0];
    let neirRightJt1 = document.querySelectorAll('.mxdp-one-amright1')[0];
    let neirRightJt2 = document.querySelectorAll('.mxdp-one-amright2')[0];
    let neirRightJt3 = document.querySelectorAll('.mxdp-one-amright3')[0];
    let neirRightJt4 = document.querySelectorAll('.mxdp-one-amright4')[0];
    let r = 0;
    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    for (let i = 0; i < dian1.length; i++) {
        dian1[i].onclick = function () {
            dian1[r].classList.remove('hot1');
            dian1[i].classList.add('hot1');
            neirBox1.style.marginLeft = `${-296 * i}px`
            neirBox1.style.transition = 'all 0.5s'
            r = i;

        }
        neirRightJt1.onclick = function () {
            if (r == 2) {
                return
            }
            r++;
            dian1[r].classList.remove('hot1')
            dian1[i].classList.add('hot1');
            ;
            neirBox1.style.marginLeft = `${-296 * r}px`
            neirBox1.style.transition = 'all 0.5s'
            console.log('右箭头i是-----',i)
            console.log('右箭头r是-----',r)
        }
        neirLeftJt1.onclick = function () {
            if (r == 0) {
                return
            }
            r--;
            dian1[r].classList.remove('hot1')
            dian1[r].classList.add('hot1');
            neirBox1.style.marginLeft = `${296 * r}px`
            console.log('左箭头i是-----',i)
            console.log('左箭头r是-----',r)
        }

    }

    for (let j = 0; j < dian2.length; j++) {
        dian2[j].onclick = function () {
            dian2[r1].classList.remove('hot1');
            dian2[j].classList.add('hot1');
            neirBox2.style.marginLeft = `${-296 * j}px`
            neirBox2.style.transition = 'all 0.5s'
            r1 = j;
        }

        for (let k = 0; k < dian3.length; k++) {

            dian3[k].onclick = function () {
                dian3[r2].classList.remove('hot1');
                dian3[k].classList.add('hot1');
                neirBox3.style.marginLeft = `${-296 * k}px`
                neirBox3.style.transition = 'all 0.5s'
                r2 = k;
            }

        }

        for (let l = 0; l < dian4.length; l++) {

            dian4[l].onclick = function () {
                dian4[r3].classList.remove('hot1');
                dian4[l].classList.add('hot1');
                neirBox4.style.marginLeft = `${-296 * l}px`
                neirBox4.style.transition = 'all 0.5s'
                r3 = l;
            }
        }

    }





















}












