import IDM from "../../../../protalcore/src/utils";

(function(){
    var setting = {
        //核心包的版本
        version:"1.0.0",
        webRoot:{
            //组件的所属项目的根目录名称，
            default:"/DreamWeb/",
            //页面的前置路径，可相对或绝对（./或../protalcore/或/DreamWeb/protalcore/）
            htmlDir:"./",
            //打包便宜的静态资源文件，相对于当前的页面路径
            assetsDir: "./static/",
            /**
             * 组件相对此框架所在项目的目录
             * 框架页面index.html在DreamWeb/protalcore/A  下面，则为../../protal_modules/或/DreamWeb/protal_modules/
             * 框架页面index.html在DreamWeb/ 下面，则为./protal_modules/或/DreamWeb/protal_modules/
             */
            moduleDir:"../protal_modules/",
        }
    }
    /**
     * idm核心框架提供给组件开发的核心包
     * 注意：此核心包不会包含上传到组件代码中，只是用于组件开发使用
     */
    var idmFun = function(){
        var globalCache = {};

        var getProto = Object.getPrototypeOf;
        var $types = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"];
        var class2type = {};
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var uuidCharts = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

        $types.forEach(elem => {
            class2type["[object " + elem + "]"] = elem.toLowerCase();
        });
        /**
         * 公共方法
         */
        var util = {
            /**
             * 获取浏览器可视区域宽高方法
             * @returns {Object}
             */
            getClientWH:function() {
                var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                return {width:w,height:h};
            },
            //获取唯一标识
            uuid: function(len, radix) {
                var chars = uuidCharts,
                    uuid = [],
                    i;
                radix = radix || chars.length;
                len = len || 16;
                if (len) {
                    // Compact form
                    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
                } else {
                    // rfc4122, version 4 form
                    var r;

                    // rfc4122 requires these characters
                    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "";
                    uuid[14] = "4";

                    // Fill in random data.  At i==19 set the high bits of clock sequence as
                    // per rfc4122, sec. 4.1.5
                    for (i = 0; i < 36; i++) {
                        if (!uuid[i]) {
                            r = 0 | (Math.random() * 16);
                            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
                        }
                    }
                }

                return uuid.join("");
            },
            UUID: function() {
                return IDM.uuid();
            },
            //验证是否为一个空对象
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            //验证是否不为undefind或者null
            isDef: function(obj) {
                return obj !== undefined && obj != null;
            },
            //验证是否为undefind或者null
            isUnDef: function(obj) {
                return obj === undefined || obj === null;
            },
            //获取对象类型
            type: function(obj) {
                if (obj == null) {
                    return obj + "";
                }
                // Support: Android <=2.3 only (functionish RegExp)
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
            },
            /**
             * 验证类型是否为函数
             * @param {*} fn 
             * @returns 
             */
            isFunction:function(fn) {
                return IDM.type(fn) == "function";
            },
            hasOwn:function(obj, key) {
                return hasOwnProperty.call(obj, key);
            },
            /**
             * 验证是否是一个纯粹的对象
             * @param {*} obj 
             * @returns 
             */
            isPlainObject:function(obj) {
                var proto, Ctor;
                if (!obj || toString.call(obj) !== "[object Object]") {
                    return false;
                }

                proto = getProto(obj);
                if (!proto) {
                    return true;
                }
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            },
            //代理console.log
            log: function() {
                if (hasConsole) {
                    Function.apply.call(_console.log, _console, arguments);
                }
            },
            //代理console.time
            time: function() {
                if (hasConsole) {
                    var method = _console.time;
                    Function.apply.call(method, _console, arguments);
                }
            },
            //代理console.timeEnd
            timeEnd: function() {
                if (hasConsole) {
                    var method = _console.timeEnd;
                    Function.apply.call(method, _console, arguments);
                }
            },
            //代理console.warn
            warn: function() {
                if (hasConsole) {
                    var method = console.warn || console.log;
                    Function.apply.call(method, console, arguments);
                }
            },
            //代理console.error
            error: function() {
                if (hasConsole) {
                    var method = console.error || console.log;
                    Function.apply.call(method, console, arguments);
                }
            },
            /**
             * 类似jQuery.extend方法，可用于浅拷贝，深拷贝
             * @returns 
             */
            mix:function() {
                var options,
                    name,
                    src,
                    copy,
                    copyIsArray,
                    clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;

                // Handle a deep copy situation
                if (typeof target === "boolean") {
                    deep = target;

                    // Skip the boolean and the target
                    target = arguments[i] || {};
                    i++;
                }

                // Handle case when target is a string or something (possible in deep copy)
                if (typeof target !== "object" && !IDM.isFunction(target)) {
                    target = {};
                }

                if (i === length) {
                    target = this;
                    i--;
                }

                for (; i < length; i++) {
                    // Only deal with non-null/undefined values
                    if ((options = arguments[i]) != null) {
                        // Extend the base object
                        for (name in options) {
                            copy = options[name];

                            // Prevent Object.prototype pollution
                            // Prevent never-ending loop
                            if (name === "__proto__" || target === copy) {
                                continue;
                            }

                            // Recurse if we're merging plain objects or arrays
                            if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                                src = target[name];

                                // Ensure proper type for the source value
                                if (copyIsArray && !Array.isArray(src)) {
                                    clone = [];
                                } else if (!copyIsArray && !this.isPlainObject(src)) {
                                    clone = {};
                                } else {
                                    clone = src;
                                }
                                copyIsArray = false;

                                // Never move original objects, clone them
                                target[name] = this.mix(deep, clone, copy);

                                // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                }

                // Return the modified object
                return target;
            },
            array:{
                ensure: function ensure(target, item) {
                    //只有当前数组不存在此元素时只添加它
                    if (target.indexOf(item) === -1) {
                    return target.push(item);
                    }
                },
                removeAt: function removeAt(target, index) {
                    //移除数组中指定位置的元素，返回布尔表示成功与否
                    return !!target.splice(index, 1).length;
                },
                remove: function remove(target, item) {
                    //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
                    var index = target.indexOf(item);
                    if (~index) return IMD().util.array.removeAt(target, index);
                    return false;
                }
            }
        }
        /**
         * url获取方法
         */
        var url = {
            /**
             * 根据配置获取路径公共方法
             * ~：获取相对于html路径
             * $：获取静态资源的路径
             * @：获取组件的源码路径
             * 默认返回webRoot的default配置的路径
             * @param {String} url 
             * @param {String} rootPath 
             * @returns 
             */
            getWebPath:function(url, rootPath) {
                if (!url) {
                    return "";
                }
                let isHtmlDir = false;
                let isAssetsDir = false;
                let isModuleDir = false;
                if (url.startsWiths("~")) {
                    isHtmlDir = true;
                    url = url.substr(1);
                } else if (url.startsWiths("$")) {
                    isAssetsDir = true;
                    url = url.substr(1);
                } else if (url.startsWiths("@")) {
                    isModuleDir = true;
                    url = url.substr(1);
                }
                if (url.startsWiths("/")) {
                    url = url.substr(1);
                } else if (url.startsWiths("./") || url.startsWiths("../") || url.startsWiths("http://") || url.startsWiths("https://")) {
                    return url;
                }
                if (isHtmlDir) {
                    return IDM.setting.webRoot.htmlDir + url;
                } else if (isAssetsDir) {
                    return IDM.setting.webRoot.assetsDir + url;
                } else if (isModuleDir) {
                    return IDM.setting.webRoot.isModuleDir + url;
                } else {
                    let root = rootPath || IDM.setting.webRoot.default;
                    return root + url;
                }
            },
            /**
             * 根据配置返回组件模块的资源路径公共方法
             * @param {*} url 资源的地址，会用module的codeSrc的最后一级目录（static）去匹配url的第一级目录，首先会把url的前面./../全部去除，然后再匹配第一级目录，一致也去除，最后拼接
             * @param {*} module 
             */
            getModuleAssetsWebPath:function(url,module){
                if(!IDM.env_dev){
                    //如果为模块下运行则直接原模原样返回
                    return url;
                }
                if (!url) {
                    return "";
                }
                if (url.startsWiths("/")) {
                    url = url.substr(1);
                }
                var freplace = function(){
                    if(url.startsWiths("./")){
                        url=url.replace("./","");
                    }else if(url.startsWiths("../")){
                        url=url.replace("../","");
                    }
                    if(url.startsWiths("./")||url.startsWiths("../")){
                        freplace();
                    }
                }
                freplace();
                //再次判断/是否第一个
                if (url.startsWiths("/")) {
                    url = url.substr(1);
                }
                var codeSrcMd = module.codeSrc.substr(0,module.codeSrc.lastIndexOf("/"));
                var codeSrcLastMd = codeSrcMd.substr(codeSrcMd.lastIndexOf("/")+1);
                if(url.startsWiths(codeSrcLastMd+"/")){
                    //如果第一级目录匹配
                    url = url.replace(codeSrcLastMd+"/","");
                }
                codeSrcMd = codeSrcMd+"/"+url;
                return IDM.url.getWebPath("@"+codeSrcMd);
            },
            /**
             * 直接获取绝对路径
             * @param {*} url 
             * @returns 
             */
            getAbsolutePath:function(url) {
                if (url.indexOf("~/") == 0||url.indexOf("/") == 0) {
                    url = IDM.url.getWebPath(url.substr(1));
                }
                return url;
            },
            stringify:function(params, options) {
                let defaultOptions = {
                    arrayFormat: "repeat"
                };
                options = IDM.mix({}, defaultOptions, options);
                return qs.stringify(params, options);
            },
            parse:function(str, options) {
                let defaultOptions = {
                    arrayFormat: "repeat"
                };
                options = IDM.mix({}, defaultOptions, options);
                return qs.parse(str, options);
            },
            /**
             * 解析url
             * @param url
             */
            analyzing:function(url) {
                let i;
                if (!url || url === '') {
                    return {
                        url: null,
                        protocol: null,
                        slash: null,
                        host: null,
                        port: null,
                        path: null,
                        queryString: null,
                        hash: null,
                        query: {}
                    };
                }
                url = decodeURIComponent(url);
                const parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
                const _result = parse_url.exec(url);
                const names = ['url', 'protocol', 'slash', 'host', 'port', 'path', 'queryString', 'hash'];
                const result = {};
                for (i = 0; i < names.length; i++) {
                    result[names[i]] = _result[i];
                }
                result.protocol = result.protocol && (result.protocol + ':');
                result.path = result.slash !== '//' ? ('/' + result.host + '/' + result.path) : '/' + result.path;
                result.host = result.slash !== '//' ? null : result.host;
                if (!result.port) {
                    result.port = result.protocol === 'http:' ? '80' : result.protocol === 'https:' ? 8080 : '';
                }
                const _query = {};
                result.queryString = result.queryString || '';
                const query = result.queryString.split('&');
                for (i = 0; i < query.length; i++) {
                    const item = query[i].trim();
                    let _i = item.indexOf('='),
                        _v = '',
                        _k = '';
                    if (item !== '') {
                        if (_i === -1) {
                            _k = item;
                        } else {
                            _v = item.substr(_i + 1);
                            _k = item.replace('=' + _v, '');
                        }
                        if (!_query[_k]) {
                            _query[_k] = _v;
                        } else if (typeof _query[_k] === 'string') {
                            _query[_k] = [_query[_k], _v];
                        } else {
                            _query[_k] = _query[_k].push(_v);
                        }
                    }
                }
                result.query = _query;
                return result;
            },
            getURLRoot:function() {
                var theWetRootPath = "";
                try {
                    var pathName = window.location.pathname.substring(1);
                    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));

                    var slash = "/";
                    if (webName === "ctrl" || webName === "form" || !webName) { //如果上下文/的情况下，取的不对
                        webName = "";
                        slash = "";
                    }
                    theWetRootPath = window.location.protocol + '//' + window.location.host + '/' + webName + slash;
                } catch (e) {
                    console.error(e);
                }

                return theWetRootPath;
            },
            /*
            根据环境的不同获取对应的url
            */
            getContextWebUrl:function(url){
                const { NODE_ENV } = process.env
                if(NODE_ENV =="production"){
                    return IDM.url.getURLRoot()+url
                }else{
                    return IDM.url.getWebUrl(url)
                }
            },
            queryString:function (key) {
                if (!globalCache["url_queryString"]) {
                    globalCache["url_queryString"] = {};
                }
                if (!globalCache["url_queryString"][key]) {
                    var url = window.location.hash;
                    var oRegex = new RegExp("[?&]" + key + "=([^&]+)", "i");
                    var oMatch = oRegex.exec(url);
                    if (oMatch && oMatch.length > 1) {
                        var val = decodeURI(oMatch[1]);
                        globalCache["url_queryString"][key] = val;
                        return val;
                    } else {
                        return "";
                    }
                }
                return globalCache["url_queryString"][key];
            }
        }
        /**
         * 获取数据http
         */
        var http={

        }
        if(axios){
            const Axios = axios.create({
                baseURL: "",
                timeout: 20000,
                responseType: "json",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    Code: "pc"
                },
                withCredentials: true
            });
        
            const DEFAULT_ERROR = "网络存在异常";
        
            Axios.interceptors.response.use(response => {
                //处理IE9请求json时不能自动转化成对象的问题
                if (response.data == null && response.config.responseType === "json" && response.request.responseText != null) {
                    try {
                        response.data = JSON.parse(response.request.responseText);
                    } catch (e) {
                        // ignored
                    }
                }
                return response;
            });
        
            Promise.prototype.done = function(fn) {
                function responseHanlder(response) {
                    if (response.headers) {
                        var result = response.data || {};
                        //success、state、message这3个属性都存在表示是我们自己应用的程序
                        if (util.isDef(result.success) && util.isDef(result.state) && util.isDef(result.message)) {
                            if (result.state == "20001" && !result.message) {
                                result.message = DEFAULT_ERROR;
                            }
                            return fn(result);
                        } else {
                            return fn(result);
                        }
                    } else {
                        var result = response;
                        //success、state、message这3个属性都存在表示是我们自己应用的程序
                        if (util.isDef(result.success) && util.isDef(result.state) && util.isDef(result.message)) {
                            if (result.state == "20001" && !result.message) {
                                result.message = DEFAULT_ERROR;
                            }
                            return fn(result);
                        } else {
                            return fn(result);
                        }
                    }
        
                }
                let r = this.then(response => {
                    return responseHanlder(response);
                });
                return r;
            };
        
            Promise.prototype.error = function(fn) {
                function errorHandler(error) {
                    fn({
                        capture: false,
                        state: -1,
                        message: DEFAULT_ERROR,
                        error: error
                    });
                }
                return this.catch(error => {
                    errorHandler(error);
                });
            };
        
            Promise.prototype.always = function(fn) {
                this.finally(fn);
            };
        
            http.get = function(path, params, options, rootPath) {
                if (IDM.type(options) == 'string') {
                    rootPath = options;
                    options = null;
                }
                path = IDM.url.getWebPath(path, rootPath);
                let opts = {
                    params: params,
                    paramsSerializer: function(params) {
                        return qs.stringify(params, {
                            arrayFormat: "repeat"
                        });
                    }
                };
                opts = IDM.mix(opts, options || {});
                let p = Axios.get(path, opts);
                return p;
            }
        
            http.post = function(path, params, options, rootPath) {
                if (IDM.type(options) == 'string') {
                    rootPath = options;
                    options = null;
                }
                path = IDM.url.getWebPath(path, rootPath);
                let configContentType = options && options.headers && options.headers["Content-Type"] ? options.headers["Content-Type"] : "";
                if (configContentType !== "multipart/form-data") {
                    params = qs.stringify(params);
                }
                let opts = {};
                opts = IDM.mix(opts, options || {});
                let p = Axios.post(path, params, opts);
                return p;
            }
        
            http.all = function(arr) {
                return axios.all(arr).then(axios.spread((...res) => {
                    const list = res.map(item => item.data);
                    return list;
                }))
            }
        
            http.upload = function(path, file, params, options, rootPath) {
                if (IDM.type(options) == 'string') {
                    rootPath = options;
                    options = null;
                }
                let opts = {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                };
                opts = IDM.mix(opts, options || {});
                var forms = new FormData();
                forms.append("file", file);
                for (let k in params) {
                    forms.append(k, params[k]);
                }
                path = IDM.url.getWebPath(path, rootPath);
                let p = Axios.post(path, forms, opts);
                return p;
            }
        
            window.$$allLoadFiles = {};
            window.$$allLoadFilesArray = [];
        
            http.importFiles = function(files) {
                let states = [];
                let loadFiles = IDM.type(files) == "array" ? files.slice(0) : [files];
                let promise = new Promise(resolve => {
                    recursionLoad(() => {
                        resolve(states);
                    });
                });
        
                function recursionLoad(callback) {
                    let f = loadFiles.shift();
                    if (f) {
                        loadFile(f)
                            .then(result => {
                                states.push(result);
                                result = null;
                            })
                            .catch(result => {
                                http.importFiles.kill(result.src, true);
                                states.push(result);
                                result = null;
                            })
                            .finally(() => {
                                recursionLoad(callback);
                            });
                    } else {
                        callback && callback();
                    }
                }
                return promise;
            }
        
            http.getFileType = function(url) {
                if (url != null && url.length > 0) {
                    if (url.lastIndexOf("?") > 0) {
                        url = url.substr(0, url.lastIndexOf("?"));
                    }
                    return url.substr(url.lastIndexOf(".")).toLowerCase();
                }
            }
        
            http.loadFile = function(url) {
                let type = IDM.http.getFileType(url);
                let fileObj = null;
                let promise = new Promise((resolve, reject) => {
                    if (!window.$$allLoadFiles[url]) {
                        if (type == ".js") {
                            fileObj = document.createElement("script");
                            fileObj.src = url;
                        } else if (type == ".css") {
                            fileObj = document.createElement("link");
                            fileObj.href = url;
                            fileObj.type = "text/css";
                            fileObj.rel = "stylesheet";
                        }
                        if (fileObj) {
                            fileObj.__views__ = [];
                            fileObj.onload = fileObj.onreadystatechange = function() {
                                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                                    window.$$allLoadFiles[url].state = "success";
                                    resolve(window.$$allLoadFiles[url]);
                                    _.each(window.$$allLoadFiles[url].promiseList, p => {
                                        p.resolve(window.$$allLoadFiles[url]);
                                    });
                                }
                            };
                            fileObj.onerror = function() {
                                window.$$allLoadFiles[url].state = "error";
                                _.each(window.$$allLoadFiles[url].promiseList, p => {
                                    p.reject(window.$$allLoadFiles[url]);
                                });
                            };
                            if (!window.$$allLoadFiles[url]) {
                                window.$$allLoadFiles[url] = {
                                    elem: fileObj,
                                    state: "pending",
                                    type: type,
                                    src: url,
                                    promiseList: [{ resolve: resolve, reject: reject }]
                                };
                                window.$$allLoadFilesArray.push(url);
                                document.getElementsByTagName("BODY")[0].appendChild(fileObj);
                            }
                        }
                    } else {
                        window.$$allLoadFilesArray.push(url);
                        let state = window.$$allLoadFiles[url].state;
                        if (state == "pending") {
                            window.$$allLoadFiles[url].promiseList.push({ resolve: resolve, reject: reject });
                        } else if (state == "success") {
                            resolve(window.$$allLoadFiles[url]);
                        } else {
                            reject(window.$$allLoadFiles[url]);
                        }
                    }
                });
                return promise;
            }
            http.importFiles.kill = function(src, mark) {
                IDM.array.remove(window.$$allLoadFilesArray, src);
                let result = _.filter(window.$$allLoadFilesArray, url => url == src);
                if (result.length <= 0 || mark === true) {
                    let f = window.$$allLoadFiles[src];
                    if (f && f.elem && f.elem.parentNode) {
                        f.elem.parentNode.removeChild(f.elem);
                    }
                    delete window.$$allLoadFiles[src];
                }
            };
            http.importFiles.has = function(src) {
                let result = _.filter(window.$$allLoadFilesArray, url => url == src);
                return result.length > 0;
            };
        }
        

        return {
            util,
            url,
            http
        }
    }
    
    //修复低版本浏览器本身的jsapi功能缺失的缺陷
    //增加string的trim函数
    if (typeof String.prototype.trim != "function") {
        String.prototype.trim=function(){
        let emptyBlockReg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return this.replace(emptyBlockReg,'');
        }
    }
    //增加string的startsWiths
    if (typeof String.prototype.startsWiths != "function") {
        String.prototype.startsWiths = function (prefix) {
        return this.slice(0, prefix.length) === prefix;
        };
    }
    
    //增加string的endsWiths
    if (typeof String.prototype.endsWiths != "function") {
        String.prototype.endsWiths = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }
    //兼容低版本浏览器没有forEach
    if (typeof Array.prototype.forEach != "function") {
        Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i], i);
        }
        };
    }
    //兼容低版本浏览器没有filter函数
    if (typeof Array.prototype.filter != "function") {
        Array.prototype.filter = function (callback) {
        var result = [];
        for (var i = 0; i < this.length; i++) {
            var r = callback(this[i]);
            if (r === true) {
            result.push(this[i]);
            }
        }
        return result;
        };
    }
    //兼容低版本浏览器没有classList
    if (!("classList" in document.documentElement)) {
        Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function () {
            var self = this;
    
            function update(fn) {
            return function (value) {
                var classes = self.className.split(/\s+/g),
                index = classes.indexOf(value);
    
                fn(classes, index, value);
                self.className = classes.join(" ");
            };
            }
    
            return {
            add: update(function (classes, index, value) {
                if (!~index) classes.push(value);
            }),
    
            remove: update(function (classes, index) {
                if (~index) classes.splice(index, 1);
            }),
    
            toggle: update(function (classes, index, value) {
                if (~index) classes.splice(index, 1);
                else classes.push(value);
            }),
    
            contains: function (value) {
                return !!~self.className.split(/\s+/g).indexOf(value);
            },
    
            item: function (i) {
                return self.className.split(/\s+/g)[i] || null;
            }
            };
        }
        });
    }
    
    //兼容元素没有matches函数
    if (!Element.prototype.matches) {
        Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
            // eslint-disable-next-line no-empty
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
    }
    
    //兼容IE无toBlob
    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function (callback, type, quality) {
            var canvas = this;
            setTimeout(function() {
            var binStr = atob( canvas.toDataURL(type, quality).split(',')[1] );
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
            }
    
            callback(new Blob([arr], { type: type || 'image/png' }));
            });
        }
        });
    }
    window.IDM={
        ...idmFun().util,
        util:idmFun().util,
        setting:setting,
        url:idmFun().url,
        http:idmFun().http
    }
})();