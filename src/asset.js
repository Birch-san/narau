define(function() {
  function AssetBox(manifest){
    this.manifest = manifest;
    this.data = [];
  }

  AssetBox.prototype = {
  	handleFileLoad: function(event) {
        var img = event.result;
        var bmp = new createjs.Bitmap(img);
        bmp.src = event.item.src;
        bmp.id = event.item.id;
        //t.trace(img.id);
        this.data[bmp.id] = img;
    },

    getData: function() {
    	return this.data;
    }
};

  return AssetBox;
});
