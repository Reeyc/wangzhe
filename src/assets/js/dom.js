/**
 * @description tabs选项卡切换
 * @param {*} dom 选中高亮的元素
 * @param {*} claName 选中切换的css类名
 */
export function tabs(dom, claName) {
  if (!dom) return
  let parent = null;
  if (dom.parentNode.children.length > 2) { //特殊情况
    //取上级父元素
    parent = dom.parentNode
    parent.child = dom.parentNode.children
  } else {
    //取上上级父元素
    let top = dom.parentNode.parentNode;
    parent = top;
    parent.child = [];
    for (let i = 0; i < top.children.length; i++) {
      for (let j = 0; j < top.children[i].children.length; j++) {
        parent.child.push(top.children[i].children[j])
      }
    }
  }
  //排他切换
  for (let i = 0; i < parent.child.length; i++) {
    parent.child[i].className = parent.child[i].className.replace(
      claName,
      ""
    );
  }
  dom.className += ` ${claName}`
}

/**
 * @description 查询数据类型
 * @param {*} data 查询的数据
 * @param {*} type 查询的类型 (可选)
 */
export function getType(data, type) {
  if (!type) {
    return Object.prototype.toString.call(data)
  } else {
    return Object.prototype.toString.call(data).slice(8, -1) === type
  }
}
