cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    ShowLayer: function(layerName, scriptName, parent, agrs) { //参数说明(预制名,脚本名，父节点，参数)
        cc.loader.loadRes("prefabs/" + layerName, function(err, prefab) {
            var layer = cc.instantiate(prefab);
            layer.tag = 10004;
            if (parent.getChildByTag(10004) !== null) {
                parent.removeChildByTag(10004);
                parent.removeChildByTag(10004);
            }
            parent.addChild(layer);
            if (agrs && layer.getComponent(scriptName)) {
                var script = layer.getComponent(scriptName);
                script.init(agrs)
            }
        });
    },

    // update (dt) {},
});