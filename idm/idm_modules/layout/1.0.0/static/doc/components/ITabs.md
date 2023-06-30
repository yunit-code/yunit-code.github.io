
# 选项卡

选项卡是基于IDM开发的一个页签组件，是一个以页签切换形式展示不同分类下产品的组件，此组件一般用于展示多个分类下核心的或推荐的产品，可以通过切换不同的分类页签来展示不同分类下的产品。

## 组件类名（className）

ITabs

## 组件类ID（classId）

idm.componet.layout.itabs

## 组件开发语言（comLangue）

vue

## 组件类型（comType）

common

## 所在代码包版本

layout@1.0.0

## 组件属性

此章节主要介绍该组件的每个属性的含义以及如何使用说明

### 唯一标识【ctrlId】

只读属性，不可修改，作为每个组件实例的一个唯一标识

- 标识：`ctrlId`
- 默认值：`@[packageid]`

### 基本属性

<font color="#CCCCCC">此章节主要用于存放设置组件所需要的一些基本信息的属性，以达到组件具备使用的基础条件</font>

#### 页签大小【size】

用于设置页签的大小，目前支持三种大小：小，中，大

- 标识：`size`
- 默认值：`中`

#### 页签位置【tabPosition】

设置页签展示的位置，目前支持在四边展示：top、right、bottom、left

- 标识：`tabPosition`
- 默认值：`top`

#### 页签间距【tabBarGutter】

设置每个页签之间的间距，最小值0，最大值999，数值单位为px

- 标识：`tabBarGutter`
- 默认值：空

#### 风格样式【type】

设置页签的风格样式，目前支持两种页签样式：line(线条)、card（卡片）

- 标识：`type`
- 默认值：line

#### 切换动画【animated】

是否使用动画切换 Tabs，在 页签位置=top|bottom 时有效

- 标识：`animated`
- 默认值：true

### 页签选项设置【子表】【TabPaneList】

用于设置页签的静态选项，也就是维护页签的数据。

#### tab标识【key】

设置页签标识，当前组件内唯一即可

- 标识：`key`
- 默认值：空

#### tab文字【tab】

设置页签显示的文本内容

- 标识：`tab`
- 默认值：空

#### tab显示自定义函数【tabSlotFunction】

tab页签内容如果想要自定义内容格式可以设置此自定义函数，支持返回HTML格式字符串，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "tab": "当前页签的选项设置对象"
}
```
- 标识：`tabSlotFunction`
- 默认值：空

- 可设置函数数量：单个

#### 默认选中【defaultActiveKey】

设置当前页签选项是否为默认选中，如果设置了多个则以最后一个为准。

- 标识：`defaultActiveKey`
- 默认值：false

#### 懒加载【forceRender】

选用此项则被隐藏的tab默认不渲染dom，点击的时候第一次去渲染tab

- 标识：`forceRender`
- 默认值：false

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
4. **自定义函数显示：** 写自定义动作函数来返回 true 或 false 进行判断是否显示

- 标识：`dragContainerShowType`

- 默认值：`始终显示`

#### 显示依据【dragContainerDataFiled】

当上述显示方式为“切换依据显示”的时候代表页签选项卡切换的时候会根据此处填写的依据字段来去匹配结果值，此处可以填写具有[表达式](https://yunit-code.github.io/zh/coreapi/api.html#express)的值，为 true 则显示，false 则不显示

- 标识：`dragContainerDataFiled`

- 默认值：空

#### 自定义函数依据显示【dragContainerDataFunction】

当切换选项卡、数据勾选等动作会触发此处设置的回调函数来控制是否显示，`自定义函数比较`情况下也会调用此函数，接收参数的格式为以下：

```json
{
  "pageId": "页面ID",
  "urlData": "url参数序列化字符串",
  "customParam": "自定义的参数",
  "activeKey": "当前选中的页签key",
  "allKey": "所有页签集合",
  "actionType": "触发函数的动作类型,目前有 changeTab(切换页签)、defaultTab(初始页签)",
  "_this": "组件this对象"
}
```

- 标识：`dragContainerDataFunction`

- 默认值：空

- 可设置函数数量：单个

  🍹 点击添加按钮可以使用内置动作函数，如果不满足需求可以使用`自定义动作`来添加函数自己写逻辑，快去试试吧！

### 样式设置

<font color="#CCCCCC">用于设置组件的整体基础样式外观的组件属性的分组。</font>

#### 内外边距【box】

设置组件的最外围的外边距和内边距

- 标识：`box`

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

#### 边框【border】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`border`

- 默认值：空

#### 文字【font】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`font`

- 默认值：空

### 高级

<font color="#CCCCCC">用于对组件高级设置的属性的分组。</font>

#### tabBar样式自定义函数【tabBarStyleFunction】

tab bar 加载时候的时候会调用此方法，主要用于对tab bar的样式进行自定义修改，接收参数为格式为{...自定义的}，返回css Object，例如：{'border-color':'#333333'}


- 标识：`tabBarStyleFunction`

- 默认值：空

- 可设置函数数量：单个

#### tabBar额外元素自定义函数【tabBarExtraContentFunction】

tab bar 上额外的元素DOM，主要用于对tab bar 的另一侧进行内容自定义，支持返回html，接收参数为格式为{...自定义的}，返回html字符串

- 标识：`tabBarExtraContentFunction`

- 默认值：空

- 可设置函数数量：单个

#### 切换面板的回调自定义函数【changeFunction】

切换面板的回调，接收参数为格式为{...自定义的,activeKey,allKey}

- 标识：`changeFunction`

- 默认值：空

- 可设置函数数量：多个

#### next按钮点击自定义函数【nextClickFunction】

next 按钮被点击的回调，接收参数为格式为{...自定义的,activeKey,allKey}

- 标识：`nextClickFunction`

- 默认值：空

- 可设置函数数量：多个

#### prev按钮点击自定义函数【prevClickFunction】

prev 按钮点击自定义函数，接收参数为格式为{...自定义的,activeKey,allKey}

- 标识：`prevClickFunction`

- 默认值：空

- 可设置函数数量：多个

#### tab被点击自定义函数【tabClickFunction】

tab 被点击的回调函数，接收参数为格式为{...自定义的,activeKey,allKey}

- 标识：`tabClickFunction`

- 默认值：空

- 可设置函数数量：多个
#### 数据变化联动组件范围【linkageDemandPageModule】

暂无用

- 标识：`linkageDemandPageModule`

- 默认值：空

- 可设置联动组件数量：多个

## 组件内部容器名称
容器
## 组件内部容器属性
### 样式设置

<font color="#CCCCCC">用于设置组件的内部容器基础样式外观的组件属性的分组。</font>

#### 栅格布局【layout】

![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/page_attr_layout.jpg)

用于设置组件内的组件布局方式，有以下四种布局方式：

1. block：块级元素布局，页面中的元素前后会带有换行符
2. inline-block：行内块元素，页面中的元素会被呈递在同一行内，允许空格
3. inline：内联元素，页面中的元素前后没有换行符
4. flex：弹性布局，该模式下包含`row`、`row-reverse`、`column`、`column-reverse`四种元素排列方式
- 标识：`box`

- 默认值：空

📢**_温馨提示_**：
- flex布局参考： [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- flex布局示例： [Flex布局示例](http://static.vgee.cn/static/index.html)
- flex深度理解： [Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### 内外边距【box】

设置组件的最外围的外边距和内边距

- 标识：`box`

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

#### 边框【border】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`border`

- 默认值：空

#### 文字【font】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`font`

- 默认值：空
