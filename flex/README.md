## flex布局

采用Flex布局的元素，称为Flex容器。它的所有子元素自动成为容器成员，称为Flex项目。

容器默认存在两根轴：水平主轴和垂直的交叉轴。

### 容器的属性

1、flex-direction属性

该属性决定主轴的方向，即项目的排列方向。

有4个值：

- row：默认值，主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column： 主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

2、flex-wrap属性

该属性定义如果一条轴线排不下，如何换行。

有3个值：

- nowrap：默认，不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

3、flex-flow属性

该属性是flex-direction属性和flex-wrap属性的简写形式，默认值为`row nowrap`。

4、justify-content属性

该属性定义了项目在主轴上的对齐方式。

有5个值：

- flex-start：默认值，左对齐。
- flex-end：右对齐。
- center： 居中。
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

5、align-items属性

该属性定义项目在交叉轴上如何对齐。

有5个值：

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline：项目的第一行文字的基线对齐。
- stretch：默认值，如果项目为设置高度或设为auto，将占满整个容器高度。

6、align-content属性

该属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

有6个值：

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch：默认值，轴线占满整个交叉轴。

### 项目的属性

1、order属性

该属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

2、flex-grow属性

该属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

3、flex-shrink属性

该属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

4、flex-basis属性

该属性定义了在分配多余空间之前，项目占据的主轴空间。
浏览器根据这个属性，计算主轴是否有多余空间。
它的默认值为auto，即项目的本来大小。

5、flex属性

该属性是flex-grow、flex-shrink和flex-basis的简写，默认值为`0 1 auto`，后两个属性可选。

6、align-self属性

该属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

有6个取值，除了auto，其他与align-items属性完全一致。

以上内容参考[阮一峰的Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$)。
