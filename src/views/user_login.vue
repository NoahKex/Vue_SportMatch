<template>
    <div>
        <div ref="homePage">
            <arrow_left></arrow_left>
            <div style="height: 45%;width: 85%;margin: 16% auto 0;">
                <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                >
                    <img v-if="show" src="../../static/login_title.png" alt="" style="height: 30px;width: 30px;">
                </transition>
                <p class="title">欢迎登录</p>
                <van-cell-group>
                    <van-field v-model="info.mail" placeholder="请输入邮箱" style="background-color: #eff0f1;margin-top: 20%;" />
                    <van-field v-model="info.password" type="password" placeholder="请输入密码" style="background-color: #eff0f1;margin-top: 8%;margin-bottom: 5%;"/>
                </van-cell-group>
                <span style="float: right;font-size: 0.9rem;">忘记密码</span>
                <van-button type="warning" :disabled="btn_show" style="margin-top: 12%;width: 100%;">登录</van-button>
                
            </div>
        </div>
    </div>
</template>
<script>
    import arrow_left from '../components/arrow_left.vue'
    export default {
        data(){
            return{
                show:false,
                btn_show:true,
                msg:"hello",
                clientHeight:'',
                info:{
                    mail:'',
                    password:''
                }
            }
        },
        components:{
            arrow_left
        },
        mounted(){
            this.clientHeight =   `${document.documentElement.clientHeight}` 
            window.onresize = function temp() {
                this.clientHeight = `${document.documentElement.clientHeight}`;
            };
            this.show=true;
        },
        watch: {
            clientHeight: function () {
                this.changeFixed(this.clientHeight)
            },
            'info.mail':{
                handler(newValue, oldValue) {
        　　　　　　if(newValue!='' && this.info.password!=''){
                        this.btn_show=false;
                    }else{
                        this.btn_show=true;
                    }
        　　　　}
            },
            'info.password':{
                handler(newValue, oldValue) {
        　　　　　　if(newValue!='' && this.info.mail!=''){
                        this.btn_show=false;
                    }else{
                        this.btn_show=true;
                    }
        　　　　}
            }
        },
        methods:{
            changeFixed(clientHeight){
                this.$refs.homePage.style.height = clientHeight+'px';
            },
        }
    }
</script>
<style>
    .title{
        font-size: 2rem;
        font-weight: bolder;
        margin-top: -0.2%;
    }
</style>