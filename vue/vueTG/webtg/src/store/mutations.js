export const mutations = {  
  setCurrentCity(state,data){
    console.log("setCurrentCity:"+data.name+","+data.id);
    state.currentCity=data;
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
