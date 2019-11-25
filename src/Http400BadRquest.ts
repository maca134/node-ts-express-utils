import { HttpException } from "./HttpException";

export class Http400BadRquest extends HttpException {
	status: number = 400;
	message: string = 'BAD REQUEST';
}
