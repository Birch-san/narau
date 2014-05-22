define(['core', 'preloadjs', 'trace'], function(core, pre, t) {
  function doPreload() {
    window.birchlabs.assets = {
     manifest:[
         {src:"Cirno.png", id:"baka"}
     ],
     data:{}
  };
   
    var assets = window.birchlabs.assets;
    
    var queue = new createjs.LoadQueue(true, "../img/");
    queue.addEventListener("fileload", handleFileLoad);
    queue.addEventListener("complete", donePreload);
	queue.loadManifest(window.birchlabs.assets.manifest);
    
    function handleFileLoad(event) {
        var img = event.result;
        var bmp = new createjs.Bitmap(img);
        bmp.src = event.item.src;
        bmp.id = event.item.id;
        //t.trace(img.id);
        assets.data[bmp.id] = img;
    }
    
    function donePreload() {
      document.body.appendChild(assets.data.baka);
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
