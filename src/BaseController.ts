import { NextFunction, Request, Response } from 'express';

// export abstract class BaseController {}

export type RequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

export type BaseController<T = any> = {
	[K in keyof T]: T[K] extends RequestHandler ? T[K] : never;
};
