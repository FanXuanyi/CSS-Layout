# Waterfall_layout

瀑布流布局的实现方式

（一）JavaScript原生方式和jQuery方式

1、需要计算，列数=浏览器窗口宽度/图片宽度。
图片定位是根据每一列数据库的高度计算接下来图片的位置。

2、图片排序是按照图片计算的位置横向排列，位置是计算出来的，比较规范。


（二）CSS3方式

1、不需要计算，浏览器自动计算，只需设置列宽，性能高。

2、列宽随着浏览器窗口大小进行改变，用户体验不好。

3、图片排序按照垂直顺序排列，打乱图片显示顺序。

4、图片加载还是依靠JavaScript实现。
