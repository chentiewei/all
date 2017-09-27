<template>
  <div class="hint">
    <transition name="hint_animation">
      <div class="notification fixed child_hint" v-if="show">
        <div class="delete" @click="close()"></div>
          <div class="hint_content">
            错误提示
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'hint',
    props:['show'],
    data(){
      return{
          a:0,
      }
    },
    methods:{
      close() {
        this.$parent.show = false
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
    },
    components: {

    },
  }

</script>
<style>
.child_hint{
  transition: all .4s ease;
  opacity: 1;
}
.hint_animation-leave,.hint_animation-enter-active {
  transform: translate(0, -100%);
  opacity: 0;
}
.hint_animation-enter,.hint_animation-leave-active{
  transform: translate(0, -100%);
  opacity: 0;
}
.delete {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: rgba(51, 51, 51, 0.2);
  cursor: pointer;
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: top;
  width: 24px;
  float: right;
}
.delete:before,.delete:after{
  background: #fff;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -25%;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 50%;
}
.delete:before{
  transform: rotate(45deg);
}
.delete:after{
  transform: rotate(-45deg);
}
.delete:hover{
  background: rgba(51,51,51,0.5);
}
.notification{
  width: 100%;
  line-height: 2;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  color:#fff;
  background:#21e7b6;
}
.hint_content{
  padding: .75rem 2rem;
}
</style>
