/*
 * File: app/view/uploadWindow.js
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

Ext.define('explorer.view.uploadWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.File',
        'Ext.form.field.FileButton'
    ],

    height: 130,
    itemId: 'uploadWindow',
    width: 400,
    title: 'Upload File',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 100,
                    bodyPadding: 10,
                    header: false,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Name',
                            labelWidth: 50,
                            blankText: 'File Name'
                        },
                        {
                            xtype: 'filefield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            labelWidth: 50,
                            buttonConfig: {
                                xtype: 'filebutton',
                                handler: function(button, e) {

                                    var form = this.up('form').getForm();
                                    if(form.isValid()){
                                        form.submit({
                                            url: 'file-upload.php',
                                            waitMsg: 'Uploading your file...',
                                            success: function(fp, o) {
                                                Ext.Msg.alert('Success', 'Processed file "' + o.result.file + '" on the server');
                                            }
                                        });
                                    }
                                },
                                text: 'Browse...'
                            }
                        },
                        {
                            xtype: 'button',
                            style: 'margin-left: 276px',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 10',
                            text: 'Reset'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});