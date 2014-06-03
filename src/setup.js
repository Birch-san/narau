define(function(require) {
    // better to do it line by line, so indirect dependencies are calculated for us
    //core, pre, t, a
    //['core', 'preloadjs', 'trace'], 
    var AssetBox = require('AssetBox');
    var core = require('core');
    var preloadjs = require('preloadjs');
    var t = require('trace');
    var $ = require('jquery');
    
    function doPreload() {
        var manifest = [
            {src:"Cirno.png", id:"baka"}
        ];
        var assets = new AssetBox(manifest);
        
        var queue = new createjs.LoadQueue(true, "../img/");
        queue.addEventListener("fileload", assets.handleFileLoad.bind(assets));
        queue.addEventListener("complete", donePreload);
        queue.loadManifest(assets.manifest);

        function donePreload() {
            //document.body.appendChild(assets.getData().baka);
            begin(assets);
        }
    }

    function main() {
        doPreload();
    }

    function begin(assets) {
        var canvas = prepareCanvas();
        var stage = new createjs.Stage(canvas.id);
        core.start(stage, assets);
    }
    
    function prepareCanvas() {
        //var canvas = $('#gameCanvas')
        var canvas = document.getElementById('gameCanvas');
        var $gameCanvas = $('#gameCanvas');
        canvas.setAttribute('width', parseInt($gameCanvas.css('width')));
        canvas.setAttribute('height', parseInt($gameCanvas.css('height')));
        
        return canvas;
    }

    return {main: main};
});
