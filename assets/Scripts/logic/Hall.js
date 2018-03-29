cc.Class({
    extends: cc.Component,

    properties: {


    },


    onLoad() {

    },

    onBtnClick: function(event) {
        if (event.target.name == "shangchen") {
            cc.vv.uitools.ShowLayer("shangcheng", null, this.node);
        } else if (event.target.name == "baoxiang") {
            cc.vv.uitools.ShowLayer("beibao", null, this.node);
        } else if (event.target.name == "cangku") {
            cc.vv.uitools.ShowLayer("cangku", null, this.node);
        } else if (event.target.name == "guan") {
            cc.director.loadScene("game");
        } else if (event.target.name == "money") {
            cc.director.loadScene("money");
        } else if (event.target.name == "set") {
            cc.vv.uitools.ShowLayer("Sounds", null, this.node);
        }
    },

    start() {

    },

    // update (dt) {},
});