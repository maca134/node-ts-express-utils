import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../Middleware';

export function get<T extends Middleware>(path: PathParams, ...middleware: Array<InjectionToken<T>>) {
	return route('get', path, ...middleware);
}