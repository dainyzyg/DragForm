/**
 * Created by ad on 2015/12/30.
 */
Ext.require('extjsapp.componentTree');
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
                    xtype: 'form',
                    title: '表单',
                    plugins: Ext.create('extjsapp.PanelFieldDragZone', {
                        ddGroup: 'organizerDD'
                    }),
                    collapsible: false,
                    layout: {
                        type: 'column',
                        margin: '0 0 5 0',
                        padding: 5,
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '网站名称',
                            name: 'WebName',
                            columnWidth: 1,
                            allowBlank: false,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '网站负责人',
                            name: 'WebMaster',
                            columnWidth: .5,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '联系电话',
                            name: 'Contact',
                            columnWidth: .5,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '员工编号',
                            name: 'EmployeeNO',
                            columnWidth: .5,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '电子邮箱',
                            name: 'Email',
                            columnWidth: .5,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '申请部门',
                            name: 'ApplicationDepartment',
                            columnWidth: .33,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '所属单位',
                            name: 'OUName',
                            columnWidth: .33,
                            labelWidth: 70,
                            margin: 3
                        }, {
                            xtype: 'datefield',
                            value: new Date(),
                            labelAlign: 'right',
                            fieldLabel: '申请日期',
                            name: 'ApplicationDate',
                            format: 'Y/m/d',
                            columnWidth: .33,
                            labelWidth: 70,
                            margin: 3
                        }, {
                            xtype: 'radiogroup',
                            labelAlign: 'right',
                            fieldLabel: '网站类型',
                            name: 'WebType',
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3,
                            layout: 'hbox',
                            items: [
                                {boxLabel: '门户/新闻类', name: 'wt', inputValue: '1', width: 100},
                                {boxLabel: '办公系统类', name: 'wt', inputValue: '2', width: 100},
                                {boxLabel: '业务系统类', name: 'wt', inputValue: '3', width: 100},
                                {boxLabel: '其他：', name: 'wt', inputValue: '4', width: 55},
                                {xtype: 'textfield', name: 'Other'}
                            ]
                        }, {
                            xtype: 'textareafield',
                            labelAlign: 'right',
                            fieldLabel: '网站业务描述',
                            name: 'Description',
                            grow: true,
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '网站首页地址',
                            name: 'HomeAddress',
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textareafield',
                            labelAlign: 'right',
                            fieldLabel: '服务器内网地址列表',
                            name: 'IntranetAddressList',
                            grow: true,
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'textareafield',
                            labelAlign: 'right',
                            fieldLabel: '对外服务域名列表',
                            name: 'ForeignDomainList',
                            grow: true,
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3
                        }, {
                            xtype: 'radiogroup',
                            labelAlign: 'right',
                            fieldLabel: '自建/统建项目',
                            name: 'ProjectType',
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3,
                            layout: 'hbox',
                            items: [
                                {boxLabel: '自建项目', name: 'pt', inputValue: '1', width: 100},
                                {boxLabel: '统建项目', name: 'pt', inputValue: '2', width: 100}
                            ]
                        }, {
                            xtype: 'radiogroup',
                            labelAlign: 'right',
                            fieldLabel: 'ICP备案',
                            name: 'ICP',
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3,
                            layout: 'hbox',
                            items: [
                                {boxLabel: '已备，备案许可证号:', name: 'icp', inputValue: '1', width: 135},
                                {xtype: 'textfield', name: 'LicenseNO'},
                                {boxLabel: '未备', name: 'icp', inputValue: '2', width: 100, margin: '0 0 0 10'}
                            ]
                        }, {
                            xtype: 'radiogroup',
                            labelAlign: 'right',
                            fieldLabel: '外网IP备案',
                            name: 'IP',
                            columnWidth: 1,
                            labelWidth: 113,
                            margin: 3,
                            layout: 'hbox',
                            items: [
                                {boxLabel: '已备，代码号:', name: 'ip', inputValue: '1', width: 135},
                                {xtype: 'textfield', name: 'CodeNO'},
                                {boxLabel: '未备', name: 'ip', inputValue: '2', width: 100, margin: '0 0 0 10'}
                            ]
                        }]
                },
                {
                    title: '属性',
                    split: true,
                    autoScroll: true,
                    region: 'east',
                    width: 200,
                    layout: 'fit',
                    //xtype: 'panel',
                    collapsible: true,
                    items: []
                }]
        });

        var form = Ext.getCmp('dropform'),
            body = form.body;

        this.formPanelDropTarget = new Ext.dd.DropTarget(body, {
            ddGroup: 'organizerDD',
            notifyEnter: function (ddSource, e, data) {
                //Add some flare to invite drop.
                //body.stopAnimation();
                //body.highlight();
                console.log('notifyEnter', e.target)
                //Ext.getCmp('dropform').remove(data.field);
            },
            notifyOver: function (ddSource, e, data) {
                //Add some flare to invite drop.
                //body.stopAnimation();
                //body.highlight();
                //console.log('notifyOver',e.target.id,e.target.innerText)
                if (data.field) {
                    var dropItem = Ext.getCmp('dropform').getChildByElement(e.target.id)
                    if (dropItem) {
                        var indexTo = Ext.getCmp('dropform').items.items.findIndex(x => x.id == dropItem.id)
                        var indexFrom = Ext.getCmp('dropform').items.items.findIndex(x => x.id == data.field.id)
                        Ext.getCmp('dropform').move(indexFrom, indexTo)
                        //console.log(index, Ext.getCmp('dropform').items.items[index].fieldLabel, dropItem.fieldLabel, data)
                    }
                }
                else {
                    var dropItem = Ext.getCmp('dropform').getChildByElement(e.target.id)
                    if (dropItem) {
                        var indexTo = Ext.getCmp('dropform').items.items.findIndex(x => x.id == dropItem.id)
                        //var indexFrom = Ext.getCmp('dropform').items.items.findIndex(x => x.id == data.field.id)
                        var itemNew=Ext.getCmp('dropform').insert(indexTo, {
                            xtype: 'textfield',
                            labelAlign: 'right',
                            fieldLabel: '控件',
                            //name: 'WebName',
                            columnWidth: 0.5,
                            allowBlank: false,
                            labelWidth: 113,
                            margin: 3
                            //id: newID('ct'),
                            //index: ftConfig.ctrolNum,
                            //type: type,
                        })
                        data.field=itemNew
                        console.log('itemNew',itemNew)
                        //console.log(index, Ext.getCmp('dropform').items.items[index].fieldLabel, dropItem.fieldLabel, data)
                    }
                }

                return true;
            },
            notifyDrop: function (ddSource, e, data) {
                // Reference the record (single selection) for readability
                //var selectedRecord = ddSource.dragData.records[0];
                //
                //// Load the record into the form
                //form.getForm().loadRecord(selectedRecord);
                //
                //// Delete record from the source store.  not really required.
                //ddSource.view.store.remove(selectedRecord);
                console.log('notifyDrop', e.target.innerText)
                return true;
                //var c, d = data.records[0].data, dropId,
                //    type = d.text.toLocaleLowerCase();
                //console.log(c,d,type);
                ////ftConfig.isDraging = false;
                //switch (type) {
                //    case 'card':
                //        c = {
                //            id: 'region' + ftConfig.regNum,
                //            title: '卡片区域' + ftConfig.regNum,
                //            type: type,
                //            cols: 4, //默认为卡片区域设置4列
                //            minHeight: 100,
                //            border: true,
                //            collapsible: true,
                //            bodyPadding: '5 20px 5 0',
                //            margin: '0px 0px 5px 0',
                //            layout: 'column',
                //            closable: true,
                //            defaults: {labelAlign: 'right', labelWidth: 100, margin: '3,0'}
                //        };
                //        break;
                //    case 'table':
                //        c = {
                //            id: 'region' + ftConfig.regNum,
                //            title: '表格区域' + ftConfig.regNum,
                //            type: type,
                //            xtype: 'grid',
                //            height: 200,
                //            margin: '0px 0px 5px 0',
                //            collapsible: true,
                //            autoScroll: true,
                //            closable: true,
                //            columns: {}
                //        };
                //        break;
                //    case 'mixed':
                //        c = {
                //            id: 'region' + ftConfig.regNum,
                //            title: '混合区域' + ftConfig.regNum,
                //            type: type,
                //            border: true,
                //            collapsible: true,
                //            closable: true,
                //            minHeight: 100,
                //            bodyPadding: '10px',
                //            margin: '0px 0px 5px 0'
                //        };
                //        break;
                //    default:
                //        c = {
                //            xtype: 'textfield',
                //            labelAlign: 'right',
                //            fieldLabel: '控件',
                //            name: 'WebName',
                //            columnWidth: 0.5,
                //            allowBlank: false,
                //            labelWidth: 113,
                //            margin: 3
                //            //id: newID('ct'),
                //            //index: ftConfig.ctrolNum,
                //            //type: type,
                //        };
                //        break;
                //}
                //console.log(c)
                //var dropId = e.target.id.split('-')[0];
                //console.log(dropId)
                //var dropId = dropId === 'gridview' ? e.target.parentNode.id.split('-')[0] : dropId;
                //console.log(dropId)
                //return addRegionControl(dropId, c);
            }
        });

    }
});

