// Vue原理分析----变化侦听
// data(){}

export class Observer{
    constructor(value){
        this.value=value
        if (Array.isArray(value)) {
            //数组的逻辑

        }else{
            //对象的逻辑
            this.walk(value)
        }

    }
    walk(obj){
        //{name:"小明",age:18}
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj,keys[i])
        }
      }
    }
    //循环 让对象每一个属性都变得可观测
    function defineReactive(obj,key,val) {
        if (arguments.length===2) {
            val=obj[key]//对象的值
        }
        if (typeof val==='object') {
            //递归
            
        }
        Object.defineProperty(obj,key,{
            enumerable:true,//可枚举
            configurable:true,//可改变
            get(){
                console.log(`${key}属性被读取了`)
                return val;
            },
            set(newVal){
                console.log( `${newVal}属性值被修改了`)
                val=newVal
            }
        })
        
    }

