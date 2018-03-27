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
        }
    },

    start() {

    },

    // update (dt) {},
});