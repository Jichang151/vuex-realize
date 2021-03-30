let _Vue = null
class Store {
  constructor (options) {
    const { 
      state = {},
      getters = {},
      mutations = {},
      actions = {}
    } = options
    // state 属性是响应式的
    this.state = _Vue.observable(state)
    this.getters = Object.create(null)
    // 遍历所有 getters 属性方法，并添加到 get 中
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](state)
      })
    })
    this._mutations = mutations
    this._actions = actions
  }
  // 提交数据修改的方法
  commit (type, payload) {
    this._mutations[type](this.state, payload)
  }
  // 发送异步的方法
  dispatch (type, payload) {
    this._actions[type](this, payload)
  }
}
function install (Vue) {
  _Vue = Vue
  // 通过混入 beforeCreate 来获取 vue 实例，从而拿到选项中的 store 对象
  _Vue.mixin({
    // 当创建 vue 根实例的时候，会把 store 添加到 vue 实例上
    beforeCreate () {
      if(this.$options.store) {
        _Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}