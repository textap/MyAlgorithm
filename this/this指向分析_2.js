var name ="window"

//{}-----对象
//{}-----代码块
var person1={
    name:'person1',
    foo1:function(){
        console.log(this.name)
    },
    foo2:()=>console.log(this.name),
    foo3:function(){
        return function(){
            console.log(this.name)
        }
    },
    foo4:function(){
        //console.log(this)
        return()=>{
            console.log(this.name)
        }
    }
}
var person2={name:'person2'}

//question
person1.foo1();//隐式绑定person1
person1.foo1.call(person2);//显示绑定，person2

person1.foo2();//上级作用域window，箭头函数没有this绑定
person1.foo2.call(person2)//上级作用域window，箭头函数没有this绑定

person1.foo3()();//默认绑定：window
person1.foo3.call(person2)()//默认绑定：window
person1.foo3().call(person2)//显示绑定person2

person1.foo4()();//person1  第一个表达式this---person1
person1.foo4.call(person2)();//person2  第二个表达式this---person2
person1.foo4().call(person2);//person1  第三个表达式this---person1