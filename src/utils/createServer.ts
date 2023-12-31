import express, { NextFunction, Request, Response, Router } from "express";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from "../router";

export function createServer() {
    const app = express();
    app.use(cors({
        credentials: true,
    }));
    app.use(compression());
    app.use(cookieParser());
    app.use(bodyParser.json());

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("This is the First Page");
    })

    app.use('/', router())
    const server = http.createServer(app);
    return server;
}
