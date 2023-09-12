# 全屏布局

可能实际业务中会有这样一个需求，需要全屏显示全部页面部件出来，并且要适配各种分辨率，并且还能根据分辨率隐藏部分组件，这种IDM称作全屏适配。因此基于此需求IDM官方开发出来一个新的布局组件，叫全屏布局组件，能通过像Excel画格子自由圈画组件大小范围，自由定制响应式条件等等。

## 组件类名（className）

IFullScreenLayout

## 组件类ID（classId）

idm.componet.layout.ifullscreenlayout

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

### 标题【ctrlTitle】

暂无用

- 标识：`ctrlTitle`
- 默认值：空

### 基本属性

<font color="#CCCCCC">此章节主要用于存放设置组件所需要的一些基本信息的属性，以达到组件具备使用的基础条件</font>

#### 格子数量【gridNumber】

用于设置全屏布局横向和纵向需要拆分成多少列或多少行，横向和纵向只能数量相同，当只有设置了格子数量后才能以格子的边界拖拽画页面的布局，最小4，最大100个格子。

可以查看下面图了解：
![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/layoutattrgridnumber.png)

- 标识：`gridNumber`
- 默认值：20

📢**_温馨提示_**：
请先进行格子数量设置再进行布局设置调整，以防后续再调整格子出现布局问题

#### 自动布局【autoLayoutType】

设置是否自动响应式切换布局，如果关闭则一直显示完整布局模式，如果开启则会根据设置的响应式进行切换布局

- 标识：`autoLayoutType`
- 默认值：`close`

**完整布局解释：**

完整布局是指在最大分辨率情况下显示的布局，右侧能新增的自定义响应式布局只能在当前完整布局下删减布局，无法新增布局。如果完整布局发生变化，右侧自定义响应式布局可点击名称左边的重置功能图标进行重新布局。如果配置了响应式布局而实际条件不满足任何一个响应式布局时则同样显示该完整布局，操作位置可查看下图：

![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/layoutattrautolayouttype.png)


#### 适配菜单【fitMenu】

设置全屏布局是否适配菜单，比如竖向菜单有展开状态的宽度和收起状态的宽度，也就是说其他组件的占用宽度是会随时变化的，这时候全屏布局想要适配菜单跟随变宽或变窄，就可以使用此属性来设置是否开启适配菜单

- 标识：`fitMenu`
- 默认值：false

#### 隐藏容器【displayContainer】

设置是否显示隐藏的布局容器，此属性只作用与页面配置的，在预览时候无效。作用是能配置隐藏的组件，在当用户要个性化定制的时候可以使用这里隐藏域配置的组件进行切换显示，提供用户能使用更多的组件可进行个性化定制选择。

- 标识：`displayContainer`
- 默认值：false

#### 展开宽度【menuWidthMax】

设置适配菜单的展开状态下要减去的宽度，数值建议跟其他组件保持一致。

- 标识：`menuWidthMax`
- 默认值：`230px`
- 显示条件：`适配菜单=true`

#### 收缩宽度【menuWidthMin】

设置适配菜单的收缩宽度下要减去的宽度，数值建议跟其他组件保持一致。

- 标识：`menuWidthMin`
- 默认值：`64px`
- 显示条件：`适配菜单=true`

#### 适配布局【子表】【chooseGridMediaList】

<font color="#FF0000">当完全布局无法满足响应式布局需求可以使用此处的适配布局进行设置调整</font>

##### 宽【w】

设置当页面宽度大于此数值的时候显示该布局，单位为px。

- 标识：`w`
- 默认值：`1600`

📢**_温馨提示_**：
需要同时满足宽与高的才能显示该布局，并且优先显示数值最大的。

##### 高【h】

设置当页面高度大于此数值的时候显示该布局，单位为px。

- 标识：`h`
- 默认值：`1600`

📢**_温馨提示_**：
需要同时满足宽与高的才能显示该布局，并且优先显示数值最大的。

##### 权限过滤【powerActive】

如果此布局需要依据权限来判断是否显示，可以开启权限过滤来设置对应的显示权限。

- 标识：`powerActive`
- 默认值：true

##### 权限选择【powerList】

设置要显示该布局的权限，如果要使改权限生效，请在“用户权限自定义函数”属性返回当前人的权限ID集合

- 标识：`powerList`
- 默认值：空
- 数据源接口地址：`/ctrl/idm/console/getRoleList`
- 显示条件：`权限过滤=true`


##### 显示隐藏该页面自定义函数【isShowFunction】

设置显示隐藏该布局页面的自定义函数，如果设置了此函数则`权限选择`设置无效，接收参数格式为：

```json
{
  "customParam": "自定义的参数",
  "item": "当前的适配布局对象",
  "_this": "组件this对象"
}
```

- 标识：`isShowFunction`

- 默认值：空

- 可设置函数数量：单个

#### 用户权限自定义函数【userRoleFunction】

用于设置返回当前人的权限ID集合，如果适配布局中设置了权限则此处是必选，否则权限设置无效。

- 标识：`userRoleFunction`

- 默认值：空

- 可设置函数数量：单个

📢**_温馨提示_**：
如果需要获取当前人的权限等信息，建议使用 [页面设置-高级设置-用户信息](https://yunit-code.github.io/zh/guide/developtool.html#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF) 功能。

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

## 组件内部容器名称
格子
## 组件内部容器属性

<font color="#CCCCCC">用于设置组件的内部容器 格子 属性，该层级下的属性只有选择了格子容器才会显示</font>

### 样式设置

<font color="#CCCCCC">用于设置组件的格子基础样式外观的组件属性的分组。</font>

#### 栅格布局【layout】

![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/page_attr_layout.jpg)

用于设置组件内的组件布局方式，有以下四种布局方式：

1. block：块级元素布局，页面中的元素前后会带有换行符
2. inline-block：行内块元素，页面中的元素会被呈递在同一行内，允许空格
3. inline：内联元素，页面中的元素前后没有换行符
4. flex：弹性布局，该模式下包含`row`、`row-reverse`、`column`、`column-reverse`四种元素排列方式

- 标识：`layout`

- 默认值：空

📢**_温馨提示_**：
- flex布局参考： [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- flex布局示例： [Flex布局示例](http://static.vgee.cn/static/index.html)
- flex深度理解： [Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


#### overflow【overflow】

用于设置容器是否显示滚动条，有以下三种方式：

1. auto：根据内容自动显示滚动条
2. scroll：始终显示滚动条
3. hidden：始终不显示滚动条，超出隐藏

- 标识：`overflow`

- 默认值：空

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
