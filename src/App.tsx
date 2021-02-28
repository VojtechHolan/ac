import React, { FunctionComponent } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apollo';
import { Router } from './router/Router';

const App: FunctionComponent = (): JSX.Element => {
	return (
		<ApolloProvider client={apolloClient}>
			<Router />
		</ApolloProvider>
	);
}

export default App
