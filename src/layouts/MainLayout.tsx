import { Children, Resizable } from '@paulhalleux/react-components';
import React from 'react';

import Sidebar from './main/Sidebar';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }: Children) {
	return (
		<main className={styles.main__layout}>
			<Resizable
				resizeWidth={true}
				min={{ width: 320, height: 0 }}
				max={{ width: 500, height: 0 }}
				initial={{ width: 320, height: 0 }}>
				{value => <Sidebar width={value.width}/>}
			</Resizable>
			<div className={styles.main__content}>
				{children}
			</div>
		</main>
	);
}