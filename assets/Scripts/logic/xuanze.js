cc.Class({
    extends: cc.Component,

    properties: {
        texiao: cc.Node,
        zuansi: cc.Node,
        jinbi: cc.Node,
        hero_name: cc.Node

    },



    onLoad() {
        var toggle0_click = this.node.getChildByName("pot").getChildByName("potList").getChildByName("toggle0").getComponent(cc.Toggle);
        toggle0_click.isChecked = true;
        this.texiao.setPosition(-179.2, 137.6);
        Globals.pot = 0;
        console.log(Globals.pot);

        this.zuansi.getComponent(cc.Label).string = Globals.zuansi;
        this.jinbi.getComponent(cc.Label).string = Globals.jinbi;
    },

    start() {

    },

    onBtnBackClicked: function() {
        cc.director.loadScene("start");
    },

    onBtnXuanguanClicked: function() {
        //cc.director.loadScene("guanka");
        cc.director.loadScene("game");
    },


    onBtnPotClicked: function(event) {
        if (event.target.name == "toggle0") {
            Globals.pot = 0;
            this.texiao.setPosition(-179.2, 137.6);
            console.log(Globals.pot);
        } else if (event.target.name == "toggle1") {
            Globals.pot = 1;
            this.texiao.setPosition(-3, 137.6);
            console.log(Globals.pot);
        } else if (event.target.name == "toggle2") {
            Globals.pot = 2;
            this.texiao.setPosition(172, 137.6);
            console.log(Globals.pot);
        } else if (event.target.name == "toggle3") {
            Globals.pot = 3;
            this.texiao.setPosition(-179.1, -45.2);
            console.log(Globals.pot);
        } else if (event.target.name == "toggle4") {
            Globals.pot = 4;
            this.texiao.setPosition(0, -45.2);
            console.log(Globals.pot);
        } else if (event.target.name == "toggle5") {
            Globals.pot = 5;
            this.texiao.setPosition(173.5, -45.2);
            console.log(Globals.pot);
        }

    }



    // update (dt) {},
});