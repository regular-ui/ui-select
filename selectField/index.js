import {Component} from 'regular-ui-base';
import template from './index.rgl';

/**
 * @class SelectField
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {var}                     options.data.value              <=> 当前的选择值
 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
let SelectField = Component.extend({
    name: 'selectField',
    template: template,
    /**
     * @protected
     */
    config() {
        this.list = [];
        this.selected = undefined;
        this.data = Object.assign({
            value: undefined,
            placeholder: '请选择',
            open: undefined
        }, this.data);
        this.supr();
    },
    /**
     * @protected
     */
    init() {
        // 将item的操作权移交给listView
        var listView = this.$refs.listView;
        this.list.forEach((item) => item.$context = listView);
        listView.list = this.list;
        listView.selected = this.selected || this.list[0];
        this.list = [];
        this.selected = undefined;
        this.supr();
    },
    /**
     * @private
     */
    _onToggle($event) {
        /**
         * @event toggle  展开/收起时触发
         * @property {object} sender 事件发送对象
         * @property {object} open 展开/收起状态
         */
        this.$emit('toggle', Object.assign($event, {sender: this}));
    },
    /**
     * @private
     */
    _onSelect($event) {
        /**
         * @event select 选择某一项时触发
         * @property {object} sender 事件发送对象
         * @property {Item} selected 当前的选择项
         */
        this.$emit('select', {
            sender: this,
            selected: $event.selected
        });

        this.$refs.overlay.toggle(false);
    },
    /**
     * @private
     */
    _onChange($event) {
        /**
         * @event change 选择值改变时触发
         * @property {object} sender 事件发送对象
         * @property {Item} selected 改变后的选择项
         * @property {var} value 改变后的选择值
         */
        this.$emit('change', Object.assign($event, {sender: this}));
    },
});

export default SelectField;
