import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { route } from './route';

export function post(path: PathParams, ...middleware: Array<RequestHandler>) {
	return route('post', path, ...middleware);
}
