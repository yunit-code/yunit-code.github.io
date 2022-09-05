# 多页签待办列表组件

此组件为多页签待办列表组件，支持多样化列表，传统样式表格两种列表模板选择，每个功能都可以自由灵活定制，支持配置实现功能扩展，支持在线自定义扩展开发。

## 组件类名（className）

ITodoTabsList

## 组件类 ID（classId）

idm.componet.todotabs.itodotabslist

## 组件开发语言（comLangue）

vue

## 组件类型（comType）

common

## 所在代码包版本

todotabs@1.0.0

## 组件属性

此章节主要介绍该组件的每个属性的含义以及如何使用说明

### 唯一标识【ctrlId】

只读属性，不可修改，作为每个组件实例的一个唯一标识

- 标识：`ctrlId`
- 默认值：`@[packageid]`

### 基本属性

<font color="#CCCCCC">此章节主要用于存放设置组件所需要的一些基本信息的属性，以达到组件具备使用的基础条件</font>

#### 页签来源【tabDataType】

用于选择 tab 页签数据源配置方式，也就是来自哪里，共有以下两个选项：

1. 动态属性：使用控制中心（动态属性）设置返回的数据源（支持用户个性化定制和排序）
2. 综合属性：使用组件的静态属性直接设置有哪些页签，但这意味着不可用户个性化定制

- 标识：`tabDataType`
- 默认值：`综合属性`

#### 数量接口(平台)【countUrl】

用于第一优先级查询每个 tab 上面的数量、更多地址、自定义扩展的属性字段等等信息的接口地址，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的接口地址，表达式中可使用的对象有以下格式：

```json
{
  "allTabTypes": "所有tab（页签来源 == '动态属性' 为 动态属性的所有定制的tab，即使用户设置了“自动隐藏”tab的功能也会显示在这里，如果 页签来源 != '动态属性'则与下面的allTabTypes一致的）的key标识，用逗号分隔的",
  "allCurrentShowTabTypes": "所有当前显示的tab的key标识，用逗号分隔的",
  "currentTabType": "当前选中的tab的key标识"
}
```

例如此处可以填写以下接口地址（示例中的@[allTabTypes]会自动替换为上面的 allTabTypes 属性内容）：

```language
/ctrl/officeInfo/getDsfaTabsInfo?tabTypes=@[allTabTypes]
```

接口返回格式需要按照以下要求：

```json
{
  "code": "200",
  "type": "success",
  "message": "操作成功",
  "metadata": null,
  "token": "",
  "data": {
    "tabs": {
      "todo": {
        "count": 3
      },
      "notice": {
        "count": 0,
        "newFileUrl": "180805175628RK7ixI1IyrjDuG4njD5",
        "moreUrl": "/ctrl/path.jsp"
      }
    }
  }
}
```

- ⚠ <font color="#FF0000">**_注意事项：_**</font>
  <font color="#FF0000">data.tabs 格式是固定的,tabs 下面的 todo、notice 是页签的 key 值，必须返回接口接收到的参数一致的，还有就是每个 key 值的对象下面的 count 是代表数量，这个 key 的名称是固定为`count`的，其他需要什么参数可以随便自定义加上，在页签的右侧(下方)的扩展按钮中可以用到此出自定义的属性</font>

- 标识：`countUrl`
- 默认值：空

#### 列表接口(平台)【listUrl】

用于第一优先级查询每个 tab 下面的列表数据的接口地址，接口可以查询返回列表所需要的字段信息，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的接口地址，表达式中可使用的对象有以下格式：

```json
{
  "allTabTypes": "所有当前显示的tab的key标识，用逗号分隔的",
  "currentTabType": "当前选中的tab的key标识",
  "startIndex": "分页的数量开始索引",
  "pageIndex": "当前页的索引",
  "pageSize": "每页的大小",
  "allDynamicAttrObject": "所有动态属性对象，动态属性的key为对象标识，动态属性的值为对象的值",
  "tabObject": "当前加载的tab对象，此对象包含了上述接口地址查询返回的所有数据",
  "searchText": "组件搜索框的文本内容"
}
```

例如此处可以填写以下接口地址（示例中的@[allTabTypes]会自动替换为上面的 allTabTypes 属性内容）：

```language
/ctrl/officeInfo/getDsfaTabsData?alldoTypes=@[allTabTypes]&tabTypes=@[currentTabType]&start=@[startIndex]&page=@[pageSize]&bt=@[searchText]&listType=@[allDynamicAttrObject.listType]&sortType=@[allDynamicAttrObject.sortType]
```

接口返回格式需要按照以下要求：

```json
{
    "code":"200",
    "type":"success",
    "message":"操作成功",
    "metadata":null,
    "token":"",
    "data":{
        "tabs":{
            "alldo":{
                "data":[
                    {
                        "moduleId":"190302161010bMRyTBoXlO72tuLCpHu",
                        "moduleName":"测试模块030102",
                        "title":"123",
                        "titleUrl":"openTodoAjax(this,\"190926201207NVuQZq4q9qzW2Zj3Mus_190926201207vVZTdxPzJPpqlYL6A5i\",\"true\",\"../../ctrl/formControl/form?todoId=190926201207NVuQZq4q9qzW2Zj3Mus_190926201207vVZTdxPzJPpqlYL6A5i&amp;moduleId=190302161010bMRyTBoXlO72tuLCpHu&amp;pk=190926201155ydUfrVrm2vyaaFbP7bN&amp;agencyType=0&amp;agencyUserId=1&amp;agencyUserName=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98\")",
                        "url":null,
                        "id":"190926201207NVuQZq4q9qzW2Zj3Mus_190926201207vVZTdxPzJPpqlYL6A5i",
                        "isFavorite":"-1",
                        "agencyType":0,
                        "infoId":"190926201155ydUfrVrm2vyaaFbP7bN",
                        "nodeId":"t4xVLoCXbsk406K",
                        "itemType":"todo",
											  ...
                    }
                ]
            }
        }
    }
}
```

- ⚠ <font color="#FF0000">**_注意事项：_**</font>

  - <font color="#FF0000">如果需要用到内置的按钮请返回固定的属性字段，具体所需字段请查看上述接口返回的</font>
  - <font color="#FF0000">data.tabs 格式是固定的,tabs 下面的 alldo 是页签的 key 值，必须返回接口接收到的参数一致的</font>
  - <font color="#FF0000">上述返回的字段属性是程序内置必须的属性，但这并不代表您能使用这些属性配置出丰富的待办组件出来，还是需要自行根据展示需求返回更多的字段来搭配属性进行配置</font>

- 标识：`listUrl`
- 默认值：空

#### 数量接口(扩展)【countUrlExtend】

用于第二优先级查询每个 tab 上面的数量接口。此接口可以理解为 项目组需要用到平台提供的接口业务模块（或者说 tab 页签），但是又需要自行在后面追加自己项目组的定制化的业务模块 tab 页签。所以项目组只需要在这里填上自己开发的接口地址即可实现此需求（需要在控制中心设置的页签中添加自己的数据代码值 tab 的 key 和显示名称）。

- 标识：`countUrlExtend`
- 默认值：空

- **_📢 温馨提示：_**
  此接口参数和返回格式等等都与上述的`数量接口(平台)`一模一样

#### 列表接口(扩展)【listUrlExtend】

用于第二优先级查询每个 tab 下面的列表数据接口。此接口可以理解为 项目组需要用到平台提供的接口业务模块（或者说 tab 页签），但是又需要自行在后面追加自己项目组的定制化的业务模块 tab 页签。所以项目组只需要在这里填上自己开发的接口地址即可实现此需求（需要在控制中心设置的页签中添加自己的数据代码值 tab 的 key 和显示名称）。

- 标识：`listUrlExtend`
- 默认值：空

- **_📢 温馨提示：_**
  此接口参数和返回格式等等都与上述的`列表接口(平台)`一模一样

#### 动态属性标识配置

<font color="#CCCCCC">用于设置组件功能所用到的控制中心（动态属性）的属性标识的属性分组。</font>

##### 自动隐藏【dynamicAttrAutoHiddenKeyName】

用于设置 tab 页签经过查询后端接口后无提醒数字的时候会自动隐藏不显示，也就是说只会显示数量大于 0 的页签 tab，属性设置的值如果为 true 才显示，其他为不显示

