import Vue from 'vue'
import Vuex from 'vuex'
import { loginByUserInfo }from '@/api/login'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem('USERNAME'),
    role: JSON.parse(sessionStorage.getItem('ROLE')),
    newrouter: [],
    isCollapse:false//导航栏收起&展开
  },
  getters: {
    username: state => state.username,
    role: state => state.role,
    newrouter: state => state.newrouter,
    isCollapse: state => state.isCollapse,
  },
  mutations: {
    SET_USERNAME:(state, username) => {
      state.username = username;
    },
    SET_ROLE:(state, role) => {
      state.role = role;
    },
    SET_NEWROUER:(state, newrouter) =>{
      state.newrouter = newrouter;
    },
    SET_COLLAPSE:(state, isCollapse)=>{
      state.isCollapse = isCollapse;
    }
  },
  actions: {
    Logins({ commit }, info){
      return new Promise((resolve, reject) => {
        let data={};
        loginByUserInfo.map(function (item) { //获取所以用户信息
          if(info.username === item.username || info.pew === item.pew){
            commit('SET_USERNAME',item.username);  //将username和role进行存储
            sessionStorage.setItem('USERNAME', item.username); //存入 session
            commit('SET_ROLE',item.role);
            sessionStorage.setItem('ROLE',JSON.stringify(item.role));
            return data={username:item.username,introduce:item.introduce};
          }else{
            return data;
          }
        });
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    },
    Roles({ commit }, newrouter){
      return new Promise((resolve, reject) => {
        commit('SET_NEWROUER',newrouter); //存储最新路由
        resolve(newrouter);
      }).catch(error => {
        reject(error);
      });
    },
    Logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERNAME','');
        commit('SET_ROLE','');
        commit('SET_NEWROUER',[]);
        sessionStorage.removeItem('USERNAME');
        sessionStorage.removeItem('ROLE');
        resolve();
      }).catch(error => {
        reject(error);
      });
    }
  }
})
