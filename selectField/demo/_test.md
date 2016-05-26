#### Test

<div class="m-example"></div>

```xml
<selectField value={value}>
    <item selected>请选择</item>
    {#list list as item}
    <item value={item_index}>{item.course}</item>
    {/list}
</selectField>
<br>
<button on-click={this.getList()}>getList</button>
<br>
<select>
    {#list list as item}
    <option>{item.course}</option>
    {/list}
</select>
value={value}
```

```javascript
var component = new RGUI.Component({
    template: template,
    data: {
        list: [
            {course: '精通Javascript开发', org: '前端Funs', hits: 42371},
            {course: 'Android深入浅出', org: 'Android学院', hits: 30645},
            {course: 'cocos2dx游戏开发教程', org: '鱼C课程', hits: 25112},
            {course: 'MySQL数据库', org: 'LAMP兄弟连', hits: 18089},
            {course: 'Arduino初级教程', org: '硬件社', hits: 16361},
        ]
    },
    getList: function() {
        this.data.list = [
            {course: 'Test1'},
            {course: 'Test2'},
            {course: 'Test3'},
        ]
    }
});
```
