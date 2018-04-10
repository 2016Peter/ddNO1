cc.Class({
    extends: cc.Component,

    properties: {
        emery_boold: cc.ProgressBar,
    },

    onLoad() {},

    start() {

    },

    onCollisionEnter: function(other, self) {
        console.log("111111111");
        console.log("other:" + other + "self:" + self);
        if (other.node.group == "player") {
            // 敌人和子弹碰撞
            this.emery_boold.progress -= 0.3;
            if (this.emery_boold.progress < 0) {
                var removeAction = cc.removeSelf(true);
                this.node.runAction(removeAction);
            }

            // 加分
            // window.score += 1;
            // this.scoreNum.string = window.score;
            // } else if (other.node.group == "player") {
            //     // 敌人和玩家碰撞
            //     cc.director.loadScene("gameOver");
        }
    },

    update(dt) {},
});