import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://lucasnicolau:lucas@devhouse.ub0k21a.mongodb.net/devhouse?retryWrites=true&w=majority&appName=devhouse');

        this.middlewares();
        this.routes();
    }

    middlewares(){

        // cors sempre primeiro -> qq um pode fazer a requisição na API
        this.server.use(cors());

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;