# 图片

图片组件是在页面上展示一张图片的模块，通过设置图片的描述文字、链接、展示形状、特效等实现丰富的单图展示效果。

## 组件类名（className）

IImage

## 组件类ID（classId）

idm.componet.basics.iimage

## 组件开发语言（comLangue）

vue

## 组件类型（comType）

common

## 所在代码包版本

basics@1.0.0

## 组件属性

此章节主要介绍该组件的每个属性的含义以及如何使用说明

### 唯一标识【ctrlId】

只读属性，不可修改，作为每个组件实例的一个唯一标识

- 标识：`ctrlId`
- 默认值：`@[packageid]`

### 基本属性

<font color="#CCCCCC">此章节主要用于存放设置组件所需要的一些基本信息的属性，以达到组件具备使用的基础条件</font>

#### 图片路径【imageUrl】

使用上传功能则默认从项目根目录开始，使用时候会自动加上项目名称，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`imageUrl`
- 默认值：``

#### title【titleContent】

html标签的title，也就是鼠标放上去会有显示文本内容的文字

- 标识：`titleContent`
- 默认值：``

#### 替代文本【altContent】

图片加载失败的占位文字

- 标识：`altContent`
- 默认值：`Image 404`

### 样式设置

<font color="#CCCCCC">用于对容器的背景设置分组。</font>

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

#### 点击时动作【clickFunction】

文本被点击的回调函数设置，接收参数格式为：

```json
{
  "routerId":"页面的路由ID",
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "customParam": "自定义的参数",
  "_this": "组件this对象"
}
```

- 标识：`clickFunction`

- 默认值：空

- 可设置函数数量：多个

#### 动态内容【dataSourceType】

通过这些方式去动态获取图片地址的结果值来显示成图片，目前有以下类型：

1. **自定义接口：** 以自定义接口的方式去获取图片地址，能满足大部分要求。
2. **页面统一接口：** 以页面设置的接口返回的接口结果来显示到此组件上，这种特别适合多个图片组件显示一个接口返回的内容。
3. **自定义函数：** 通过写自定义函数来返回图片组件要显示的图片地址。
4. **接收联动消息：** 接收其他组件发送的内容来显示。

- 标识：`dataSourceType`

- 默认值：`自定义接口`

#### 接口地址【customInterfaceUrl】

用于获取数据源的接口地址，请按照统一标准的返回格式返回图片地址数据，格式如下：{\"code\":\"200\",\"data\":\"\",...}

- 标识：`customInterfaceUrl`

- 默认值：``

- 显示条件：`动态内容=自定义接口`

#### 结果集名【dataName】

页面接口设定的结果集名称，位置为：页面设置》高级设置》页面接口

- 标识：`dataName`

- 默认值：``

- 显示条件：`动态内容=页面统一接口`

#### 显示字段【dataFiled】

根据接口返回数据格式指定结果集的字段，比如结果集名为resultData（自定义接口忽略）且它的值为{data:{filedName:[{\"text\":\"\",\"value\":\"\",\"check\":true}]}}，则这里应该填写data.filedName

- 标识：`dataFiled`

- 默认值：``

- 显示条件：`动态内容!=自定义函数&动态内容!=接收联动消息`

#### 自定义函数【customFunction】

获取动态图片地址、自定义接口回调、页面统一接口回调的时候会调用此方法，返回数据格式为字符串，接收参数：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  ...函数自定义的参数,
  "moduleObject":"组件对象",
  "receiveData":"接收到的消息数据",
  "expressData":"表达式替换后的结果",
  "interfaceData":"自定义接口或页面统一接口的返回结果"
}
```

- 标识：`customFunction`

- 默认值：空

- 可设置函数数量：单个