export interface IUser {
	username: string | null;
	password: string | null;
	permissions: string[] | [];
	autenticate?: boolean;
}

export interface ITaskSliceState {
	value: ITask[];
	status: any;
}

export interface IAuthSliceState {
	username: string | null;
	password: string | null;
	permissions: string[] | [];
	autenticate?: boolean;
}

export interface ITask {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface IPaginator {}

export interface IPaginator {
	page: number;
	perPage: number;
	handlePaginationChange: any;
	handlePerPageChange: any;
	maxPage: number;
}
