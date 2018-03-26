cc.Class({
    extends: cc.Component,

    properties: {

        bg1: cc.Node,
        bg2: cc.Node,
        PotDazhao: cc.Node,
        xue_Bar: cc.ProgressBar,
        dun_Bar: cc.ProgressBar,
        dazhao_Bar: cc.ProgressBar,
        dazhao_texiao: cc.Node

    },

    onLoad() {
        this.zhuangtaiChange();
    },

    start() {

    },

    zhuangtaiChange: function() {
        //血条
        this.xue_Bar.progress = Globals.xt;
        //盾
        this.dun_Bar.progress = Globals.hd;
        //大招
        this.dazhao_Bar.progress = Globals.dz;
    },

    dazhao_tips: function(bool) {
        this.PotDazhao.getComponent(cc.Button).interactable = bool;
        //var BtnTexiao  = this.dazhao_texiao.getComponent(sp.Skeleton);
        // this.dazhao_texiao.setAnimation(0, "dingquetexiao", true);
        // this.dazhao_texiao.node.active = true;
        this.dazhao_texiao.active = bool;
    },

    BtnShifangClick: function() {
        this.PotDazhao.getComponent(cc.Button).interactable = false;
        Globals.xt += 0.5;
        Globals.dz = 0;
        this.zhuangtaiChange();
        //特效释放
        // var BtnTexiao  = this.dazhao_texiao.getComponent(sp.Skeleton);
        // this.dazhao_texiao.setAnimation(0, "dingquetexiao", true);
        this.dazhao_texiao.active = false;
    },

    onBtnBackClick: function() {
        cc.director.loadScene("start");

    },

    update(dt) {

        // Globals.dz += 0.0005;
        Globals.dz += 0.005;
        if (Globals.dz > 1) {
            Globals.dz = 1;
            this.dazhao_tips(true);
        }
        this.zhuangtaiChange();

        // 背景滚动
        this.bg1.x -= 8;
        this.bg2.x -= 8;
        if (this.bg1.x <= -1280) {
            this.bg1.x = 1280;
        }
        if (this.bg2.x <= -1280) {
            this.bg2.x = 1280;
        }
    },
});