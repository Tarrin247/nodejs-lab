var path = require('path');

var fs = require('fs');

var chirpsPath = (path.join(__dirname, '../chirps.json'));

const chirps= [
   { username: 'Bo',
    chirp: "this doesn't feel like Kansas anymore",
    
    username: "Lilly",
    chirp: "this doesn't feel like Spain anymore",
    
    username: "Grace",
    chirp: "this doesn't feel like Walter anymore",
    
    username: "Marley",
    chirp: "this doesn't feel like Austin anymore",
   
    username: "Macey",
    chirp: "this doesn't feel like Fayette anymore"
},
];


fs.readFile(chirpsPath, {
    encoding: "UTF-8"
}, (err, chirps) => {
    
    var chirpy = JSON.parse(chirps);

    console.log(chirpy.username);
    console.log(chirpy.chirp);
})







