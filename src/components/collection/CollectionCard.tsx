import {
	Card,
	cn,
	ContextAction,
	ContextMenu,
	Else,
	Handle,
	If,
	Progressbar,
	Title
} from '@paulhalleux/react-components';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';

import { CollectionsApi } from '../../api/collections-api';
import { Collection } from '../../typings/models';
import styles from './CollectionCard.module.scss';

type CollectionCardProps = {
    collection: Collection
};

export default function CollectionCard({ collection }: CollectionCardProps) {
	const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | undefined>(undefined);
	const queryClient = useQueryClient();

	const deleteMutation = useMutation(CollectionsApi.deleteCollection, {
		onSuccess: () => queryClient.refetchQueries('collections'),
	});

	return (
		<NavLink
			to={`/collection/${collection.id}`}
			className={({ isActive }) => cn(styles.draggable__card, isActive && styles.active)}>
			<Handle/>
			<Card className={styles.collection__card}>
				<header className={styles.card__header}>
					<div className={styles.card__title}>
						<Title ellipsis title={collection.name}>{collection.name}</Title>
						<Title ellipsis size="xs" title={collection.description}>{collection.description}</Title>
					</div>
					<div
						className={styles.card__options} onClick={(e) => {
							e.stopPropagation();
							e.preventDefault();
							setContextMenu({
								x: e.clientX,
								y: e.clientY
							});
						}}>
						<span className={styles.context__toggle}/>
					</div>
				</header>
				<If cond={collection.count == 0}>
					<span className={styles.empty}>This collection is empty.</span>
					<Else>
						<section>
							<div className={styles.completed}>{collection.done}/{collection.count}</div>
							<Progressbar progress={(100 / collection.count) * collection.done} color="secondary"/>
						</section>
					</Else>
				</If>
			</Card>
			<ContextMenu
				x={contextMenu?.x} y={contextMenu?.y} shown={contextMenu !== undefined}
				onHide={() => setContextMenu(undefined)}>
				<ContextAction disabled>Mark all done</ContextAction>
				<ContextAction disabled>Move to top</ContextAction>
				<ContextAction disabled>Export collection</ContextAction>
				<ContextAction onSelected={() => deleteMutation.mutate(collection.id)}>Delete</ContextAction>
			</ContextMenu>
		</NavLink>
	);
}