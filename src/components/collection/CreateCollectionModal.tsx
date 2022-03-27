import { Button, Field, FieldGroup, Modal, Title } from '@paulhalleux/react-components';
import React, { KeyboardEvent,useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { CollectionsApi } from '../../api/collections-api';
import styles from './CreateCollectionModal.module.scss';

type CreateCollectionModalProps = {
    shown: boolean;
    onClose: () => void;
};

export default function CreateCollectionModal({ shown, onClose }: CreateCollectionModalProps) {
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const queryClient = useQueryClient();
	const addCollectionMutation = useMutation(CollectionsApi.AddCollection, {
		onSuccess: () => {
			queryClient.refetchQueries('collections');
			onClose();
			setName('');
			setDescription('');
		}
	});

	const onEnter = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			mutate();
		}
	};

	const mutate = () => {
		if (name && description)
			addCollectionMutation.mutate({ name, description });
	};

	return (
		<Modal size={'sm'} shown={shown} onHide={onClose}>
			<Title>Add a new collection of todos</Title>
			<FieldGroup className={styles.form} onKeyPress={onEnter}>
				<Field name="name" label="Name" value={name} onChange={event => setName(event.target.value)} />
				<Field name="description" label="Description" value={description} onChange={event => setDescription(event.target.value)} />
			</FieldGroup>
			<Button size="small" loading={addCollectionMutation.isLoading} onClick={mutate}>Add</Button>
		</Modal>
	);
}