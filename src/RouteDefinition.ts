import { PathParams } from 'express-serve-static-core';
import { HttpRequestMethod } from './HttpRequestMethod';
import { InjectionToken } from './DependencyContainerLike';

export interface RouteDefinition {
	path: PathParams;
	requestMethod: HttpRequestMethod;
	methodName: string;
	middleware: Array<InjectionToken>;
}
