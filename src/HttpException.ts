export abstract class HttpException extends Error {
	abstract status: number;
	abstract message: string;
}
