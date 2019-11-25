import { Request, Response, NextFunction, RequestHandler, Router } from 'express';
import { BaseController } from './BaseController';
import { RouteDefinition } from "./RouteDefinition";

export function loadControllers(controllers: BaseController[], logger: (msg: string) => void) {
	const router = Router();
	controllers.forEach(controller => {
		const prefix: string = Reflect.getMetadata('prefix', controller.constructor);
		const controllerMiddlewares: Array<RequestHandler> = Reflect.getMetadata('middleware', controller.constructor);
		const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller.constructor);
		routes.forEach(route => {
			logger(`(${route.requestMethod}) ${prefix + route.path} -> ${controller.constructor.name}.${route.methodName}`);
			router[route.requestMethod](prefix + route.path, [...controllerMiddlewares, ...route.middleware], async (req: Request, res: Response, next: NextFunction) => {
				try {
					await Promise.resolve(controller[route.methodName](req, res, next));
				}
				catch (err) {
					return next(err);
				}
				if (!res.headersSent)
					next();
			});
		});
	});
	return router;
}
