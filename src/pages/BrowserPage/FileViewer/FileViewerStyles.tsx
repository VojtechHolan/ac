import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	fileCard: {
		width: '65%',
		height: 'calc(100vh - 40px)',
		padding: 10,
		position: 'relative'
	},
	loader: {
		position: 'absolute',
		left: 'calc(50% - 20px)',
		top: 'calc(50% - 20px)',
	}
});
