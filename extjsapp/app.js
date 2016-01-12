/**
 * Created by ad on 2015/12/30.
 */
Ext.require(['extjsapp.componentTree', 'extjsapp.dropForm', 'extjsapp.propertyGrid', 'extjsapp.fieldStore'])
Ext.application({
    name: 'Extjs表单设计器',
    launch: function () {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            padding: 5,
            items: [
                {
                    xtype: 'extjsapp.componentTree',
                    title: '组件集',
                    split: true,
                    autoScroll: true,
                    region: 'west',
                    width: 200,
                    layout: 'fit',
                    collapsible: true
                },
                {
                    region: 'center',
                    id: 'dropform',
                    xtype: 'extjsapp.dropForm',
                    title: '表单',
                    propertyGridID: 'fieldProperty',
                    fieldStoreID: 'fieldStore',
                    collapsible: false,
                    layout: {
                        type: 'column',
                        margin: '0 0 5 0',
                        padding: 5,
                    }
                },
                {
                    title: '属性',
                    split: true,
                    autoScroll: true,
                    region: 'east',
                    width: 300,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    collapsible: true,
                    items: [{
                        xtype: 'extjsapp.propertyGrid',
                        id: 'fieldProperty',
                        dropFormID: 'dropform',
                        fieldStoreID: 'fieldStore',
                        minHeight: 200
                    }, {
                        title: '数据源',
                        id: 'fieldStore',
                        dropFormID: 'dropform',
                        propertyGridID: 'fieldProperty',
                        xtype: 'extjsapp.fieldStore'
                    }]
                }]
        })
    }
})
