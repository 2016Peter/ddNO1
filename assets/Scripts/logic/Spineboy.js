cc.Class({
    extends: cc.Component,

    properties: {
        _boyAnimation: null,
        mixTime: 0.2,
        bg1: cc.Node,
        bg2: cc.Node,
        jumpDuration: 0,
        jumpHeight: 0,

        // zhiliao:cc.Node

    },


    onLoad() {
        this._boyAnimation = this.node.getChildByName("spineboy").getComponent(sp.Skeleton);
        this._boyAnimation.setAnimation(0, "run", true);
        this._boyAnimation.node.active = true;
    },

    start() {

    },

    jump: function () {
        var oldAnim = this._boyAnimation.animation;
        if (oldAnim == "jump") {
            return;
        }
        this._boyAnimation.setAnimation(0, "jump", false);
        if (oldAnim) {
            this._boyAnimation.addAnimation(0, oldAnim === 'run' ? 'run' : 'jump', true, 0);
        }
    },

    tiao: function () {
        var oldAnim = this._boyAnimation.animation;
        var boy = this.node.getChildByName("spineboy");


        if (oldAnim == "tiao") {
            return;
        }
        this._boyAnimation.setAnimation(0, "tiao", false);
        this._boyAnimation.timeScale = 0.2;
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionOut());
        boy.runAction(cc.sequence(jumpUp, jumpDown));
        if (oldAnim) {
            this._boyAnimation.timeScale = 1;
            this._boyAnimation.addAnimation(0, oldAnim === 'paobu' ? 'paobu' : 'tiao', true, 0);
        }
    },

    run: function () {
        this._boyAnimation.setAnimation(0, "run", true);
        this._boyAnimation.node.active = true;
    },

    paobu: function () {
        this._boyAnimation.setAnimation(0, "paobu", true);
        this._boyAnimation.node.active = true;
    },

    zhiliao: function () {
        var zhiliaoBtn = this.node.getChildByName("spine").getChildByName("zhiliao").getComponent(sp.Skeleton);
        zhiliaoBtn.setAnimation(0, "zhiliao", false);
        zhiliaoBtn.node.active = true;
        console.log("zhiliao");
    },

    hudun:function(){
        var dunBtn = this.node.getChildByName("spineboy").getChildByName("dun").getComponent(sp.Skeleton);
        dunBtn.setAnimation(0, "dun", false);
        dunBtn.node.active = true;
    },

    huo :function(){
        var huoBtn = this.node.getChildByName("spine").getChildByName("huo").getComponent(sp.Skeleton);
        huoBtn.setAnimation(0, "huo", false);
        huoBtn.node.active = true;
    },

    shui:function(){
        var shuiBtn = this.node.getChildByName("spine").getChildByName("shui").getComponent(sp.Skeleton);
        shuiBtn.setAnimation(0, "shui", true);
        shuiBtn.node.active = true;
    },
    // _setMix(anim1, anim2) {
    //     this._boyAnimation.setMix(anim1, anim2, this.mixTime);
    //     this._boyAnimation.setMix(anim2, anim1, this.mixTime);
    // }


    update(dt) {
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