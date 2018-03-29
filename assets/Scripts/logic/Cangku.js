cc.Class({
    extends: cc.Component,

    properties: {
        pot: [cc.SpriteFrame],
        content: cc.Node,
        yema: cc.Label

    },

    onLoad() {
        this.content.x = 540;
    },

    start() {

    },

    right_moveClick: function() {
        // if (event.target.name == "left_btn") {
        if (this.content.x < 0) {
            var right_move = cc.moveBy(0.2, cc.p(896, 0)).easing(cc.easeCubicActionOut());
            this.content.runAction(right_move);
            this.yema.string = "1/2";
        } else {
            console.log("00");
        }
        // } else {
        //     var left_move = cc.moveBy(1, cc.p(-100, 0)).easing(cc.easeCubicActionIn());
        //     this.content.runAction(left_move);
        // }
    },

    left_moveClick: function() {
        // if (event.target.name == "left_btn") {
        // var right_move = cc.moveBy(1, cc.p(100, 0)).easing(cc.easeCubicActionOut());
        // this.content.runAction(right_move);
        // } else {
        if (0 < this.content.x) {
            var left_move = cc.moveBy(0.2, cc.p(-896, 0)).easing(cc.easeCubicActionIn());
            this.content.runAction(left_move);
            this.yema.string = "2/2";
        } else { console.log("11") }

        // }
    },



    onBtnCloseClick: function() {
        this.node.removeFromParent();
    },


    update(dt) {},
});