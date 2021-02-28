import { Card, CircularProgress, Typography } from '@material-ui/core';
import React, { FunctionComponent, useEffect } from 'react';
import { useStyles } from './FileViewerStyles';
import { useRouteMatch } from 'react-router-dom';
import { BrowserFileParams } from '../../../router/params';
import { useLazyQuery } from '@apollo/client';
import { GET_FILE, IGetFile, IGetFileVariables } from '../../../graphql/query/getFile';
import { ErrorSnackBar } from '../../../components/ErrorSnackBar/ErrorSnackBar';

export const FileViewer: FunctionComponent = () => {
	const classes = useStyles()
	let { params } = useRouteMatch<BrowserFileParams>();
	const [getData, { loading, error, data }] = useLazyQuery<IGetFile, IGetFileVariables>(GET_FILE, {
		variables: { id: params.fileId },
	});

	useEffect(() => {
		getData()
	}, [params])

	const file = data?.getFile
	return (
		<Card className={classes.fileCard}>
			{loading && <CircularProgress className={classes.loader}/>}
			{data && (
				<>
					<Typography color="textSecondary" gutterBottom>
						File name: {file?.name}
					</Typography>
					<Typography variant="body2" component="p">
						{ file?.text }
					</Typography>
				</>
			)}
			{error && <span>Could not load file :(</span>}
			<ErrorSnackBar error={error}/>
		</Card>
	)
}
