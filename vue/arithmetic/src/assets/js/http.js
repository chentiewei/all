import axios from 'axios';
import store from '@/store'
import qs from "qs"
import headerBit from "./headerBit"

/*请求合并只出现一次loading*/
let needLoadingRequestCount = 0

const showFullScreenLoading=()=>{
  if (needLoadingRequestCount === 0) {
    loading('start')/*loading加载*/
  }
  needLoadingRequestCount++
}

const tryHideFullScreenLoading=()=>{
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(tryCloseLoading,300)/*300ms 间隔内的 loading 合并为一次*/
  }
}
const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    loading('end')/*loading加载*/
  }
}
/*loading加载*/
const loading=(str)=>{
  if(str=='start'){
    store.commit('updateLoadingStatus', {isLoading: true})
  }else if(str=='end'){
    store.commit('updateLoadingStatus', {isLoading: false})
  }
}
/*请求拦截*/
axios.interceptors.request.use(
  config => {
    config.baseURL ='';
    config.timeout = 50000;
    if (config.showLoading) {
      showFullScreenLoading()
    }
    if(config.parsed){
      config.data=qs.stringify(config.data);
    }
    /*
    * header头传递参数
    */
    let time=headerBit.time()/*当前时间戳*/
    config.headers['time']=time
    config.headers['sign']=headerBit.signCode(headerBit.form,time,headerBit.APP_KEY,config.data)
    config.headers['APP_KEY']=headerBit.APP_KEY
    config.headers['token']=''
    config.headers['form']=headerBit.form
    config.headers['X-Requested-With']=headerBit.XRequestedWith

    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
/*请求响应拦截*/
axios.interceptors.response.use(
  response => {
    if(response.config.showLoading){
      tryHideFullScreenLoading()
    }
    return response;
  },
  error => {
    store.commit('updateToastStatus', {state: true,text:error.message})
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, config = { showLoading: true,parsed:true }){
  return new Promise((resolve,reject) => {
    axios.get(url,config)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}, config = { showLoading: true,parsed:true }){
  return new Promise((resolve,reject) => {
    axios.post(url,data,config)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
