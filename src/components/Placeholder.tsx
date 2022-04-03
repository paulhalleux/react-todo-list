import { cn } from '@paulhalleux/react-components';
import React, { ReactNode } from 'react';

import styles from './Placeholder.module.scss';

type PlaceholderProps = {
    label?: ReactNode;
    onClick?: () => void;
    type?: 'primary' | 'secondary' | 'neutral';
};

export default function Placeholder({ label, type = 'primary', onClick }: PlaceholderProps) {
	return (
		<div
			className={cn(styles.placeholder, styles[`placeholder--${type}`], onClick && styles.action)}
			onClick={onClick}>
			{label}
		</div>
	);
}