# Vue组件
## 组件注册
```
Vue.component('ui-button', {
    template: '<button class="ui button">button</button>'
})
```

## 组合组件
```
props down, events up
```

### 传递属性
```
Vue.component('ui-button2', {
    props: ['text'],
    template: '<button class="ui button">{{ text }}</button>'
})
```
### 验证属性
```
Vue.component('ui-button3', {
    props: {
        text: {type: String,
            default: 'button',
            required: true,
            validator: function (value) {
                return value.length > 3
            }
        }
    },
    template: '<button class="ui button">{{ text }}</button>'
})
```
## ```$emit```自定义事件
```
 //触发当前实例上的事件。"组件"附加参数都会传给监听器回调。
this.$emit("increment_fun");
```

## ```<slot>```内容分发
### 模版
```
Vue.component('card',{
    template: '\
    <div class="ui card">\
        <div class="image">\
            <slot name="image">image!!!</slot>\
        </div>\
        <div calss="content">\
            <div class="header">\
                <slot name="header">header!!!</slot>\
            </div>\
            <div class="meta">\
                <slot name="meta">meta!!!</slot>\
            </div>\
        </div>\
    </div>\
    '
})
```
### 使用模版
```
        <div class="ui container" style="margin-top:150px">
            <div class="ui divider">
                <card>
                    <img slot="image" src="http://assets.ninghao.net/demo_4.jpg" alt="">
                    <h1 slot="header">洪崖洞</h1>
                    <p slot="meta"> 1 天前</p>
                </card>
            </div>
        </div>
```
