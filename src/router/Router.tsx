import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BrowserPage from '../pages/BrowserPage/BrowserPage';
import { Path } from './path';

export const Router: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path='/'>
					<Redirect to={Path.Browser}/>
				</Route>
				<Route path={Path.Browser} component={BrowserPage} />
				<Route>
					Page Not Found :(
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
