let StorageGet = (name,noGet,state=true)=>{//默认StorageGet获取方法(名称，未获取到Storage的默认值，是否使用JSON.parse())
  if(state){
    return JSON.parse(localStorage.getItem(name))||noGet
  }else{
    return localStorage.getItem(name)||noGet
  }
}
let StorageSet = (name,data,state=true)=>{//默认StorageSet获取方法(名称，值，是否使用JSON.stringify())
  if(state){
    localStorage.setItem(name,JSON.stringify(data))
  }else{
    localStorage.setItem(name,data)
  }
}
const bit = {
  state: {
    reportBit:StorageGet('reportBit',{}),//报告基础数据
    dictionariesBit:StorageGet('dictionariesBit',{}),//dictionaries页面报告数量
  },
  mutations: {
    setReportBit(state,data){
      state.bit = data
      StorageSet('reportBit',data)
    },
    setDictionariesBit(state,data){
      state.dictionariesBit = data
      StorageSet('dictionariesBit',data)
    }
  },
  actions: {
    report(context,data){
      context.commit('setReportBit',data)
    },
    dictionaries(context,data){
      context.commit('setDictionariesBit',data)
    }
  }
}

export default bit
