/**
 * Created by ad on 2016/1/7.
 */
Ext.define("extjsapp.propertyGrid", {
    xtype: 'extjsapp.propertyGrid',
    config: {
        xtype: 'propertygrid',
        border: 0,
        sortableColumns: false,
        listeners: {
            propertychange(source, recordId, value, oldValue, eOpts) {
                console.log('propertychange',source)
                var fieldConfig = Object.assign({}, source)
                var form = Ext.getCmp(this.dropFormID)
                var index = form.items.items.findIndex(x => x.id == form.extraData.selectedItem.id)
                form.remove(form.extraData.selectedItem)
                //form.extraData.selectedItem = null
                var item = form.insert(index, fieldConfig)
                //form.extraData.selectedItem = item
                form.extraData.setSelectedField(item)
            },
            beforecellclick(that, td, cellIndex, record, tr, rowIndex, e, eOpts){
                console.log('beforecellclick',record.data.name)
                var s = new Set()
                s.add("xtype").add("id")
                if (s.has(record.data.name)) {
                    return false
                }
                return true
            }
        }
    },
    constructor: function (cf) {
        return Ext.create('Ext.grid.property.Grid', Object.assign({}, this.config, cf));
        //this.initConfig(config);
    }
});
