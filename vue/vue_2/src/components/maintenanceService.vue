<template>
    <div class="g-repair">
        <mt-header fixed title="维修"></mt-header>
        <div :top-method="loadTop" @top-status-change="handleTopChange">
            <div class="m-server">
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
                <router-link :to="{name:'productList'}" class="u-server">
                    <dl class="m-product">
                        <dd>
                            <img src="../assets/img/ceshi.jpg" alt="产品" width="100%">
                        </dd>
                        <dt>灯具电路维修</dt>
                    </dl>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'maintenance',
        data(){
            return {
                topStatus: ""
            }
        },
        methods: {
            handleTopChange(status) {
                this.topStatus = status;
                alert("df")
            },
            loadTop() {
                this.$refs.loadmore.onTopLoaded();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mint-header {
        background: rgb(13, 19, 39);
    }

    .g-repair {
        padding: 44px 0 0 0;
    }

    .m-server {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:0 10px;
    }

    .u-server {
        display: inline-block;
        width: 48%;
        margin-bottom: 4px;
    }

    .m-product {
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        text-align: center;
        background-color: white;
    }

    .m-product img {
        border-radius: 5px 5px 0 0;
    }

    .m-product dt {
        height: 40px;
        line-height: 40px;
    }

</style>