- 标识：`dynamicAttrAutoHiddenKeyName`

- 默认值：`'autoHiddenTab'`

#### 显示搜索【showSearch】

用于设置页签右边（下边）的搜索框是否显示

- 标识：`showSearch`

- 默认值：`true`

#### 响应方式【HeightType】

用于设置组件高度的响应方式，宽度是始终根据父容器 100%显示的。

1. 固定值：使用下述高度属性填写的固定值，不会随着分辨率或者父容器改变而改变
2. 适应容器：不会使用下述高度属性值，会根据父容器(或其他)传递的具体高度而自动改变

- 标识：`HeightType`

- 默认值：`固定值`

#### 高度(px)【moduleHeight】

用于设置组件的具体高度值，单位为 px，当`响应方式=固定值`的时候才会使用此属性设置的值。

- 标识：`moduleHeight`

- 默认值：`500`

#### 钉钉程序【isDingDingApp】

设置此应用程序是否钉钉内集成的程序，如果设置了为 true 则内置的打开待办事件会在链接后面追加 ddtab=true 的参数。

- 标识：`isDingDingApp`

- 默认值：`false`

### 页签属性

<font color="#CCCCCC">用于设置组件的页签展示基本样式和方式的属性标识的属性分组。</font>

#### 页签大小【size】

可设置页签展示的大小，页签大小总共分为`小`、`中`、`大`三种展示大小，如果要使用大字号字体建议根据字号来进行选择大小。

- 标识：`size`

- 默认值：`中`

#### 页签位置【tabPosition】

可设置页签展示的位置，页签和扩展按钮是一块显示的，可设置显示的位置有`top（上）`、`bottom（下）`、`left（左）`、`right（右）`。可以根据自身需求合理的设置展示的位置。

- 标识：`tabPosition`

- 默认值：`top`

#### 页签间距【tabBarGutter】

用于设置 tab 页签之间的间隙，数值越大每个页签之间的间距越宽

- 标识：`tabBarGutter`

- 默认值：`32`

#### 左内边距【tabLeftPadding】

设置每个页签的左内边距，指的是文字与页签容器左边的距离，建议搭配页签间距进行合理分配数值。

- 标识：`tabLeftPadding`

- 默认值：空

#### 右内边距【tabRightPadding】

设置每个页签的右内边距，指的是文字与页签容器右边的距离。建议搭配页签间距进行合理分配数值，最好间距能放下提醒数量，否则最后一个页签的提醒数量会被遮挡（如果出现了左右箭头的情况下）。

- 标识：`tabRightPadding`

- 默认值：空

#### 上内边距【tabTopPadding】

设置每个页签的上内边距，指的是文字与页签容器上边的距离。

- 标识：`tabTopPadding`

- 默认值：空

#### 下内边距【tabBottomPadding】

设置每个页签的下内边距，指的是文字与页签容器下边的距离。

- 标识：`tabBottomPadding`

- 默认值：空

#### 风格样式【type】

用于设置 tab 页签的基本样式，可切换选 `line（线条风格）`、`card（卡片风格）` 类型。

- 标识：`type`

- 默认值：`line`

#### 切换动画【animated】

用于设置 tab 页签切换的时候是否显示过渡动画效果，在 页签位置=顶部|底部 时有效

- 标识：`animated`

- 默认值：`true`

#### 选中加粗【tabActiveBold】

设置当前选中的 tab 页签是否文字加粗

- 标识：`tabActiveBold`

- 默认值：`false`

#### 文字【tabFont】

设置所有页签或者是整个页签的文字内容字体样式，可设置使用的字体、大小、颜色、粗细、斜体、行高、下划线等等。

- 标识：`tabFont`

- 默认值：空

#### 角标样式

<font color="#CCCCCC">提供设置组件的页签上面的角标（数量提醒）基本样式的属性标识的属性分组。</font>

##### 角标偏移

<font color="#CCCCCC">角标 X，Y 的行内分组，没有实际意义</font>

###### 偏移(X)【remindOffsetX】

设置偏移数值，单位为 px，默认为跟在文字的后面，可以通过调整此数值来改变横向的偏移位置

- 标识：`remindOffsetX`

- 默认值：`0`
- 📢**_温馨提示_**：
  数值越小越往右偏移，数值越大越往左偏移

###### 偏移(Y)【remindOffsetY】

设置偏移数值，单位为 px，默认为顶部对齐，可以通过调整此数值来改变纵向的偏移位置

- 标识：`remindOffsetY`

- 默认值：`0`
- 📢**_温馨提示_**：
  数值越小越往上偏移，数值越大越往下偏移

##### 角标颜色【remindBgColor】

设置角标的背景颜色，一般角标提醒都是为红色，白色文字

- 标识：`remindBgColor`

- 默认值：<font color="#ec4519">`#ec4519FF`</font>

##### 显示红点【remindShowDot】

设置未选中的 tab 是否显示红点而不显示具体的数量数值，通俗来讲就是当前选中的 tab 显示具体的数字，其他的 tab 角标只显示一个红点，当切换过去就红点变成了数字

- 标识：`remindShowDot`

- 默认值：`true`

##### 数字 Max【remindNumberMax】

用于设置角标数字显示的最大值，如果超过这个值则会显示+号，例如其中的一个页签数量为`100`条，此处设置为 99，则在显示的时候会直接显示`99+`，如果设置为`88`则会显示为`88+`

- 标识：`remindNumberMax`

- 默认值：`99`

#### 分割线样式

<font color="#CCCCCC">用于设置 tab 页签分割线样式的属性的分组。</font>

##### 显示分割【tabShowDivider】

用于设置是否显示分割线，一般建议页签风格为 line（线条样式）下才显示分割线

- 标识：`tabShowDivider`

- 默认值：`true`

##### 高度占比【dividerHeightNumber】

设置分割线的高度比例，单位为%，默认为 100 撑满，只能填写基于 tab 页签高度的百分比，如果要上下有间距可以设置数值小一点，然后偏移值 Y 设置`(100-高度占比数值)/2`的结果即可上下居中

- 标识：`dividerHeightNumber`

- 默认值：`100`

##### 偏移值(Y)【dividerTopNumber】

用于设置分割线 Y 轴距离顶部的偏移值，为了美观且分割线上下居中，最好使用以下表达式计算偏移值结果：

```js
(100 - 高度占比数值) / 2;
```

- 标识：`dividerTopNumber`

- 默认值：`0`

##### 偏移值(X)【dividerRightNumber】

用于设置分割线 X 轴距离页签右边的偏移值，默认线为文字的右边，如果要 tab 之间可以参考页签间距的二分之一的大小

- 标识：`dividerRightNumber`

- 默认值：`-16`
- 📢**_温馨提示_**：
  数值越小越往右偏移，数值越大越往左偏移

##### 分线颜色【dividerBgColor】

设置分割线的颜色值

- 标识：`dividerBgColor`

- 默认值：`#e8e8e8FF`

#### 大标题属性

<font color="#CCCCCC">用于设置 tab 大标题属性的分组。</font>

##### 标题内容【headLine】

设置标签左侧的大标题内容，为空则不展示大标题

- 标识：`headLine`

- 默认值：``

##### 占据宽度【headLineWidth】

设置标题在页签左侧占据的宽度，单位为 px

- 标识：`headLineWidth`

- 默认值：`100`

##### 左侧距离【headLineLeft】

设置标题离左侧的距离，单位为 px

- 标识：`headLineLeft`

- 默认值：`100`

##### 文字【headLineFont】

设置大标题的文字样式

- 标识：`headLineFont`

- 默认值：``

### 动态页签设置

<font color="#CCCCCC">用于设置 tab 页签使用控制中心（动态属性）设置的数据源属性的分组。</font>

#### 属性标识【dynamicAttrKeyName】

填写动态属性标识，用于设置页签数据源来源于动态属性的哪个标识（最终传给组件的结果为用户设置的属性值或初始值），所以属性值则必须为字符串的数组格式，例如以下示例图在控制中心：
![Description](./idm_modules/todotabs/1.0.0/static/doc/resource/images/controlcenteraddform.jpg)
上述示例图中的控件属性设置信息为：

