Ext.define('QuickStart.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',
    model: 'QuickStart.model.Employees',
    proxy: {
        type: 'ajax',
        url: 'resources/shared/data/data.json'
    },

    listeners: {

        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }

            // Ensure that select field is being set to a value, not the entire record
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }
});
