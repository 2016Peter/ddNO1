cc.Class({
    extends: cc.Component,

    properties: {
        game_label_node: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        var skaw = cc.scaleTo(0.5, 1);
        var move = cc.rotateBy(0.5, 360);
        this.game_label_node.runAction(cc.spawn(skaw, move));

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