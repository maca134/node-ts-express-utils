import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { HttpRequestMethod } from './HttpRequestMethod';

export interface RouteDefinition {
	path: PathParams;
	requestMethod: HttpRequestMethod;
	methodName: string;
	middleware: Array<RequestHandler>;
}
