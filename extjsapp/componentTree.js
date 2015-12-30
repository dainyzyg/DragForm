/**
 * Created by ad on 2015/12/30.
 */
Ext.define("extjsapp.componentTree", {
    xtype: 'extjsapp.componentTree',
    config: {
        store:Ext.create('Ext.data.TreeStore', {
            root: {
                //expanded: true,
                children: [
                    {text: "文本框", leaf: true},
                    {text: "文本域", leaf: true},
                    {text: "下拉菜单", leaf: true}
                ]
            }
        }),
        rootVisible: false,
        viewConfig: {
            plugins: [{
                ddGroup: 'organizerDD',
                ptype  : 'treeviewdragdrop',
                enableDrop: false,
                displayField: 'text'
            }]
        }
    },
    constructor: function (cf) {
        return Ext.create('Ext.tree.Panel', Object.assign({}, this.config, cf));
        //this.initConfig(config);
    }
});