```json
{
  "desc": "点击可以对待办区域的页签选项进行定制化显示",
  "rules": [{ "required": true, "message": "必填项，请输入" }],
  "dataType": "code",
  "codeId": "201029163137nbEviNsIaR68CplxJiy",
  "showFiledName": "data.codeList[0].children",
  "replaceFields": {
    "title": "showName",
    "label": "showName",
    "key": "id",
    "value": "id",
    "children": "children"
  }
}
```

📢**_温馨提示_**：
上述`codeId`属性的值为数据代码值中的 id，更多用法可以参考控制中心组件说明文档。

控件设置后的结果值格式会返回以下格式给组件：

```json
{
  "attrCode": "tabsData",
  "attrData": "[{\"showName\":\"全部\",\"children\":[],\"name\":\"全部\",\"itemIndex\":1,\"pid\":\"201029163137nbEviNsIaR68CplxJiy\",\"label\":\"全部\",\"id\":\"alldo\",\"type\":0,\"title\":\"全部\",\"value\":\"alldo\",\"key\":\"alldo\",\"attrs\":{\"codeId\":\"201029163231UDTIYdWOQKGRuU1n1MT\",\"createUserid\":\"1\",\"pinyin\":\"\",\"remark\":\"\",\"pinyinInitial\":\"\",\"childrenCount\":0}},{\"showName\":\"关注事项\",\"children\":[],\"name\":\"关注事项\",\"itemIndex\":6,\"pid\":\"201029163137nbEviNsIaR68CplxJiy\",\"label\":\"关注事项\",\"id\":\"to_favorite\",\"type\":0,\"title\":\"关注事项\",\"value\":\"to_favorite\",\"key\":\"to_favorite\",\"attrs\":{\"codeId\":\"201116154342qbHL7PUx2Mrx1y3qelt\",\"createUserid\":\"1\",\"pinyin\":\"\",\"remark\":\"\",\"pinyinInitial\":\"\",\"childrenCount\":0}},{\"showName\":\"我的待阅\",\"children\":[],\"name\":\"我的待阅\",\"itemIndex\":3,\"pid\":\"201029163137nbEviNsIaR68CplxJiy\",\"label\":\"我的待阅\",\"id\":\"toread\",\"type\":0,\"title\":\"我的待阅\",\"value\":\"toread\",\"key\":\"toread\",\"attrs\":{\"codeId\":\"201029163304zYaGN6nxBL8lSEGAg4h\",\"createUserid\":\"1\",\"pinyin\":\"\",\"remark\":\"\",\"pinyinInitial\":\"\",\"childrenCount\":0}},{\"showName\":\"我的待办\",\"pid\":\"201029163137nbEviNsIaR68CplxJiy\",\"label\":\"我的待办\",\"type\":0,\"title\":\"我的待办\",\"attrs\":{\"codeId\":\"201029163252L8gUrSgjqbAvvI7BLmo\",\"createUserid\":\"1\",\"pinyin\":\"wodedaiban\",\"remark\":\"\",\"pinyinInitial\":\"wddb\",\"childrenCount\":0},\"children\":[],\"name\":\"我的待办\",\"itemIndex\":2,\"id\":\"todo\",\"value\":\"todo\",\"key\":\"todo\"}]"
}
```

- 标识：`dynamicAttrKeyName`

- 默认值：`tabsData`

#### 标识字段【dynamicKeyName】

设置页签 tab 的 key 要显示上面控制中心设置的结果值的`attrData`的数组结果中的 key，以上面的返回格式为例，程序内部会对`attrData`的值进行 JSON 格式化，然后循环用此处填写的 key 名称或者表达式去取出要作为页签标识的值。比如上述示例中`key`作为 tab 页签的标识是最合适的，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值，设置完成后，后端数量接口和列表接口都是依据此值来获取数据结果的。

- 标识：`dynamicKeyName`

- 默认值：空

#### 显示字段【dynamicShowName】

设置页签 tab 的名称要显示上面控制中心设置的结果值的`attrData`的数组结果中的 key，以上面的返回格式为例，程序内部会对`attrData`的值进行 JSON 格式化，然后循环用此处填写的 key 名称或者表达式去取出要作为页签显示名称的值，比如上述示例中`showName`作为 tab 页签的显示名称是最合适的，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值，设置完成后，页签显示的名称将会跟这里一致。

- 标识：`dynamicShowName`

- 默认值：空

#### 懒加载【forceRender】

统一设置页签是否使用懒加载，此处所谓懒加载意思是当第一次加载的时候只加载默认要显示的那个页签的列表数据，如果手动切换到其他页签上才会去实时加载要切换的那个页签数据，这样做的是为了首屏加载事件更短暂，节约资源减少服务器压力和客户端等待时间等待。

- 标识：`forceRender`

- 默认值：`true`

### 静态页签选项设置【子表】【staticTabPaneList】

用于设置页签展示的静态数据，当 `页签来源=综合属性` 的时候此处才会生效 ，此处是一个表格形式的属性，此属性只有 key，是一个数组形式存在的。

- 标识：`staticTabPaneList`

- 默认值：`[]`

#### tab 标识【key】

设置 tab 页签的 key 值，当前组件内唯一即可，因为后端数量接口和列表接口都是依据此值来获取数据结果的。

- 标识：`key`

- 默认值：空

#### tab 文字【tab】

设置 tab 页签的显示名称，此名字是直接显示给用户可见的，无其他用户。

- 标识：`tab`

- 默认值：空

#### tab 显示自定义函数【tabSlotFunction】

如果上述的`tab文字`属性直接填写无法满足要求，可以使用此设置。比如页签显示的名称需要根据自身需求显示不同的名称，使用权限的方式显示的名称也不一样，就可以在此处使用自定义函数来实现去查询权限然后返回不同的名称。

- 标识：`tabSlotFunction`

- 默认值：空

- 可设置函数数量：单个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

#### 默认选中【defaultActiveKey】

设置此页签是否在首次加载的时候默认显示，如果都设置了只会以第一个设置为默认选中的为准。

- 标识：`defaultActiveKey`

- 默认值：`false`

#### 懒加载【forceRender】

可单个设置页签是否使用懒加载，此处所谓懒加载意思是当第一次加载的时候只加载默认要显示的那个页签的列表数据，如果手动切换到其他页签上才会去实时加载要切换的那个页签数据，这样做的是为了首屏加载事件更短暂，节约资源减少服务器压力和客户端等待时间等待。

- 标识：`forceRender`

- 默认值：`false`

### 页签右边扩展按钮属性

<font color="#CCCCCC">用于对页签右边（下边）的扩展区域的按钮属性设置的分组。</font>

#### 按钮间距【extraBtnGutter】

用于设置按钮与按钮之间的间距，按钮间距的数值是会平均分配给每个按钮的左右两边的内边距的，建议设置数值为偶数

- 标识：`extraBtnGutter`

- 默认值：`20`

#### 文字大小【extraBtnFontSize】

用于设置每个按钮的文字大小，其中包括按钮中选择的图标大小也会应用文字的大小设置。

- 标识：`extraBtnFontSize`

- 默认值：`14`

#### 默认颜色【extraBtnFontColor】

设置按钮文字和图标的默认颜色，默认会以透明度 0.7 的比例显示，鼠标悬浮在上面才会 100%不透明的显示当前设置的颜色，请根据此规则合理设置。

- 标识：`extraBtnFontColor`

- 默认值：<font color="#999999">`#999999FF`</font>

#### 扩展按钮设置【子表】【extraBtnList】

用于设置扩展按钮的静态数据，也就是页签右边（下边）的扩展区域有哪些按钮，此处是一个表格形式的属性，此属性只有 key，是一个数组形式存在的。

- 标识：`extraBtnList`

- 默认值：`[]`

##### 按钮标识【key】

主要用于设置按钮的标识，可以在需要使用的时候使用此标识进行判断，建议设置为唯一或者按钮的英文、拼音作为标识

- 标识：`key`

- 默认值：空

##### 显示名称【name】

主要用于设置按钮显示的名称，建议名称不宜过程，如果太短无法诠释按钮含义可以使用悬浮提示属性设置提示信息，如果只需要一个图标不要显示文字此处留空只需要设置下面的显示图标即可。

- 标识：`name`

- 默认值：空

##### 显示图标【icon】

主要用于设置按钮显示的图标，只需要从现有图标库选择即可，如果可选择的图标过少可以联系平台开发人员追加图标，注意：此图标的大小、颜色都是跟随文字的大小、颜色的，并且图标只会显示在文字的前面

