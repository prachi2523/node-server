const { log } = require('console');
const path=require('path')

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.extname(__filename))
console.log(path.parse(__filename).name);