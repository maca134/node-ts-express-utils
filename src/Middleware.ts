import { Request, Response, NextFunction } from 'express';

export interface Middleware {
	handler(...args: any[]): (req: Request, res: Response, next: NextFunction) => any;
}
