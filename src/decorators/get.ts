import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';

export function get(path: PathParams, ...middleware: Array<InjectionToken>) {
	return route('get', path, ...middleware);
}
