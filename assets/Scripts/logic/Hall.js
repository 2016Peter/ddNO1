cc.Class({
    extends: cc.Component,

    properties: {


    },


    onLoad() {

    },

    onBtnClick: function(event) {
        if (event.target.name == "ads") {
            cc.vv.ShowLayer("Gonggao", null, this.node);
        } else if (event.target.name == "hecheng") {
            cc.vv.ShowLayer("Hecheng", null, this.node);
        } else if (event.target.name == "beibao") {
            cc.vv.ShowLayer("beibao", null, this.node);
        } else if (event.target.name == "guan") {
            cc.director.loadScene("guanka");
        } else if (event.target.name == "shangchen") {
            cc.vv.ShowLayer("shangcheng", null, this.node);
        } else if (event.target.name == "set") {
            cc.vv.ShowLayer("Sounds", null, this.node);
        } else if (event.target.name == "cengjiu") {
            cc.vv.ShowLayer("Chengjiu", null, this.node);
        } else if (event.target.name == "cangku") {
            cc.vv.ShowLayer("cangku", null, this.node);
        }
    },

    start() {

    },

    // update (dt) {},
});