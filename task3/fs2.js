const fs = require('fs');
fs.readFile('dsB.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:'+ err);
    }
    else {
        console.log('File content:\n'+data);
    }
});
