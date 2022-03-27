import { Button, Title } from '@paulhalleux/react-components';
import React, { UIEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { CollectionsApi } from '../../api/collections-api';
import CollectionCard from '../../components/collection/CollectionCard';
import CreateCollectionModal from '../../components/collection/CreateCollectionModal';
import PlusArrow from '../../components/icons/PlusArrow';
import styles from './Sidebar.module.scss';

export default function Sidebar({ width }: {width: number}) {
	const onScroll = (e: UIEvent<HTMLElement>) => {
		if (e.currentTarget.scrollTop > 0) {
			e.currentTarget.classList.add(styles.scroll);
		} else {
			e.currentTarget.classList.remove(styles.scroll);
		}
	};

	const { isLoading, data } = useQuery('collections', CollectionsApi.GetCollections);

	const [hover, setHover] = useState<boolean>(false);
	const [adding, setAdding] = useState<boolean>(false);

	return (
		<section className={styles.main__sidebar} style={{ width }}>
			<div className={styles.scroll__container} onScroll={onScroll}>
				<header className={styles.sidebar__header}>
					<Title>Collections</Title>
					<Title className={styles.subtitle} size="xs">{isLoading || !data ? 'Collections loading' : `${data.length} collections available`}</Title>
				</header>
				<div className={styles.collections}>
					{data && data.map(value => <CollectionCard key={`sidebar_collection_${value.id}`} collection={value} />)}
				</div>
			</div>
			<footer className={styles.sidebar__footer}>
				<Button onClick={() => setAdding(true)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
					<PlusArrow active={hover} /> Add collection
				</Button>
				<CreateCollectionModal shown={adding} onClose={() => setAdding(false)}/>
			</footer>
		</section>
	);
}