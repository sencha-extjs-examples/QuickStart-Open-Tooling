Ext.define('QuickStart.view.main.PopupFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupform',

    cancelUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();
        record.reject();
        view.destroy();

    },

    submitUpdate: function(me) {
        var view = this.getView(),
            record = view.getRecord();

        record.commit();
        view.destroy();

    }
});
