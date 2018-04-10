cc.Class({
    extends: cc.Component,

    properties: {


    },


    onLoad() {

    },

    onBtnClick: function(event) {
        if (event.target.name == "ads") { //公告ok
            cc.vv.ShowLayer("Gonggao", null, this.node);

        } else if (event.target.name == "hecheng") { //合成ok
            cc.vv.ShowLayer("Hecheng", null, this.node);

        } else if (event.target.name == "beibao") { //背包ok
            cc.vv.ShowLayer("Beibao", null, this.node);

        } else if (event.target.name == "guan") { //闯关模式ok
            cc.director.loadScene("guanka");

        } else if (event.target.name == "shangchen") { //商城ok
            cc.vv.ShowLayer("Shangcheng", null, this.node);

        } else if (event.target.name == "set") { //设置ok
            cc.vv.ShowLayer("Sounds", null, this.node);

        } else if (event.target.name == "cengjiu") { //成就ok
            cc.vv.ShowLayer("Chengjiu", null, this.node);


        } else if (event.target.name == "cangku") { //仓库ok
            cc.vv.ShowLayer("Cangku", null, this.node);


        } else if (event.target.name == "potDetail") { //宠物详情
            cc.vv.ShowLayer("cangku", null, this.node);


        } else if (event.target.name == "fudan") { //孵化ok
            cc.vv.ShowLayer("Fuhuaqi", null, this.node);


        } else if (event.target.name == "potDetail") { //奖励
            cc.vv.ShowLayer("cangku", null, this.node);


        } else if (event.target.name == "email") { //邮件
            cc.vv.ShowLayer("email", null, this.node);
        }
    },

    start() {

    },

    // update (dt) {},
});