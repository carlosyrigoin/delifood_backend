import {Express, Request, Response, NextFunction} from 'express';
import * as jwt from "jsonwebtoken";

export const validateToken = (req: Request, res: Response, next: NextFunction):void => {
    try {
        const token = req.header("authorization");
        if(!token){
            res.status(401).json({ error:"Acceso denegado"});
        }else{
            const verified = jwt.verify(token, process.env.TOKEN_SECRET || "");
            if(verified){
                next();
            }else{
                res.status(400).json("Token no es valido");
            }
        }
    } catch (error) {
        res.status(400).json("Token no es valido");
    }
}