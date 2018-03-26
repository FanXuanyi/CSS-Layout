## 多列定宽，一列自适应

1、float + inline-block + overflow （demo1.html）

2、table （demo2.html）

3、flex （demo3.html）

4、双飞翼布局 （demo4.html）

5、圣杯布局 （demo5.html）

**【圣杯布局和双飞翼布局的异同】**

相同点：

- 实现两边定宽，中间自适应的三栏布局；
- 中间栏要放在文档流前面优先渲染；
- 两个方法的基本思路相同：首先让中间盒子宽度100%占满同一高度的空间，在左右两个盒子被挤出中间盒子所在区域时，使用margin-left的负值将左右两个盒子拉回与中间盒子同一高度的空间，接下来进行一些调整避免中间盒子的内容被左右盒子遮挡。

不同点：主要区别在于如何使中间的盒子不被左右盒子遮挡。

- 双飞翼布局：在中间盒子里再增加一个子盒子，直接设置这个子盒子的margin值来让出空位，而不用再调整左右盒子。
- 圣杯布局：设置父盒子的padding值为左右盒子留出空位，再利用相对布局对左右盒子调整位置占据padding出来的空位。