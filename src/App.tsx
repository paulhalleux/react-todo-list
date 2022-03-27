import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import MainLayout from './layouts/MainLayout';

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			},
		}
	});

	return (
		<QueryClientProvider client={queryClient}>
			<MainLayout>
                Content
			</MainLayout>
		</QueryClientProvider>
	);
}