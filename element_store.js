/*
 * ElementStore: Standalone jQuery.data
 *
 * For more info and usage check out:
 *    http://amix.dk/blog/post/19504#ElementStore-Standalone-jQuery-data
 *
 * Made by amix the lucky stiff - amix.dk
 * Copyright amix 2010, released under BSD license
 */

ElementStore = {

    storage_dict: {},
    uuid: 1,
    expando: 'ElementStore' + (new Date).getTime(),

    get: function(elm, key) {
        var store = ElementStore.getStore(elm);
        return store[key];
    },

    set: function(elm, key, value) {
        var store = ElementStore.getStore(elm);
        store[key] = value;
        return value;
    },

    remove: function(elm, key) {
        if(key != undefined) {
            var store = ElementStore.getStore(elm);
            if(store[key])
                delete store[key];
        }
        else {
            var elm_id = elm[ElementStore.expando];
            if(elm_id) {
                delete ElementStore.storage_dict[elm_id];
                delete elm[ElementStore.expando];
            }
        }
    },

    getStore: function(elm) {
        var expando = ElementStore.expando;
        var storage_dict = ElementStore.storage_dict;
        var elm_id = elm[expando];

        if(!elm_id) {
            elm_id = elm[expando] = ElementStore.uuid++;
            storage_dict[elm_id] = {};
        }

        return storage_dict[elm_id];
    }

}
