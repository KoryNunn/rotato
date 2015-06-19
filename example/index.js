var crel = require('crel'),
    rotato = require('../'),
    imagePath = 'nodeorgau.svg',
    toDataUri = require('to-datauri');

window.addEventListener('load', function(){

    crel(document.body,
        crel('img', {src: imagePath})
    );

    toDataUri(imagePath, function (error, uri) {
        rotato(uri, 0, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 1, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 2, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 3, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 4, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });
    });
});