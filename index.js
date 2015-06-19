function rotateDataURI(uri, rotation, callback) {
    var source = new Image();
    source.addEventListener('load', function(){
        rotation = (rotation + 4) % 4;

        var rotatedPerspective = rotation % 2;

        var canvas = document.createElement('canvas');
        canvas.width = rotatedPerspective ? source.height : source.width;
        canvas.height = rotatedPerspective ? source.width : source.height;

        var context = canvas.getContext('2d');

        context.rotate(rotation * Math.PI / 2);

        context.drawImage(
            source,
            rotation >= 2 ? -source.width : 0,
            rotation < 3 && rotation > 0 ? -source.height : 0
        );

        callback(null, canvas.toDataURL());

    });
    source.src = uri;
}

module.exports = rotateDataURI;