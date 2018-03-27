cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    ShowLayer: function(layerName, scriptName, parent, agrs) { //参数说明(预制名,脚本名，父节点，参数)
        cc.loader.loadRes("Prefabs/" + layerName, function(err, prefab) {
            var layer = cc.instantiate(prefab);
            parent.addChild(layer);
            if (agrs && layer.getComponent(scriptName)) {
                var script = layer.getComponent(scriptName);
                script.init(agrs)
            }
        });
    },

    // update (dt) {},
});