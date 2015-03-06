/*
 * File: app/controller/MyController.js
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

Ext.define('explorer.controller.MyController', {
    extend: 'Ext.app.Controller',

    onViewItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        var rowMenu = Ext.create('Ext.menu.Menu', {
           //  height: 150,
           //  width: 100,
             items: [{
                 text: 'Upload',
                 iconCls: 'upload.png',
                 handler: function(e, eOpts){
                     Ext.create('explorer.view.uploadWindow').show();
                 }
             }, {
                 text: 'Delete',
                 iconCls: 'icon-cancelLogo',
                 handler: function(){
                 me.fireEvent('removeRow', this);
                         }
             }, {
                 text: 'Download',
                 iconCls: 'icon-downLoadLogo'
             }]
         });

                e.stopEvent();
                rowMenu.showAt(e.getXY());
    },

    onButtonClick: function(button, e, eOpts) {
        Ext.create('explorer.view.uploadWindow').show();

    },

    onButtonClick1: function(button, e, eOpts) {
         window.location.reload();
    },

    init: function(application) {
        this.control({
            "#mygridview": {
                itemcontextmenu: this.onViewItemContextMenu
            },
            "#mybutton": {
                click: this.onButtonClick
            },
            "#reloadButton": {
                click: this.onButtonClick1
            }
        });
    }

});
