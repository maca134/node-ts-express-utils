import { PathParams } from 'express-serve-static-core';
import { RequestHandler } from 'express';
import { route } from './route';

export function del(path: PathParams, ...middleware: Array<RequestHandler>) {
	return route('delete', path, ...middleware);
}
