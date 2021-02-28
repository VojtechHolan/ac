import React, { FunctionComponent, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { ApolloError } from '@apollo/client';

interface IErrorSnackBar {
	error: ApolloError | boolean |undefined,
	text?: string,
}

// ErrorSnackBar could be more generic
// EXAMPLE: Only SnackBar with default settings for app
export const ErrorSnackBar: FunctionComponent<IErrorSnackBar> = ({ error, text }) => {
	const [isSnackOpened, setIsSnackOpened] = React.useState<boolean>(false);

	useEffect(() => {
		setIsSnackOpened(!!error)
	}, [error])

	const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsSnackOpened(false);
	};

	return <Snackbar
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		}}
		autoHideDuration={6000}
		open={isSnackOpened}
		onClose={handleClose}
		action={
			<React.Fragment>
				<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</React.Fragment>
		}
	>
		<Alert severity="error">{text || 'Something went wrong!'}</Alert>
	</Snackbar>
}
