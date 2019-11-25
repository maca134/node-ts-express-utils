import { HttpException } from "./HttpException";

export class Http401Unauthorized extends HttpException {
	status: number = 401;
	message: string = 'UNAUTHORIZED';
}
