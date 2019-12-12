import { PathParams } from 'express-serve-static-core';
import { route } from './route';
import { InjectionToken } from '../DependencyContainerLike';

export function options(path: PathParams, ...middleware: Array<InjectionToken>) {
	return route('options', path, ...middleware);
}
