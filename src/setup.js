define(['core', 'preloadjs', 'trace'], function(core, pre, t, a) {
  var AssetBox = require('AssetBox');
  function doPreload() {
    var manifest = [
      {src:"Cirno.png", id:"baka"}
    ];
    window.birchlabs.assets = assets = new AssetBox(manifest);
    
    var queue = new createjs.LoadQueue(true, "../img/");
    queue.addEventListener("fileload", assets.handleFileLoad);
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
