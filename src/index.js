const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const{PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
 

const UserService = require('./services/user-service');
const prepareAndStartServer=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server started on Port: ${PORT}`);

        if(process.env.DB_SYNC)
        {
              db.sequelize.sync({alter:true});
        }

       
       
        // const service = new UserService();
        // const newToken = service.createToken({email:'rk9763981@gmail.com',id:2});
        // console.log("new token is ",newToken)

    })
}

prepareAndStartServer();