import { ListView } from 'rgui-ui-listview';
import { Overlay } from 'rgui-ui-overlay';
import template from './index.rgl';

/**
 * @class SelectField
 * @extend ListView
 * @param {object}                  options.data                     =  绑定属性
 * @param {var}                     options.data.value              <=> 当前的选择值
 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
 * @param {string='bottom-left'}    options.data.direction           => 展开方向
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const SelectField = ListView.extend({
    name: 'selectField',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            // @inherited _list: [],
            // @inherited _selected: undefined,
            // @inherited value: undefined,
            open: undefined,
            direction: 'bottom-left',
        }, this.data);
        this.supr();
    },
        /**
         * @event change 选择值改变时触发
         * @property {object} sender 事件发送对象
         * @property {Item} selected 改变后的选择项
         * @property {var} value 改变后的选择值
         */
    /**
     * @protected
     * @override
     */
    init() {
        this.supr();
        if (!this.data._selected)
            this.data._selected = this.data._list[0];
    },
    /**
     * @method select(item) 选择某一项
     * @public
     * @override
     * @param  {Item} item 选择项
     * @return {void}
     */
    select(item) {
        /**
         * @event select 选择某一项时触发
         * @property {object} sender 事件发送对象
         * @property {Item} selected 当前选择项
         * @property {var} value 当前选择值
         */
        this.supr(item);
        this.$refs.overlay.toggle(false);
    },
        /**
         * @event toggle 展开/收起时触发
         * @property {object} sender 事件发送对象
         * @property {boolean} open 展开/收起状态
         * @property {string} direction 展开方向
         */
});

export default SelectField;
