
const run = require('./runShell');

// run('git branch')
run('git branch', 'branch name', (sto) => {
    console.log(1111, sto);
})