const fs = require('fs');

const package = fs.readFileSync('./package.json', 'utf8');

module.exports = JSON.parse(package);