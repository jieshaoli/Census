<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <!-- <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div> -->
    <div class="logo">
      <img src="../../assets/img/nav/nav_logo.png"
           class="logo-img" />
      <span class="logo-title">安定镇政府后台管理系统</span>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 时间段选择 -->
        <div class="choose-time">
          <span class="time-text">选择时间段</span>
          <el-date-picker v-model="search_value"
                          type="monthrange"
                          range-separator="-"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="tools">
          <button class="func-btns"
                  @click="searchFunc">
            <img src="../../assets/img/nav/nav_search.png" />
          </button>
          <button class="func-btns"
                  @click="mapFunc">
            <img src="../../assets/img/nav/nav_map.png" />
          </button>
          <button class="func-btns"
                  @click="exitFunc"
                  v-if="showing_map">
            <img src="../../assets/img/nav/nav-exit.png" />
          </button>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../../assets/img/nav/nav_head.png" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name"
                     trigger="click"
                     @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/ludan1107743896/Vue-project"
               target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided
                              command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            search_value: '',
            showing_map: false
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        searchFunc() {},
        mapFunc() {
            this.showing_map = true;
        },
        exitFunc() {
            this.showing_map = false;
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    font-size: 22px;
    background-color: #0a428e;
}
.logo-img {
    width: 42px;
    height: 46px;
}
.logo-title {
    margin-left: 15px;
    color: #00e4ff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    position: absolute;
    display: flex;
    top: 4px;
    left: 8px;
    line-height: 46px;
}
.header-right {
    float: right;
    position: absolute;
    right: 8px;
    top: 4px;
}
.header-user-con .time-text {
    color: #45f0ea;
    margin-right: 15px;
}
.header-user-con >>> .el-input__inner {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #fff;
    width: 235px;
    padding: 3px 7px;
    font-size: 22px;
}
.header-user-con >>> .el-range-separator {
    color: #fff;
    font-size: 22px;
    padding: 0 3px;
}
.header-user-con >>> input {
    background-color: transparent;
    width: 85px;
    color: #fff;
    font-size: 22px;
}
.header-user-con >>> .el-input__icon {
    color: #fff;
    font-size: 22px;
}
.header-user-con {
    display: flex;
    height: 46px;
    font-size: 22px;
    align-items: center;
}
.tools {
    padding: 3px 15px;
}
.tools .func-btns {
    margin: 3px 15px;
    background-color: transparent;
    border: none;
    outline: none;
}
.tools img {
    width: 25px;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 0;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
