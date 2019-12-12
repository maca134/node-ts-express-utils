import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';

export function del(path: PathParams, ...middleware: Array<InjectionToken>) {
	return route('delete', path, ...middleware);
}
