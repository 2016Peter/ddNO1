cc.Class({
    extends: cc.Component,

    properties: {


    },


    onLoad() {

    },

    onBtnClick: function(event) {
        if (event.target.name == "ads") {
            cc.vv.uitools.ShowLayer("Gonggao", null, this.node);
        } else if (event.target.name == "hecheng") {
            cc.vv.uitools.ShowLayer("Hecheng", null, this.node);
        } else if (event.target.name == "beibao") {
            cc.vv.uitools.ShowLayer("Beibao", null, this.node);
        } else if (event.target.name == "guan") {
            cc.director.loadScene("guanka");
        } else if (event.target.name == "shangchen") {
            cc.vv.uitools.ShowLayer("Shangcheng", null, this.node);
        } else if (event.target.name == "set") {
            cc.vv.uitools.ShowLayer("Sounds", null, this.node);
        } else if (event.target.name == "cengjiu") {
            cc.vv.uitools.ShowLayer("Chengjiu", null, this.node);
        } else if (event.target.name == "cangku") {
            cc.vv.uitools.ShowLayer("Cangku", null, this.node);
        }
    },

    start() {

    },

    // update (dt) {},
});