## 示例
### 基本形式

<div class="m-example"></div>

```xml
<selectField>
    <item>选项1</item>
    <item>选项2</item>
    <item>选项3</item>
</selectField>
<selectField>
    <item>请选择</item>
    <item>选项1</item>
    <item>选项2</item>
    <item>选项3</item>
</selectField>
```


### value和selected

<div class="m-example"></div>

```xml
<selectField value=2>
    <item>请选择</item>
    <item value=1>选项1</item>
    <item value=2>选项2</item>
    <item value=3>选项3</item>
</selectField>
<selectField>
    <item>请选择</item>
    <item value=1>选项1</item>
    <item value=2>选项2</item>
    <item value=3 selected>选项3</item>
</selectField>
```

### 禁用某一项，禁用组件

<div class="m-example"></div>

```xml
<selectField>
    <item>请选择</item>
    <item>选项1</item>
    <item>选项2</item>
    <item disabled>选项3（禁用）</item>
</selectField>
<selectField disabled>
    <item>请选择</item>
    <item>选项1</item>
    <item>选项2</item>
    <item disabled>选项3（禁用）</item>
</selectField>
```

### 分隔线

<div class="m-example"></div>

```xml
<selectField>
    <item>选项1</item>
    <item>选项2</item>
    <item divider />
    <item disabled>选项3（禁用）</item>
</selectField>
```

### 自定义

<div class="m-example"></div>

```xml
<selectField>
    {#list list as item}
    <item value={item}>
        <span class="title">{item.language}</span>
        <span class="hits f-fr">{item.ratings}%</span>
    </item>
    {/list}
</selectField>
```

```javascript
var component = new RGUI.Component({
    template: template,
    data: {
        list: [
            {language: 'Java', ratings: 20.9},
            {language: 'C', ratings: 13.2},
            {language: 'C++', ratings: 6.7},
            {language: 'Python', ratings: 3.8},
            {language: 'JavaScript', ratings: 2.3}
        ]
    }
});
```

### 展开方向

具体请参见[Overlay的展开方向](https://regular-ui.github.io/ui-overlay/overlay/index.html#展开方向)。

<div class="m-example"></div>

```xml
<selectField direction="bottom-left">
    <item>bottom-left</item>
    <item>选项1</item>
    <item>选项2</item>
    <item>选项3</item>
</selectField>
<selectField direction="top-left">
    <item>top-left</item>
    <item>选项1</item>
    <item>选项2</item>
    <item>选项3</item>
</selectField>
```

### 数据绑定

<div class="m-example"></div>

```xml
<selectField value={value}>
    <item value=1>选项1</item>
    <item value=2 selected>选项2</item>
    <item value=3>选项3</item>
</selectField>
<span>当前选择值：{value}</span>
<p></p>
<a class="u-btn u-btn-info" on-click={value = '1'}>选项第一项</a>
<a class="u-btn u-btn-info" on-click={value = '3'}>选项最后一项</a>
```

### 事件

请打开浏览器的控制台查看结果。

<div class="m-example"></div>

```xml
<selectField value={value}
    on-toggle={console.log('on-toggle:', '$event.open:', $event.open)}
    on-select={console.log('on-select:', '$event.value:', $event.value)}
    on-change={console.log('on-change:', '$event.value:', $event.value)}>
    <item value=1>选项1</item>
    <item value=2>选项2</item>
    <item value=3 selected>选项3</item>
</selectField>
```
