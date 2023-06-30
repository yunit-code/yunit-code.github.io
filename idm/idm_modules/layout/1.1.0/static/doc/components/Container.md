# 容器

容器组件可用于存放一个或多个组件的布局类组件，一般情况无需先放容器组件再放其他组件，可直接拖拽组件到页面中，在如果要设置组件的外围的边框、背景颜色、阴影、位置、对齐等需求的时候此组件就非常有用（前提是组件没有对应的属性）。

## 组件类名（className）

Container

## 组件类ID（classId）

idm.componet.layout.container

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

标题，暂无用

- 标识：`ctrlTitle`
- 默认值：``

### 样式设置

<font color="#CCCCCC">用于设置组件的整体基础样式外观的组件属性的分组。</font>

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

#### 边框阴影【boxShadow】

设置组件最外层的阴影样式，填写格式如下：`10px 10px 5px #888888`。

- 标识：`boxShadow`

- 默认值：`0px 0px 3px rgba(0,0,0,0.1)`

🍹 更深刻的含义请参考 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

#### 文字【font】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`font`

- 默认值：空

### 高级

<font color="#CCCCCC">用于对组件高级设置的属性的分组。</font>

#### 点击时动作【clickFunction】

容器被点击的回调函数设置，接收参数格式为：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "customParam": "自定义的参数",
  "_this": "组件this对象"
}
```

- 标识：`clickFunction`

- 默认值：空

- 可设置函数数量：多个
