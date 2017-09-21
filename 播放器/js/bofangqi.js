/**
 * Created by Administrator on 2017/8/31.
 */
window.onload = function () {
    let audio = document.querySelector('audio');
    /*播放按钮*/
    let a = true;
    let bofang = document.querySelector('.bofang');
    bofang.onclick = function () {
        if (a){
            bofang.classList.remove('icon-player-play');
            bofang.classList.add('icon-zanting');
            audio.play();
            a = false;
        }else {
            bofang.classList.remove('icon-zanting');
            bofang.classList.add('icon-player-play');
            audio.pause();
            a=true;
        }

    }
    /*整体播放*/
    let  licryGeMing= document.querySelector('.MingZi');
    let licry = document.querySelector('.licry');
    let geMing = document.querySelector('.GeMing');
    let GeShou = document.querySelector('.GeShou');
    let geShouImg = document.querySelector('.GeShouimg>img');
    let geMing1 = document.querySelector('.GeMing1');
    let GeShou1 = document.querySelector('.GeShou1');
    let ZongTime = document.querySelector('.ZongTime');
    let JinDuTiao = document.querySelector('.JinDuTiao');
    let DangQianTime = document.querySelector('.DangQianTime')
    let i =0;
    render(database[i])
    function render(data){
        geShouImg.src=data.photo;
        geMing.innerText=data.songs;
        geMing1.innerText=data.songs;
        GeShou.innerText=data.name;
        GeShou1.innerText=data.name;
        ZongTime.innerText=data.alltime;
        audio.src=data.src;
        audio.volume=0.5;
        JinDuTiao.style.width='0';
        for(let i=0;i<data.lyrics.length;i++){
            licry.innerHTML+=`
				<li class="list${i}">${data.lyrics[i].lyric}</li>
			`;
        }
    }
    /*歌词滚动*/
    audio.ontimeupdate=function(){
        let ct = audio.currentTime;
        let dura = audio.duration;
        let a=Math.floor(audio.currentTime/60)>10?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`;
        let b=Math.floor(audio.currentTime%60)>10?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`;
        let curT = `${a}:${b}`;
        DangQianTime.innerText= curT;
        JinDuTiao.style.width = `${ct/dura*100}%`;
        database[i].lyrics.forEach((ele,index)=>{
            if(ele.time==curT){
                let k=index;
                if(index<4){
                    index = 0;
                }else{
                    index-=4;
                }
                licry.innerHTML='';
                for(let j=index;j<database[i].lyrics.length;j++){
                    licry.innerHTML+=`
						<li class="list${j}">${database[i].lyrics[j].lyric}</li>
					`;
                }
                document.querySelector(`.list${k}`).style.color = '#FF6700';
            }
        })

    }
    /*播放完*/
    let m = 0
    audio.onended = function(){
        if(m==0){
            i++;
            if(i==database.length){
                i=0;
            }
        }else if(m==1){
            i = Math.floor(Math.random()*database.length);
        }
        render(database[i]);
        audio.play();
    }
    /*音量*/
        let YLJiinDuBox = document.querySelector('.YLJiinDuBox');
        let YLJinDuTiao = document.querySelector('.YLJinDuTiao');
        let YLJinDuAnNiu = document.querySelector('.YLJinDuAnNiu');
        YLJinDuAnNiu.onmousedown = function(e){
            e.preventDefault();
            let cx = e.clientX;
            let L = this.offsetLeft;
            let pL;
            YLJiinDuBox.onmousemove = function(e){
                e.preventDefault();
                let ox = e.clientX;
                pL = ox-cx+L;
                if(pL<=-5){
                    pL=-5;
                }
                if(pL>=(YLJiinDuBox.offsetWidth-YLJinDuAnNiu.offsetWidth/2)){
                    pL=(YLJiinDuBox.offsetWidth-YLJinDuAnNiu.offsetWidth/2);
                }
                YLJinDuAnNiu.style.left = pL+'px';
                YLJinDuTiao.style.width = pL+5+'px';
                audio.volume=(pL+5)/100;
            }
            YLJinDuAnNiu.onmouseup = function(){
                YLJinDuAnNiu.onmouseup =null;
                YLJiinDuBox.onmousemove= null;
                // alert(1)
            }
        }
    //上一首
    let shangyiqu = document.querySelector('.shangyiqu')
    shangyiqu.onclick = function(){
        if(m==0){
            if(i==0){
                i=database.length;
            }
            i--;
        }else if(m==1){
            i = Math.floor(Math.random()*database.length);
        }
        render(database[i]);
        audio.play();
    }
    //下一首
    let xiayiqu = document.querySelector('.xiayiqu')
    xiayiqu.onclick = function(){
        if(m==0){
            i++;
            if(i==database.length){
                i=0;
            }
        }else if(m==1){
            i = Math.floor(Math.random()*database.length);
        }
        render(database[i]);
        audio.play();
    }

}