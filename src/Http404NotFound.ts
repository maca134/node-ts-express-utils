import { HttpException } from "./HttpException";

export class Http404NotFound extends HttpException {
	status: number = 404;
	message: string = 'NOT FOUND';
}
