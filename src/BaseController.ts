import { Request, Response } from 'express';

// export abstract class BaseController {}

export type RequestHandler = (req: Request, res: Response) => Promise<void> | void;

export type BaseController<T = any> = {
	[K in keyof T]: T[K] extends RequestHandler ? T[K] : never;
};
