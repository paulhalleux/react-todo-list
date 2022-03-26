import { Card, Progressbar } from '@paulhalleux/react-components';
import React from 'react';

import styles from './CollectionCard.module.scss';

export default function CollectionCard() {
	return (
		<div className={styles.draggable__card}>
			<div className={styles.handle}>
				<span/><span/><span/><span/><span/><span/><span/><span/>
			</div>
			<Card className={styles.collection__card}>
				<header className={styles.card__header}>
					<div className={styles.card__title}>
						<h2 title="Personal bucket list with long text">Personal bucket list with long text</h2>
						<h4 title="Things a have to do once with longer texts">Things a have to do once with longer texts</h4>
					</div>
					<div className={styles.card__options}>
						<span className={styles.context__toggle} />
					</div>
				</header>
				<section>
					<div className={styles.completed}>3/16</div>
					<Progressbar progress={10} color="secondary" />
				</section>
			</Card>
		</div>
	);
}