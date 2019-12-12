import { InjectionToken } from '../DependencyContainerLike';

export function controller(prefix: string = '', ...middleware: Array<InjectionToken>): ClassDecorator {
	return (target: any) => {
		Reflect.defineMetadata('prefix', prefix, target);
		Reflect.defineMetadata('middleware', middleware, target);
		if (!Reflect.hasMetadata('routes', target)) {
			Reflect.defineMetadata('routes', [], target);
		}
	};
}
