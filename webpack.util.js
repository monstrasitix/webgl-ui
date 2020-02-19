// Core
const path = require('path');


const root = path.resolve.bind(undefined, __dirname);


const rule = config => ({
    ...config,
    exclude: [
        /node_modules/,
        /test/,
    ],
});



module.exports = {
    root,
    rule,
};