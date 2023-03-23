let $=jQuery=(function(){
    // 获取元素
    let jquery=function(nodeSelector){
        if (typeof nodeSelector === "string" ) {
        this.nodes=document.querySelectorAll(nodeSelector)

        }else{
            throw new Error('必需输入字符串')
        }
    }
    // 继承---复用
    jquery.prototype={
        each:function(callback){
            for(let i=0;i<this.nodes.length;i++){
            }
        },
        addClass:function(){
            let className=classes.split(' ')
            className.forEach(value => {
                this.each(function(index,obj){
                    obj.classLidt.add(value)
                })
            });
        },
        setText:function(text){
            this.each(function(index,obj){
                obj.textContent=text
            })
        },
        remove:function(){
            let el;
            // for (let i = 0; i < nodes.length; i++) {
            //     el = nodes[i];
            //     el.remove()  
            // }
            this.each(function(index,obj){
                el = obj;
                el.remove()  
            })
        }
    }
     return function(nodeSelector){
        return new jquery(nodeSelector)

     }
})()