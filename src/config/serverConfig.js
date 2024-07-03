const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config();
 
module.exports={
    
    PORT:process.env.PORT||3001,
    SALT:bcrypt.genSaltSync(10)
}