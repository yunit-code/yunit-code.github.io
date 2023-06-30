# 模态窗口

「模态」是暂时的弹出窗口，它将用户的焦点从当前任务中离开，并强制用户与弹出窗口内信息进行互动。居于此理念且结合IDM开发了一个专门用于布局类的模态窗口组件。可设置模态窗口的遮罩、模态出现与消失的动态、模态窗口放内容等。

## 组件类名（className）

IDialog

## 组件类ID（classId）

idm.componet.layout.idialog

## 组件开发语言（comLangue）

vue

## 组件类型（comType）

dialog

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

#### 显示标题【labelDisplay】

设置模态窗口是否显示标题一栏

- 标识：`labelDisplay`
- 默认值：true

#### 默认标题【labelText】

设置模态窗口标题的显示文案

- 标识：`labelText`
- 默认值：`模态窗口`
- 显示条件：`显示标题=true`

#### 标题背景【labelBgColor】

设置模态窗口标题的背景颜色

- 标识：`labelBgColor`
- 默认值：空
- 显示条件：`显示标题=true`

#### 显示关闭【closeDisplay】

设置模态窗口是否显示右上角关闭图标按钮

- 标识：`closeDisplay`
- 默认值：true

#### 关闭颜色【closeIconColor】

设置模态窗口的右上角关闭图标按钮颜色

- 标识：`closeIconColor`
- 默认值：空
- 显示条件：`显示关闭=true`

#### 蒙层关闭【shadeClose】

点击窗口之外的蒙层是否能关闭

- 标识：`shadeClose`
- 默认值：true

#### 滚动锁定【lockScroll】

弹出出现时候是否锁定页面滚动条

- 标识：`lockScroll`
- 默认值：false

#### 显示底部【footerDisplay】

是否显示底部带确定、取消按钮的区域

- 标识：`footerDisplay`
- 默认值：true

#### 底部背景【footerBgColor】

设置模态窗口底部的背景颜色

- 标识：`footerBgColor`
- 默认值：空
- 显示条件：`显示底部=true`

#### 按钮位置【footerButtonPosition】

设置模态窗口底部的按钮位置，可设置项为：居左、居中、居右

- 标识：`footerButtonPosition`
- 默认值：`居右`
- 显示条件：`显示底部=true`

#### 按钮显示【footerButtonDisplay】

控制底部显示哪些按钮，可设置项为：全部显示、只显示确认、只显示取消

- 标识：`footerButtonDisplay`
- 默认值：`全部显示`
- 显示条件：`显示底部=true`

#### 确认文字【okText】

设置底部确认按钮的显示文字

- 标识：`okText`
- 默认值：`确认`
- 显示条件：`显示底部=true&按钮显示!=只显示取消`

#### 按钮类型【okType】

设置确认按钮的形状，目前支持：主要、次要、虚线、危险、链接。

可以查看下图了解各个类型：
![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/basicsattrbuttontype.jpg)

- 标识：`okType`
- 默认值：`主要`
- 显示条件：`显示底部=true&按钮显示!=只显示取消`

#### 取消文字【cancelText】

设置底部取消按钮的显示文字

- 标识：`cancelText`
- 默认值：`取消`
- 显示条件：`显示底部=true&按钮显示!=只显示确认`

#### 按钮类型【cancelType】

设置取消按钮的形状，目前支持：主要、次要、虚线、危险、链接。

可以查看下图了解各个类型：
![Description](./idm_modules/layout/1.0.0/static/doc/resource/images/basicsattrbuttontype.jpg)

- 标识：`cancelType`
- 默认值：`次要`
- 显示条件：`显示底部=true&按钮显示!=只显示确认`

#### 分线粗细【splitLineSize】

设置上下分割线的粗细，最大为30，最小为0

- 标识：`splitLineSize`
- 默认值：1

#### 分线颜色【splitLineColor】

设置上下分割线的颜色

- 标识：`splitLineColor`
- 默认值：空

#### 动效【animationKey】

