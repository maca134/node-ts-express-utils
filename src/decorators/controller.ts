import { RequestHandler } from 'express';

export function controller(prefix: string = '', ...middleware: Array<RequestHandler>): ClassDecorator {
	return (target: any) => {
		Reflect.defineMetadata('prefix', prefix, target);
		Reflect.defineMetadata('middleware', middleware, target);
		if (!Reflect.hasMetadata('routes', target)) {
			Reflect.defineMetadata('routes', [], target);
		}
	};
}
