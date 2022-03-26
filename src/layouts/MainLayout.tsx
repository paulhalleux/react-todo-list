import { Children } from '@paulhalleux/react-components';
import React from 'react';

import Sidebar from './main/Sidebar';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }: Children) {
	return (
		<main className={styles.main__layout}>
			<Sidebar />
			<div className={styles.main__content}>
				{children}
			</div>
		</main>
	);
}