import { api } from '../config/api';
import { Collection, CollectionRequest } from '../typings/models';

export class CollectionsApi {
	public static async getCollections(): Promise<Collection[]> {
		const response = await api.get('collections');
		return response.data;
	}

	public static async deleteCollection(id: number) {
		await api.delete(`collections/${id}`);
	}

	public static async addCollection(request: CollectionRequest): Promise<Collection> {
		const response = await api.post('collections', request);
		return response.data;
	}
}