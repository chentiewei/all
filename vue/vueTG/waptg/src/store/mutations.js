export const mutations = {  
  setCurrentCity(state,data){
    state.currentCity=data;
  },

  setCitys(state,data){
    state.cityList=data;
  },

  setFeatures(state,data){
    state.features=data;
  },
  setCarSigns(state,data){
    state.carSigns=data;
  },
  setTuanCarInfo(state,data){
    state.tuanCarInfo=data;
  }
}
