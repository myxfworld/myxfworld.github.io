"use strict";

var LeekItem = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.pDay = obj.pDay;
        this.pCash = obj.pCash;
        this.content = obj.content;
        this['比特币'] = obj['比特币'];
        this['狗狗币'] = obj['狗狗币'];
        this['莱特币'] = obj['莱特币'];
        this['指数币'] = obj['指数币'];
        this['未来币'] = obj['未来币'];
        this['空气币'] = obj['空气币'];
    } else {
        this.pDay = 0;
        this.pCash = 0;
        this.content = '';
        this['比特币'] = 0;
        this['狗狗币'] = 0;
        this['莱特币'] = 0;
        this['指数币'] = 0;
        this['未来币'] = 0;
        this['空气币'] = 0;

    }
};

LeekItem.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};

var Leek = function () {
    LocalContractStorage.defineMapProperty(this, "allCurrency", {
        parse: function (text) {
            return new LeekItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

Leek.prototype = {
    init: function () {

    },
    get:function(from){
        return this.allCurrency.get(from);
    },
    endOneDay: function (from,string) {
        var leekItem = new LeekItem();
        leekItem.content = string;
        this.allCurrency.put(from,leekItem);

    }
};
module.exports = Leek;