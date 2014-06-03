define(function(require) {
    // better to do it line by line, so indirect dependencies are calculated for us
    //core, pre, t, a
    //['core', 'preloadjs', 'trace'], 
    var AssetBox = require('AssetBox');
    var core = require('core');
    var preloadjs = require('preloadjs');
    var t = require('trace');
    
    function doPreload() {
        var manifest = [
            {src:"Cirno.png", id:"baka"}
        ];
        window.birchlabs.assets = assets = new AssetBox(manifest);
        
        var queue = new createjs.LoadQueue(true, "../img/");
        queue.addEventListener("fileload", assets.handleFileLoad.bind(assets));
        queue.addEventListener("complete", donePreload);
        queue.loadManifest(assets.manifest);

        function donePreload() {
            document.body.appendChild(assets.getData().baka);
            begin();
        }
    }

    function main() {
        doPreload();
    }

    function begin() {
        core.start();
    }

    return {main: main};
});
