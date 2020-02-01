# ScreenLoading（基于VUE）

## 使用方法：

### main.js

```javascript
    import ScreenLoading from 'screenloading'
    Vue.use(ScreenLoading);   
```
### 业务中使用：

```javascript
    // 两个入参，前者为加载提示文字内容，后者为文字位置，包括（'top','bottom'）
    this.$ScreenLoading.show('LOADING','top'); 
```