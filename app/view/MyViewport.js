/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Xplorer.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.form.field.File',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 280,
                    title: 'Files',
                    items: [
                        {
                            xtype: 'textfield',
                            margin: '5, 0 , 5, 0',
                            width: 250,
                            fieldLabel: 'Label',
                            labelWidth: 50
                        },
                        {
                            xtype: 'filefield',
                            margin: '5, 0 , 5, 0',
                            width: 250,
                            fieldLabel: 'File',
                            labelWidth: 50
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'gridpanel',
                            title: 'ToolBox',
                            store: 'propertyStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 250,
                                    dataIndex: 'Name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 130,
                                    dataIndex: 'Size',
                                    text: 'Size'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 130,
                                    dataIndex: 'Type',
                                    text: 'Type'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 203,
                                    dataIndex: 'Date',
                                    text: 'Date'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 250,
                                    dataIndex: 'User',
                                    text: 'User'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});