import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from './config/api';
import MainLayout from './layouts/MainLayout';
import CollectionPage from './pages/CollectionPage';
import { store } from './store/store';

export default function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<MainLayout>
						<Routes>
							<Route path="collection">
								<Route path=":collectionId" element={<CollectionPage/>}/>
							</Route>
						</Routes>
					</MainLayout>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	);
}