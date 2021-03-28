import  config from '../../utils/config.js';
let menuList = [];
const menus = [
    {
        img: "../../assets/img/left/left_console.png",
        title: '控制台',
        index: 'console',
        code: 'console',
    },
    {
        img: "../../assets/img/left/left_house_data.png",
        title: '镇数据',
        index: 'townData',
        code: 'townData',
    },
    {
        img: "../../assets/img/left/left_house_data.png",
        title: '村数据',
        index: 'villageData',
        code: 'villageData',
    },
    {
        img: "../../assets/img/left/left_data_analysis.png",
        title: '数据分析',
        index: 'dataAnalysis',
        code: 'dataAnalysis',
    },
    {
        img: "../../assets/img/left/left_system.png",
        title: '系统',
        index: 'system',
        code: 'system',
    },
    {
        icon: 'el-icon-s-tools',
        index: '9',
        title: '基础信息管理',
        jurisdiction: true,
        subs: [
            {
                index: '9-2',
                title: '基础配置',
                subs: [
                    {
                        index: "storeManagement",
                        title: '店铺管理'
                    },
                    {
                        index: "instrumentManagement",
                        title: '仪器管理'
                    },
                    {
                        index: "userData",
                        title: "用户信息"
                    }
                ]
            },
        ]
    },
    {
        icon: 'el-icon-s-goods',
        index: '10',
        title: '客户管理',
        jurisdiction: true,
        subs: [
            {
                index: "customerInquiry",
                title: '客户自定义查询'
            },
        ]
    },
    {
        icon: 'el-icon-s-goods',
        index: '11',
        title: 'Vue特殊操作',
        jurisdiction: true,
        subs: [
            {
                index: "specialOptions",
                title: 'vue 特殊操作'
            },
            {
                index: "vueCssTransition",
                title: 'vue 动画操作'
            },
        ]
    },
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-lx-cascades',
        index: 'table',
        title: '基础表格'
    },
    {
        icon: 'el-icon-lx-copy',
        index: 'tabs',
        title: 'tab选项卡'
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '5',
        title: '表单相关',
        subs: [
            {
                index: 'form',
                title: '基本表单'
            },
            {
                index: 'empteyForm',
                title: '自定义表单'
            },
            {
                index: '5-2',
                title: '三级菜单',
                subs: [
                    {
                        index: 'editor',
                        title: '富文本编辑器'
                    },
                    {
                        index: 'markdown',
                        title: 'markdown编辑器'
                    }
                ]
            },
            {
                index: 'upload',
                title: '文件上传'
            }
        ]
    },
    {
        icon: 'el-icon-lx-emoji',
        index: 'icon',
        title: '自定义图标'
    },
    {
        icon: 'el-icon-pie-chart',
        index: '_11',
        title: '图表组件',
        subs: [
            {
                index: 'charts',
                title: 'schart图表'
            },
            {
                index: 'echarts',
                title: 'echarts图表'
            }
        ],
    },
    {
        icon: 'el-icon-rank',
        index: '6',
        title: '拖拽组件',
        subs: [
            {
                index: 'drag',
                title: '拖拽列表'
            },
            {
                index: 'dialog',
                title: '拖拽弹框'
            }
        ]
    },
    {
        icon: 'el-icon-lx-global',
        index: 'i18n',
        title: '国际化功能'
    },
    {
        icon: 'el-icon-lx-warn',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: 'permission',
                title: '权限测试'
            },
            {
                index: '404',
                title: '404页面'
            },
        ]
    },
    {
        icon: 'el-icon-s-shop',
        index: '8',
        title: '常用业务场景',
        subs: [
            {
                index: "management",
                title: '业务界面1'
            },
           
        ]
    }
]

const _flag = config.userList.includes(localStorage.getItem('ms_username'));
if(_flag && localStorage.getItem('ms_username') != 'admin'){
    menuList = menus.filter(k => k.jurisdiction == true);
} else if (localStorage.getItem('ms_username') == 'admin') {
    menuList = menus;
} else {
    menuList = [];
}

export default menuList;