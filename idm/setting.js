//此处可覆盖核心框架的默认配置文件
window.$$IDMSetting = {
    webRoot: {
        // default: "/",
        platformNo:"",
        projectNo:"",
        moduleAbsoluteDir:"/idm/idm_modules/"
    },
    // api地址
    api: {
        userInfoUrl:"/ctrl/api/frame/getApplicationInfo",
        //组件市场地址，带分组结构的
        // componentMarketUrl: "/ctrl/api/frame/getMenuInfo"
        allCodepackageUrl:"",
        savePageSettingUrl:""
    },
    /**
     * mockdata地址，只有对应的API地址为空的时候才会使用这里的数据
     * 前缀$代表：使用webRoot > assetsDir替换
     * 前缀~代表：使用webRoot > htmlDir替换
     * 前缀@代表：使用webRoot > moduleDir替换
     * 前缀./或../或http://或https://则不替换，原模原样使用地址
     * 其他情况使用webRoot > default替换
     */
    mockurl: {
        /**
         * 组件市场测试数据结构
         */
        // componentMarketUrl: "$/mockdata/ComponentMarketDataMobileImg.json",
    },
    //页面配置工具
    develop: {
        /**
         * 拖拽区域的大小列表配置
         * {
                key: 从3开始，保证不重复即可,
                width: 拖拽区域的实际宽度（px）,
                height: 拖拽区域的实际高度（px）,
                showText: 要显示的文本,
                type: 类型值
            }
         * type:-1 线条
         * type:3  系统内置的尺寸
         */
        dragAreaSizeList: [
            {
                key: '3',
                width: 1366,
                height: 768,
                showText: '1366*768',
                type: 3
            },
            {
                key: '4',
                width: 1920,
                height: 1080,
                showText: '1920*1080',
                type: 3
            },
            {
                key: '5',
                width: 375,
                height: 667,
                showText: 'iphone6/7/8',
                type: 3
            },
            {
                key: '6',
                width: 414,
                height: 736,
                showText: 'iphone6/7/8 Plus',
                type: 3
            },
            {
                key: '7',
                width: 768,
                height: 1024,
                showText: 'iPad(768*1024)',
                type: 3
            },
            {
                key: '8',
                width: 1024,
                height: 768,
                showText: 'iPad(1024*768)',
                type: 3
            }
        ],
        /**
         * 拖拽区域大小默认值key，url中传入dragSizeKey也会有效
         * 默认为1：代表适应当前尺寸
         */
        dragAreaSizeDefaultKey:"1",
        /**
         * 开发工具菜单栏中的帮助文档地址，前缀同理上面
         */
        helpDocumentUrl: "https://yunit-code.github.io/zh/",
        /**
         * 开发工具菜单栏中的组件开发地址，前缀同理上面
         */
        devComponentUrl: "https://yunit-code.github.io/zh/moduledevelop/introduce.html",
    },//文档管理工具配置
    document:{
        /**
         * 根据前端的配置保存md文件到对应的目录中
         * 接收以下参数：
         * mdPath:md对应要生成的文件地址
         * type:code代表未代码包的路径，module代表组件的文档路径
         * moduleClassName:组件的类名
         * mdContent:md文档的内容
         */
        saveMarkDownFileUrl:""
    },
    //应用程序综合配置
    applications:{
        useProjectNoSetting:false,
    }
};