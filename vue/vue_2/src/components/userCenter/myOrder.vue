<template>
    <div class="myOrder">
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">待接单</mt-tab-item>
            <mt-tab-item id="2">进行中</mt-tab-item>
            <mt-tab-item id="3">待支付</mt-tab-item>
            <mt-tab-item id="4">已完成</mt-tab-item>
            <mt-tab-item id="5">已取消</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="1">
                <div class="myOdetails">
                    <div>
                        <img src="../../assets/img/timg.jpg" alt="">
                    </div>
                    <div class="myOdetails_details">
                        <div>
                            <span>开关跟换</span>
                            <span>50元/次</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>服务时间</span>
                            <span>2017-06-14  8：00</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>维修地址</span>
                            <span>浙江省西湖区留下街道168号</span>
                        </div>
                    </div>
                </div>
                <div class="myOdetails">
                    <div>
                        <img src="../../assets/img/timg.jpg" alt="">
                    </div>
                    <div class="myOdetails_details">
                        <div>
                            <span>开关跟换</span>
                            <span>50元/次</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>服务时间</span>
                            <span>2017-06-14  8：00</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>维修地址</span>
                            <span>浙江省西湖区留下街道168号</span>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="myOdetails">
                    <div>
                        <img src="../../assets/img/timg.jpg" alt="">
                    </div>
                    <div class="myOdetails_details">
                        <div>
                            <span>开关跟换</span>
                            <span>50元/次</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>服务时间</span>
                            <span>2017-06-14  8：00</span>
                        </div>
                        <div class="myOdetails_div">
                            <span>维修地址</span>
                            <span>浙江省西湖区留下街道168号</span>
                        </div>
                    </div>
                </div>
                <div class="myOdetails_msg">
                    <mt-cell title="标题文字"  value="说明文字">
                        <img slot="icon" src="../../assets/img/timg.jpg">
                        <i class="icon-iphone" style="color:#63ceb1;margin-right:7px;"></i>
                        <span style="color:#999;font-size: 12px">13588292524</span>
                    </mt-cell>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                3
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                4
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                5
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="pos_b"></div>
    </div>
</template>

<script>
    export default {
        name: 'myOrder',
        data(){
            return {
                selected: '1',
            }
        }
    }
</script>

<style>
    .page-part{
        padding:0 15px;
        border-bottom:1px solid #e3e3e3;
        height:36px;
    }
    .mint-navbar .mint-tab-item{
        padding:0;
    }
    .mint-navbar .mint-tab-item.is-selected{
        border-bottom: 3px solid #242a3c;
        color: #242a3c;
        margin-bottom: 0px;
    }
    .mint-tab-item-label{
        font-size: 14px;
        height:36px;
        line-height:36px;
    }
    .myOdetails{
        width:100%;
        padding:11px 23px 11px 11px;
        box-sizing: border-box;
        background:#fff;
        margin-top:5px;
    }
    .myOdetails:after{
        width:0;
        content: '';
        display: block;
        clear: both;
    }
    .myOdetails>div{
        float:left;
        height:76px;
        text-align:center;
        margin-right:16px;
    }
    .myOdetails div img{
        width:76px;
        height:76px;
    }
    .myOdetails>div.myOdetails_details{
        width:calc(100% - (76px + 16px ));
        margin: 0;
    }
    .myOdetails_details div{
        height:20px;
        width:100%;
    }
    .myOdetails_details div span{
        float:left;
        font-size:16px;
        color:#333333;
        letter-spacing:-0.39px;
        height:20px;
        line-height:20px;
    }
    .myOdetails_details div span:nth-child(2){
        float:right;
        font-size:14px;
        color:#ef5050;
    }
    .myOdetails_details div.myOdetails_div{
        margin-top:8px;
    }
    .myOdetails_details div.myOdetails_div span{
        font-size:14px;
        color:#999999;
        width:55px;
    }
    .myOdetails_details div.myOdetails_div span:nth-child(2){
        width:calc( 100% - 76px);
        overflow:hidden;
        text-overflow:ellipsis;
        text-align: right;
        white-space: nowrap;
    }
    .myOdetails_msg{
        height:36px;
        width:100%;
        border-top:1px solid #e9e9e9;
    }
    .mint-cell{
        min-height: 36px;
    }
    div.myOdetails_msg img{
        width:22px;
        height:22px;
    }
</style>
