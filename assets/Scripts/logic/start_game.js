cc.Class({
    extends: cc.Component,

    properties: {
        game_label_node: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        cc.vv = {};
        var UIComment = require("../Scripts/UIComment");
        cc.vv.uitools = new UIComment();

    },

    start() {

    },

    start_game: function() {
        cc.director.loadScene("hall");
    }

    // update (dt) {},
});