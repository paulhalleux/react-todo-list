import { Collection, CollectionRequest } from '../typings/models';

export class CollectionsApi {
	public static async GetCollections(): Promise<Collection[]> {
		return await fetch('https://localhost:7181/api/collections').then(value => value.json());
	}

	public static async AddCollection(request: CollectionRequest): Promise<Collection> {
		return await fetch('https://localhost:7181/api/collections', {
			method: 'POST',
			body: JSON.stringify(request),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(value => value.json());
	}
}