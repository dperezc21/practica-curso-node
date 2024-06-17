
const os = require('node:os');

console.log('Informacion del sistema operativo');
console.log('------------------')
console.log('nombre '+ os.hostname);
console.log('uptime '+ os.uptime)
console.log('user info '+ os.userInfo)
console.log('CPUS '+ os.cpus);