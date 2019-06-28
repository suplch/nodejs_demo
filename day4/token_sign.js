const fs = require('fs')
const jwt = require('jsonwebtoken');

const key = 'fdsafsadfsafffjklsfl';

let user = {
    login_name: 'zhangsan',
};

let token_sign = jwt.sign(user, key, { expiresIn: 30});

fs.writeFileSync('./token.txt', token_sign);

