import { Request, Response, NextFunction } from 'express';

export interface Middleware {
	handler(req: Request, res: Response, next: NextFunction): any;
}
