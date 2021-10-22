import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../MiddlewareBase';

export function del<T extends Middleware>(path: PathParams, ...middleware: Array<InjectionToken<T>>) {
	return route('delete', path, ...middleware);
}
