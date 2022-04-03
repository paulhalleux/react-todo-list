import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useD, useSelector as useS } from 'react-redux';

import collectionsReducer from './slices/collections-slice';

export const store = configureStore({
	reducer: {
		collections: collectionsReducer
	},
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export const useDispatch = () => useD<ApplicationDispatch>();
export const useSelector: TypedUseSelectorHook<ApplicationState> = useS;