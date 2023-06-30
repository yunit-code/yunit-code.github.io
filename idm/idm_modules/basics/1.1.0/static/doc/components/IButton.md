# 按钮

按钮组件是一个在页面上实现添加带有交互功能按钮的模块，这个按钮可以起到吸引用户去点击引发进一步互动的作用。按钮组件支持设置按钮上的文字、图标、按钮的链接以及按钮的大小、颜色、样式、交互效果等。

## 组件类名（className）

IButton

## 组件类ID（classId）

idm.componet.basics.ibutton

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

#### 标题【label】

用于设置按钮默认状态下显示的按钮文字

- 标识：`label`
- 默认值：`按钮`

#### 尺寸【size】

用于设置按钮的大小，目前有三种大小可设置：`小`、`中`、`大`

- 标识：`size`
- 默认值：`中`

#### 形状【shape】

用于设置按钮的形状，目前有三种形状可设置：`默认`、`圆形`、`圆角`

可以查看下图了解各个形状：
![Description](./idm_modules/basics/1.0.0/static/doc/resource/images/basicsattrshape.jpg)

- 标识：`shape`
- 默认值：`默认`

#### 默认状态【defaultStatus】

设置组件的默认状态是直接显示还是默认隐藏，目前支持两种状态：普通、禁用、隐藏

- 标识：`defaultStatus`
- 默认值：`普通`

#### 图标【icon】

用于设置按钮文本前显示的字体图标，只需要从现有图标库选择即可，如果可选择的图标过少可以联系平台开发人员追加图标，注意：此图标的大小、颜色都是跟随文字的大小、颜色的，并且图标只会显示在文字的前面

- 标识：`icon`

- 默认值：空

