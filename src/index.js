const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');

const UserRepository = require('./repository/user-repository');
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        // const repo = new UserRepository();
        // const response= await repo.getById(4);
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'sarthkyadavr@gmail.com ', id: 3});
        // console.log("new token is", newToken);
    });

};

prepareAndStartServer();