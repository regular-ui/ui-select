import { Component } from 'rgui-ui-base';
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
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            _list: [],
            _selected: undefined,
            value: undefined,
            placeholder: '请选择',
            open: undefined,
        }, this.data);
        this.supr();
    },
    /**
     * @protected
     * @override
     */
    init() {
        if(!this.data._selected)
            this.data._selected = this.data._list[0];
    },
    /**
     * @method select(item) 选择某一项
     * @public
     * @param  {Item} item 选择项
     * @return {void}
     */
    select(item) {
        this.$refs.listView.select(item);
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
