cc.Class({
    extends: cc.Component,

    properties: {

    },

    // onLoad () {},

    start() {

    },

    onBtnNo1: function() {
        cc.director.loadScene("game");
    },
    onBtnNo2: function() {
        cc.director.loadScene("game2");
    }




    // update (dt) {},
});