const os = require('os');

console.log('Type of OS: ' + os.type());
console.log('Architecture: ' + os.arch());
console.log('Hostname: ' + os.hostname());
console.log('Platform: ' + os.platform());

console.log('Total Available memory: ' +
    os.totalmem() + ' bytes');

console.log('Free memory: ' + os.freemem(), 'bytes');

const c = os.cpus();

console.log('Number of CPUs :' + c.length);

for (i in c)
    console.log(c[i]);

