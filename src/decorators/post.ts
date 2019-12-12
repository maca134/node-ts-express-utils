import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';

export function post(path: PathParams, ...middleware: Array<InjectionToken>) {
	return route('post', path, ...middleware);
}
