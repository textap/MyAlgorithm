// 1、初始化 patch(container,vnode)
// 2、2更新updata(vnode,newVnode)
function createElement(vnode){
    let tag=vnode.tag//目标元素 ul
    let attrs =vnode.attrs||{}//属性
    let children=vnode.children||[]//子节点

    if(!tag){
        return null
    }
    //创建对应的dom
    let elem=document.createElement(tag)
    let attrName
    //给dom添加属性
    for(attrName in attrs){
        if (attrs.hasOwnProperty(attrName)) {
            //class
            elem.setAttribute(attrName,attrs[attrName])
            
        }
    }
    //将将子元素添加到目标元素之上
    children.forEach(function(childrenVnode){
        elem.appendChild(createElement(childrenVnode))
    });
    return elem
}

function updateChildren (vnode,newVnode) {
    let children =vnode.children||[]//现有节点
    let newChildren=newVnode.children||[]//新节点
    //循环的每一项
    children.forEach(function(childrenVnode,index){
        let newChildrenVnode=newChildren[index]

        //第一层没变化
        if (newChildrenVnode.tag==newChildrenVnode.tag) {
            updateChildren(childrenVnode,newChildrenVnode)
        }
        else{
            //两者tag不一样
            replaceNode(childrenVnode,newChildrenVnode)
        }
    })
    
}