import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		},
	}
});

export const api = axios.create({
	baseURL: 'https://localhost:7181/api/v1/'
});