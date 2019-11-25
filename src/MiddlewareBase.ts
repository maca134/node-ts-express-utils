import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Middleware } from './Middleware';

export abstract class MiddlewareBase implements Middleware {
	protected abstract _requestHandler: RequestHandler;
	handler() {
		return (req: Request, res: Response, next: NextFunction) => {
			if (!this._requestHandler) {
				return next(new Error(`no request handler for middleware ${this.constructor.name}`));
			}
			return this._requestHandler(req, res, next);
		};
	}
}