import React, { FunctionComponent } from 'react';
import FolderBrowser from './FolderBrowser/FolderBrowser';
import { Card } from '@material-ui/core';
import { useStyles } from './BrowserPageStyles';
import { Typography } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { FileViewer } from './FileViewer/FileViewer';
import { Path } from '../../router/path';

const BrowserPage: FunctionComponent = (): JSX.Element => {
	const classes = useStyles()

	return (
		<section className={classes.pageHolder}>
			<Card className={classes.foldersCard}>
				<Typography color="textSecondary" gutterBottom>
					Folder/File Browser
				</Typography>
				<FolderBrowser />
			</Card>
			<Switch>
				<Route exact={true} path={Path.BrowserFile} component={FileViewer} />
				<Route>Select File</Route>
			</Switch>
		</section>
	)
}

export default BrowserPage