- 标识：`icon`

- 默认值：空

##### 悬浮提示【tip】

设置鼠标悬浮到按钮上的提示信息，留空则不会有提示，如果按钮无法用较短的名称诠释按钮的含义，可以用此悬浮提示来完全的诠释按钮的含义。

- 标识：`tip`

- 默认值：空

##### 显示方式【showType】

设置按钮显示的方式，或者可以通俗点说就是显示此按钮需要什么条件，或者说再什么条件下才显示，这里就是设置按钮显示判断用哪种方式进行判断，目前有以下几种方式：

1. **始终显示：** 不管在任何情况下都会显示
2. **切换依据显示：** 根据 tab 页签切换的时候判断要切换的 tab 中的数据条件，满足表达式才会显示，需要配置显示依据，详见显示依据说明。
3. **动态属性依据显示：** 根据控制中心（动态属性）设置的信息进行判断显示，满足表达式才会显示
4. **自定义函数显示：** 写自定义动作函数来返回 true 或 false 进行判断是否显示

- 标识：`showType`

- 默认值：`始终显示`

##### 属性标识【dynamicAttrKeyName】

当上述显示方式为`动态属性依据显示`的时候需要设置要判断控制中心的那个属性设置的数据，此处填写控制中心维护的标识即可。

- 标识：`dynamicAttrKeyName`

- 默认值：空

##### 比较方式【dynamicCompareType】

当上述显示方式为`动态属性依据显示`的时候需要对控制中心设置的结果值进行比较，这里就是设置以哪种方式对结果值进行比较，设置比较的方式有以下几种：

1. **结果值比较：** 直接跟设置的结果值进行比对，比对成功即显示，不成功这隐藏
2. **自定义函数比较：** 写自定义动作函数来自行实现判断逻辑，返回 true 或 false 进行显示

- 标识：`dynamicCompareType`

- 默认值：`结果值比较`

##### 结果值【dynamicCompareResult】

当上述比较方式为`结果值比较`的时候，此处需要填写控制中心属性的比对正确的结果值，当设置的结果等于此处的结果值时候才显示，否则即隐藏。

- 标识：`dynamicCompareResult`

- 默认值：空

##### 显示依据【dataFiled】

当上述显示方式为“切换依据显示”的时候代表页签选项卡切换的时候会根据此处填写的依据字段来去匹配结果值，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值，为 true 则显示，false 则不显示。常见的需求有根据当前选中页签的标识控制显隐，例如：key==1，注意此处的 1 为页签的 tab 标识，而非索引值。

- 标识：`dataFiled`

- 默认值：空

##### 自定义函数依据显示【dataFunction】

当切换选项卡、数据勾选等动作会触发此处设置的回调函数来控制是否显示，`动态属性依据显示` 且 `自定义函数比较`情况下也会调用此函数，接收参数的格式为以下：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "actionType": "触发函数的动作类型,目前有 changeTab(切换页签)、dynamicAttr(动态属性)",
  "otherData": "其他数据对象"
}
```

- 标识：`dataFunction`

- 默认值：空

- 可设置函数数量：单个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

##### 点击事件【clickType】

设置按钮点击响应事件的类型，目前支持以下类型：

1. **不响应：** 点击不作任何响应，及点击没有反应
2. **自定义动作函数：** 点击会触发下述写的自定义函数
3. **打开控制中心：** 点击会触发打开控制中心设置窗口
3. **打开新建页面：** 点击会触发打开页签传递过来的newFileUrl页面，如果为多个兼职部门则会提供选择窗口

- 标识：`clickType`

- 默认值：`自定义动作函数`

##### 打开方式【openNewFileType】

设置点击事件为打开新建页面的时候打开的方式，目前支持以下类型：

1. **弹窗：** 以弹窗的方式打开要新建的表单页面
2. **新页面：** 以弹出新的浏览器页签的方式打开要新建的表单页面
3. **内部页签：** 以内部主内嵌框架打开新的内部页签页面（前提是当前页面有主内嵌框架页面）

- 标识：`openNewFileType`

- 默认值：`新页面`

##### 点击自定义函数【clickCustomFunction】

当点击事件选择`自定义动作函数`的时候点击此按钮就好调用此处设置的函数，接收参数的格式为以下：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "allTabDataList": "所有已经加载的页签列表数据集合"
}
```

- 标识：`clickCustomFunction`

- 默认值：空

- 可设置函数数量：多个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

### 批量按钮属性

<font color="#CCCCCC">提供设置组件的批量按钮属性信息。</font>

#### 按钮间距【checkboxBtnGutter】

按钮间距的数值是会平均分配给每个按钮的左右两边的内边距的，建议设置数值为偶数

- 标识：`checkboxBtnGutter`

- 默认值：`20`

#### 文字大小【checkboxBtnFontSize】

按钮文字大小

- 标识：`checkboxBtnFontSize`

- 默认值：`14`

#### 批量按钮设置【子表】【checkboxBtns】

设置批量按钮的数组，用以设置每个按钮的独立属性

- 标识：`checkboxBtns`

- 默认值：`[]`

##### 显示方式【displayMode】

控制按钮的展示方式，一直展示，显示隐藏间切换，置灰可点击间切换，目前有以下几种方式：

1. **有选择项时展示：** 按钮会在有勾选的情况下显示，反之隐藏
2. **有选择项时可点击：** 按钮会在有勾选的情况下可点击，反之置灰
3. **始终显示：** 不管在任何情况下都会显示

- 标识：`displayMode`

- 默认值：`有选择项时展示`

##### 显示自定义函数【customCheckboxBtnsFN】

当预设的显示方式不满足时，可使用此函数定义，要求返回对象类型，接收参数的格式为以下：

```json
{
  "commonParam": "url参数",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "activeTab": "当前页签项",
  "listData": "当前页签下的数据源",
  "selectedListData": "选中的数据源"
}
```

返回参数的格式为以下：

```json
{
  "showStatus": "是否展示",
  "disabledStatus": "是否置灰"
}
```

- 标识：`customCheckboxBtnsFN`

- 默认值：空

- 可设置函数数量：单个

##### 点击事件【clickType】

选择点击事件：

1. **无事件：** 点击不作任何响应，及点击没有反应
2. **批量发送：** 内置的批量发送逻辑
3. **批量阅毕：** 内置的批量阅毕逻辑
4. **自定义函数：** 点击时调用自定义函数，自定义函数另需配置

- 标识：`clickType`

- 默认值：`无事件`

##### 点击自定义函数【customclickFN】

当点击按钮时候会调用此函数，接收参数为格式为：

```json
{
  "commonParam": "url参数",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "activeTab": "当前页签项",
  "listData": "当前页签下的数据源",
  "selectedListData": "选中的数据源",
  "reloadTabInfo": "重新加载页签下数据的函数，调用时请传页签的key，多个请用英文逗号隔开"
}
```

- 标识：`customclickFN`

- 默认值：空

- 可设置函数数量：单个

##### 重新加载【isReloadTabInfo】

设置当按钮操作成功后是否重新加载组件的数量提醒数据以及已经加载的列表数据，如果要加载指定 tab 的请在下面加载页签属性中填写 tab 的标识

- 标识：`isReloadTabInfo`

- 默认值：`true`

##### 加载页签【reloadTabKeys】

设置按钮操作成功后要重新加载哪些页签，如果不需要重新加载则不需要填写，此处填写 tab 的 key 标识，用逗号分隔即可，例如：todo,invoice

- 标识：`reloadTabKeys`

- 默认值：空

### 悬浮容器属性

<font color="#CCCCCC">用于设置组件的悬浮容器属性的分组。</font>

#### 悬浮容器【showDragContainer】

是否使用悬浮容器

- 标识：`showDragContainer`

- 默认值：false

#### 坐标(X)【dragContainerX】

对应 left 属性，以组件左上角为起点，可填%，px

- 标识：`dragContainerX`

- 默认值：60%

#### 坐标(Y)【dragContainerY】

对应 top 属性，以组件左上角为起点，可填%，px

- 标识：`dragContainerY`

- 默认值：8px

#### 显示方式【dragContainerShowType】

设置浮动容器显示的方式，或者可以通俗点说就是显示此浮动容器需要什么条件，或者说在什么条件下才显示，这里就是设置浮动容器显示判断用哪种方式进行判断，目前有以下几种方式：

