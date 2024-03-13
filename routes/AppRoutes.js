const express = require('express')
const AppRouter = express.Router();

const UserController=require("../controller/UserController.js");
AppRouter.get('/',UserController.userHome);

AppRouter.post('/saveUser',UserController.saveUserData);
AppRouter.get('/getUserById/:id',UserController.getUserById);
AppRouter.get('/getAllUser',UserController.getAllUser);
AppRouter.post('/login',UserController.userLogin);

module.exports = AppRouter