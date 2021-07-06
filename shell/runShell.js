// runShell.js

const process = require('child_process');
require('colors');

module.exports = (sh, log = '', callback) => {
    console.log(`[ SH ]`.cyan, sh.cyan);
    process.exec(sh, (err, sto) => {
        if (err) {
            console.log(`[Shell Error]`.red, err);
            return
        }
        log !== '' ? console.log(`[Shell success]`.green, log) : null;
        console.log(sto);
        callback && callback(sto)
    })
}
