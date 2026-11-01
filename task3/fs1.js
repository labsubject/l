const fs = require('fs');

fs.writeFile('dsB.txt', 'My first Node.js file\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    }
    else {
        console.log('dsB.txt created successfully with initial content');
    }
});
