const axios = require('axios')

import qs from 'qs';

class Axios{
    constructor (){
        this.init();
    };
    init(){
        axios.defaults.timeout = 5000;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; 
        axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'; 
        // axios.defaults.baseURL = "/api";        
        axios.defaults.baseURL = "http://10.0.10.104:9530/";   
    };
    _isLogin(url){     
        if(url != 'login'){
            axios.defaults.headers = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','token': this.getStore('token')};
          return false;
        }else{
          return true;
        }
    };
    /**
     * 处理异常信息
     * @param data 接收到的数据
     * @private
     */
    _error(data){
        console.log("error:"+data)
        // Message.error('网络错误！');
    };
    /**
     * 判断是否返回数据
     * @param data 接收到的数据
     * @returns {boolean}
     * @private
     */
    _isStatus(data){
        if(data.code == 200){
            return true
        }else{
            // Message.error(data.msg || '服务器异常');
            return false
        }        
    }
    post(url,params) {   
        axios.defaults.headers = {'Content-Type':'application/json;charset=UTF-8'};      
		return new Promise((resolve, reject) => {              
			axios.post(url, params)
				.then(response => {
                    if(this._isStatus(response.data)){
                        resolve(response.data.datas);
                    }
                }
                //暂无处理返回错误消息， 移交异常统一处理
                // , err => {
				// 	reject(err);
                // }
                )
				.catch((error) => {
                    this._error(error);
				})
		})
	};	
	get(url,params){
        this._isLogin(url);
		return new Promise((resolve, reject) => {
            if(params!=null){
                var p = qs.stringify(params);
                if(url.indexOf("?") >= 0)
                {
                    url += "&" + p;
                }
                else
                {
                    url += "?" + p;
                }
            }
			axios.get(url,params).then(response => {
                if(this._isStatus(response.data)){
                    resolve(response.data.datas);
                }
            }
                // , err => {
				// 	reject(err);
				// }    
            )
			.catch((error) => {
				this._error(error);
			})
		})
    };
    // 存储localStorage
    setStore(key, value){
        if (!key) {
          return
        }
        if (typeof value !== 'string') {
          value = JSON.stringify(value)
        }
        window.localStorage.setItem(key, value)
    };
    // 获取localStorage
    getStore(key){
        if (!key) return
        return window.localStorage.getItem(key)
    };
    // 删除localStorage
    removeStore(key){
        if (!key) return
        window.localStorage.removeItem(key)
    };
    // 全部清除
    clearStore(){
        window.localStorage.clear()
    };
    hasPermission(permissions) {        
        var rightsJson = window.localStorage.getItem("rights") || "";
        if(rightsJson == "") {
            //console.log("权限为空");
            return false;
        }
        var rights = JSON.parse(rightsJson);
        if(rights == null || rights.length == 0)return false;

        for(var i = 0; i < rights.length ; i ++){
            if(rights[i] == permissions) {
                return true;
            }
        }
        return false;
    }
};
export default new Axios();