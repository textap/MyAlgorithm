//订阅器模型
let Dep={
    clientList:{},//容器
    //添加订阅
    listen:function(key,fn){
        // if (!this.clientList[key]) {
        //     this.clientList[key]=[]
        // }
        // this.clientList[key].push(fn);
        (this.clientList[key]||(this.clientList[key]=[])).push(fn);
    },
    //发布
    trigger:function(){
        let key =Array.prototype.shift.call(arguments),
        fns=this.clientList[key];
        if (!fns||fns.lenght===0) {
            return false;
        }
        for (let i = 0; fn;fns=fns[i++]) {
           fn.apply(this.arguments)
            
        }

    }
}

//数据劫持
let dataHi=function({data,tag,datakey,selector}){
    let value='',
    el=document.querySelector(selector);
    Object.defineProperty(data,datakey,{
        //取值
        get:function(){
            console.log("取值")
        },
        set:function(val){
            console.log("设置值")
            value=val;
            //发布
            Dep.trigger(tag,val)
            }
    })

    //订阅
    Dep.listen(tag,function(text){
        el.innerHTML=text;

    })
}