import { Request, Response, NextFunction, RequestHandler } from 'express';

export interface Middleware {
	handler(req: Request, res: Response, next: NextFunction): any;
}

export abstract class MiddlewareBase implements Middleware {
	protected abstract _requestHandler: RequestHandler;
	handler(req: Request, res: Response, next: NextFunction) {
		if (!this._requestHandler) {
			return next(new Error(`no request handler for middleware ${this.constructor.name}`));
		}
		return this._requestHandler(req, res, next);
	}
}