设置弹窗显示与消失的动画效果，目前支持以下动画效果（如需预览可直接拖拽组件测试效果）:
`淡入&缩放`、`从右边滑动`、`从底部滑动`、`报纸风格`、`落下`、`一边落下`、`顶部滑下`、`3D水平翻转`、`3D垂直翻转`、`3D sign`、`Super scaled`、`Just me`、`3D slit`、`3D从底部旋转`、`3D向左旋转`、`虚化背景`、`LET ME IN`、`MAKE WAY!`、`SLIP FROM TOP`

- 标识：`animationKey`
- 默认值：`淡入&缩放`

#### 弹窗位置【openPosition】

可设置弹窗组件的位置，目前支持8个方位+1个中心显示，如下：`中心`、`上左`、`上中`、`上右`、`中左`、`中右`、`下左`、`下中`、`下右`


- 标识：`openPosition`
- 默认值：`中心`

📢**_温馨提示_**：
在设计器模式下始终是居中显示的，需要预览查看效果。


#### 渲染方式【dialogRenderType】

弹窗内容渲染方式。目前有以下三种渲染方式：
1. 预先渲染：页面首次加载便会一同加载；
2. 按需首次渲染：第一次打开窗口的时候才会加载；
3. 按需渲染销毁：每次打开都会加载，每次关闭后都会被销毁

- 标识：`dialogRenderType`
- 默认值：`预先渲染`

#### 层级索引【layerZindex】

层级索引决定了弹出框的堆叠顺序,拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面，实际结果值会乘以2，对应遮罩层的索引取2*n-1

- 标识：`layerZindex`
- 默认值：1

### 样式设置

<font color="#CCCCCC">用于设置组件的整体基础样式外观的组件属性的分组。</font>

#### 窗口内外边距【box】

设置组件的最外围的外边距和内边距

- 标识：`box`

- 默认值：空

#### 内容内外边距【contentBox】

设置组件的内容容器的外边距和内边距

- 标识：`box`

- 默认值：空

#### 宽度

<font color="#CCCCCC">用于对组件的宽度进行行内分组。</font>

##### 窗口最小宽度【minWidth】

填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vw等等

- 标识：`minWidth`

- 默认值：`200px`

##### 窗口最大宽度【maxWidth】

填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vw等等

- 标识：`maxWidth`

- 默认值：`auto`

#### 高度

<font color="#CCCCCC">用于对组件的高度进行行内分组。</font>

##### 窗口最小高度【minHeight】

填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vh等等

- 标识：`minHeight`

- 默认值：`auto`

##### 窗口最大高度【maxHeight】

填写auto则为自适应，或者使用px、%、vh等单位，比如100%、100px、100vh等等

- 标识：`maxHeight`

- 默认值：`auto`

#### 内容宽高

<font color="#CCCCCC">用于对组件的内容最大宽高进行行内分组。</font>

##### 内容最大宽度【bodyMaxWidth】

填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vw等等

- 标识：`bodyMaxWidth`

- 默认值：`auto`

##### 内容最大高度【bodyMaxHeight】

填写auto则为自适应，或者使用px、%、vw等单位，比如100%、100px、100vh等等

- 标识：`bodyMaxHeight`

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

#### 标题文字【font】

设置组件的整体文字的字体样式，可设置文字的字体、字重、样式、字体颜色、大小、行高、对齐、修饰等。

- 标识：`font`

- 默认值：空

#### 内容背景【bodyBgColor】

设置弹窗组件的内容容器背景颜色

- 标识：`bodyBgColor`

- 默认值：空

#### 窗口阴影代码【dialogShadeColorCode】

设置组件最外层的阴影样式，填写格式如下：`10px 10px 5px #888888`。

- 标识：`boxShadow`

- 默认值：`0 4px 12px rgb(0 0 0 / 15%)`

🍹 更深刻的含义请参考 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

#### 蒙层颜色【shadeLayerColor】

设置弹窗组件的遮罩层的背景颜色，这个最好设置带有透明的颜色

- 标识：`shadeLayerColor`

- 默认值：空

### 高级

