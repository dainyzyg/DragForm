/**
 * Created by ad on 2016/1/6.
 */
Ext.define("extjsapp.dropForm", {
    xtype: 'extjsapp.dropForm',
    config: {
        plugins: Ext.create('extjsapp.PanelFieldDragZone', {
            ddGroup: 'organizerDD'
        }),
        listeners: {
            afterrender(e, eOpts){
                var that = this
                Ext.select('body').on('click', function () {
                        console.log('body click')
                        that.extraData.setSelectedField(null)
                    },
                    that,
                    {
                        delegate: '#' + that.id
                    })
                Ext.select('#' + that.id).on('click',
                    function (e, t) {
                        console.log('.x-field click')
                        var item = that.getChildByElement(t.id)
                        that.extraData.setSelectedField(item)
                    },
                    that,
                    {
                        delegate: '.x-field',
                        stopEvent: true
                    })
                that.extraData.createDropTarget(that)
            }
        }
        //items: [
        //    {
        //        xtype: 'image',
        //        icon: 'extjs/resources/themes/images/default/dd/drop-yes.gif'
        //    },
        //    {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        border: '10 5 3 10',
        //        fieldLabel: `<span onmouseover="editField(this)" onmouseout="hideField(this)">网站速度所得税名称</span>`,
        //        name: 'WebName',
        //        columnWidth: 1,
        //        icon: 'extjs/resources/themes/images/default/dd/drop-yes.gif',
        //        allowBlank: false,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: `<span onmouseover="editField(this)" onmouseout="hideField(this)">网站名称</span>`,
        //        icon: 'extjs/resources/themes/images/default/dd/drop-yes.gif',
        //        name: 'WebMaster',
        //        columnWidth: .5,
        //        labelWidth: 113,
        //        margin: 3
        //    },
        //    {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: `<span onmouseover="editField(this)" onmouseout="hideField(this)">网站名称</span>`,
        //        name: 'Contact',
        //        columnWidth: .5,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: `<span onmouseover="editField(this)" onmouseout="hideField(this)">网站名称</span>`,
        //        name: 'EmployeeNO',
        //        columnWidth: .5,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: '电子邮箱',
        //        name: 'Email',
        //        columnWidth: .5,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: '申请部门',
        //        name: 'ApplicationDepartment',
        //        columnWidth: .33,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: '所属单位',
        //        name: 'OUName',
        //        columnWidth: .33,
        //        labelWidth: 70,
        //        margin: 3
        //    }, {
        //        xtype: 'datefield',
        //        value: new Date(),
        //        labelAlign: 'right',
        //        fieldLabel: '申请日期',
        //        name: 'ApplicationDate',
        //        format: 'Y/m/d',
        //        columnWidth: .33,
        //        labelWidth: 70,
        //        margin: 3
        //    }, {
        //        xtype: 'radiogroup',
        //        labelAlign: 'right',
        //        fieldLabel: '网站类型',
        //        name: 'WebType',
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3,
        //        layout: 'hbox',
        //        items: [
        //            {boxLabel: '门户/新闻类', name: 'wt', inputValue: '1', width: 100},
        //            {boxLabel: '办公系统类', name: 'wt', inputValue: '2', width: 100},
        //            {boxLabel: '业务系统类', name: 'wt', inputValue: '3', width: 100},
        //            {boxLabel: '其他：', name: 'wt', inputValue: '4', width: 55},
        //            {xtype: 'textfield', name: 'Other'}
        //        ]
        //    }, {
        //        xtype: 'textareafield',
        //        labelAlign: 'right',
        //        fieldLabel: '网站业务描述',
        //        name: 'Description',
        //        grow: true,
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textfield',
        //        labelAlign: 'right',
        //        fieldLabel: '网站首页地址',
        //        name: 'HomeAddress',
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textareafield',
        //        labelAlign: 'right',
        //        fieldLabel: '服务器内网地址列表',
        //        name: 'IntranetAddressList',
        //        grow: true,
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'textareafield',
        //        labelAlign: 'right',
        //        fieldLabel: '对外服务域名列表',
        //        name: 'ForeignDomainList',
        //        grow: true,
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3
        //    }, {
        //        xtype: 'radiogroup',
        //        labelAlign: 'right',
        //        fieldLabel: '自建/统建项目',
        //        name: 'ProjectType',
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3,
        //        layout: 'hbox',
        //        items: [
        //            {boxLabel: '自建项目', name: 'pt', inputValue: '1', width: 100},
        //            {boxLabel: '统建项目', name: 'pt', inputValue: '2', width: 100}
        //        ]
        //    }, {
        //        xtype: 'radiogroup',
        //        labelAlign: 'right',
        //        fieldLabel: 'ICP备案',
        //        name: 'ICP',
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3,
        //        layout: 'hbox',
        //        items: [
        //            {boxLabel: '已备，备案许可证号:', name: 'icp', inputValue: '1', width: 135},
        //            {xtype: 'textfield', name: 'LicenseNO'},
        //            {boxLabel: '未备', name: 'icp', inputValue: '2', width: 100, margin: '0 0 0 10'}
        //        ]
        //    }, {
        //        xtype: 'radiogroup',
        //        labelAlign: 'right',
        //        fieldLabel: '外网IP备案',
        //        name: 'IP',
        //        columnWidth: 1,
        //        labelWidth: 113,
        //        margin: 3,
        //        layout: 'hbox',
        //        items: [
        //            {boxLabel: '已备，代码号:', name: 'ip', inputValue: '1', width: 135},
        //            {xtype: 'textfield', name: 'CodeNO'},
        //            {boxLabel: '未备', name: 'ip', inputValue: '2', width: 100, margin: '0 0 0 10'}
        //        ]
        //    }]
    },
    extraData: {
        selectedItem: null,
        fieldMap: new Map(),
        actionDiv: null,
        createDropTarget(form){
            this.parent.createDropTarget(form)
        },
        setSelectedField(item){
            this.parent.setSelectedField(item)
        }
    },
    getFieldConfig(xtype) {
        switch (xtype) {
            case 'textfield':
                return {
                    xtype: 'textfield',
                    id: '',
                    fieldLabel: '文本框',
                    labelAlign: 'right',
                    columnWidth: 0.5,
                    allowBlank: true,
                    labelWidth: 113,
                    style: {
                        border: '1px dashed transparent'
                    },
                    margin: 3
                }
            case 'textareafield':
                return {
                    xtype: 'textareafield',
                    id: '',
                    fieldLabel: '文本域',
                    labelAlign: 'right',
                    columnWidth: 1,
                    allowBlank: true,
                    labelWidth: 113,
                    style: {
                        border: '1px dashed transparent'
                    },
                    margin: 3
                }
            case 'combo':
                return {
                    xtype: 'combo',
                    id: '',
                    fieldLabel: '下拉菜单',
                    labelAlign: 'right',
                    columnWidth: 0.5,
                    allowBlank: true,
                    labelWidth: 113,
                    style: {
                        border: '1px dashed transparent'
                    },
                    margin: 3,
                    displayField: 'name',
                    valueField: 'name',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['name'],
                        data: [{name: '下拉项1'}, {name: '下拉项2'}]
                    })
                }
        }
    },
    createDropTarget(form){
        var that = this
        var formPanelDropTarget = new Ext.dd.DropTarget(form.body, {
            ddGroup: 'organizerDD',
            notifyEnter: function (ddSource, e, data) {
                //Add some flare to invite drop.
                //body.stopAnimation();
                //body.highlight();
                //console.log('notifyEnter', e.target)
                //Ext.getCmp('dropform').remove(data.field);
            },
            notifyOver: function (ddSource, e, data) {
                if (data.field) {
                    var dropItem = form.getChildByElement(e.target.id)
                    if (dropItem) {
                        var indexTo = form.items.items.findIndex(x => x.id == dropItem.id)
                        var indexFrom = form.items.items.findIndex(x => x.id == data.field.id)
                        form.move(indexFrom, indexTo)
                        that.setSelectedField(that.extraData.selectedItem)
                    }
                }
                else {
                    var xtype = data.records[0].raw.xtype || 'textfield'
                    var dropItem = form.getChildByElement(e.target.id)
                    var fieldConfig = that.getFieldConfig(xtype)
                    var itemNew
                    if (dropItem) {
                        var indexTo = form.items.items.findIndex(x => x.id == dropItem.id)
                        itemNew = form.insert(indexTo, fieldConfig)
                    } else {
                        itemNew = form.add(fieldConfig)
                    }
                    fieldConfig.id = itemNew.id
                    data.field = itemNew
                    that.extraData.fieldMap.set(itemNew.id, fieldConfig)
                    that.setSelectedField(itemNew)
                }
                return true
            },
            notifyDrop: function (ddSource, e, data) {
                return true
            }
        });
    },
    setSelectedField(item) {
        var pGrid = Ext.getCmp(this.form.propertyGridID)
        if (this.extraData.selectedItem && this.extraData.selectedItem.getEl()) {
            this.extraData.selectedItem.getEl().dom.style.borderColor = 'transparent'
        }
        if (item) {
            item.getEl().dom.style.borderColor = 'cornflowerblue'
            this.extraData.selectedItem = item
            pGrid.setSource(this.extraData.fieldMap.get(this.extraData.selectedItem.id))
            this.showActionDiv()
        } else {
            this.extraData.selectedItem = null
            pGrid.setSource({})
            this.hideActionDiv()
        }


    },
    hideActionDiv(){
        if (this.extraData.actionDiv) {
            this.extraData.actionDiv.style.display = 'none'
        }
    },
    showActionDiv(){
        var that = this
        var item = this.extraData.selectedItem
        var cr = item.getEl().dom.getBoundingClientRect()
        if (!this.extraData.actionDiv) {
            this.extraData.actionDiv = document.createElement('div')
            this.extraData.actionDiv.style.position = 'fixed'
            this.extraData.actionDiv.style.width = 45
            this.extraData.actionDiv.style.top = cr.top + 4
            this.extraData.actionDiv.style.left = cr.left + 5
            //this.extraData.actionDiv.onmouseover = ()=> {
            //    this.extraData.actionDiv.style.display = 'block'
            //}
            //editField.editDiv.onmouseout = ()=> {
            //    editField.editDiv.style.display = 'none'
            //}
            var editImg = document.createElement('img')
            editImg.src = "extjs/icon/application_form_edit.png"
            editImg.style.cursor = 'pointer'
            editImg.onclick = ()=> {
                that.setSelectedField(item)
            }
            var deleteImg = document.createElement('img')
            deleteImg.src = "extjs/icon/delete.png"
            deleteImg.style.cursor = 'pointer'
            deleteImg.style.paddingLeft = 8
            deleteImg.onclick = ()=> {
                var selectedItem = that.extraData.selectedItem
                that.extraData.fieldMap.delete(selectedItem.id)
                var pGrid = Ext.getCmp(that.form.propertyGridID)
                pGrid.setSource({})
                that.form.remove(selectedItem)
                that.hideActionDiv()
            }
            this.extraData.actionDiv.appendChild(editImg)
            this.extraData.actionDiv.appendChild(deleteImg)
            document.body.appendChild(this.extraData.actionDiv)
        } else {
            this.extraData.actionDiv.style.display = 'block'
            this.extraData.actionDiv.style.top = cr.top + 4
            this.extraData.actionDiv.style.left = cr.left + 5
        }
    },
    constructor: function (cf) {
        var that = this
        this.form = Ext.create('Ext.form.Panel', Object.assign({}, this.config, cf))
        this.extraData.parent = this
        this.form.extraData = this.extraData
        return this.form
    }
});