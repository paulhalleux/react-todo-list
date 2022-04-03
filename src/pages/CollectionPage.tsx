import { Title } from '@paulhalleux/react-components';
import React from 'react';
import { useParams } from 'react-router';

import Placeholder from '../components/Placeholder';
import { useSelector } from '../store/store';
import styles from './CollectionPage.module.scss';
import Page from './Page';

export default function CollectionPage() {
	const { collections } = useSelector(state => state.collections);
	const { collectionId } = useParams();

	const collection = collections?.find((item) => item.id === parseInt(collectionId ?? '0'));

	return (
		<Page>
			{collection && (
				<>
					<header className={styles.sidebar__header}>
						<Title>{collection.name}</Title>
						<Title size="xs" className={styles.subtitle}>{collection.description}</Title>
					</header>
					<section>
						<Placeholder
							onClick={() => {
								console.log('');
							}} type="secondary" label="Add your first todo task"/>
					</section>
				</>
			)}
		</Page>
	);
}