1. **始终显示：** 不管在任何情况下都会显示
2. **切换依据显示：** 根据 tab 页签切换的时候判断要切换的 tab 中的数据条件，满足表达式才会显示
3. **动态属性依据显示：** 根据控制中心（动态属性）设置的信息进行判断显示，满足表达式才会显示
4. **自定义函数显示：** 写自定义动作函数来返回 true 或 false 进行判断是否显示

- 标识：`dragContainerShowType`

- 默认值：`始终显示`

#### 属性标识【dragContainerDynamicAttrKeyName】

当上述显示方式为`动态属性依据显示`的时候需要设置要判断控制中心的那个属性设置的数据，此处填写控制中心维护的标识即可。

- 标识：`dragContainerDynamicAttrKeyName`

- 默认值：空

#### 比较方式【dragContainerDynamicCompareType】

当上述显示方式为`动态属性依据显示`的时候需要对控制中心设置的结果值进行比较，这里就是设置以哪种方式对结果值进行比较，设置比较的方式有以下几种：

1. **结果值比较：** 直接跟设置的结果值进行比对，比对成功即显示，不成功这隐藏
2. **自定义函数比较：** 写自定义动作函数来自行实现判断逻辑，返回 true 或 false 进行显示

- 标识：`dragContainerDynamicCompareType`

- 默认值：`结果值比较`

#### 结果值【dragContainerDynamicCompareResult】

当上述比较方式为`结果值比较`的时候，此处需要填写控制中心属性的比对正确的结果值，当设置的结果等于此处的结果值时候才显示，否则即隐藏。

- 标识：`dragContainerDynamicCompareResult`

- 默认值：空

#### 显示依据【dragContainerDataFiled】

当上述显示方式为“切换依据显示”的时候代表页签选项卡切换的时候会根据此处填写的依据字段来去匹配结果值，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值，为 true 则显示，false 则不显示

- 标识：`dragContainerDataFiled`

- 默认值：空

#### 自定义函数依据显示【dragContainerDataFunction】

当切换选项卡、数据勾选等动作会触发此处设置的回调函数来控制是否显示，`动态属性依据显示` 且 `自定义函数比较`情况下也会调用此函数，接收参数的格式为以下：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "actionType": "触发函数的动作类型,目前有 changeTab(切换页签)、dynamicAttr(动态属性)、defaultTab(初始页签)",
  "otherData": "其他数据对象"
}
```

- 标识：`dragContainerDataFunction`

- 默认值：空

- 可设置函数数量：单个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

### 基础样式

<font color="#CCCCCC">用于设置组件的整体基础样式外观的组件属性的分组。</font>

#### 组件内外边距【box】

设置组件的最外围的外边距和内边距

- 标识：`box`

- 默认值：空

#### 列表容器内外边距【innerBox】

设置组件的列表容器的外边距和内边距，列表容器是指不包含页签区域的容器，只是用于存放列表的容器

- 标识：`innerBox`

- 默认值：空

#### 宽高

<font color="#CCCCCC">用于对容器的宽高进行行内分组，此处建议都设置为 auto。</font>

##### 宽【width】

组件的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`width`

- 默认值：`auto`

##### 高【height】

组件的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`height`

- 默认值：`auto`

#### 背景设置

<font color="#CCCCCC">用于对容器的背景设置分组。</font>

##### 背景色【bgColor】

设置组件的整体背景颜色

- 标识：`bgColor`

- 默认值：空

##### 背景图片【bgImgUrl】

设置组件的整体背景图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`bgImgUrl`

- 默认值：空

##### 横向偏移【positionX】

设置背景图片的横向偏移值，请参考 [background-position-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)

- 标识：`positionX`

- 默认值：空

##### 纵向偏移【positionY】

设置背景图片的纵向偏移值，请参考 [background-position-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)

- 标识：`positionY`

- 默认值：空

##### 背景大小【bgSize】

设置背景图片的背景类型，目前有以下三种方式提供选择：

1. **裁剪显示：** 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
2. **完全显示：** 缩放背景图片以完全装入背景区，可能背景区部分空白。
3. **自定义：** 自定义设定宽度和高度值

- 标识：`bgSize`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

##### 宽度【bgSizeWidth】

设置背景图片的背景宽度值

- 标识：`bgSizeWidth`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

##### 高度【bgSizeHeight】

设置背景图片的背景高度值

- 标识：`bgSizeHeight`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

##### 平铺模式【bgRepeat】

设置背景图片的背景平铺模式，目前有以下五种方式提供选择：

1. **双向重复：** 图片不够覆盖的时候 X、Y 轴都会重复显示
2. **水平重复：** 图片不够覆盖的时候 X 轴都会重复显示
3. **垂直重复：** 图片不够覆盖的时候 Y 轴都会重复显示
4. **不重复：** 图片不够覆盖的时候不重复显示
5. **继承：** 继承父容器属性

- 标识：`bgRepeat`

- 默认值：空

🍹 更深刻的含义请参考 [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

##### 背景模式【bgAttachment】

设置背景图像的位置是在视口内固定，或者随着包含它的区块滚动，目前有以下三种方式提供选择：

1. **固定：** 此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. **滚动：** 此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
3. **继承：** 继承父容器属性

- 标识：`bgAttachment`

- 默认值：空

🍹 更深刻的含义请参考 [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)

#### 阴影样式【boxShadow】

设置组件最外层的阴影样式，填写格式如下：`10px 10px 5px #888888`。

- 标识：`boxShadow`

- 默认值：`0px 0px 3px rgba(0,0,0,0.1)`

🍹 更深刻的含义请参考 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

#### 边框【border】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`border`

- 默认值：空

#### 文字【font】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`font`

- 默认值：空

### 主题设置【子表】【themeList】

用于设置组件的主题样式表，此处可跟随自身主题进行随意设置，此属性是一个表结构集合的形式属性。

- 标识：`themeList`

- 默认值：`[]`

🚀 要使用主题需要开启主题才有效，请参考：[应用主题](https://yunit-code.github.io/zh/guide/developtool.html#%E5%BA%94%E7%94%A8%E4%B8%BB%E9%A2%98)

#### 主题标识【key】

用于设置主题的标识，此项需要搭配自定义开发切换主题的功能，例如：蓝色标识为 blue，用户切换主题的时候存储到数据库中的标识为 blue，则这里填写为 blue

- 标识：`key`

- 默认值：空

#### 主要颜色【mainColor】

用于设置组件中用到的主要颜色值

- 标识：`mainColor`

- 默认值：<font color="#1890FF">`#1890FFFF`</font>

#### 次要颜色【minorColor】

用于设置组件中用到的次要颜色值

- 标识：`minorColor`

- 默认值：`#e6f7ffFF`

### 列表模板样式

<font color="#CCCCCC">用于对列表的模板设置属性分组。</font>

#### 模板通用样式

<font color="#CCCCCC">用于对列表模板共同性的设置属性分组。</font>

##### 每页大小【listPageSize】

列表滚动加载每页的大小数量，建议根据行高计算与组件最高的情况下的最少条数，否则会影响第一次加载没出滚动条就无法触发后续的分页加载 。

- 标识：`listPageSize`

- 默认值：`30`

##### 图标间距【iconListGutter】

用于设置每个字段前面设置图标的间距，同时也是图标字段中每个图标向右边的距离，也就是图标的右外边距数值设置 。

- 标识：`iconListGutter`

- 默认值：`0`

##### 按钮间距【buttonListGutter】

用于设置操作按钮字段中每个按钮之间的距离，按钮间距的数值是会平均分配给每个按钮的左右两边的内边距的，建议设置数值为偶数。

- 标识：`buttonListGutter`

- 默认值：`20`

##### 加载提示字体设置【diverseLoadingFont】

设置加载文案的文本字体样式设置，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`diverseLoadingFont`

- 默认值：空

##### 加载文案【diverseLoadingText】

设置列表初始化的时候正在加载中和滚动加载更多的提示文案内容，例如：正在加载中...

- 标识：`diverseLoadingText`

- 默认值：`正在加载中...`

##### 完成文案【diverseLoadedText】

设置列表当加载完成后显示的文案内容，例如：已全部加载完成

- 标识：`diverseLoadedText`

- 默认值：`已全部加载完成`

##### 暂无数据自定义显示函数【diverseNoDataFunction】

设置列表没有一条数据的时候显示的文案内容，如不设置则默认为“暂无数据”，如果需要更加灵活自定义显示内容(支持 html)，可以使用此设置自定义函数实现，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象"
}
```

- 标识：`diverseNoDataFunction`

- 默认值：`已全部加载完成`

- 可设置函数数量：单个

##### 默认行高【diverseDefaultLineHeight】

用于设置 Diverse 列表未悬浮状态下的列表行高和 Table 列表的列表行高，因为只能不换行显示，所以可以视为每行单元格的高度

- 标识：`diverseDefaultLineHeight`

- 默认值：`40`

##### 外层容器边距【diverseDefaultBox】

设置列表模板外层的内外边距

- 标识：`diverseDefaultBox`

- 默认值：空

#### Diverse 模板样式

<font color="#CCCCCC">用于对 Diverse 列表模板的设置属性分组。</font>

##### 显示悬浮【diverseHoverShow】

设置 Diverse 列表模板的行数据鼠标悬浮上去是否显示宽大的悬浮条

- 标识：`diverseHoverShow`

- 默认值：`true`

##### 悬浮背景【diverseHoverBgColor】

设置 Diverse 列表模板的行数据鼠标悬浮上去是否显示宽大的悬浮条的背景颜色

- 标识：`diverseHoverBgColor`

- 默认值：`#FFFFFFFF`

