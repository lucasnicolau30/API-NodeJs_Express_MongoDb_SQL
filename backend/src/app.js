import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://lucasnicolau:lucas@devhouse.ub0k21a.mongodb.net/devhouse?retryWrites=true&w=majority&appName=devhouse');

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;