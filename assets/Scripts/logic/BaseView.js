cc.Class({
    extends: cc.Component,

    properties: {
        m_BtRoll: cc.Button,
        m_BtJump: cc.Button,
        m_HeroPrefab: [cc.Prefab],
    },

    // use this for initialization
    //第一次进入,空间创建产生后会调用的函数
    onLoad: function () {
        // cc.log('Hello World');
        // this.m_Hero = this.m_Hero.getComponent(cc.Animation);
        this.m_Hero = cc.instantiate(this.m_HeroPrefab[g_UserInfoData.m_CurSelHeroID]);
        this.node.addChild(this.m_Hero);
        this.m_Hero = this.m_Hero.getComponent('SceneHeroMng');

        this.myHeroPlay('Run');
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.m_BtJump.node.on(cc.Node.EventType.TOUCH_START, this.touchJumpStar, this);


    },
    touchJumpStar: function () {
        this.onAnimationChange(this, 'Jump');
    },
    backMoveEnd: function (target, data) {
        var floor = target.getComponent('Floor');
        var start = 0;
        var pos = 0;
        if (floor != null) {
            floor.changeFloor();
            start = floor.m_offset_start;
            pos = floor.m_offset_end;
        }
        var width = target.width;
        target.setPosition(width + pos - 4, 0);

        var move = cc.moveTo(data * 2, cc.p(-(width + start - 4), 0));
        var seq = cc.sequence(move, cc.callFunc(this.backMoveEnd, this, data));
        target.runAction(seq);
    },
    touchStart: function () {
        cc.log('touchStart');
        if (g_UserInfoData.m_CurHAS_State == HAS_Jump1 ||
            g_UserInfoData.m_CurHAS_State == HAS_Jump2) {
            return;
        }
        this.myHeroPlay('Roll');
    },
    touchEnd: function () {
        cc.log('touchEnd');
        if (g_UserInfoData.m_CurHAS_State == HAS_Jump1 ||
            g_UserInfoData.m_CurHAS_State == HAS_Jump2) {
            return;
        }
        this.myHeroPlay('Run');
    },
    callBackDownOver: function () {
        cc.log('callBackDownOver');
        // var anim = this.getComponent(cc.Animation);
        this.myHeroPlay('Run');
    },
    onAnimationChange: function (target, data) { //目标 状态
        cc.log("onAnimationChange " + data);

        if (data == 'Jump' && this.isCanChangeClip('Jump')) {
            var moveUp = cc.moveTo(1, -326, 0).easing(cc.easeCubicActionOut());
            var moveDown = cc.moveTo(1, -326, -137).easing(cc.easeCubicActionIn());
            var callBack = cc.callFunc(this.callBackDownOver, this, this);
            var seq = cc.sequence(moveUp, moveDown, callBack);
            this.m_Hero.node.runAction(seq);
        }

        this.myHeroPlay(data);
    },
    myHeroPlay: function (playName) {
        if (this.isCanChangeClip(playName) == false) {
            return;
        }
        if (playName == 'Roll') {
            this.m_Hero.node.setPosition(-326, -140);
        } else if (playName == 'Run') {
            this.m_Hero.node.setPosition(-326,-131);
        }
        this.m_Hero.play(playName);
    },
    isCanChangeClip: function (playName) {
        //判断滑铲
        if (playName == 'Roll') {
            //如果是跳跃动画,返回否
            if (g_UserInfoData.m_CurHAS_State == HAS_Jump1) {
                return false;
            }
            //如果是跑动,返回可以
            else if (g_UserInfoData.m_CurHAS_State == HAS_Run) {
                return true;
            }
        }
        //判断可不可以播放跳跃
        else if (playName == 'Jump') {
            //如果是跑动,可以
            if (g_UserInfoData.m_CurHAS_State == HAS_Run) {
                return true;
            }
            //其他任何动画播放时,都不可以
            else {
                return false;
            }
        }
        //其他动作都可以
        return true;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});