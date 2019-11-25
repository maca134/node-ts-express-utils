import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { route } from './route';

export function get(path: PathParams, ...middleware: Array<RequestHandler>) {
	return route('get', path, ...middleware);
}