//添加控件到区域
function addRegionControl(pid, c) {
    var p = findRegion(pid);
    if (!p) return false;
    //if (ftConfig.panelType.indexOf(c.type) >= 0 && p.type !== 'mixed') {//如果是区域控件就只能放在mixed类型panel里面;
    //    p = p.findParentByType('panel');
    //    if (p) {
    //        return addRegionControl(p.id, c);
    //    }
    //    return false;
    //}
    //else if (ftConfig.panelType.indexOf(c.type) < 0) {
    //    if (p.type === 'mixed') {//如果是其他控件就不能放到mixed类型panel里面；
    //        return false;
    //    }
    //    else if (p.type === 'table') {//如果是控件添加到表格区域的处理
    //        var index = p.columns.length + 1;
    //        p.addColumn({ text: '列' + index, width: 120, cls: "center", align: 'left' });
    //    }
    //    else {//(p.type === 'card') 如果是添加控件到卡片区域的处理
    //        c.columnWidth = 1 / p.cols;
    //        p.add(c);
    //    }
    //}
    //else {
    //    p.add(c);
    //}
    //ftConfig.ptype.indexOf(c.type) >= 0 ? ftConfig.regNum++ : ftConfig.ctrolNum++;
    //p.add(c);
    p.insert(3, c)
    return true;
}
//根据Id查找区域的可用控件或者父级控件
function findRegion(id) {
    if (!id || !(c = Ext.getCmp(id)))
        return null;
    if (c.id = 'dropform') {
        return c;
    }
    else {
        var p = c.findParentByType('panel');
        if (p) {
            return findRegion(p.id);
        }
        return null;
    }
}