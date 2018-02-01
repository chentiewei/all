<template>
  <div class="tick_show steps">
    <ul class="steps">
      <li  class="active">
        <div>已受理</div>
        <div class="arrow-bar">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </li>
      <li>
        <div>已处理</div>
        <div class="arrow-bar">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </li>
      <li>
        <div>已解决</div>
        <div class="arrow-bar">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </li>
      <li>
        <div>已关闭</div>
        <div class="arrow-bar">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </li>
    </ul>
    <div class="ticket-content">
      <div class="ticket-info">
        <div class="info-block">
          <span>工单号: </span>
          <span>70551</span>
        </div>
        <div class="info-block">
          <span>工单标题: </span>
          <span>阿斯顿发生的发生地方</span>
        </div>
        <div class="info-block">
          <span>提交时间: </span>
          <span>2017-03-07 11:25</span>
        </div>
        <div class="info-block">
          <span>状态: </span>
          <span class="alert-color">已受理</span>
        </div>
      </div>
      <div class="chat-list">
        <div class="chat-header"><span>沟通记录</span></div>
        <div class="chat-content">
          <div class="comment">
            <p><span>附加信息：</span></p>
            <div></div>
          </div>
          <div class="comment">
            <div class="pull-left">
              <img src="https://dn-qiniu-avatar.qbox.me/avatar/647ec00e4e564fa268e88f2f1686fd0e?qiniu-avatar" class="avatar">
            </div>
            <div class="header">
              <span>陈铁炜</span>
              <span class="pull-right light-color">2017-03-07 11:25</span>
            </div>
            <div class="content">
              <div>
                <br>
              </div>
              <div>爱上的发生打款发货卡史蒂夫</div>
              <div>
                <br>
              </div>
              <div><img src="https://odum9helk.qnssl.com/Fqg3xl9T8RgHU6WcJd4qfPVpFk89"></div>
              <div>
                <br>
              </div>
            </div>
            <div class="footer"></div>
          </div>
          <div class="comment agent">
            <div class="pull-left">
              <img src="../../../assets/logo.png" class="avatar">
            </div>
            <div class="header">
              <span>七牛云工程师</span>
              <span class="pull-right light-color">2017-03-07 15:38</span>
            </div>
            <div class="content">
              <p>您好，您在七牛绑定的域名是 <a href="http://www.fengym.com，那么您在阿里云上面配置">www.fengym.com，那么您在阿里云上面配置</a>&nbsp;cname 的主机记录应该填写 www，而不是 chentiewei您是想加速哪个域名呢？</p>
            </div>
            <div class="footer"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'tick_show'
  }
</script>

<style scoped lang="less">
  .tick_show {
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: auto;
    padding: 20px 10px 10px 10px;
    .steps{
      list-style: none;
      padding: 20px 0 5px;
      overflow: hidden;
      height: auto;
      margin: 0;
      display:flex;
      li{
        display: inline-block;
        text-align: center;
        padding: 0;
        flex:1;
        position: relative;
        .arrow-bar{
          height: 6px;
          margin-top: 4px;
          margin-left: 2px;
          background-color: #c1c1c1;
          .arrow-left{
            position: absolute;
            left: 2px;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 3px 0 3px 3px;
            border-left-color: #fff;
          }
          .arrow-right{
            position: absolute;
            right: -2px;
            width: 0;
            height: 0;
            background: #fff;
            border-color: transparent;
            border-style: solid;
            border-width: 3px 0 3px 3px;
            border-left-color: #c1c1c1;
          }
        }
        &.active .arrow-bar{
          background: #1b8afa;
        }
        &.active .arrow-right{
          border-left-color: #1b8afa;
        }
        &.active{
           color: #1b8afa;
         }
      }
    }
    .ticket-info{
      padding: 10px 0 20px;
      font-size:14px;
      .info-block{
        display: inline-block;
        padding-right: 20px;
        .alert-color{
          color: red;
        }
      }
    }
    .chat-list{
      border: 1px solid #e8e8e8;
      .chat-header{
        padding: 10px;
        background: #f3f3f3;
        border-left: 3px solid #1b8afa;
      }
      .chat-content{
        .comment{
          padding: 10px;
          color: #888;
          word-break: break-all;
          border-bottom: 1px solid #e8e8e8;
          p{
            margin: 0 0 10px;
          }
          .pull-left{
            float: left;
            img{
              width: 30px;
              max-width: 100%;
              height: 30px;
              border-radius: 15px;
            }
          }
          .header,.content,.footer{
            padding: 5px 40px;
          }
          .light-color{
            color: #888;
            float:right;
          }
          .content{
            line-height: 1.5;
            img{
              width:100%;
            }
          }
        }
      }
    }
  }

</style>