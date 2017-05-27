<template>
  <div class="notification fixed"
       v-if="show"
       transition="slide">
    <div class="delete"
         @click="close()"></div>
    <div class="content">
      {{ options.content }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default: () => {
          return {}
        }
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.show = false
        this.options = {}
      }
    }
  }
</script>

<style scoped lang="sass">
  .slide-transition{
    transition: all .3s ease;
    transform: translate3d(0, 0, 0);
  }
  .slide-enter,.slide-leave {
    transform: translate3d(0, -100%, 0)
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
  }
  .content{
    padding: .75rem 2rem;
  }
</style>
