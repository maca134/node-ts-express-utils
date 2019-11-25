import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { HttpRequestMethod } from '../HttpRequestMethod';
import { RouteDefinition } from '../RouteDefinition';

export function route(requestMethod: HttpRequestMethod, path: PathParams, ...middleware: Array<RequestHandler>): MethodDecorator {
	return (target, methodName: string): void => {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
		routes.push({ requestMethod, path, methodName, middleware });
		Reflect.defineMetadata('routes', routes, target.constructor);
	};
}

