export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type Action = {
	payload: any;
	type: string;
};

export type LoginType = {
	username: string;
	password: string;
};

export type CardTask = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export type NotificationProps = {
	open: boolean;
	msg: string;
	severity: AlertColor | undefined;
	handleClose: () => void;
	center?: boolean;
	top?: boolean;
};