##### 悬浮阴影【diverseHoverShadow】

设置 Diverse 列表模板的行数据鼠标悬浮上去是否显示宽大的悬浮条的外阴影，填写格式如：`10px 10px 5px #888888`

- 标识：`diverseHoverShadow`

- 默认值：`"0 0 30px 10px rgba(4, 29, 88, 0.15)`

🍹 更深刻的含义请参考 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

##### 悬浮容器边距【diverseHoverBox】

设置 Diverse 列表模板的行数据鼠标悬浮上去是否显示宽大的悬浮条的内外边距

- 标识：`diverseHoverBox`

- 默认值：空

##### 通用事件【diverseHoverClickToDo】

设置点击悬浮是否调用通用待办点击打开事件，如果通用的不符合需求可以选择关闭然后使用自定义点击函数

- 标识：`diverseHoverClickToDo`

- 默认值：`false`

##### 悬浮点击自定义函数【diverseHoverClickCustomFunction】

当点击悬浮条的时候会调用此处设置的函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "itemObject": "整条数据对象"
}
```

- 标识：`diverseHoverClickCustomFunction`

- 默认值：空

- 可设置函数数量：多个

#### Table 模板样式

<font color="#CCCCCC">用于对 Table 列表模板的设置属性分组。</font>

##### 表头文字【tableTitleFont】

table 的表头文字字体设置，此处设置的 text-align 无效，会跟随每个字段设置的 text-align 设置。

- 标识：`tableTitleFont`

- 默认值：空

##### 表头背景【tableTitleBgColor】

用于设置 table 的表头背景颜色

- 标识：`tableTitleBgColor`

- 默认值：`#fafafaFF`

##### 应用页签【useTableTabArrayStr】

设置此模板应用于那些页签，如果填写了则会使用 Table 表格模板样式，否则会使用 Diverse 模板（默认），此处填写 tab 的 key 标识，用逗号分隔即可，例如：todo,invoice，则 todo、invoice 的页签会使用 table 样式的模板，其他的使用 Diverse 模板。

- 标识：`useTableTabArrayStr`

- 默认值：空

### Diverse 模板字段配置【子表】【diverseFiledList】

用于对 Diverse 列表字段的设置，通俗来讲就是设置列表要显示哪些列，但这个模板的列与 table 的列有所不同，具体的可以看下面的属性诠释，此属性是一个表结构集合的形式属性。

- 标识：`diverseFiledList`

- 默认值：`[]`

#### 关联页签【bindTabKeyList】

此项可控制当前字段要在哪个页签下展示，没有关联的页签则不会展示当前字段。填写页签的 key 值，多个请用英文逗号隔开，如：todo,toread。空值则在所有页签下都显示

- 标识：`bindTabKeyList`

- 默认值：``

#### 字段位置【dataFiledPosition】

用于设置字段的展示位置，因为是多样化列表模板，所以可能存在多个位置，目前有以下几个位置可选择：

1. **默认状态位置：** 未悬浮状态下的位置
2. **悬浮图标位置：** 悬浮状态下的图标位置
3. **悬浮标题位置：** 悬浮状态下的标题位置
4. **悬浮意见位置：** 悬浮状态下的意见位置
5. **悬浮字段位置：** 悬浮状态下标题下面的字段位置
6. **悬浮操作位置：** 悬浮状态下后面一列的操作位置

可以查看下面位置图了解对应的位置：
![Description](./idm_modules/todotabs/1.0.0/static/doc/resource/images/controlcenteraddlistpos.png)

- 标识：`dataFiledPosition`

- 默认值：`默认状态位置`

📢**_温馨提示_**：
字段的顺序与此处设置的顺序有关，请根据字段排列自行按先后顺序设置。

#### 显示字段【dataFiled】

设置当前字段要显示每行数据对象中的哪个字段属性名称，例如标题列则设置`title`(前提是列表接口返回结果返回了 title)

- 标识：`dataFiled`

- 默认值：空

#### 宽度占比【width】

用于设置当前字段列所占用的宽度比例或者具体 px 数值。

- 标识：`width`

- 默认值：空

📢**_温馨提示_**：
请自行根据字段所在的位置计算比例总和来分别设置不同的比例。

#### 自定义显示函数【customShowFunction】

如果此字段需要更高级的内容显示方式则可以使用此属性来自定义函数返回此字段每行的结果，并且支持自定义显示纯文本和 html，接收参数的格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前的页签key",
  "configObject": "当前字段配置的所有属性对象",
  "itemObject": "当前整行数据的对象",
  "tabObject": "当前页签数据的整个对象"
}
```

- 标识：`customShowFunction`

- 默认值：空

- 可设置函数数量：多个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

#### 显示模式【iconType】

此处设置当前字段显示的模式，目前有以下几项可选择：

1. **只显示字段结果：** 只显示上面配置的字段属性的值
2. **显示图标配置：** 显示图标选项配置的图标集合 + 上面配置的字段属性的值
3. **显示操作按钮：** 显示操作按钮配置的按钮集合 + 上面配置的字段属性的值
4. **自定义选择图标：** 显示下面选择的图标 + 上面配置的字段属性的值

- 标识：`iconType`

- 默认值：`只显示字段结果`

#### 显示图标【icon】

当上面`显示模式=自定义选择图标`时候此项可以设置要显示哪个图标，图标库为 IDM 平台的库，如果觉得图标不满足可以自行追加或联系框架所在的平台进行追加然后更新即可。

- 标识：`icon`

- 默认值：空

🚀 图标库请参考：[字体图标](https://yunit-code.github.io/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87)

#### 左内边距【fieldLeftPadding】

用于设置字段左内边距的 px 数值，如果不设置可能会造成字段内容过长的时候会拼接在一起的视觉效果。

- 标识：`fieldLeftPadding`

- 默认值：`0`

#### 右内边距【fieldRightPadding】

用于设置字段右内边距的 px 数值，如果不设置可能会造成字段内容过长的时候会拼接在一起的视觉效果。

- 标识：`fieldRightPadding`

- 默认值：`0`

#### 默认文字【defaultFont】

设置字段的内容文字默认展示的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`defaultFont`

- 默认值：空

#### 已读文字【readFont】

设置字段的内容文字已读展示的字体样式（需要结合已读判断属性，为 true 才有效），可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`readFont`

- 默认值：空

#### 已读判断【readExpression】

设置此行数据是否为已读的判断表达式，不需要根据已读变化直接为空即可，表达式结果为 true 则是已读，false 则是未读，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值

- 标识：`readExpression`

- 默认值：空

#### 通用事件【clickToDo】

设置点击此字段单元格是否调用通用待办点击打开事件，如果通用的不符合需求可以选择关闭然后使用自定义点击函数

- 标识：`clickToDo`

- 默认值：`false`

#### 点击自定义函数【clickCustomFunction】

当点击字段单元格的时候会调用此处设置的函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前字段配置的所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`clickCustomFunction`

- 默认值：空

- 可设置函数数量：多个

### Table 模板字段配置【子表】【tableFiledList】

用于对 Table 列表字段的设置，通俗来讲就是设置列表要显示哪些列，此表格样式与传统表格并无其他特殊之处，此属性是一个表结构集合的形式属性。

- 标识：`tableFiledList`

- 默认值：`[]`

#### 关联页签【bindTabKeyList】

此项可控制当前字段要在哪个页签下展示，没有关联的页签则不会展示当前字段。填写页签的 key 值，多个请用英文逗号隔开，如：todo,toread。空值则在所有页签下都显示

- 标识：`bindTabKeyList`

- 默认值：``

#### 列头文字【dataTitle】

设置每列列头要显示的文字

- 标识：`dataTitle`

- 默认值：空

#### 显示字段【dataFiled】

设置当前字段要显示每行数据对象中的哪个字段属性名称，例如标题列则设置`title`(前提是列表接口返回结果返回了 title)

- 标识：`dataFiled`

- 默认值：空

#### 宽度占比【width】

用于设置当前字段列所占用的宽度比例或者具体 px 数值。

- 标识：`width`

- 默认值：空

📢**_温馨提示_**：
建议使用百分比设置，会自动适配且超出会显示省略符号。

#### 自定义显示函数【customShowFunction】

如果此字段需要更高级的内容显示方式则可以使用此属性来自定义函数返回此字段每行的结果，并且支持自定义显示纯文本和 html，接收参数的格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前的页签key",
  "configObject": "当前字段配置的所有属性对象",
  "itemObject": "当前整行数据的对象",
  "tabObject": "当前页签数据的整个对象"
}
```

