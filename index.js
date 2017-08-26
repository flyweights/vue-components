Vue.component('ui-button', {
    template: '<button class="ui button">button</button>'
})

Vue.component('ui-button2', {
    props: ['text'],
    template: '<button class="ui button">{{ text }}</button>'
})

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

Vue.component('ui-button4', {
    template: '<button @click="increment" class="ui button">{{ counter}}</button>',
    data: function () {
        return {
            counter:0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1;
            //触发当前实例上的事件。"组件"附加参数都会传给监听器回调。
            this.$emit("increment_fun");
        }
    }
})

Vue.component('segment', {
    template: '\
    <div class="ui stacked segment">\
        <slot>:)</slot>\
    </div>\
    '
})

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

//全局属性
var dataSource = {
    published: false,
    total: 0
}

//全局方法
var publicMethods = {
    incrementTotal: function () {
        this.total += 1;
    }
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    methods: publicMethods
});