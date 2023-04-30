import React from 'react';
import Notification from '../../app/components/views/Notification/Notification';
import { AlertColor } from '@mui/material';

type ContextProps = {
	getError: (msg: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [msg, setMsg] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

	const handleClose = () => {
		setOpen(false);
	};

	const getError = (msg: string) => {
		setSeverity('error');
		setOpen(true);
		setMsg(msg);
	};
	const value = { getError };
	return (
		<NotificationContext.Provider value={value}>
			<Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
			{children}
		</NotificationContext.Provider>
	);
};

export const useNotification = () => {
	const context = React.useContext(NotificationContext);
	if (!context) throw new Error('Context not exist');
	return context;
};