- 标识：`customShowFunction`

- 默认值：空

- 可设置函数数量：多个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

#### 显示模式【iconType】

此处设置当前字段显示的模式，目前有以下几项可选择：

1. **只显示字段结果：** 只显示上面配置的字段属性的值
2. **显示图标配置：** 显示图标选项配置的图标集合 + 上面配置的字段属性的值
3. **显示操作按钮：** 显示操作按钮配置的按钮集合 + 上面配置的字段属性的值
4. **自定义选择图标：** 显示下面选择的图标 + 上面配置的字段属性的值

- 标识：`iconType`

- 默认值：`只显示字段结果`

#### 显示图标【icon】

当上面`显示模式=自定义选择图标`时候此项可以设置要显示哪个图标，图标库为 IDM 平台的库，如果觉得图标不满足可以自行追加或联系框架所在的平台进行追加然后更新即可。

- 标识：`icon`

- 默认值：空

🚀 图标库请参考：[字体图标](https://yunit-code.github.io/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87)

#### 左内边距【fieldLeftPadding】

用于设置字段左内边距的 px 数值，如果不设置可能会造成字段内容过长的时候会拼接在一起的视觉效果。

- 标识：`fieldLeftPadding`

- 默认值：`0`

#### 右内边距【fieldRightPadding】

用于设置字段右内边距的 px 数值，如果不设置可能会造成字段内容过长的时候会拼接在一起的视觉效果。

- 标识：`fieldRightPadding`

- 默认值：`0`

#### 默认文字【defaultFont】

设置字段的内容文字默认展示的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`defaultFont`

- 默认值：空

#### 已读文字【readFont】

设置字段的内容文字已读展示的字体样式（需要结合已读判断属性，为 true 才有效），可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`readFont`

- 默认值：空

#### 已读判断【readExpression】

设置此行数据是否为已读的判断表达式，不需要根据已读变化直接为空即可，表达式结果为 true 则是已读，false 则是未读，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值

- 标识：`readExpression`

- 默认值：空

#### 通用事件【clickToDo】

设置点击此字段单元格是否调用通用待办点击打开事件，如果通用的不符合需求可以选择关闭然后使用自定义点击函数

- 标识：`clickToDo`

- 默认值：`false`

#### 点击自定义函数【clickCustomFunction】

当点击字段单元格的时候会调用此处设置的函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前字段配置的所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`clickCustomFunction`

- 默认值：空

- 可设置函数数量：多个

### 图标显示选项设置【子表】【iconOptionList】

用于对图标字段显示的设置，通俗来讲就是设置图标列要显示哪些图标，此属性是一个表结构集合的形式属性。

- 标识：`iconOptionList`

- 默认值：`[]`

#### 图标地址【iconImgUrl】

设置要显示的图标图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`iconImgUrl`

- 默认值：空

#### 宽高

<font color="#CCCCCC">用于对宽高属性行内分组。</font>

##### 宽【iconWidth】

用于设置图标的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议使用合理的具体宽度数值然后以 px 作为单位。填写了宽度建议高度不填写，否则会变形，或者使用比例计算出高度。

- 标识：`iconWidth`

- 默认值：`auto`

##### 高【iconHeight】

用于设置图标的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议使用合理的具体高度数值然后以 px 作为单位。填写了高度建议宽度不填写，否则会变形，或者使用比例计算出宽度。

- 标识：`iconHeight`

- 默认值：`auto`

#### 显示方式【iconShowType】

设置图标显示的方式，可以根据切换显示方式对每个图标进行更高级的控制。目前有以下几种方式：

1. **始终显示：** 不管任何条件下都始终显示
2. **数据字段依据显示：** 根据每行数据对象里面的属性数据值来进行匹配显示，支持表达式填写
3. **自定义函数显示：** 通过写自定义方法来返回此图标是否显示

- 标识：`iconShowType`

- 默认值：`始终显示`

#### 显示依据【iconDataFiled】

当`显示方式=数据字段依据显示`的时候可以在此处填写表达式，表达式可以使用每行的数据对象，返回结果为 true 则显示，false 则不显示，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值

- 标识：`iconDataFiled`

- 默认值：空

#### 自定义函数依据显示【iconDataFunction】

当`显示方式=自定义函数显示`的时候可以在此处添加自定义方法来返回 true 和 false 是否显示该图标，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前图标配置的所有属性对象",
  "fieldConfigObject": "当前图标所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`iconDataFunction`

- 默认值：空

- 可设置函数数量：单个

#### 提示信息【iconTip】

设置鼠标悬浮到图标上的提示信息，如果设置了自定义函数提示信息则此处设置无效

- 标识：`iconTip`

- 默认值：空

#### 自定义函数提示信息【iconTipFunction】

当上面提示信息属性直接填写的无法满足需求时候就可以使用此处自定义函数来实现提示动态的信息，例如：超期 n 天，就可以通过自定义函数来实现，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前图标配置的所有属性对象",
  "fieldConfigObject": "当前图标所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`iconTipFunction`

- 默认值：空

- 可设置函数数量：单个

#### 点击自定义函数【clickCustomFunction】

当鼠标点击此图标的时候会调用此处设置的自定义函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前图标配置的所有属性对象",
  "fieldConfigObject": "当前图标所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`clickCustomFunction`

- 默认值：空

- 可设置函数数量：多个

### 操作按钮选项设置【子表】【buttonOptionList】

用于对按钮字段显示的设置，通俗来讲就是设置按钮操作列要显示哪些按钮，此属性是一个表结构集合的形式属性。

- 标识：`buttonOptionList`

- 默认值：`[]`

#### 按钮图标【iconSvg】

可以设置按钮要显示哪个图标，图标位于按钮的左方(水平)或者上方(垂直)，图标库为 IDM 平台的库，如果觉得图标不满足可以自行追加或联系框架所在的平台进行追加然后更新即可。

- 标识：`iconSvg`

- 默认值：空

🚀 图标库请参考：[字体图标](https://yunit-code.github.io/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87)

#### 按钮文字【buttonText】

可设置按钮要显示的文字

- 标识：`buttonText`

- 默认值：空

#### 排列方式【buttonLayout】

设置按钮图标与文字的排列方式，目前有以下两种排列方式：

1. **垂直：** 图标和文字垂直对齐
2. **水平：** 图标和文字水平对齐

- 标识：`buttonLayout`

- 默认值：`垂直`

#### 图标字体设置【iconSvgFont】

用于设置图标的样式，因为图标使用的是 svg，所以一般的大小颜色是可以设置的，目前可设置图标的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等（可能部分对 svg 无效）。

- 标识：`iconSvgFont`

- 默认值：空

#### 按钮文字字体【buttonTextFont】

用于设置按钮文字的样式，目前可设置图标的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`buttonTextFont`

- 默认值：空

📢**_温馨提示_**：
当排列方式为垂直的时候可以通过调整文字的行高方式来调整图标与文字之间的间距。

#### 显示方式【buttonShowType】

设置按钮显示的方式，可以根据切换显示方式对每个按钮进行更高级的控制。目前有以下几种方式：

1. **始终显示：** 不管任何条件下都始终显示
2. **数据字段依据显示：** 根据每行数据对象里面的属性数据值来进行匹配显示，支持表达式填写
3. **自定义函数显示：** 通过写自定义方法来返回此按钮是否显示

- 标识：`buttonShowType`

- 默认值：`始终显示`

#### 显示依据【buttonDataFiled】

当`显示方式=数据字段依据显示`的时候可以在此处填写表达式，表达式可以使用每行的数据对象，返回结果为 true 则显示，false 则不显示，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值

- 标识：`buttonDataFiled`

- 默认值：空

#### 自定义函数依据显示【buttonDataFunction】

当`显示方式=自定义函数显示`的时候可以在此处添加自定义方法来返回 true 和 false 是否显示该按钮，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前按钮配置的所有属性对象",
  "fieldConfigObject": "当前按钮所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`buttonDataFunction`

- 默认值：空

- 可设置函数数量：单个

#### 提示信息【buttonTip】

设置鼠标悬浮到按钮上的提示信息，如果设置了自定义函数提示信息则此处设置无效

- 标识：`buttonTip`

- 默认值：空

#### 自定义函数提示信息【buttonTipFunction】

当上面提示信息属性直接填写的无法满足需求时候就可以使用此处自定义函数来实现提示动态的信息，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前按钮配置的所有属性对象",
  "fieldConfigObject": "当前按钮所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象"
}
```

- 标识：`buttonTipFunction`

- 默认值：空

- 可设置函数数量：单个

#### 事件类型【buttonHandleType】

设置按钮点击触发的事件类型，组件已内置了一些常用的功能按钮，可以直接选择也可以自己实现逻辑，目前有以下类型：

1. **无事件：** 不做任何响应
2. **发送：** 执行内置的待办发送事件
3. **退回：** 执行内置的待办退回事件
4. **阅毕：** 执行内置的阅毕事件
5. **收藏：** 执行内置的收藏事件
6. **取消收藏：** 执行内置的取消收藏事件
7. **报名：** 执行内置的报名事件
8. **自定义函数：** 执行下述自定义的函数方法

- 标识：`buttonHandleType`

- 默认值：`无事件`

- ⚠ <font color="#FF0000">**_注意事项：_**</font>
  <font color="#FF0000">如果要使用组件内置的按钮事件 ，有些列表接口返回的属性是必不可少的，具体所需属性可以查看`列表接口（平台）` 属性中描述的接口返回示例结构</font>

#### 事件自定义函数【buttonCustomFunction】

当上述内置按钮事件无法满足要求的时候我们可以使用自定义方法重新写我们需要的逻辑，就可以在此处添加自己的自定义函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签的key",
  "tabObject": "当前页签的数据对象",
  "configObject": "当前按钮配置的所有属性对象",
  "fieldConfigObject": "当前按钮所在的字段列配置所有属性对象",
  "itemObject": "整条数据对象",
  "callback": "用于回调刷新列表的回调函数，传递要刷新的页签tab的key即可，多个页签用逗号隔开，function(reloadTabKeys){}"
}
```

- 标识：`buttonCustomFunction`

- 默认值：空

- 可设置函数数量：多个

#### 重新加载【isReloadTabInfo】

设置当按钮操作成功后是否重新加载组件的数量提醒数据以及已经加载的列表数据，如果要加载指定 tab 的请在下面加载页签属性中填写 tab 的标识

- 标识：`isReloadTabInfo`

- 默认值：`true`

#### 加载页签【reloadTabKeys】

设置按钮操作成功后要重新加载哪些页签，如果不需要重新加载则不需要填写，此处填写 tab 的 key 标识，用逗号分隔即可，例如：todo,invoice

- 标识：`reloadTabKeys`

- 默认值：空

### 功能接口

<font color="#CCCCCC">用于对组件内部所用到的接口属性的分组。</font>

#### 收藏接口【favoriteApiUrl】

设置收藏和取消收藏的按钮接口，如果不用平台的逻辑可以重写接口然后再此处替换即可，但如果设置了为空则默认为：`ctrl/favorite/enshrine`

- 标识：`favoriteApiUrl`

- 默认值：`ctrl/favorite/enshrine`

#### 阅毕接口【readedApiUrl】

设置阅毕的按钮接口，如果不用平台的逻辑可以重写接口然后再此处替换即可，但如果设置了为空则默认为：`ctrl/shareRead/readedIds`

- 标识：`favoriteApiUrl`

- 默认值：`ctrl/shareRead/readedIds`

#### 查询待办接口【sendBackApiUrl】

设置退回所需要的查询待办的接口，如果不用平台的逻辑可以重写接口然后再此处替换即可，但如果设置了为空则默认为：`ctrl/officeInfo/getTodo`

- 标识：`favoriteApiUrl`

- 默认值：`ctrl/officeInfo/getTodo`

#### 查询单位选择接口【newFileUrlHasDeptSelectUrl】

设置页签右边扩展按钮触发的点击事件为打开新建页面的事件查询是否需要弹出单位选择的列表查询接口，如果设置了为空则默认为：`ctrl/formControl/getDraftXForm`

- 标识：`newFileUrlHasDeptSelectUrl`

- 默认值：`ctrl/formControl/getDraftXForm`

#### 新建页面通用地址【newFileCommonPageUrl】

设置页签右边扩展按钮触发的点击事件为打开新建页面的事件弹出来的新建页面的地址，如果设置了为空则默认为：`ctrl/formControl/form?moduleId=@[newFileUrl]&draftOrgId=@[orgObj.id]`。
此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的接口地址，表达式中可使用的对象有以下格式：

```json
{
  ...currentTabObject(当前页签对象以及 数量接口(平台或扩展) 返回的对象，例如count、newFileUrl、moreUrl等等 ),
  "orgObj": "当前机构单位的对象，这里面所含有的字段取决于上述 查询单位选择接口 返回的值"
}
```

例如此处可以填写以下接口地址（示例中的@[newFileUrl]会自动替换为上面的 newFileUrl 属性内容）：

```language
ctrl/formControl/form?moduleId=@[newFileUrl]&draftOrgId=@[orgObj.id]
```


- 标识：`newFileCommonPageUrl`

- 默认值：``


### 高级

<font color="#CCCCCC">用于对组件高级设置的属性的分组。</font>

#### 切换面板的回调自定义函数【changeFunction】

切换面板的回调函数设置，接收参数格式为：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "allTabDataList": "所有已经加载的页签列表数据集合"
}
```

- 标识：`changeFunction`

- 默认值：空

- 可设置函数数量：多个

#### next 按钮点击自定义函数【nextClickFunction】

next 按钮被点击的回调函数设置，接收参数格式为：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "allTabDataList": "所有已经加载的页签列表数据集合"
}
```

- 标识：`nextClickFunction`

- 默认值：空

- 可设置函数数量：多个

#### prev 按钮点击自定义函数【prevClickFunction】

prev 按钮被点击的回调函数设置，接收参数格式为：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "allTabDataList": "所有已经加载的页签列表数据集合"
}
```

- 标识：`prevClickFunction`

- 默认值：空

- 可设置函数数量：多个

#### tab 被点击自定义函数【tabClickFunction】

tab 页签被点击的回调函数设置，接收参数格式为：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "allTabDataList": "所有已经加载的页签列表数据集合"
}
```

- 标识：`tabClickFunction`

- 默认值：空

- 可设置函数数量：多个

#### 列表数据加载结束自定义函数【listLoadedFunction】

列表数据每次加载结束后会调用此处的设置函数，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "currentKey": "当前页签key",
  "tabObject": "当前页签的数据对象",
  "allList": "当前页签所有已加载的数据（不包含当次加载的）",
  "currentList": "当前页签当次（当页）加载的数据"
}
```

- 标识：`listLoadedFunction`

- 默认值：空

- 可设置函数数量：多个

#### 刷新 KEY【messageRefreshKey】

根据组件接收到的消息 KEY 来刷新数据，可选择多个

- 标识：`messageRefreshKey`
