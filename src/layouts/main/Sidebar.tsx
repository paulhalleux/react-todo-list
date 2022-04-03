import { Button, Title } from '@paulhalleux/react-components';
import React, { UIEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { CollectionsApi } from '../../api/collections-api';
import CollectionCard from '../../components/collection/CollectionCard';
import CreateCollectionModal from '../../components/collection/CreateCollectionModal';
import PlusArrow from '../../components/icons/PlusArrow';
import Placeholder from '../../components/Placeholder';
import { setCollections } from '../../store/slices/collections-slice';
import { useDispatch, useSelector } from '../../store/store';
import styles from './Sidebar.module.scss';

export default function Sidebar({ width }: { width: number }) {
	const { collections } = useSelector(state => state.collections);
	const dispatch = useDispatch();

	const onScroll = (e: UIEvent<HTMLElement>) => {
		if (e.currentTarget.scrollTop > 0) {
			e.currentTarget.classList.add(styles.scroll);
		} else {
			e.currentTarget.classList.remove(styles.scroll);
		}
	};

	const { isLoading } = useQuery('collections', CollectionsApi.getCollections, {
		onSuccess: data => dispatch(setCollections([...data].sort(((a, b) => a.order - b.order))))
	});

	const [hover, setHover] = useState<boolean>(false);
	const [adding, setAdding] = useState<boolean>(false);

	return (
		<section className={styles.main__sidebar} style={{ width }}>
			<div className={styles.scroll__container} onScroll={onScroll}>
				<header className={styles.sidebar__header}>
					<Title>Collections</Title>
					<Title
						className={styles.subtitle}
						size="xs">{isLoading || !collections ? 'Collections loading' : `${collections.length} collections available`}</Title>
				</header>
				<div className={styles.collections}>
					{collections?.map(value => (
						<CollectionCard
							key={`sidebar_collection_${value.id}`}
							collection={value}/>
					))}
					{collections?.length === 0 && (
						<Placeholder
							type={'neutral'} onClick={() => setAdding(true)}
							label={'Add your first collection'}/>
					)}
				</div>
			</div>
			<footer className={styles.sidebar__footer}>
				<Button
					onClick={() => setAdding(true)} onMouseOver={() => setHover(true)}
					onMouseOut={() => setHover(false)}>
					<PlusArrow active={hover}/> Add collection
				</Button>
				<CreateCollectionModal shown={adding} onClose={() => setAdding(false)}/>
			</footer>
		</section>
	);
}