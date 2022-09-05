## 组件类ID（classId）
idm.componet.console.ipoagelistitem
## 组件开发语言（comLangue）
vue
## 组件类型（comType）
common
## 所在代码包版本
oacommon@1.0.1
## 组件属性
### 唯一标识【ctrlId】

- 标识：`ctrlId`
- 默认值：@[packageid]
### 基本属性
#### 为空描述【emptyDescription】
内容为空的时候描述文字提示
- 标识：`emptyDescription`
- 默认值：暂无数据
#### 显示字段【dataFiled】
根据其他组件传输的数据格式指定结果集的字段，比如传输的数据格式为{data:{rows:[{}]}}，则这里应该填写data.rows
- 标识：`dataFiled`
- 默认值：data.rows
#### 图片
##### 是否显示【imgShow】
是否显示图片
- 标识：`imgShow`
- 默认值：true
##### 显示字段【imgParam】
自定义显示的字段，例：url
- 标识：`imgParam`
- 默认值：url
##### 自定义显示函数【imgParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`imgParamFun`
- 默认值：空
- 可设置函数数量：单个
#### 标题
##### 是否显示【titleShow】
是否显示标题
- 标识：`titleShow`
- 默认值：true
##### 显示方式【titleType】
设置字段显示的方式，单行溢出隐藏，全部展示，根据字数隐藏
- 标识：`titleType`
- 默认值：showContent
- 选项：`单行溢出隐藏overflowHidden` `全部展示showContent` `根据字数隐藏hiddenNum` 
##### 字数限制【titleHiddenNum】
超出字数限制后会隐藏
- 标识：`titleHiddenNum`
- 默认值：10
- 显示：@[titleType=='hiddenNum']
##### 显示字段【titleParam】
自定义显示的字段，例：content 或 title
- 标识：`titleParam`
- 默认值：title
##### 自定义显示函数【titleParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`titleParamFun`
- 默认值：空
- 可设置函数数量：单个
#### 内容
##### 是否显示【contentShow】
是否显示内容文字
- 标识：`contentShow`
- 默认值：true
##### 显示方式【contentType】
设置字段显示的方式，单行溢出隐藏，全部展示，根据字数隐藏
- 标识：`contentType`
- 默认值：showContent
- 选项：`单行溢出隐藏overflowHidden` `全部展示showContent` `根据字数隐藏hiddenNum` 
##### 字数限制【contentHiddenNum】
超出字数限制后会隐藏
- 标识：`contentHiddenNum`
- 默认值：10
- 显示：@[contentType=='hiddenNum']
##### 显示字段【contentParam】
自定义显示的字段，例：pageRemark 或 title
- 标识：`contentParam`
- 默认值：pageRemark
##### 自定义显示函数【contentParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`contentParamFun`
- 默认值：空
- 可设置函数数量：单个
#### 类名
##### 是否显示【componentShow】
是否显示类名
- 标识：`componentShow`
- 默认值：true
##### 显示字段【componentParam】
自定义显示的字段，例：moduleClassName
- 标识：`componentParam`
- 默认值：moduleClassName
##### 自定义显示函数【componentParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`componentParamFun`
- 默认值：空
- 可设置函数数量：单个
#### 版本号
##### 版本号列表字段【versionListParam】
自定义显示的字段，例：versionList
- 标识：`versionListParam`
- 默认值：versionList
##### 自定义版本号列表显示函数【versionListParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`versionListParamFun`
- 默认值：空
- 可设置函数数量：单个
##### 列表中版本号字段【versionParam】
自定义显示的字段，例：versionText 或 title
- 标识：`versionParam`
- 默认值：versionText
##### 自定义版本号显示函数【versionParamFun】
当点击每一条通知信息的时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`versionParamFun`
- 默认值：空
- 可设置函数数量：单个
### 样式设置
#### 盒子样式
##### 宽度【boxWidth】
填写auto则为自适应，或者使用px、%、vh等单位，比如100%、100px、100vw等等
- 标识：`boxWidth`
- 默认值：100%
##### 阴影样式【boxShadow】
填写格式如下：10px 10px 5px #888888，更多请点击查看详细填写说明
- 标识：`boxShadow`
- 默认值：4px 4px 4px rgba(80, 80, 80, 0.1)
##### 背景色【boxBgColor】

- 标识：`boxBgColor`
- 默认值：空
##### 背景图片【boxBgImgUrl】

- 标识：`boxBgImgUrl`
- 默认值：空
##### 组件最外层盒子内外边距【box】
内外边距设置
- 标识：`box`
- 默认值：空
##### 边框【boxBorder】

- 标识：`boxBorder`
- 默认值：空
#### 图片样式
##### 图片宽度【imgWidth】
填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vw等等
- 标识：`imgWidth`
- 默认值：200px
##### 图片高度【imgHeight】
填写auto则为自适应，或者使用px、%、vh等单位，比如100%、100px、100vh等等
- 标识：`imgHeight`
- 默认值：120px
##### 右侧距离【imgRight】
只填写数字，单位为px
- 标识：`imgRight`
- 默认值：20
##### 背景色【imgBgColor】

- 标识：`imgBgColor`
- 默认值：空
##### 边框【imgBorder】

- 标识：`imgBorder`
- 默认值：空
#### 分割线样式
##### 线行【lineType】
分割线的类型: 无，实线，双线，点线，虚线
- 标识：`lineType`
- 默认值：solid
- 选项：`无none` `实线solid` `双线double` `点线dotted` `虚线dashed` 
##### 宽【lineWidth】

- 标识：`lineWidth`
- 默认值：空
##### 颜色【lineColor】

- 标识：`lineColor`
- 默认值：空
#### 标题文字【titleFont】

- 标识：`titleFont`
- 默认值：空
#### 内容文字【contentFont】

- 标识：`contentFont`
- 默认值：空
#### 类名文字【leiMingFont】

- 标识：`leiMingFont`
- 默认值：空
#### 类名内容文字【leiMingContentFont】

- 标识：`leiMingContentFont`
- 默认值：空
#### 版本号文字【versionFont】

- 标识：`versionFont`
- 默认值：空
### 高级
#### 点击预览
##### 事件类型【previewEventType】
选择联动组件，自定义组件
- 标识：`previewEventType`
- 默认值：itemAction
- 选项：`选择联动组件linkModules` `自定义事件itemAction` 
##### 联动组件范围【previewModule】
点击预览需要联动其他组件的范围
- 标识：`previewModule`
- 默认值：空
- 显示：@[previewEventType=='linkModules']
##### 【clickPreviewFunction】
当点击预览时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`clickPreviewFunction`
- 默认值：空
- 显示：@[previewEventType=='itemAction']
- 可设置函数数量：多个
#### 版本号
##### 事件类型【versionEventType】
选择联动组件，自定义组件
- 标识：`versionEventType`
- 默认值：linkModules
- 选项：`选择联动组件linkModules` `自定义事件itemAction` 
##### 联动组件范围【versionModule】
点击预览需要联动其他组件的范围
- 标识：`versionModule`
- 默认值：空
- 显示：@[versionEventType=='linkModules']
##### 【clickItemFunction】
当点击预览时候会调用此函数，接收参数为格式为{customParam:自定义的，itemObject:每条数据对象数据，urlData:url数据}
- 标识：`clickItemFunction`
- 默认值：空
- 显示：@[versionEventType=='itemAction']
- 可设置函数数量：多个
