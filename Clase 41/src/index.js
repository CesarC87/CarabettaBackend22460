const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const config = require('./config');

class App {
    constructor() { 
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.views()
        this.port = config.port
    }
    async settings() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
    async middlewares() {
        this.app.use(cors());
    }
    async views() {
    }
    async listen() {
        if(cluster.ismaster){
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();                
            }
            cluster.on("exit", (worker, code, signal) => {
                console.log("WOrker died", worker.process.pid);
            })
        } else{
            
        }   
    }
    async routes() {
        serverRoutes
    }    
}