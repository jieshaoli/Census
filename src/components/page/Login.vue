<template>
    <div class="login-wrap">
        <div class="ms-title">安定人口档案数据统计</div>
        <div class="ms-login">
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入用户名" class="ms-input">
                        <el-button slot="prepend" icon="el-icon-lx-people" class="ms-input-btn"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        class="ms-input"
                        placeholder="请输入密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock" class="ms-input-btn"></el-button>
                    </el-input>
                </el-form-item>
                <div class="check-bg">
                    <el-checkbox label="显示密码" v-model="show_password"></el-checkbox>
                    <el-checkbox label="记住密码"></el-checkbox>
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import config from '../../utils/config.js'
export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            show_password: false
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    const userName = this.param.username
                    localStorage.setItem('ms_username', userName);
                    if (config.userList.includes(userName)){
                        this.$message.success('登录成功');
                        window.location.href = `${window.location.origin}/storeManagement`
                    } else {
                        this.$message.error('登录失败,忘记告诉你得输入账号密码了。');
                    }
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login_bg.png);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 75px;
    position: absolute;
    top: 95px;
    text-align: center;
    font-size: 36px;
    color: #fff;
}
.ms-login {
    position: absolute;
    top: 180px;
    left: 50%;
    width: 363px;
    height: 243px;
    margin-left: -181px;
    border-radius: 5px;
    overflow: hidden;
    background-image: url(../../assets/img/login_box.png);
    background-repeat: no-repeat;
    background-size: 100%;
}
.ms-content {
    padding: 30px 30px;
}
.ms-input-btn {
    color: #24D6E6 !important;
    font-size: 20px;
}
.ms-input {
    border:#24D6E6 1px;
}
.check-bg {
    display: flex;
    justify-content: space-between;
}
.check-bg >>> .el-checkbox__label {
    color: #CCCCCC;
    font-size: 11px;
}
.login-btn {
    text-align: center;
    margin-top: 28px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
    background: #0384EA;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>