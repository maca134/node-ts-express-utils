import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { route } from './route';

export function put(path: PathParams, ...middleware: Array<RequestHandler>) {
	return route('put', path, ...middleware);
}
