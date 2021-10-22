export abstract class HttpException extends Error {
	constructor(public status: number, message: string) {
		super(message);
	}
}

export class Http404NotFound extends HttpException {
	constructor(message?: string) {
		super(404, message || 'NOT FOUND');
	}
}

export class Http401Unauthorized extends HttpException {
	constructor(message?: string) {
		super(401, message || 'UNAUTHORIZED');
	}
}

export class Http400BadRquest extends HttpException {
	constructor(message?: string) {
		super(400, message || 'BAD REQUEST');
	}
}