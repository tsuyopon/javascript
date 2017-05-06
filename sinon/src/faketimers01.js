var sinon = require('sinon');
var faketimer = {
    setUp: function () {
        this.clock = sinon.useFakeTimers();
    },

    tearDown: function () {
        this.clock.restore();
    },

    exec : function(){
        console.log(new Date());
        this.clock.tick(100000);  // 100秒進んだことにする(1000ms = 1sec)
        console.log(new Date());
    }
}

faketimer.setUp();
faketimer.exec();
faketimer.tearDown();
