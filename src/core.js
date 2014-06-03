define(function(require) {
    var AssetBox = require('AssetBox');
    var t = require('trace');
    var $ = require('jquery');
    var createjs = require('easel');
    
    var _stage;
    var _assets;
    
    var _baka;
    
    function populate() {
        _baka = _assets.getData().baka.bmp;
        _stage.addChild(_baka);
    }
    
    function start(stage, assets) {
        if (!(stage instanceof createjs.Stage)) {
            throw new TypeError('createjs.Stage');
        }
        if (!(assets instanceof AssetBox)) {
            throw new TypeError('AssetBox');
        }
        
        _stage = stage;
        _assets = assets;
        //document.body.appendChild(assets.getData().baka);
        //t.supertrace(assets);
        
        populate(stage, assets);
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setFPS(60);
    }
    
    function handleTick(event) {
        // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        var speed = event.delta/1000*100;
        _baka.x += speed;
        _stage.update();
    }

    return {start:start};
});