🚀 图标库请参考：[字体图标](https://yunit-code.github.io/zh/guide/developtool.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87)

#### 图标颜色【iconColor】

设置图标的颜色

- 标识：`iconColor`

- 默认值：空

#### 按钮类型【buttonType】

设置组件的形状，目前支持：主要、次要、虚线、危险、链接、自定义，如果需要更加灵活的实现自己的样式效果，可以用自定义完全实现自己的需求。

可以查看下图了解各个类型：
![Description](./idm_modules/basics/1.0.0/static/doc/resource/images/basicsattrbuttontype.jpg)

- 标识：`buttonType`
- 默认值：`主要`

#### 加载状态【openLoading】

开启将启用点击出现loading状态，需要在自定义方法中关闭才行（ctx._this.isLoading=false）

- 标识：`openLoading`

- 默认值：空

### 样式设置(基础)

<font color="#CCCCCC">用于设置组件的通用属性的分组。</font>

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

### 样式设置(默认)

<font color="#CCCCCC">用于设置组件的默认状态下属性的分组。</font>

#### 文字【fontDefault】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`fontDefault`

- 默认值：空

#### 边框设置【borderDefault】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`borderDefault`

- 默认值：空

#### 背景色【bgColorDefault】

设置组件的整体背景颜色

- 标识：`bgColorDefault`

- 默认值：空

#### 背景图片【bgImgUrlDefault】

设置组件的整体背景图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`bgImgUrlDefault`

- 默认值：空

#### 横向偏移【positionXDefault】

设置背景图片的横向偏移值，请参考 [background-position-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)

- 标识：`positionXDefault`

- 默认值：空

#### 纵向偏移【positionYDefault】

设置背景图片的纵向偏移值，请参考 [background-position-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)

- 标识：`positionYDefault`

- 默认值：空

#### 背景大小【bgSizeDefault】

设置背景图片的背景类型，目前有以下三种方式提供选择：

1. **裁剪显示：** 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
2. **完全显示：** 缩放背景图片以完全装入背景区，可能背景区部分空白。
3. **自定义：** 自定义设定宽度和高度值

- 标识：`bgSizeDefault`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

#### 宽度【bgSizeWidthDefault】

组件的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeWidthDefault`

- 默认值：`auto`

#### 高度【bgSizeHeightDefault】

组件的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeHeightDefault`

- 默认值：`auto`

#### 平铺模式【bgRepeatDefault】

设置背景图片的背景平铺模式，目前有以下五种方式提供选择：

1. **双向重复：** 图片不够覆盖的时候 X、Y 轴都会重复显示
2. **水平重复：** 图片不够覆盖的时候 X 轴都会重复显示
3. **垂直重复：** 图片不够覆盖的时候 Y 轴都会重复显示
4. **不重复：** 图片不够覆盖的时候不重复显示
5. **继承：** 继承父容器属性

- 标识：`bgRepeatDefault`

- 默认值：空

🍹 更深刻的含义请参考 [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

#### 背景模式【bgAttachmentDefault】

设置背景图像的位置是在视口内固定，或者随着包含它的区块滚动，目前有以下三种方式提供选择：

1. **固定：** 此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. **滚动：** 此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
3. **继承：** 继承父容器属性

- 标识：`bgAttachmentDefault`

- 默认值：空

🍹 更深刻的含义请参考 [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)

### 样式设置(hover)

<font color="#CCCCCC">用于设置组件的悬浮状态下属性的分组。</font>

#### 文字【fontHover】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`fontHover`

- 默认值：空

#### 边框设置【borderHover】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`borderHover`

- 默认值：空

#### 背景色【bgColorHover】

设置组件的整体背景颜色

- 标识：`bgColorHover`

- 默认值：空

#### 背景图片【bgImgUrlHover】

设置组件的整体背景图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`bgImgUrlHover`

- 默认值：空

#### 横向偏移【positionXHover】

设置背景图片的横向偏移值，请参考 [background-position-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)

- 标识：`positionXHover`

- 默认值：空

#### 纵向偏移【positionYHover】

设置背景图片的纵向偏移值，请参考 [background-position-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)

- 标识：`positionYHover`

- 默认值：空

#### 背景大小【bgSizeHover】

设置背景图片的背景类型，目前有以下三种方式提供选择：

1. **裁剪显示：** 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
2. **完全显示：** 缩放背景图片以完全装入背景区，可能背景区部分空白。
3. **自定义：** 自定义设定宽度和高度值

- 标识：`bgSizeHover`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

#### 宽度【bgSizeWidthHover】

组件的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeWidthHover`

- 默认值：`auto`

#### 高度【bgSizeHeightHover】

组件的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeHeightHover`

- 默认值：`auto`

#### 平铺模式【bgRepeatHover】

设置背景图片的背景平铺模式，目前有以下五种方式提供选择：

1. **双向重复：** 图片不够覆盖的时候 X、Y 轴都会重复显示
2. **水平重复：** 图片不够覆盖的时候 X 轴都会重复显示
3. **垂直重复：** 图片不够覆盖的时候 Y 轴都会重复显示
4. **不重复：** 图片不够覆盖的时候不重复显示
5. **继承：** 继承父容器属性

- 标识：`bgRepeatHover`

- 默认值：空

🍹 更深刻的含义请参考 [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

#### 背景模式【bgAttachmentHover】

设置背景图像的位置是在视口内固定，或者随着包含它的区块滚动，目前有以下三种方式提供选择：

1. **固定：** 此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. **滚动：** 此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
3. **继承：** 继承父容器属性

- 标识：`bgAttachmentHover`

- 默认值：空

🍹 更深刻的含义请参考 [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)


### 样式设置(focus)

<font color="#CCCCCC">用于设置组件的焦点状态下属性的分组。</font>

#### 文字【fontFocus】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`fontFocus`

- 默认值：空

#### 边框设置【borderFocus】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`borderFocus`

- 默认值：空

#### 背景色【bgColorFocus】

设置组件的整体背景颜色

- 标识：`bgColorFocus`

- 默认值：空

#### 背景图片【bgImgUrlFocus】

设置组件的整体背景图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`bgImgUrlFocus`

- 默认值：空

#### 横向偏移【positionXFocus】

设置背景图片的横向偏移值，请参考 [background-position-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)

- 标识：`positionXFocus`

- 默认值：空

#### 纵向偏移【positionYFocus】

设置背景图片的纵向偏移值，请参考 [background-position-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)

- 标识：`positionYFocus`

- 默认值：空

#### 背景大小【bgSizeFocus】

设置背景图片的背景类型，目前有以下三种方式提供选择：

1. **裁剪显示：** 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
2. **完全显示：** 缩放背景图片以完全装入背景区，可能背景区部分空白。
3. **自定义：** 自定义设定宽度和高度值

- 标识：`bgSizeFocus`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

#### 宽度【bgSizeWidthFocus】

组件的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeWidthFocus`

- 默认值：`auto`

#### 高度【bgSizeHeightFocus】

组件的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeHeightFocus`

- 默认值：`auto`

#### 平铺模式【bgRepeatFocus】

设置背景图片的背景平铺模式，目前有以下五种方式提供选择：

1. **双向重复：** 图片不够覆盖的时候 X、Y 轴都会重复显示
2. **水平重复：** 图片不够覆盖的时候 X 轴都会重复显示
3. **垂直重复：** 图片不够覆盖的时候 Y 轴都会重复显示
4. **不重复：** 图片不够覆盖的时候不重复显示
5. **继承：** 继承父容器属性

- 标识：`bgRepeatFocus`

- 默认值：空

🍹 更深刻的含义请参考 [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

#### 背景模式【bgAttachmentFocus】

设置背景图像的位置是在视口内固定，或者随着包含它的区块滚动，目前有以下三种方式提供选择：

1. **固定：** 此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. **滚动：** 此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
3. **继承：** 继承父容器属性

- 标识：`bgAttachmentFocus`

- 默认值：空

🍹 更深刻的含义请参考 [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)

### 样式设置(active)

<font color="#CCCCCC">用于设置组件的激活状态下属性的分组。</font>

#### 文字【fontActive】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`fontActive`

- 默认值：空

#### 边框设置【borderActive】

设置组件的最外层的边框和圆角，可点击中间加号统一设置四边或四角，也可单独一边一边设置不同的边框或圆角样式。

- 标识：`borderActive`

- 默认值：空

#### 背景色【bgColorActive】

设置组件的整体背景颜色

- 标识：`bgColorActive`

- 默认值：空

#### 背景图片【bgImgUrlActive】

设置组件的整体背景图片，此处可以填写图片地址，也可直接上传图片，上传成功后都是会把地址回填到文本框中，地址是会经过[IDM.url.getWebPath](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)转换的，地址可填写的前缀方式可以点击[此处](https://yunit-code.github.io/zh/coreapi/api.html#getwebpath)参考。

- 标识：`bgImgUrlActive`

- 默认值：空

#### 横向偏移【positionXActive】

设置背景图片的横向偏移值，请参考 [background-position-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-x)

- 标识：`positionXActive`

- 默认值：空

#### 纵向偏移【positionYActive】

设置背景图片的纵向偏移值，请参考 [background-position-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position-y)

- 标识：`positionYActive`

- 默认值：空

#### 背景大小【bgSizeActive】

设置背景图片的背景类型，目前有以下三种方式提供选择：

1. **裁剪显示：** 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
2. **完全显示：** 缩放背景图片以完全装入背景区，可能背景区部分空白。
3. **自定义：** 自定义设定宽度和高度值

- 标识：`bgSizeActive`

- 默认值：空

🍹 更深刻的含义请参考 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

#### 宽度【bgSizeWidthActive】

组件的宽度，填写 auto 则为自适应，或者使用 px、%、vw 等单位，比如 100%、100px、100vw 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeWidthActive`

- 默认值：`auto`

#### 高度【bgSizeHeightActive】

组件的高度，填写 auto 则为自适应，或者使用 px、%、vh 等单位，比如 100%、100px、100vh 等等，不过此处建议设置为<font color="#FF0000">`auto`</font>

- 标识：`bgSizeHeightActive`

- 默认值：`auto`

#### 平铺模式【bgRepeatActive】

设置背景图片的背景平铺模式，目前有以下五种方式提供选择：

1. **双向重复：** 图片不够覆盖的时候 X、Y 轴都会重复显示
2. **水平重复：** 图片不够覆盖的时候 X 轴都会重复显示
3. **垂直重复：** 图片不够覆盖的时候 Y 轴都会重复显示
4. **不重复：** 图片不够覆盖的时候不重复显示
5. **继承：** 继承父容器属性

- 标识：`bgRepeatActive`

- 默认值：空

🍹 更深刻的含义请参考 [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)

#### 背景模式【bgAttachmentActive】

设置背景图像的位置是在视口内固定，或者随着包含它的区块滚动，目前有以下三种方式提供选择：

1. **固定：** 此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
2. **滚动：** 此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。
3. **继承：** 继承父容器属性

- 标识：`bgAttachmentActive`

- 默认值：空

🍹 更深刻的含义请参考 [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)


### 高级

<font color="#CCCCCC">用于对组件高级设置的属性的分组。</font>

#### 动态内容【dataSourceType】

设置文本组件以何种方式获取文本内容，通过这些方式去动态获取结果值显示成文本内容，目前有以下类型：

1. **自定义接口：** 以自定义接口的方式去获取文本内容，能满足大部分要求。
2. **页面统一接口：** 以页面设置的接口返回的接口结果来显示到此组件上，这种特别适合多个按钮组件显示一个接口返回的内容。
3. **自定义函数：** 通过写自定义函数来返回按钮组件要显示的内容。
4. **接收联动消息：** 接收其他组件发送的内容来显示。

- 标识：`dataSourceType`

- 默认值：`自定义接口`

#### 接口地址【customInterfaceUrl】

用于获取数据源的接口地址，请按照统一标准的返回格式返回文本数据，格式如下：{\"code\":\"200\",\"data\":\"\",...}

- 标识：`customInterfaceUrl`

- 默认值：``

- 显示条件：`动态内容=自定义接口`

#### 结果集名【dataName】

页面接口设定的结果集名称，位置为：页面设置》高级设置》页面接口

- 标识：`dataName`

- 默认值：``

- 显示条件：`动态内容=页面统一接口`

#### 文本字段【dataFiled】

根据接口返回数据格式指定结果集的字段，比如结果集名为resultData（自定义接口忽略）且它的值为{data:{filedName:[{\"text\":\"\",\"value\":\"\",\"check\":true}]}}，则这里应该填写data.filedName

- 标识：`dataFiled`

- 默认值：``

- 显示条件：`动态内容!=自定义函数&动态内容!=接收联动消息`

#### 显示函数【showFunction】
用于设置按钮显示隐藏的自定义函数，接收参数：

无

- 标识：`showFunction`

- 默认值：空

- 可设置函数数量：单个

#### 自定义函数【customFunction】

获取动态按钮文本内容、自定义接口回调、页面统一接口回调的时候会调用此方法，返回数据格式为字符串，接收参数：

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

#### 点击时动作【clickFunction】

链接被点击的回调函数设置，接收参数格式为：

```json
{
  "routerId": "组件所在的页面路由ID",
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "customParam": "自定义的参数",
  "_this": "组件this对象"
}
```

- 标识：`clickFunction`

- 默认值：空

- 可设置函数数量：多个

#### 点击发送组件消息范围【linkagePageModule】

当点击的时候需要联动其他组件结果值的组件范围，组件协议类型为：`linkageClick`，更多协议可查看[内置通信协议](https://yunit-code.github.io/zh/moduledevelop/communication.html#%E5%86%85%E7%BD%AE%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE)

- 标识：`linkagePageModule`

- 默认值：空

- 可联动组件数量：多个

#### 消息Key【messageKey】

发送组件消息的messageKey，用于联合匹配其他组件进行判定

- 标识：`messageKey`

- 默认值：`buttonClick`
