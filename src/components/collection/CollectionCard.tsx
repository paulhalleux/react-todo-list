import { Card, Handle, Progressbar, Title } from '@paulhalleux/react-components';
import React from 'react';

import { Collection } from '../../typings/models';
import styles from './CollectionCard.module.scss';

type CollectionCardProps = {
    collection: Collection
};

export default function CollectionCard({ collection }: CollectionCardProps) {
	return (
		<div className={styles.draggable__card}>
			<Handle />
			<Card className={styles.collection__card}>
				<header className={styles.card__header}>
					<div className={styles.card__title}>
						<Title ellipsis title={collection.name}>{collection.name}</Title>
						<Title ellipsis size="xs" title={collection.description}>{collection.description}</Title>
					</div>
					<div className={styles.card__options}>
						<span className={styles.context__toggle} />
					</div>
				</header>
				{collection.count == 0 ? <span className={styles.empty}>This collection is empty.</span> : (
					<section>
						<div className={styles.completed}>{collection.done}/{collection.count}</div>
						<Progressbar progress={(100/collection.count)*collection.done} color="secondary" />
					</section>
				)}
			</Card>
		</div>
	);
}