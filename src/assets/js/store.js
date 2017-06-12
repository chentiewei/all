import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBack: false,
    slide:'slide-left',
    a:0
  },
  getters: {
    changeState: state => {
      //相当于vue实例中的methods,用于处理公用data
      //自vuex 面向组件的数据处理
    }
  },
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
  },
  actions: {

  }
});
