//1.独立作用域  2.立即执行，无需调用
(function(){
// 1.获取元素
      window.$ = jquery = function(nodeSelector){
        let nodes={}
        if (typeof nodeSelector === "string" ) {
            let temp=document.querySelectorAll(nodeSelector)
            for (let i = 0; i < temp.length; i++) {
                nodes[i] = temp[i]  
            }
            nodes.length=temp.length
        }
        else{
            throw new Error('必需输入字符串')
        }

        //添加class
        nodes.addClass=function(classes){
            let className=classes.split(' ')
            className.forEach(value => {
               for(let i = 0; i < nodes.length; i++) {
               nodes[i].classList.add(value)
              
                
               } 
            });

        }
        //修改文字
        nodes.setText=function(text){
            for (let i = 0; i < nodes.length; i++) {
                 nodes[i].textContent=text;
                
            }

        }
        return nodes;

      }   
})()

// 临时temp是否可以被干掉
// node是类数组，数组其他方法用不了
// 方法（框架）松散，不够紧密
// 循环没有公用---不利于后期维护修改