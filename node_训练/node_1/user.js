module.exports={
  user:function(id,name){
    this.id=id;
    this.name=name;
    this.go=function(){
      console.log(this.id+'号'+this.name+'进入');
    }
  }
}
