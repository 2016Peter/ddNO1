cc.Class({
    extends: cc.Component,

    properties: {
        game_label_node: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        cc.vv = {};
        // var UIComment = require("../Scripts/UIComment");
        // cc.vv.uitools = new UIComment();
        cc.vv.ShowLayer = function (layerName, scriptName, parent, agrs) { //参数说明(预制名,脚本名，父节点，参数)
            cc.loader.loadRes("Prefabs/" + layerName, function (err, prefab) {
                var layer = cc.instantiate(prefab);
                parent.addChild(layer);
                if (agrs && layer.getComponent(scriptName)) {
                    var script = layer.getComponent(scriptName);
                    script.init(agrs)
                }
            });


        }
    },

    start() {

    },

    start_game: function () {
        cc.director.loadScene("hall");
    }

    // update (dt) {},
});