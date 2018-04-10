cc.Class({
    extends: cc.Component,

    properties: {

        loadBar: cc.ProgressBar,
    },


    onLoad() {
        var load = function() { //十次过后加载下一场景
            this.loadBar.progress -= 0.02;
            if (this.loadBar.progress < 0.1) {
                cc.director.loadScene("start");
            }
        }
        this.schedule(load, 0.1);
    },

    start() {

    },

    update(dt) {},
});