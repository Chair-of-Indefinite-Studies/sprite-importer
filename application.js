(function(sprite){
	var model = new sprite.editor.Model(20, 30);

	var canvas = document.getElementById('pixel-editor');
	var view = new sprite.editor.View(model, canvas);
	var controller = sprite.editor.controllerFor(model, view, canvas);

	canvas.addEventListener('mousedown', controller.startDrawing.bind(controller));
	canvas.addEventListener('mouseup', controller.stopDrawing.bind(controller));

    var importer = new sprite.Importer();
    document.getElementById('import').addEventListener('change', function(event){
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(data){
            var json = JSON.parse(data.target.result);
            var original = importer.import(json);
            model.clone(original);
        };
        reader.readAsText(file);
    });
})(sprite);
