import { Children } from '@paulhalleux/react-components';
import React from 'react';

import styles from './Page.module.scss';

export default function Page({ children }: Children) {
	return (
		<div className={styles.page}>
			{children}
		</div>
	);
}