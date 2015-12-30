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
                    plugins: Ext.create('extjsapp.PanelFieldDragZone',{
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
                            labelWidth: 100,
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
                            labelWidth: 100,
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
                console.log('notifyEnter')
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
                console.log('notifyDrop')
                return true;
            }
        });

    }
})
;