export abstract class HttpException extends Error {
	abstract status: number;
	abstract message: string;
}

export class Http404NotFound extends HttpException {
	status: number = 404;
	message: string = 'NOT FOUND';
}

export class Http401Unauthorized extends HttpException {
	status: number = 401;
	message: string = 'UNAUTHORIZED';
}

export class Http400BadRquest extends HttpException {
	status: number = 400;
	message: string = 'BAD REQUEST';
}