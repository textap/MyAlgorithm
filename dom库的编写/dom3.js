let $= jquery=(function(window){
    // 进行dom集合存储，生成jQuery对象
    function Query(dom,selector){
        let i,len =dom ?dom.length:0
        for(i=0;i<len;i++)this[i]=dom[i]
        this.length=len
        this.selector=selector||''
        return this;
    }
    // 保证原型的纯净性
    function Z(elements,selector){
        return Query.call(this,elements,selector)
    }

    // dom查找
    function qsa(elements,selector){
        return element.querySelectorAll(selector)
    }
    Z.prototype={
        each(callback){
            // [].every---es5数组原型方法
            // 循环粒子---this[下标].dom值
        [].every.call(this,function(el,index){
            return callback.call(el,index,el)!==false
        })    
        },
        find(selector){
            let dom=[]
            this.each(function(index,el){
                let childs=this.querySelectorAll(selector);
                DOMStringList.push(...childs);
            })
            return new Z(doms,selector);
        },
        addClass:function(classes){
            let className=classes.split(' ')
            className.forEach(value => {
                this.each(function(index,el){
                    el.classLidt.add(value)
                })
            });
            return this;
        },
        eq(i){
            let doms=[];
            this.each(function(index,el){
                if (i==index) {
                    doms.push(this);                  
                }
            });
            return new Z(doms,this.selector);
        },
        remove(){
         this.each(function(index,el){
            this.remove();
         })    
        }
    }
    //全局方法
    function isFunction(value){return typeof value=="function"}
    $.isFunction=isFunction

    function$(nodeSelector){
        let doms=qsa(document,nodeSelector)
        return new Z(doms,nodeSelector)
    }
    return $;
})(window)