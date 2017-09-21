/*
 * Created by Administrator on 2017/8/23.
 */
/*
    属性：
        个数
        数度
        那些字符
        得分
        关卡
        生命
        减分
    方法:
        开始
        消除
        产生字符
            个数
            那些
        下一关
        重新开始
 */

/*Game的构造方法*/
function Game() {
    this.charSheet = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];//创建字符
    this.length = 5;//它的长度
    this.elements = [];//用来保存页面中的元素
    this.position = [];//用来存放位置元素
    this.speed = 10;//速度
    this.score = 0;//分数
    this.scoreObj = document.querySelector('div.score>span');
    this.gq = 10;
    this.gqg=1;
    this.gqgObj = document.querySelector('div.gq>span');
    this.HP=10;
    this.HPObj = document.querySelector('div.HP>span');
    this.t;
    this.restart


}
Game.prototype ={
    start:function () {
        this.getChars(this.length);//开始产生字符,调用getChars方法
        this.drop();//让字符下落，调用drop方法
        this.key();//消除字符，调用key方法
    },
    /*生成字符方法*/
    getChars:function (length) {
        /*当start方法开始后，for循环开始生成字符*/
        for (let i=0;i<length;i++){
            this.getChar();//调用getChar方法生成字符
        }
    },
    getChar:function () {
        // let num = Math.floor(Math.random()*this.charSheet.length);
        let num;//声明num；
        let lefts;//声明lests
        // let lefts = (innerWidth - 600)*Math.random()+300;//字符距离屏幕左右的距离
        let tops = Math.random()*100;//字符距离屏幕上方的距离

        do{
            num = Math.floor(Math.random()*this.charSheet.length);//把charSheet的内容随机获取一个，并且取整
        }while(this.cheackRepeat(num))

        do{
            lefts = (innerWidth - 600)*Math.random()+300;//字符距离屏幕左右的距离
        }while(this.cheackPosition(lefts))

        let divs = document.createElement('div');//创建一个div

        divs.classList.add('char');//给div加一个char的类名，以及样式
        /*每个字符产生随机位置*/
        divs.style.cssText = `
            left:${lefts}px;
            top:${tops}px;
        `;
        divs.innerText = this.charSheet[num];//把获取的随机5个字符的内容，放到div的内容容器里
        document.body.appendChild(divs);//在body里插入div
        this.elements.push(divs);//把num随机的内容放入elements这个数组中，保存下来
        this.position.push(lefts)

    },

    cheackRepeat:function (num) {
        return this.elements.some(value =>value.innerText == this.charSheet[num]/*[0]*/);
    },

    cheackPosition:function (lefts) {
         return this.position.some(function(value){
            return Math.abs(value-lefts)<50
        })
    },

    /*字符下落方法*/
    drop:function () {
        let that = this;
        this.t = setInterval(function () {
            for (let i=0;i<that.elements.length;i++){

                let tops = that.elements[i].offsetTop;
                that.elements[i].style.top = `${tops + that.speed}px`;
                if (tops >=500){
                    document.body.removeChild(that.elements[i]);
                    that.elements.splice(i,1);
                    that.position.splice(i,1);
                    // that.getChar();
                    that.HP--;
                    that.HPObj.innerText = that.HP;
                    if(that.HP==0){
                        if(confirm('游戏结束，是否重新开始？')){
                            that.restart();

                        }else {
                            close();
                        }
                    }
                }

            }
            if(that.elements.length<that.length){
                that.getChar();
            }

        },500)
    },
    /*键盘输入函数*/
    key:function () {
        let that = this;
        document.onkeydown = function (e) {
            let char = String.fromCharCode(e.keyCode);
            for (let i=0;i<that.elements.length;i++){
                if (char == that.elements[i].innerText){
                    // console.log(that.elements[i])
                    document.body.removeChild(that.elements[i]);
                    that.position.splice(i,1);
                    that.elements.splice(i,1);
                    that.score++;
                    that.scoreObj.innerText = that.score;


                    if (that.score == that.gq){
                        that.gqg++;
                        that.gqgObj.innerText = that.gqg;
                        that.next();
                    }
                }
            }
        }
    },
    next:function () {
        clearInterval(this.t);
        for (let i=0;i<this.elements.length;i++){
            document.body.removeChild(this.elements[i]);
        }
        this.elements = [];
        this.position = [];
        this.length++;
        this.speed++;
        this.gq+=10;
        this.start();

    },
    restart:function () {

        clearInterval(this.t);
        for (let i=0;i<this.elements.length;i++){
            document.body.removeChild(this.elements[i]);
        }
        this.elements = [];
        this.position = [];
        this.length = 5;
        this.HP =10;
        this.HPObj.innerText = this.HP;
        this.gqg =1;
        this.gqgObj.innerText = this.gqg;
        this.gq=10;
        this.score = 0;
        this.scoreObj.innerText = this.score;
        this.start();
    }























}