<font color="#CCCCCC">用于对组件高级设置的属性的分组。</font>

#### 确定动作【commitType】

设置点击底部的确定按钮动作类型，目前支持以下三种动作：
1. **元数据模式：** 基于元数据理念提交表单数据，相关的元数据保存接口可参考 [IDM.setting.api.saveFormsMetaDataUrl](https://yunit-code.github.io/zh/setting/config.html#saveformsmetadataurl)
2. **自定义接口：** 使用自定义接口来实现确定动作的数据提交等。
3. **自定义函数：** 使用自定义函数来实现确定动作的数据提交等。

- 标识：`commitType`

- 默认值：`元数据模式`

#### 数据类型【commitContentType】

设置提交的数据类型，请根据后端需求进行选择，目前有以下三种方式：

1. 默认：基于IDM的默认的格式（content-type=application/json），不单独进行另外设置
2. JSON：content-type=application/json;charset=UTF-8
3. FormData：content-type=multipart/form-data

- 标识：`commitContentType`

- 默认值：`默认`

- 显示条件：`确定动作=元数据模式||确定动作=自定义接口`

#### 确定接口【commitIntelfaceUrl】

自定义接收确定提交的数据接口，接收参数如下：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "moduleData": "要提交的组件数据，数组形式存在的"
}
```

- 标识：`commitIntelfaceUrl`

- 默认值：空

- 显示条件：`确定动作=自定义接口`

#### 自定义函数【commitFunction】

确定提交的时候会调用设置的自定义函数，接收参数如下：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "moduleData": "要提交的组件数据，数组形式存在的",
  "customParam": "自定义的参数",
  "_this": "组件this对象",
  "callback":"确定后执行的函数，当自定义函数里面的逻辑处理完后再调用此函数"
}
```

- 标识：`commitFunction`

- 默认值：空

- 可设置函数数量：单个

#### 汇总范围【pageModuleSelectDataMultiple】

用于提供设置选择要提交的组件返回结果数据的组件选择功能，例如需要提交姓名和年龄两个组件的数据则可以在设置属性的时候直接选择姓名和年龄两个组件即可（其中这两个组件需要有返回数据对象）。

- 标识：`pageModuleSelectDataMultiple`

- 默认值：空

- 可选择组件数量：多个


#### 分组标识【formGroupKey】

表单分组标识，用于批量提交分组标识相同的表单控件值，减少一个一个选择控件的范围，注意：提交范围与分组标识是交集关系，都能起到作用

- 标识：`formGroupKey`

- 默认值：`formGroupKey`


#### 确定后自定义关闭函数【okRunLaterFunction】

确定执行逻辑后会调用此处设置的自定义关闭函数，如果返回false将不会继续执行关闭，接收参数为格式为上面执行的返回结果，接收参数如下：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "resData": "确认逻辑返回的数据对象",
  "customParam": "自定义的参数",
  "_this": "组件this对象",
  "close":"函数处理完毕后如果需要关闭则可调用此函数，如果不返回false也不调用则会默认直接关闭"
}
```

- 标识：`okRunLaterFunction`

- 默认值：空

- 可设置函数数量：多个

#### 取消前的自定义函数【cancelFunction】

取消关闭窗口之前会调用设置的自定义函数，如果方法返回false将不会继续执行关闭，接收参数如下：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "customParam": "自定义的参数",
  "_this": "组件this对象",
  "close":"函数处理完毕后如果需要关闭则可调用此函数，如果不返回false也不调用则会默认直接关闭"
}
```

- 标识：`cancelFunction`

- 默认值：空

- 可设置函数数量：多个

#### 动态标题函数【labelTextFunction】

当写死的`默认标题`属性无法满足要求时可以通过自定义函数来返回所需要的标题，接收参数如下：

```json
{
  "urlData": "url参数序列化字符串",
  "pageId": "页面ID",
  "customParam": "自定义的参数",
  "_this": "组件this对象"
}
```

- 标识：`labelTextFunction`

- 默认值：空

- 可设置函数数量：单个
