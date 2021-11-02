import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../MiddlewareBase';

export function get(path: PathParams, ...middleware: Array<InjectionToken<Middleware>>) {
	return route('get', path, ...middleware);
}