import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../Middleware';

export function controller<T extends Middleware>(prefix: string = '', ...middleware: Array<InjectionToken<T>>): ClassDecorator {
	return (target: any) => {
		Reflect.defineMetadata('prefix', prefix, target);
		Reflect.defineMetadata('middleware', middleware, target);
		if (!Reflect.hasMetadata('routes', target)) {
			Reflect.defineMetadata('routes', [], target);
		}
	};
}
