;(function(sprite, undefined){
    /* A means to import sprites into the sprite-editor */
    var Importer = sprite.Importer = function(){};
    Importer.prototype.import = function(data){
        var model = new sprite.editor.Model(data.columns, data.rows);
        data.palette.forEach(function(color, index){
            model.changeBrushColor(color);
            data.pixels[index].forEach(function(coordinates){
                model.paintPixel(coordinates[0], coordinates[1]);
            });
        });
        return model;
    };
})(window.sprite = window.sprite || {})
