/*主体识别函数*/
function $(select,ranger) {
        if (typeof select == 'string'){
            if (ranger == undefined){
                ranger=document;
            }
            let selector = select.trim();
            let firstChar = selector.charAt(0);
            if (firstChar == '#'){
                return ranger.getElementById(selector.substring(1))
            }else if (firstChar == '.'){
                return ranger.getElementsByClassName(selector.substring(1))
            }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
                return ranger.getElementsByTagName(selector);
            }
        }else if (typeof select == 'function'){
            window.onload = function () {
                select();
            }
        }
    }
/*添加html标签*/
    function html(element,content) {
        if (arguments.length == 2){
            element.innerHTML = content;
        }else if (arguments.length == 1){
            return element.innerHTML;
        }
    }
/*添加css样式*/
    function css(element,attrObj) {
        for (let i in attrObj){
            element.style[i] = attrObj[i];
        }
    }
/*添加事件*/
       function on(collection, type, fn) {
        for(let i=0;i<collection.length;i++){
            collection[i][type] = fn;
        }
    }
/*移除事件*/
    function off(collection, type) {
        for(let i=0;i<collection.length;i++){
            collection[i][type] = null;
        }
    }
      // p.insertAfter(insert)
// p为被插入的元素   insert为要插入的元素
      
//1.在元素的的后边插入一个子元素 
	HTMLElement.prototype.insertAfter=function (insert){
		let parent=this.parentNode;
		let position1 = this.nextElementSibling;
		//next  隐式类型转换为true
		if(position1){
		      parent.insertBefore(insert,position1);
		}else{
			 parent.appendChild(insert);
			
		}
	}
//2.在元素的前边插入一个元素
//原始方法为   insertBefore   可以直接使用
	
	//往父元素中最前边添加一个元素          p.appstarrtChild(insert)   p为父元素，insert为要插入的元素
	HTMLElement.prototype.appstartChild = function(insert){
		let fC=this.firstElementChild;
		if(fC){
			this.insertBefore(insert,fC);
		}else{
			this.appendChild(insert);
		}
	}	

 //在元素的最后边插入一个元素    直接使用 appendChild   parent.appendChild('要插入的元素');

//  parent.insertBefore(要插入的元素，插入的位置)
  //3.将某个元素插入到另一个元素的前边
  HTMLElement.prototype.insertBeforeTo=function(element){
  	  let parent=element.parentNode;
  	  parent.insertBefore(this,element);
  }
  //4.将某个元素插入到另一个元素的而后边
  HTMLElement.prototype.insertAfterTo=function(element){
  	    element.insertAfter(this);
  }
  //5.将某元素插入到父元素的最后边
  HTMLElement.prototype.appendChildTo=function(element){
  	element.appendChild(this);
  	
  }
  //6.将某子元素插入到父元素的最前边
  HTMLElement.prototype.appstartChildTo=function(element){
  	  element.appstartChild(this);
  }






    
    /*
     $(function () {
        let box = $('.box')[2]
        let sonson = $('div',box);
        console.log(box)
        console.log(sonson)
        html(sonson[0],`<span>这是span</span>`)
        css(sonson[0],{width:'300px',height:'300px','background-color':'red'})
        on(box,'onclick',function () {
            alert(1)
            this.style.backgroundColor = 'gerrn'
        })

    })
    */