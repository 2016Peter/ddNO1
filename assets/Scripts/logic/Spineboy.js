cc.Class({
    extends: cc.Component,

    properties: {
        _boyAnimation: null,
        mixTime: 0.2,
        bg1: cc.Node,
        bg2: cc.Node
    },


    onLoad() {
        this._boyAnimation = this.node.getChildByName("spineboy").getComponent(sp.Skeleton);
        this._boyAnimation.setAnimation(0, "run", true);
        this._boyAnimation.node.active = true;
    },

    start() {

    },

    jump: function() {
        var oldAnim = this._boyAnimation.animation;
        if (oldAnim == "jump") {
            return;
        }
        this._boyAnimation.setAnimation(0, "jump", false);
        if (oldAnim) {
            this._boyAnimation.addAnimation(0, oldAnim === 'run' ? 'run' : 'jump', true, 0);
        }
    },

    run: function() {
        this._boyAnimation.setAnimation(0, "run", true);
        this._boyAnimation.node.active = true;
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