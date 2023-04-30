import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import React from 'react';
type NotificationProps = {
	open: boolean;
	msg: string;
	severity: AlertColor | undefined;
	handleClose: () => void;
	center?: boolean;
	top?: boolean;
};

const Notification: React.FC<NotificationProps> = ({ open, msg, severity, handleClose, center, top }) => {
	return (
		<Snackbar autoHideDuration={4000} open={open} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity}>
				<Typography>{msg}</Typography>
			</Alert>
		</Snackbar>
	);
};

export default Notification;
