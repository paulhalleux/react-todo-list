import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Collection } from '../../typings/models';

interface CollectionsState {
    collections: Collection[] | undefined
}

const initialState: CollectionsState = {
	collections: undefined,
};

export const collectionsSlice = createSlice({
	name: 'collections',
	initialState,
	reducers: {
		setCollections: (state, action: PayloadAction<Collection[]>) => {
			state.collections = action.payload;
		},
	},
});

export const { setCollections } = collectionsSlice.actions;

export default collectionsSlice.reducer;