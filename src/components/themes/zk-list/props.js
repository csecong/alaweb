// zk-list的结构以及所实现的功能已比较复杂，具有超高难度
// 为了减低维护成本，在没有认真了解属性之前 请勿轻易新增属性，
// 请勿轻易新增属性，以下属性基本上能够满足绝大部分需求了，有其他的需求可以在外部控制
let props = {
  type: {
    type: String,
    required: false
  }, // 类型必须填写，通过Type和后台Api/Auto/List来获取数据
  apiUrl: {
    type: String,
    default: 'Api/Auto/List'
  }, // 类型必须填写，通过Type和后台Api/Auto/List来获取数据
  columns: {
    type: Array,
    default: null
  }, // 自定义列，可以通过diy体系来控制
  isTemplate: {
    type: Boolean,
    default: false
  }, // 是否模板显示,
  isShowPage: {
    type: Boolean,
    default: true
  }, // 是否显示分页,
  widget: Object // 数据类型Type、过滤方式filter、标题等信息，通过diy方式传过来
}

export default props
