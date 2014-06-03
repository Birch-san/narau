define(['trace'], function(t) {
    "use strict";
    
  function AssetBox(manifest){
      if (!(this instanceof AssetBox)) {
          throw new TypeError("AssetBox constructor cannot be called as a function.");
      }
      
    this.manifest = manifest;
      this.data = {};
      this._this = this;
      //t.trace(this.data);
  }

  AssetBox.prototype.handleFileLoad = function(event) {      
        var img = event.result;
        var bmp = new createjs.Bitmap(img);
        bmp.src = event.item.src;
        bmp.id = event.item.id;
        //t.trace(this.data);
      
        this.data[bmp.id] = img;
    };

    AssetBox.prototype.getData = function() {
    	return this.data;
    };

  return AssetBox;
});
