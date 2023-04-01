var name='window'

// 1、创立一个空的对象
// 2、将这个空的对象赋值给this
// 3、执行函数体中代码
// 4、将这个新的对象默认返回
function Person(name){
    this.name=name
    this.foo1=function(){
        console.log(this.name)
    }
    this.foo2={}
}