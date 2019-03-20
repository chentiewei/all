const reportBit = {
  state: {
    bit:JSON.parse(localStorage.getItem('bit'))||{}
  },
  mutations: {
    setBit(state,data){
      state.bit = data
      localStorage.setItem('bit',JSON.stringify(data))
    }
  },
  actions: {
    report(context,data){
      context.commit('setBit',data)
    }
  }
}

export default reportBit
