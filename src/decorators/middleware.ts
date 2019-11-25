import { InjectionToken, container } from 'tsyringe';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Middleware } from "../Middleware";

export function middleware<T extends Middleware>(token: InjectionToken<T>, ...args: any[]): RequestHandler {
	let instance: T;
	return (req: Request, res: Response, next: NextFunction) => {
		if (!instance) {
			instance = container.resolve<T>(token);
		}
		return instance.handler(...args)(req, res, next);
	};
}