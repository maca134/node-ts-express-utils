import { Request, Response, NextFunction, Router } from 'express';
import { BaseController } from './BaseController';
import { RouteDefinition } from "./RouteDefinition";
import { InjectionToken, DependencyContainerLike } from './DependencyContainerLike';
import { Middleware } from './MiddlewareBase';

async function tokensToMiddlewares(container: DependencyContainerLike, tokens: InjectionToken[]) {
	const instances = await Promise.all(tokens.map(token => container.resolve<Middleware>(token)));

	return instances.map(
		instance => {
			if (!instance.handler) {
				throw new Error(`${instance.constructor.name} does not have a handler method`);
			}
			return (req: Request, res: Response, next: NextFunction) => instance.handler(req, res, next);
		}
	);
}

export async function loadControllers(
	controllers: BaseController[],
	container: DependencyContainerLike,
	logger: (msg: string) => void
) {
	const router = Router();
	for (let i = 0; i < controllers.length; i++) {
		const controller = controllers[i];
		const prefix: string = Reflect.getMetadata('prefix', controller.constructor);
		const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller.constructor);
		const middleware = await tokensToMiddlewares(container, Reflect.getMetadata('middleware', controller.constructor));
		for (let j = 0; j < routes.length; j++) {
			const route = routes[j];
			logger(`(${route.requestMethod}) ${prefix + route.path} -> ${controller.constructor.name}.${route.methodName}`);
			router[route.requestMethod](
				prefix + route.path,
				[
					...middleware,
					...await tokensToMiddlewares(container, route.middleware)
				],
				async (req: Request, res: Response, next: NextFunction) => {
					try {
						await Promise.resolve(controller[route.methodName](req, res, next));
					}
					catch (err) {
						return next(err);
					}
					if (!res.headersSent)
						next();
				}
			);
		}
	}
	return router;
}
