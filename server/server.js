var path = require('path');

var fs = require('fs');


var chirpsPath = (path.join(__dirname, '../chirps.json'));

fs.readFile(chirpsPath, {
    encoding: "UTF-8"
}, (err, chirps) => {
    
    var chirpy = JSON.parse(chirps);

    console.log(chirpy.username);
    console.log(chirpy.chirp);
})







