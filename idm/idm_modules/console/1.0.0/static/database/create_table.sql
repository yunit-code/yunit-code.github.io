
/*
 IDM页面控制台的代码包主表
 用途：主要用于存放代码包的基本信息以及最新的信息
 */
CREATE TABLE `idm_console_codepackage` (
  `id` varchar(100) COLLATE utf8_bin NOT NULL,
  `CREATE_USERID` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人用户id',
  `CREATE_UNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DEPTID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_UNITID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LASTUPDATE_USERID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_DEPTID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNITID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_TIME` datetime DEFAULT NULL,
  `PROJECT_ID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_DEPTNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNITNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_DEPTNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `IS_MODIFY` decimal(2,0) DEFAULT '-1' COMMENT '是否更新',
  `CREATE_UNITNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `CLASSNAME` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '代码包名',
  `CURRENT_REMARK` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '当前版本的备注',
  `CURRENT_AUTHOR` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '作者',
  `CURRENT_VERSION` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '当前代码包的版本号，也就是最新上传的版本号',
  `CURRENT_LASTTIME` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT 'config中的最后更新时间，也就是代码最后编辑的时间',
  `CURRENT_CODE_LANGUAGE` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '代码语言',
  `CURRENT_CONFIG_TEXT` longtext COLLATE utf8_bin COMMENT '代码包配置文件',
  `CURRENT_CODE_PATH` varchar(250) COLLATE utf8_bin DEFAULT NULL COMMENT '代码包解压后的地址',
  `CURRENT_ZIP_PATH` varchar(250) COLLATE utf8_bin DEFAULT NULL COMMENT '代码压缩包地址',
  `VERSION_COUNT` int(3) DEFAULT NULL COMMENT '版本数量，如果遇到相同版本号这里最新的不替换，数量也不加，只把version表记录修改，然后路径都是按版本号来的，会直接替换'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

/*
IDM页面控制台的代码包历史记录表
作用：用于存储所有版本的历史数据，方便版本切换、数据恢复
*/
CREATE TABLE `idm_console_codepackage_version` (
  `id` varchar(100) COLLATE utf8_bin NOT NULL,
  `CREATE_USERID` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人用户id',
  `CREATE_UNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DEPTID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_UNITID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LASTUPDATE_USERID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_DEPTID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNITID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_TIME` datetime DEFAULT NULL,
  `PROJECT_ID` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_DEPTNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_UNITNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `LASTUPDATE_DEPTNAME` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_UNITNAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `CLASSNAME` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '代码包名',
  `REMARK` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '当前版本的备注',
  `AUTHOR` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '作者',
  `VERSION` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '当前代码包的版本号，也就是最新上传的版本号',
  `LASTTIME` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT 'config中的最后更新时间，也就是代码最后编辑的时间',
  `CODE_LANGUAGE` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '代码语言',
  `CONFIG_TEXT` longtext COLLATE utf8_bin COMMENT '代码包配置文件',
  `CODE_PATH` varchar(250) COLLATE utf8_bin DEFAULT NULL COMMENT '代码包解压后的地址',
  `ZIP_PATH` varchar(250) COLLATE utf8_bin DEFAULT NULL COMMENT '代码压缩包地址'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;