import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';

export function put(path: PathParams, ...middleware: Array<InjectionToken>) {
	return route('put', path, ...middleware);
}
