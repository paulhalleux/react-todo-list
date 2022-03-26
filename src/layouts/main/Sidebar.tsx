import { Button } from '@paulhalleux/react-components';
import React, { UIEvent, useState } from 'react';

import CollectionCard from '../../components/collection/CollectionCard';
import PlusArrow from '../../components/icons/PlusArrow';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
	const onScroll = (e: UIEvent<HTMLElement>) => {
		if (e.currentTarget.scrollTop > 0) {
			e.currentTarget.classList.add(styles.scroll);
		} else {
			e.currentTarget.classList.remove(styles.scroll);
		}
	};

	const [hover, setHover] = useState<boolean>(false);

	return (
		<section className={styles.main__sidebar}>
			<div className={styles.scroll__container} onScroll={onScroll}>
				<header className={styles.sidebar__header}>
					<h2>Collections</h2>
					<h4>3 collections found</h4>
				</header>
				<div className={styles.collections}>
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
				</div>
			</div>
			<footer className={styles.sidebar__footer}>
				<Button onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
					<PlusArrow active={hover} /> Add collection
				</Button>
			</footer>
		</section>
	);
}