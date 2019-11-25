import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { route } from './route';

export function options(path: PathParams, ...middleware: Array<RequestHandler>) {
	return route('options', path, ...middleware);
}
