/**
 * Created by ad on 2016/1/15.
 */
Ext.define("extjsapp.menuTopBar", {
    xtype: 'extjsapp.menuTopBar',
    exportForm(){
        var fieldMap = Ext.getCmp(this.dropFormID).extraData.fieldMap
        var code = JSON.stringify([...fieldMap])
        Ext.tip.QuickTipManager.init()
        Ext.create('Ext.window.Window', {
            title: 'FormItems',
            height: 600,
            width: 800,
            layout: 'fit',
            html: '<iframe scrolling="no" frameborder="0" src="codemirrortest.html" width=100% height=100%/>'
        }).show()
    },
    constructor: function (cf) {
        var that = this
        Object.assign(this, cf)
        that.items = [
            {
                xtype: 'button',
                text: '保存',
                icon: "extjs/icon/page_save.png"
            }, '-',
            {
                xtype: 'button',
                text: '导出',
                icon: "extjs/icon/disk_download.png",
                handler(){
                    that.exportForm()
                }
            },
            {
                xtype: 'splitbutton',
                text: 'Menu Button',
                glyph: 61,
                menu: [{
                    text: 'Menu Button 1'
                }]
            }, '-'
        ]
        return that.items
    }
})