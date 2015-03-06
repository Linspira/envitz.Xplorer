/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('explorer.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.toolbar.Paging'
    ],

    itemId: 'headerPanel',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'treepanel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 231,
                    title: 'Project Folders',
                    store: 'MyTreeStore',
                    viewConfig: {
                        itemId: 'treeMenu'
                    }
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: 'fit',
                    header: false,
                    title: 'Content',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            width: 150,
                            items: [
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'button',
                                            height: 35,
                                            margin: '0 0 0 5',
                                            ui: 'plain',
                                            width: 35,
                                            iconCls: 'icon-backLogo'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 35,
                                            margin: '0 0 0 10',
                                            ui: 'plain',
                                            width: 35,
                                            iconCls: 'icon-forwardLogo'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 35,
                                            itemId: 'reloadButton',
                                            margin: '0 0 0 10',
                                            ui: 'plain-small',
                                            width: 35,
                                            iconCls: 'icon-reloadLogo '
                                        }
                                    ]
                                },
                                {
                                    xtype: 'tbseparator',
                                    margins: '0 0 0 50',
                                    height: 35,
                                    width: 3
                                },
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'button',
                                            height: 28,
                                            itemId: 'mybutton9',
                                            margin: '0 0 0 50',
                                            ui: 'plain',
                                            width: 60,
                                            iconCls: 'icon-homeLogo',
                                            text: 'Home',
                                            textAlign: 'right'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 25,
                                            itemId: 'mybutton',
                                            margin: '0 0 0 10',
                                            ui: 'plain',
                                            width: 60,
                                            iconCls: 'icon-uploadLogo ',
                                            text: 'Upload',
                                            textAlign: 'right'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 25,
                                            margin: '0 0 0 10',
                                            ui: 'plain',
                                            width: 75,
                                            iconCls: 'icon-downloadLogo',
                                            text: 'Download',
                                            textAlign: 'right'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 25,
                                            margin: '0 0 0 10',
                                            ui: 'plain',
                                            width: 25,
                                            href: '#',
                                            iconCls: 'icon-newFolderLogo'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 25,
                                            margin: '0 0 0 10',
                                            ui: 'plain-small',
                                            width: 25,
                                            iconCls: 'icon-folderDeleteLogo'
                                        },
                                        {
                                            xtype: 'button',
                                            height: 23,
                                            margin: '0 0 0 10',
                                            ui: 'plain',
                                            width: 23,
                                            iconCls: 'icon-deleteLogo'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    itemId: 'searchField',
                                    margin: '0 0 0 100',
                                    width: 300,
                                    fieldLabel: 'Search',
                                    labelWidth: 50,
                                    emptyText: 'Live search requires a minimum of 4 letters.',
                                    hideTrigger: true,
                                    displayField: 'Name',
                                    pageSize: 10,
                                    store: 'myViewStore'
                                },
                                {
                                    xtype: 'container',
                                    margin: '0 0 0 10',
                                    items: [
                                        {
                                            xtype: 'button',
                                            height: 23,
                                            ui: 'plain-small',
                                            width: 23,
                                            iconCls: 'icon-searchLogo'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            onClick: function(which) {
                                var ds = this.ds;
                                switch(which){
                                    case "first":
                                    ds.load({params:{start: 0, limit: this.pageSize}});
                                    break;
                                    case "prev":
                                    ds.load({params:{start: Math.max(0, this.cursor-this.pageSize), limit: this.pageSize}});
                                    break;
                                    case "next":
                                    ds.load({params:{start: this.cursor+this.pageSize, limit: this.pageSize}});
                                    break;
                                    case "last":
                                    var total = ds.getTotalCount();
                                    var extra = total % this.pageSize;
                                    var lastStart = extra ? (total - extra) : total-this.pageSize;
                                    ds.load({params:{start: lastStart, limit: this.pageSize}});
                                    break;
                                    case "refresh":
                                    ds.load({params:{start: this.cursor,limit:this.pageSize,myparams:'val'}});
                                    break;
                                }
                            },
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            store: 'myViewStore'
                        }
                    ],
                    items: [
                        {
                            xtype: 'gridpanel',
                            itemId: 'mygridpanel',
                            header: false,
                            columnLines: true,
                            scroll: 'vertical',
                            store: 'myViewStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 360,
                                    dataIndex: 'Name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'Extension',
                                    text: 'Extension'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    renderer: function(value) {
                                        return Ext.util.Format.fileSize(value);
                                    },
                                    sortable: true,
                                    dataIndex: 'Size',
                                    text: 'Size',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'datecolumn',
                                    width: 150,
                                    dataIndex: 'Date',
                                    text: 'Date Modified',
                                    format: 'Y/m/d'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 511,
                                    dataIndex: 'Owner',
                                    text: 'Owner'
                                }
                            ],
                            viewConfig: {
                                itemId: 'mygridview'
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});