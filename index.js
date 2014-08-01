/**
 * @fileoverview
 * @author
 * @module xplayer
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Xplayer
     * @constructor
     * @extends Base
     */
    function Xplayer(comConfig) {
        var self = this;
        //调用父类构造函数
        Xplayer.superclass.constructor.call(self, comConfig);
    }
    S.extend(Xplayer, Base, /** @lends Xplayer.prototype*/{

    }, {ATTRS : /** @lends Xplayer*/{

    }});
    return Xplayer;
}, {requires:['node', 'base']});



