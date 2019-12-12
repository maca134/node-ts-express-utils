export type constructor<T> = { new(...args: any[]): T; };

export type InjectionToken<T = any> = constructor<T> | string | symbol;

export type DependencyContainerLike = {
	resolve<T>(token: InjectionToken<T>): Promise<T> | T;
};
