import { PathParams } from 'express-serve-static-core';
import { HttpRequestMethod } from '../HttpRequestMethod';
import { RouteDefinition } from '../RouteDefinition';
import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../MiddlewareBase';

export function route(requestMethod: HttpRequestMethod, path: PathParams, ...middleware: Array<InjectionToken<Middleware>>): MethodDecorator {
	return (target, methodName: string): void => {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
		routes.push({ requestMethod, path, methodName, middleware });
		Reflect.defineMetadata('routes', routes, target.constructor);
	};
}

