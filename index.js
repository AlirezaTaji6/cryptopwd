const readline = require('readline'),
    bcrypt = require('bcrypt');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('salt rounds : (default : 10) ', (rounds) => {
    const saltRounds = Number(rounds) || 10;
    rl.question('password : ', (pwd) => {
        if(!pwd) {
            console.log('You should enter password!');
            process.exit(0);
        }

        bcrypt.genSalt(saltRounds, (err, salt) => {

            if(err) {
                console.log('Error happend!');
                console.log(err);
                process.exit(1);
            }

            bcrypt.hash(pwd, salt, (err, hashedPwd) => {

                if(err) {
                    console.log('Error happend!');
                    console.log(err);
                    process.exit(1);
                }

                console.log(hashedPwd);
                process.exit(0);
            })
        })
    })
})