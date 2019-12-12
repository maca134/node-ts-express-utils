import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';
import { Middleware } from '../Middleware';

export function put<T extends Middleware>(path: PathParams, ...middleware: Array<InjectionToken<T>>) {
	return route('put', path, ...middleware);
}
