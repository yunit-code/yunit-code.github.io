/**
 * idm核心框架提供给组件开发的核心包
 * 注意：此核心包不会包含上传到组件代码中，只是用于组件开发使用
 */
 (function(){
    var setting = {
        //核心包的版本
        version:"1.0.0",
        webRoot:{
            //组件的所属项目的根目录名称，
            default:"/DreamWeb/",
            //页面的前置路径，可相对或绝对（./或../idmlcore/或/DreamWeb/idmlcore/）
            htmlDir:"./",
            //打包便宜的静态资源文件，相对于当前的页面路径
            assetsDir: "./static/",
            /**
             * 组件相对此框架所在项目的目录
             * 框架页面index.html在DreamWeb/idmlcore/A  下面，则为../../idm_modules/或/DreamWeb/idm_modules/
             * 框架页面index.html在DreamWeb/ 下面，则为./idm_modules/或/DreamWeb/idm_modules/
             */
            moduleDir:"../idm_modules/",
        }
    }
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
             * 更新vue的data
             * @param {*} _this vue对象
             * @param {*} dataName data的名称
             * @param {*} attrData 整个要更新的数据
             * @returns 
             */
            refreshVueData:function(_this,dataName,attrData){
                if(!_this||!dataName||!attrData||typeof attrData!="object"){
                    return;
                }
                Object.keys(attrData).forEach(key=>{
                    _this.set(this[dataName],key,attrData[key])
                })
            },
            /**
             * 对比被修改的值，返回被修改的旧对象，新对象不为空也
             * @param {*} object 
             * @param {*} base 
             * @returns 
             */
            difference:function(object, base) {
                object = object ||{};
                base = base ||{};
                function changes(object, base) {
                    return _.transform(object, function(result, value, key) {
                        if (!_.isEqual(value, base[key])) {
                            result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
                        }
                    });
                }
                return changes(object, base);
            },
            /**
             * 把object样式转换为style标签样式并添加到head的标签中
             */
            setStyleToPageHead:function(id,object){
              var style = "";
              for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                  const element = object[key];
                  style+=`${key}:${element};`
                }
              }
              var ele=document.createElement("style");
              ele.setAttribute("from",id);
              ele.innerHTML=`${id.indexOf(".")==0?"":"#"}${id}{${style}}`;
              document.getElementsByTagName('head')[0].appendChild(ele)
            },
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
                //如果图片转换了base64直接返回
                if(url.startsWiths("data:image")){
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
                    if(url.indexOf("?")==-1){
                        url = window.location.href.split("?").length>1?window.location.href.split("?")[1]:"";
                        url ="?"+ url.split("#")[0];
                    }
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
            },
            queryObject:function (query) {
                query = query||window.location.hash;
                query = query.split("?").length>1?query.split("?")[1]:"";
                if(!query){
                    query = window.location.href.split("?").length>1?window.location.href.split("?")[1]:"";
                    query = query.split("#")[0];
                }
                if(!query){
                    return {}
                }
                var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
                var obj = {};
                while (reg.exec(query)) {
                    obj[RegExp.$1] = RegExp.$2;
                }
                return obj;
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
                if (configContentType.indexOf('application/json')==-1) {
                    params = qs.stringify(params);
                }
                // if (configContentType !== "multipart/form-data") {
                //     params = qs.stringify(params);
                // }
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
        /**
         * 用户信息公共方法
         */
        var user={
            userObject:{
                //用户信息
                userid:"",
                UNAME:"申龙"
            },
            /**
             * 获取当前登录用户信息
             */
            getCurrentUserInfo(){
                return this.userObject;
            },
            /**
             * 设置当前登录用户信息
             * @param {*} object 
             */
            setCurrentUserInfo(object){
                this.userObject = object;
            }
        }
        /**
         * 应用信息公共方法
         */
        var app={
            appObject:{
                //应用信息
            },
            /**
             * 获取应用信息
             */
            getAppInfo(){
                return this.appObject;
            },
            /**
             * 设置应用信息
             * @param {*} object 
             */
            setAppInfo(object){
                this.appObject = object;
            }
        }
        
        /**
         * 主題信息公共方法
         */
         var theme={
            themeObject:"idm-theme-blue",
            /**
             * 获取当前登录用户信息
             */
             getCurrentThemeInfo(){
                return this.themeObject;
            },
            /**
             * 设置当前登录用户信息
             * @param {*} object 
             */
             setCurrentThemeInfo(object){
                this.themeObject = object;
                //给body追加class
                $("body").addClass((IDM.setting.applications?IDM.setting.applications.themeNamePrefix:"")+(typeof object==="object"?JSON.stringify(object):object));
            }
        }
        /**
         * 水印公共方法
         */
        var watermark={
            /**
             * 设置水印
             * @param {*} $el 要添加到的元素位置
             * @param {*} type 0：背景水印，1：水印置顶
             * @param {*} mainContent 可为图片路径（只支持带.png,.jpg,.jpeg后缀的），可为文字内容
             * @param {*} text1 再次要添加的文字内容
             * @param {*} option 其他选项
             */
            set: function ($el, type, mainContent, text1, option) {
                if(!$el){
                    return;
                }
                var canvas = document.createElement('canvas')
                canvas.width = option.width || 160;
                canvas.height = option.height || 160;
                canvas.style.display = 'none';
                var shuiyin = canvas.getContext('2d');
                // 控制文字的旋转角度和上下位置
                shuiyin.rotate(-(option.rotate || 0) * Math.PI / 180);
                shuiyin.translate(-(option.rotate || 0), 0)
                //文字颜色
                shuiyin.fillStyle = option.fontColor || "#F5F5F5";
                //文字样式
                shuiyin.font = `400 ${option.fontSize || '16px'} Microsoft JhengHei`;
                if (mainContent.endsWiths(".png") || mainContent.endsWiths(".jpg") || mainContent.endsWiths(".jpeg")) {
                    if (text1) {
                        shuiyin.fillText(text1, option.fontLeftSize || 0, (option.rotate || 0) + (option.imgSize || 16) + parseInt((option.fontSize || 16))+(option.topSize || 0));
                    }
                    //绘制图片
                    var img = new Image();
                    // img.setAttribute("crossOrigin",'Anonymous')
                    // img.setAttribute("crossDomain",true)
                    // img.setAttribute("Access-Control-Allow-Origin",'http://117.184.59.230:8900')
                    //引入图片地址
                    img.src = IDM.url.getWebPath(mainContent);
                    var that = this;
                    img.onload = function () {
                        /**画布上绘制图像、画布或视频，
                         * 参数——img：规定要使用的图像、画布或视频
                         * sx：可选。开始剪切的 x 坐标位置
                         * sy：可选。开始剪切的 y 坐标位置
                         swidth：可选。被剪切图像的宽度。
                        sheight：可选。被剪切图像的高度。
                        x：在画布上放置图像的 x 坐标位置。
                        y：在画布上放置图像的 y 坐标位置。
                        width：可选。要使用的图像的宽度（伸展或缩小图像）。
                        height：可选。要使用的图像的高度（伸展或缩小图像）。**/
                        //计算出比例
                        var wbl = img.width > img.height ? parseInt((option.imgSize || 16)) / img.width : parseInt((option.imgSize || 16)) / img.height;
                        shuiyin.drawImage(img, 0, 0, img.width, img.height, option.imgLeftSize || 0, (option.rotate || 0)+(option.topSize || 0), img.width * wbl, img.height * wbl);
                        that.addEl($el, type, mainContent, text1, option, canvas);
                    }

                } else {
                    shuiyin.fillText(mainContent, option.fontLeftSize || 0, canvas.height / 2 - parseInt(option.fontSize || 16)+(option.topSize || 0));
                    if (text1) {
                        shuiyin.fillText(text1, option.fontLeftSize || 0, canvas.height / 2 + 5+(option.topSize || 0));
                    }
                    this.addEl($el, type, mainContent, text1, option, canvas);
                }
                // shuiyin.fillText(text2, canvas.width / 3, canvas.height / 2 + 20);

                //此方法是防止用户通过控制台修改样式去除水印效果
                /* MutationObserver 是一个可以监听DOM结构变化的接口。 */
                // const observer = new MutationObserver(() => {
                //     const wmInstance = document.querySelector('.watermark');
                //     if ((wmInstance && wmInstance.getAttribute('style') !== styleStr) || !wmInstance) {
                //         //如果标签在，只修改了属性，重新赋值属性
                //         if (wmInstance) {
                //             // 避免一直触发
                //             // observer.disconnect();
                //             // console.log('水印属性修改了');
                //             wmInstance.setAttribute('style', styleStr);
                //         } else {
                //             /* 此处根据用户登录状态，判断是否终止监听，避免用户退出后登录页面仍然有水印 */
                //             if (store.getters.token) {
                //                 //标签被移除，重新添加标签
                //                 // console.log('水印标签被移除了');
                //                 document.body.appendChild(watermark)
                //             } else {
                //                 observer.disconnect();
                //             }
                //         }
                //     }
                // })
                // observer.observe(document.body, {
                //     attributes: true,
                //     subtree: true,
                //     childList: true,
                // });
            },
            addEl($el, type, mainContent, text1, option, canvas) {
                if(!$el){
                    return;
                }
                /* 新建一个用于填充canvas水印的标签，之所以没有直接在body上添加，
                是因为z-index对个别内容影响，才考虑的不用body */
                var watermark = document.createElement('div')

                const styleStr = `
                    position: absolute;
                    top:0;
                    left:0;
                    bottom:0;
                    right:0;
                    height:100%;
                    opacity:${option.opacity || 1};
                    z-index:${type == 0 ? 0 : 9999999};
                    pointer-events:none;
                    background-repeat:repeat;
                    mix-blend-mode: multiply;
                    background-image:url('${canvas.toDataURL("image/png")}')`;
                watermark.setAttribute('style', styleStr);
                watermark.classList.add('idm_watermark')
                if ($el.querySelector(".idm_watermark")) {
                    $el.querySelector(".idm_watermark").setAttribute('style', styleStr);
                } else {
                    $el.insertBefore(watermark, $el.children[0]);
                }
            },
            close: function ($el) {
                if(!$el){
                    return;
                }
                /* 关闭页面的水印，即要移除水印标签 */
                let watermark = $el.querySelector('.idm_watermark')
                watermark&&$el.removeChild(watermark)
            }
        }
        /**
         * 验证公共方法
         * @returns 
         */
        let validatorMap = {
            'isExternal':{
                name:"是否外部的资源",
                validator(path){
                return /^(https?:|mailto:|tel:)/.test(path)
                }
            },
            'isNull': {
                name:"是否为空",
                validator(value) {
                let v = value;
                if (IDM.type(v) == 'string') {
                    v = v.trim();
                }
                if (v === '' || v == "[]"|| v == "{}") {
                    return true;
                } else if (IDM.type(v) == 'object' && IDM.isEmptyObject(v)) {
                    return true;
                } else if (IDM.type(v) == 'array' && v.length == 0) {
                    return true;
                } else if (IDM.isUnDef(v)) {
                    return true;
                }
                return false;
                }
            },
            //验证是否是一个数字
            "isNumber": {
                name:"是否是一个数字",
                validator(value, precision) {
                let reg = null;
                if (precision && precision > 0) {
                    reg = new RegExp("^-?([0-9]\\d*|0(?!\\.0+$))(\\.\\d{1," + precision + "})?$", 'ig');
                } else {
                    reg = new RegExp("^-?[0-9]\\d*$", 'ig');
                }
                if (!reg.test(value)) {
                    return false;
                }
                return true;
                }
            },
            //验证是否是一个字符串
            "isString": {
                name:"是否是一个字符串",
                validator(value) {
                if (typeof value === 'string' || value instanceof String) {
                    return true
                }
                return false
                }
            },
            //验证是否是一个数组
            "isArray": {
                name:"是否是一个数组",
                validator(arg) {
                if (typeof Array.isArray === 'undefined') {
                    return Object.prototype.toString.call(arg) === '[object Array]'
                }
                return Array.isArray(arg)
                }
            },
            //验证数字是否超出
            "isNumberOver": {
                name:"是否超出指定数字",
                validator(value, ceil) {
                value = parseFloat(value);
                ceil = parseFloat(ceil);
                if (value > ceil) {
                    return true;
                }
                return false;
                }
            },
            //验证数字是否小于
            "isNumberUnder":{
                name:"是否小于指定数字",
                validator(value, floor) {
                value = parseFloat(value);
                floor = parseFloat(floor);
                if (value < floor) {
                    return true;
                }
                return false;
                }
            },
            //验证数字精度
            "precision":{
                name:"数字精度",
                validator(value, precision) {
                value = value.toString();
                const reg = new RegExp("^-?([0-9]\\d*|0(?!\\.0+$))(\\.\\d{1," + precision + "})?$", 'ig');
                if (!reg.test(value)) {
                    return false;
                }
                return true;
                }
            },
            "maxLength":{
                name:"字符串超出指定长度",
                validator(value,maxlength){
                if(value.length>maxlength){
                    return true;
                }
                return false;
                }
            },
            "minLength":{
                name:"字符小于指定长度",
                validator(value,minLength){
                if(value.length<minLength){
                    return true;
                }
                return false;
                }
            },
            //身份证号码
            'isIDCard': {
                name:"身份证号码",
                type:"express",
                validator(value) {
                //身份证正则表达式(15位)
                const isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                //身份证正则表达式(18位)
                const isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if (!isIDCard1.test(value) && !isIDCard2.test(value)) {
                    return false;
                }
                return true;
                }
            },
            //是否是手机
            'isMobile': {
                name:"手机号码",
                type:"express",
                validator(value) {
                var reg = /^1(3|4|5|7|8|9|6)\d{9}$/;
                if (!reg.test(value)) {
                    return false;
                }
                return true;
                }
            },
            //是否是座机
            "isTelPhone": {
                name:"座机号码",
                type:"express",
                validator(value) {
                var reg = /^(0\d{2,3}-)?\d{7,8}$/;
                if (!reg.test(value)) {
                    return false;
                }
                return true;
                }
            },
            //是否是手机或座机
            "isMobileOrTelPhone": {
                name:"手机/座机号码",
                type:"express",
                validator(value) {
                var mobile = /^1(3|4|5|7|8|9|6)\d{9}$/;
                var tel = /^(0\d{2}-)?\d{7,8}$/;
                if (!mobile.test(value) && !tel.test(value)) {
                    return false;
                }
                return true;
                }
            },
            //电子邮箱
            'isEmail': {
                name:"电子邮箱",
                type:"express",
                validator(value) {
                var reg = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
                if (!reg.test(value)) {
                    return false;
                }
                return true;
                }
            },
            "isPlateNumber": {
                name:"车牌号码",
                type:"express",
                validator(value) {
                var reg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
                if (reg.test(value)) {
                    return false;
                }
                return true;
                }
            }
        }
        var validate = function() {
            let args = Array.prototype.slice.call(arguments, 0);
            let validator = args[0];
            let params = args.slice(1);
            return validatorMap[validator].validator.apply(this, params);
        }
        validate.map = validatorMap;
        return {
            util,
            url,
            http,
            user,
            app,
            theme,
            watermark,
            validate
        }
    }
    /**
     * idm 消息组件
     * @returns 
     */
    var idmMessage = function(){
        /**
         * 追加style到head
         */
        var msgEleStyle=document.createElement("style");
        msgEleStyle.setAttribute("from","IDM-Message-Style-Code");
        msgEleStyle.innerHTML=`.IDM-Message.IDM-Message-wrapper{box-sizing:border-box;margin:0;padding:0;color:rgba(0,0,0,.55);font-size:13px;font-variant:tabular-nums;line-height:1;list-style:none;font-feature-settings:"tnum";position:fixed;top:16px;left:0;z-index:1010;width:100%;pointer-events:none;}.IDM-Message .IDM-Message-item{padding:8px;text-align:center;-webkit-animation-duration:.3s;animation-duration:.3s;position:relative;}.IDM-Message .IDM-Message-item .IDM-Message-count{text-align:center;position:absolute;left:-4px;top:-4px;background-color:red;color:#fff;font-size:12px;line-height:16px;border-radius:2px;display:inline-block;min-width:16px;height:16px;-webkit-animation-duration:.3s;animation-duration:.3s;border-radius:4px;}.IDM-Message .IDM-Message-item:first-child{margin-top:-8px;}.IDM-Message .IDM-Message-content{text-align:left;position:relative;display:inline-block;padding:10px 16px;background:#fff;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15);pointer-events:all;max-width:80%;min-width:80px;}.IDM-Message .IDM-Message-content [class^="IDM-Message-content-"]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-height:21px;line-height:21px;}.IDM-Message .IDM-Message-content .IDM-Message-content-with-close{padding-right:20px;}.IDM-Message .IDM-Message-icon{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;top:1px;margin-right:8px;font-size:16px;}.IDM-Message .IDM-Message-icon svg{display:inline-block;}.IDM-Message .IDM-Message-content-info .IDM-Message-icon{color:#1890ff;user-select:none;}.IDM-Message .IDM-Message-content-success .IDM-Message-icon{color:#52c41a;}.IDM-Message .IDM-Message-content-error .IDM-Message-icon{color:#f5222d;}.IDM-Message .IDM-Message-content-warning .IDM-Message-icon{color:#faad14;}.IDM-Message .IDM-Message-icon-close{position:absolute;top:12px;right:5px;padding:0;overflow:hidden;font-size:12px;line-height:22px;background-color:transparent;border:none;outline:none;cursor:pointer;color:rgba(0,0,0,.45);transition:color .3s}.IDM-Message .IDM-Message-icon-close:hover>svg path{stroke:#555;}.IDM-Message .animate-turn{animation:IDMMessageTurn 1s linear infinite;-webkit-animation:IDMMessageTurn 1s linear infinite;}@keyframes IDMMessageTurn{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes IDMMessageTurn{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes IDMMessageMoveOut{0%{max-height:150px;padding:8px;opacity:1}to{max-height:0;padding:0;opacity:0}}@keyframes IDMMessageMoveOut{0%{max-height:150px;padding:8px;opacity:1}to{max-height:0;padding:0;opacity:0}}@-webkit-keyframes IDMMessageMoveIn{0%{transform:translateY(-100%);transform-origin:0 0;opacity:0}to{transform:translateY(0);transform-origin:0 0;opacity:1}}@keyframes IDMMessageMoveIn{0%{transform:translateY(-100%);transform-origin:0 0;opacity:0}to{transform:translateY(0);transform-origin:0 0;opacity:1}}@-webkit-keyframes IDMMessageShake{0%,100%{transform:translateX(0px);opacity:1;}25%,75%{transform:translateX(-4px);opacity:0.75;}50%{transform:translateX(4px);opacity:0.25;}}@keyframes IDMMessageShake{0%,100%{transform:translateX(0px);opacity:1;}25%,75%{transform:translateX(-4px);opacity:0.75;}50%{transform:translateX(4px);opacity:0.25;}}`;
        document.getElementsByTagName('head')[0].appendChild(msgEleStyle)

        /**
         * 声明插件名称
         */
        var PLUGIN_NAME = "IDM-Message";

        /**
         * 命名空间 用于css和事件
         */
        var NAMESPACE = PLUGIN_NAME;

        /**
         * 状态 & 动画
         * 显示中，显示完成，关闭中
         */
        var STATES = {
            opening : 'IDMMessageMoveIn',
            done : '',
            closing : 'IDMMessageMoveOut'
        }

        /**
         * 全局默认配置
         * position {String} 位置，仅支持'center','right','left',默认'center'
         * type {String} 类型，支持'info','warning','success','error','loading'
         * showClose {Boolean} 是否显示关闭图标，默认为false不显示
         * timeout {Number} 多久后自动关闭，单位ms,默认2500
         * autoClose {Boolean} 是否自动关闭，默认true,注意在type为loading的时候自动关闭为false
         * content {String} 提示的内容
         * onClose {Function} 关闭的回调函数
         */
        var DEFAULTS = Object.assign({
            position:'center',
            type:"info", 
            showClose:false,
            timeout:2500,
            animation:true,
            autoClose:true,
            content:"",
            onClose:null,
            maxNums:5,
            html:false
        },window.IDM && window.IDM.message && window.IDM.message.DEFAULTS)

            /**
         * 设置icon html代码
         */
        var ICONS = {
            info:'<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>',
            warning:'<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>',
            error:'<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>',
            success:'<svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>',
            loading:'<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            close:'<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        }

            /**
         * 是否支持动画属性
         * @type {Boolean}
         */
        var CAN_ANIMATION = (function() {
            var style = document.createElement('div').style;
            return style.animationName !== undefined ||
                style.WebkitAnimationName !== undefined ||
                style.MozAnimationName !== undefined ||
                style.msAnimationName !== undefined ||
                style.OAnimationName !== undefined;
        })();

        /**
         * 生成带插件名的名称
         * @param {...String}
         * @returns {String}
         */
        function namespacify(){
            var res = NAMESPACE;
            for(var i = 0; i < arguments.length; ++i){
                res += '-' + arguments[i];
            }
            return res;
        }

        /**
         * 每条消息的构造函数
         * @param {Objetc} opts 配置参数，参考DEFAULTS
         */
        function Msg(opts){
            var oMsg = this;
            oMsg.settings = Object.assign({},DEFAULTS,opts||{});
            oMsg.id = IDM.message.instanceCount;
            var timeout = oMsg.settings.timeout;
            timeout = timeout && parseInt(timeout>=0) & parseInt(timeout)<=Math.NEGATIVE_INFINITY ?parseInt(timeout):DEFAULTS.timeout;
            oMsg.timeout = timeout;
            oMsg.settings.timeout = timeout;
            oMsg.timer = null;
            var $elem = document.createElement("div");
            var $svg = ICONS[oMsg.settings.type || 'info'];
            var contentClassName = namespacify("content-"+oMsg.settings.type || 'info');
            contentClassName +=oMsg.settings.showClose ?' '+ namespacify('content-with-close'):''
            var content = oMsg.settings.content || '';
            var $closeSvg = ICONS['close'];
            var $closeIcon = oMsg.settings.showClose ? '<i class="'+NAMESPACE+'-icon '+NAMESPACE+'-icon-close">'+$closeSvg+'</i>':'';
            var $span = document.createElement("span");
            if(oMsg.settings.html){
                $span.innerHTML = content;
            }else{
                $span.innerText = content;
            }
            $elem.innerHTML = '<div class="'+NAMESPACE+'-content">\
                <div class="'+contentClassName+'">\
                    <i class="'+NAMESPACE+'-icon">'+$svg+'</i>'+$span.outerHTML + $closeIcon +
                    '</div>\
            </div>';

            $elem.classList.add(namespacify('item'));
            $elem.style.textAlign = oMsg.settings.position;
            var $wrapper = document.querySelector('.'+NAMESPACE);
            if(!$wrapper){
                $wrapper =  document.createElement("div");
                $wrapper.classList.add(NAMESPACE,namespacify('wrapper'),namespacify('is-initialized'));
                document.body.appendChild($wrapper);
            }
            $wrapper.appendChild($elem);
            oMsg.$wrapper = $wrapper;
            oMsg.$elem = $elem;
            setState(oMsg,'opening');
            if(oMsg.settings.showClose){ //关闭按钮绑定点击事件
                $elem.querySelector("."+NAMESPACE+"-icon-close").addEventListener('click',function(){
                    oMsg.close();
                }.bind($elem))
            }
            $elem.addEventListener("animationend", function(e) {   // 监听动画完成
                var target = e.target,animationName = e.animationName;
                if(animationName == STATES['closing']){
                    clearInterval(this.timer);
                    this.destroy();
                }
                target.style.animationName = '';
                target.style.webkitAnimationName = '';
            }.bind(oMsg))
            if(oMsg.settings.autoClose){ // 自动关闭
                var intvMs = 10; // 定时器频率
                oMsg.timer = setInterval(function(){
                    this.timeout -= intvMs;
                    if(this.timeout <= 0){
                        clearInterval(this.timer)
                        this.close();
                    }
                }.bind(oMsg),intvMs);
                oMsg.$elem.addEventListener('mouseover',function(){
                    clearInterval(this.timer)
                }.bind(oMsg))
                oMsg.$elem.addEventListener('mouseout',function(){
                    if(this.state!='closing'){ // 状态为关闭则不重启定时器
                        this.timer = setInterval(function(){
                            this.timeout -= intvMs;
                            if(this.timeout <= 0){
                                clearInterval(this.timer);
                                this.close();
                            }
                        }.bind(oMsg),intvMs);
                    }
                }.bind(oMsg))
            }
        }

        function setState(inst,state){
            if(!state || !STATES[state]) return;
            inst.state = state;
            inst.$elem.style.animationName = STATES[state];
        }

        /**
         * 直接销毁元素，不会触发关闭回调函数
         */
        Msg.prototype.destroy = function(){
            this.$elem.parentNode && this.$elem.parentNode.removeChild(this.$elem);
            clearInterval(this.timer);
            IDM.message.remove(this.id);
        }
        /**
         * 关闭，支持动画则会触发动画事件
         */
        Msg.prototype.close = function(){
            setState(this,'closing');
            if(!CAN_ANIMATION){ // 不支持动画
                this.destroy();
            }else{
                IDM.message.remove(this.id);
            }
            var callback = this.settings.onClose;
            if(callback && callback instanceof Function){
                callback.call(this);
            }
        }

        /**
         * 设置消息数量统计
         * @private
         */
        function setMsgCount(oMsg){
            var countClassName = namespacify('count');
            var $content = oMsg.$elem.querySelector("."+namespacify('content')),
            $count = $content.querySelector('.'+countClassName);
            if(!$count){
                $count = document.createElement("span");
                $count.classList.add(countClassName);
                $content.appendChild($count);
            }
            $count.innerHTML = oMsg.count;
            $count.style.animationName = "";
            $count.style.animationName = "IDMMessageShake";
            oMsg.timeout = oMsg.settings.timeout || DEFAULTS.timeout;
        }

        /**
         * 合并参数为配置信息，用于创建Msg实例
         * @param {String} txt 文本内容
         * @param {Object} config 配置
         * @private
         */
        function mergeArgs(txt,config){
            var opts = Object.assign({},DEFAULTS);
            if(arguments.length===0){
                return opts;
            }
            if(txt instanceof Object){
                return Object.assign(opts,txt);
            }else{
                opts.content = txt.toString();
            }
            if(config instanceof Object){
                return Object.assign(opts,config)
            }
            return opts;
        }

        /**
         * 通过配置信息 来判断是否为同一条消息,并返回消息实例
         * @param {Object} params 配置项
         * @private
         */
        function judgeReMsg(params){
            params = params || {};
            var opt = JSON.stringify(params)
            var oInx = -1;
            var oMsg ;
            for(var i in this.oMsgs){
                var oMsgItem = this.oMsgs[i];
                if(oMsgItem.config == opt) {
                    oInx = i;
                    oMsg = oMsgItem.inst;
                    break;
                }
            }
            if(oInx < 0){
                this.instanceCount ++;
                var oItem = {};
                oItem.id = this.instanceCount;
                oItem.config = opt;
                oMsg = new Msg(params);
                oMsg.id = this.instanceCount;
                oMsg.count = '';
                oItem.inst = oMsg;
                this.oMsgs[this.instanceCount] = oItem;
                var len = this.oMsgs.length;
                var maxNums = this.maxNums;
                /**
                 * 关闭多余的消息
                */
                if(len > maxNums){
                    var oIndex = 0;
                    var oMsgs = this.oMsgs;
                    for(oIndex;oIndex<len-maxNums;oIndex++){
                        oMsgs[oIndex] && oMsgs[oIndex].inst.settings.autoClose && oMsgs[oIndex].inst.close();
                    }
                }
            }else{
                oMsg.count = !oMsg.count ? 2 : oMsg.count>=99 ? oMsg.count : oMsg.count+1;
                setMsgCount(oMsg);
            }
            oMsg.$elem.setAttribute("data-count",oMsg.count);
            return oMsg;
        }
        return {
            version:'0.0.1',
            instanceCount:0,
            oMsgs:[],
            maxNums:DEFAULTS.maxNums || 5,
            config:function(cfg){
                DEFAULTS = cfg && cfg instanceof Object ? Object.assign(DEFAULTS,cfg):DEFAULTS;
                this.maxNums = DEFAULTS.maxNums && DEFAULTS.maxNums > 0 ? parseInt(DEFAULTS.maxNums) : 3;
            },
            info:function(txt,config){
                var params = mergeArgs(txt,config);
                params.type = 'info';
            return judgeReMsg.call(this,params);
            },
            warning:function(txt,config){
                var params = mergeArgs(txt,config);
                params.type = 'warning';
            return judgeReMsg.call(this,params);
            },
            success:function(txt,config){
                var params = mergeArgs(txt,config);
                params.type = 'success';
            return judgeReMsg.call(this,params);
            },
            error:function(txt,config){
                var params = mergeArgs(txt,config);
                params.type = 'error';
            return judgeReMsg.call(this,params);
            },
            loading:function(txt,config){
                var params = mergeArgs(txt,config);
                params.type = 'loading';
                params.autoClose = false;
            return judgeReMsg.call(this,params);
            },
            remove:function(id){
                this.oMsgs[id] && delete this.oMsgs[id];
            },
            closeAll:function(){
                for(var i in this.oMsgs){
                    this.oMsgs[i] && this.oMsgs[i].inst.close();
                }
            }
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
    
    //assign 兼容处理
    if (typeof Object.assign != 'function') {   
        Object.assign = function(target) {
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
                }
            }
            }
        }
        return target;
        } 
    }

    //Cache
    var exports = {};
    Object.defineProperty(exports, "__esModule", {
    value: true
    });
    exports.default = cachePool;
    /* eslint-disable no-unused-vars */

    /*
        https://github.com/rsms/js-lru
        entry             entry             entry             entry        
        ______            ______            ______            ______       
        | head |.newer => |      |.newer => |      |.newer => | tail |      
        |  A   |          |  B   |          |  C   |          |  D   |      
        |______| <= older.|______| <= older.|______| <= older.|______|      
        
        removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added 
        */
    function Cache(maxLength) {
        // 标识当前缓存数组的大小
        this.size = 0;
        // 标识缓存数组能达到的最大长度
        this.limit = maxLength;
        //  head（最不常用的项），tail（最常用的项）全部初始化为undefined

        this.head = this.tail = void 0;
        this._keymap = {};
    }

    Cache.prototype = {
        put: function put(key, value) {
            var entry = {
            key: key,
            value: value
            };
            this._keymap[key] = entry;
            if (this.tail) {
            // 如果存在tail（缓存数组的长度不为0），将tail指向新的 entry
            this.tail.newer = entry;
            entry.older = this.tail;
            } else {
            // 如果缓存数组的长度为0，将head指向新的entry
            this.head = entry;
            }
            this.tail = entry;
            // 如果缓存数组达到上限，则先删除 head 指向的缓存对象
            /* istanbul ignore if */
            if (this.size === this.limit) {
            this.shift();
            } else {
            this.size++;
            }
            return value;
        },
        shift: function shift() {
            var entry = this.head;
            if (entry) {
            // 删除 head ，并改变指向
            this.head = this.head.newer;
            // 同步更新 _keymap 里面的属性值
            this.head.older = entry.newer = entry.older = this._keymap[entry.key] = void 0;
            delete this._keymap[entry.key]; //#1029
            // 同步更新 缓存数组的长度
            this.size--;
            }
        },
        get: function get(key) {
            var entry = this._keymap[key];
            // 如果查找不到含有`key`这个属性的缓存对象
            if (entry === void 0) return;
            // 如果查找到的缓存对象已经是 tail (最近使用过的)
            if (entry === this.tail) {
            return entry.value;
            }
            // HEAD--------------TAIL
            //   <.older   .newer>
            //  <--- add direction --
            //   A  B  C  <D>  E
            if (entry.newer) {
            // 处理 newer 指向
            if (entry === this.head) {
                // 如果查找到的缓存对象是 head (最近最少使用过的)
                // 则将 head 指向原 head 的 newer 所指向的缓存对象
                this.head = entry.newer;
            }
            // 将所查找的缓存对象的下一级的 older 指向所查找的缓存对象的older所指向的值
            // 例如：A B C D E
            // 如果查找到的是D，那么将E指向C，不再指向D
            entry.newer.older = entry.older; // C <-- E.
            }
            if (entry.older) {
            // 处理 older 指向
            // 如果查找到的是D，那么C指向E，不再指向D
            entry.older.newer = entry.newer; // C. --> E
            }
            // 处理所查找到的对象的 newer 以及 older 指向
            entry.newer = void 0; // D --x
            // older指向之前使用过的变量，即D指向E
            entry.older = this.tail; // D. --> E
            if (this.tail) {
            // 将E的newer指向D
            this.tail.newer = entry; // E. <-- D
            }
            // 改变 tail 为D
            this.tail = entry;
            return entry.value;
        }
    };

    //创建一个LRU缓存池
    function cachePool(maxLength) {
        if (maxLength === null || maxLength === undefined) {
            dsf.error("请设置缓存大小");
            return;
        }
        return new Cache(maxLength);
    }

    //表达式替换
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var express = function express(data) {
        _classCallCheck(this, express);

        this.variable = {};
        for (var k in data) {
            this.variable[k] = data[k];
        }
    };

    exports.default = express;


    var reg = /\@\[([^@]+)\]/ig;
    // let reg2 = /(\w+)(\[\d+\])/ig;
    function findData(key, data) {
        data = data || this.variable;
        if (data[key] != undefined) {
            return data[key];
        } else {
            //根据表达式层层切割查找
            var arr = key.split(".");
            var count = arr.length;
            var i = 0;
            var newkey = arr[i];
            if (newkey) {
            while (!data[newkey] && i < count - 1) {
                newkey += "." + arr[++i];
            }
            }
            if (data[newkey]) {
            var d = data[newkey];
            var tmp = arr.slice(i + 1);
            for (var _i = 0; _i < tmp.length; _i++) {
                var t = tmp[_i];
                if (t.endsWiths(")") || t.endsWiths("]")) {
                eval("d=d" + "." + t);
                } else {
                d = d[t];
                }
            }
            return d;
            }
        }
    }

    express.url = function (key) {
        if (this.vueComponent) {
            var $vm = this.vueComponent.$vm;
            if ($vm && $vm.queryString) {
            var vm = $vm;
            while (vm.queryString[key] === undefined) {
                vm = vm.$parentView;
                if (!vm) {
                return undefined;
                }
            }
            return vm ? vm.queryString[key] : this.vueComponent.$route.query[key];
            } else {
            return this.vueComponent.$route.query[key];
            }
        } else {
            return IDM.url.queryString(key);
        }
    };

    express.session = function (key) {}
    // return IDM.getCookie(key) || "";

    //
    ;express.map = function (arr, index, key) {
        var v = arr[index];
        if (v) {
            if (!key) {
            return v;
            } else {
            return v[key] || "";
            }
        }
        return null;
    };

    express.isExist = function (key) {
        var arr = [];
        for (var i = 1; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
        return arr.indexOf(key) >= 0 ? true : false;
    };
    express.disabled = function (key) {
        var arr = [];
        for (var i = 1; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
        return arr.indexOf(key) >= 0 ? false : true;
    };

    express.filePath = function (data) {
        var fileInfo = JSON.parse(data || '{}');
        if (IDM.type(fileInfo) == "array") {
            fileInfo = fileInfo[0];
        } else if (IDM.type(fileInfo) == "object") {
            fileInfo = fileInfo;
        }
        return fileInfo.relativePath;
    };

    express.pri = function (key) {
        if (this.vueComponent) {
            var vm = this.vueComponent.$vm;
            if (vm) {
            return vm.$viewInitData._privilege[key] == "1";
            }
        }
        return false;
    };

    express.isView = function () {
        if (this.vueComponent) {
            var qs = this.vueComponent.queryString;
            if (qs) {
            return qs['isView'] == "1";
            }
        }
        return false;
    };

    express.has = function (expressStr, openTag, closeTag) {
        var mat = expressStr.match(reg);
        if (mat && mat.length > 0) {
            return true;
        }
        return false;
    };

    //获取属性值
    express.__getter__ = function (key, data, isFlag) {
        var r = findData(key, data);
        if (isFlag === true) {
            if (IDM.isUnDef(r)) {
            return "";
            }
        }
        return r;
    };

    //解析表达式
    var evalMap = cachePool(200);
    var replaceMap = cachePool(200);

    express.config = function (key) {};

    express.eval = function (expressStr, data) {
        if (!expressStr) {
            return null;
        }
        // IDM.time("执行表达式"+expressStr)
        var fn = evalMap.get(expressStr);
        if (!fn) {
            (function () {
            var isCodeBlock = false;
            if (expressStr.startsWiths("<%") && expressStr.endsWiths("%>")) {
                isCodeBlock = true;
                expressStr = expressStr.replace("<%", "");
                expressStr = expressStr.replace("%>", "");
            }
            var result = parseExpress(expressStr);
            var exp = result.expStr;
            var r = parseInterpolate(exp, "{{", "}}");
            var str = r.expr;
            _.each(r.pools, function (p, k) {
                var c = addScope(p);
                str = str.replace(k, c);
            });
            var code = [];
            if (isCodeBlock) {
                code = ["\ttry{", "\t\twith(__local__){", "\t\t\t" + (str ? str : "return null"), "\t\t}", "\t}catch(ex){", "\t\tIDM.error(ex);", "\t}"];
            } else {
                str = str ? "(" + str + ")" : "null";
                code = ["\tvar result;", "\ttry{", "\t\twith(__local__){", "\t\t\tresult=" + str + ";", "\t\t}", "\t}catch(ex){", "\t\tIDM.error(ex);", "\t}", "\treturn result;"];
            }

            fn = new Function('__local__', '__isFlag__', code.join("\n"));
            evalMap.put(expressStr, fn);
            })();
        }
        var obj = Object.create(express);
        obj.variable = data || {};
        obj.vueComponent = this._isVue ? this : null;
        var s = fn(obj);
        obj.vueComponent = null;
        obj = null;
        // IDM.timeEnd("执行表达式"+expressStr)
        return s;
    };

    express.replace = function (expressStr, data, isFlag) {
        // console.time('替换表达式' + expressStr)
        var fn = replaceMap.get(expressStr);
        if (!fn) {
            var result = parseExpress(expressStr);
            if (result && result.has) {
            (function () {
                var exp = result.expStr;
                var r = parseInterpolate(exp, "{{", "}}", true);
                var str = r.expr;
                _.each(r.pools, function (p, k) {
                var c = addScope(p);
                str = str.replace(k, c);
                });
                str = str ? "(" + str + ")" : '""';
                var code = ["\tvar result;", "\ttry{", "\t\twith(__local__){", "\t\t\tresult=" + str + ";", "\t\t}", "\t}catch(ex){", "\t\tIDM.error(ex);", "\t}", "\treturn result;"];
                fn = new Function('__local__', '__isFlag__', code.join("\n"));
                replaceMap.put(expressStr, fn);
            })();
            } else {
            return expressStr;
            }
        }
        var obj = Object.create(express);
        obj.variable = data || {};
        obj.vueComponent = this._isVue ? this : null;
        var s = fn(obj, IDM.isUnDef(isFlag) ? true : isFlag);
        // console.timeEnd('替换表达式' + expressStr)
        obj.vueComponent = null;
        obj = null;
        return s;
    };

    var rimprovePriority = /[+-\?]/;
    var rexpr = /\{\{([\s\S]*)\}\}/;
    var rvmKey = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g;
    var ruselessSp = /\s*(\.|\|)\s*/g;
    var rshortCircuit = /\|\|/g;
    var brackets = /\(([^)]*)\)/;
    var rpipeline = /\|(?=\?\?)/;
    var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g;
    var robjectProp = /\.[\w\.\$]+/g; //对象的属性 el.xxx 中的xxx
    var robjectKey = /(\{|\,)\s*([\$\w]+)\s*:/g; //对象的键名与冒号 {xxx:1,yyy: 2}中的xxx, yyy
    var rfilterName = /\|(\w+)/g;
    var rlocalVar = /[$a-zA-Z_][$a-zA-Z0-9_\.]*(\()?/g;
    var rentities = /&[a-z0-9#]{2,10};/;
    var stringNum = 0;
    var stringPool = {
        map: {}
    };
    var skipMap = {
    'if': 1,
    'else': 1,
    'Math': 1,
    'Date': 1,
    'Number': 1,
    'String': 1,
    'Boolean': 1,
    'Object': 1,
    '$event': 1,
    'window': 1,
    '__vmodel__': 1,
    '__local__': 1,
    'JSON': 1,
    'this': 1,
    'true': 1,
    'false': 1,
    'IDM': 1,
    'return': 1,
    '__isFlag__': 1,
    '__getter__': 1
    };

    var $temp = document.createElement("div");

    function decode(str) {
        if (rentities.test(str)) {
            $temp.innerHTML = str;
            return $temp.innerText || $temp.textContent;
        }
        return str;
    }

    function unescapeHTML(html) {
        return String(html).replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    }

    var rfill = /\?\?\d+/g;

    function dig(a) {
        var key = '??' + stringNum++;
        stringPool.map[key] = a;
        return key + ' ';
    }

    function fill(a) {
        var val = stringPool.map[a];
        return val;
    }

    function clearString(str) {
        var array = readString(str);
        for (var i = 0, n = array.length; i < n; i++) {
            str = str.replace(array[i], dig);
        }
        return str;
    }

    function readString(str, i, ret) {
        var end = false,
            s = 0,
            i = i || 0;
        ret = ret || [];
        for (var n = str.length; i < n; i++) {
            var c = str.charAt(i);
            if (!end) {
            //判断一个字符串开始必须是"或者'且前面不能带有\转义
            if (c === "'" && str.charAt(i - 1) !== '\\') {
                end = "'";
                s = i;
            } else if (c === '"' && str.charAt(i - 1) !== '\\') {
                end = '"';
                s = i;
            }
            } else {
            if (c === end && str.charAt(i - 1) !== '\\') {
                ret.push(str.slice(s, i + 1));
                end = false;
            }
            }
        }
        if (end !== false) {
            return readString(str, s + 1, ret);
        }
        return ret;
    }

    function addScopeForLocal(str, local) {
        var props = str; // str.replace(robjectProp, dig);
        var result = props.replace(rlocalVar, function (el) {
            //表示函数
            if (el.endsWiths("(")) {
            return el;
            }
            //表示属性
            else {
                if (!skipMap[el]) {
                return "__getter__(" + JSON.stringify(el) + ",variable,__isFlag__)";
                }
            }
            return el;
        });
        return result;
    }

    function addScope(expr, local) {
        stringPool.map = {};
        var input = expr.replace(rregexp, function (a, b) {
            return b + dig(a.slice(b.length));
        }); //移除所有正则
        input = clearString(input); //移除所有字符串
        input = input.replace(rshortCircuit, dig) //移除所有短路运算符
        .replace(ruselessSp, '$1') //移除.|两端空白
        .replace(robjectKey, function (_, a, b) {
            //移除所有键名
            return a + dig(b) + ':'; //比如 ms-widget="[{is:'ms-address-wrap', $id:'address'}]"这样极端的情况 
        }).replace(rvmKey, '$1__vmodel__.') //转换@与##为__vmodel__.
        .replace(rfilterName, function (a, b) {
            //移除所有过滤器的名字
            return '|' + dig(b);
        });

        input = input.replace(/(\)|\])(\.([\w\.\$])+)/g, function (a, b, c, d) {
            //处理@[idm_rm.state].value这种极端情况的属性,正确的写法应该是@[idm_rm.state.value]
            return b + dig(c);
        });

        input = addScopeForLocal(input, local); //在本地变量前添加__vmodel__

        var filters = input.split(rpipeline); //根据管道符切割表达式
        var body = filters.shift().replace(rfill, fill).trim();
        if (/\?\?\d/.test(body)) {
            body = body.replace(rfill, fill);
        }
        return body;
    }

    function parseInterpolate(dir, openTag, closeTag, isReplace) {
        var rlineSp = /\n\r?/g;
        var str = dir.trim().replace(rlineSp, '');
        var tokens = [];
        openTag = openTag;
        closeTag = closeTag;
        var exportPools = {};
        var count = 0;
        do {
            //aaa{{@bbb}}ccc
            var index = str.indexOf(openTag);
            index = index === -1 ? str.length : index;
            var value = str.slice(0, index);
            if (/\S/.test(value)) {
            if (isReplace) {
                tokens.push(JSON.stringify(decode(value)));
            } else {
                tokens.push(decode(value));
            }
            }
            str = str.slice(index + openTag.length);
            if (str) {
            index = str.indexOf(closeTag);
            var value = str.slice(0, index);
            var expr = unescapeHTML(value);
            if (rimprovePriority) {
                var key = "$$" + count + "$$";
                var v = expr;
                expr = '(' + key + ')';
                exportPools[key] = v;
                count++;
            }
            tokens.push(expr);
            str = str.slice(index + closeTag.length);
            }
        } while (str.length);
        return {
            expr: tokens.join(isReplace ? "+" : ""),
            pools: exportPools
        };
    }

    function readExpress(str, i, ret) {
        var open = false;
        var counter = 0,
            s = 0,
            i = i || 0;
        ret = ret || [];
        for (var n = str.length; i < n; i++) {
            var c = str.charAt(i);
            if (!open) {
            //验证表达式开始
            if (c === "[" && str.charAt(i - 1) === '@') {
                open = true;
                s = i;
            }
            } else {
            if (c == "[") {
                counter++;
            }
            if (c == "]") {
                if (counter > 0) {
                counter--;
                continue;
                } else {
                ret.push(str.slice(s - 1, i + 1));
                open = false;
                counter = 0;
                }
            }
            }
        }
        if (open !== false) {
            return readExpress(str, s + 1, ret);
        }
        return ret;
    }

    var parseMap = {};

    function parseExpress(exp) {
        if (!parseMap[exp]) {
            var mat = readExpress(exp);
            stringPool.map = {};

            var _loop = function _loop() {
            var s = mat[i].slice(2, mat[i].length - 1);
            exp = exp.replace(mat[i], function (a) {
                return "{{" + s + "}}";
            });
            };

            for (var i = 0, n = mat.length; i < n; i++) {
            _loop();
            }
            parseMap[exp] = {
            has: mat && mat.length > 0,
            expStr: exp
            };
        }
        return parseMap[exp];
    }
    
    window.qs = window.Qs;
    window.IDM={
        ...idmFun().util,
        util:idmFun().util,
        setting:setting,
        url:idmFun().url,
        http:idmFun().http,
        user:idmFun().user,
        app:idmFun().app,
        theme:idmFun().theme,
        watermark:idmFun().watermark,
        validate:idmFun().validate,
        message:idmMessage(),
        express
    }
})();