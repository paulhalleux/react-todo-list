import { cn } from '@paulhalleux/react-components';
import React from 'react';

import styles from './PlusArrow.module.scss';

type PlusArrow = {
    active?: boolean;
    size?: number;
};

export default function PlusArrow({ size = 14, active = false }: PlusArrow) {
	return (
		<svg
			width={size} height={size}
			className={cn(styles.animate, active && styles.active)} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}
			shapeRendering="geometricPrecision" textRendering="geometricPrecision">
			<g className={styles['eEN5WXIlSHY2_to']} transform="translate(7,3.5)">
				<g className={styles['eEN5WXIlSHY2_tr']} transform="rotate(0)">
					<rect className={styles['eEN5WXIlSHY2']} width="2" height="7" rx="0" ry="0" transform="translate(-1,-3.5)" fill="#1c1a7a"/>
				</g>
			</g>
			<g className={styles['eEN5WXIlSHY3_to']} transform="translate(7,10.5)">
				<g className={styles['eEN5WXIlSHY3_tr']} transform="rotate(0)">
					<rect className={styles['eEN5WXIlSHY3']} width="2" height="7" rx="0" ry="0" transform="translate(-1,-3.5)" fill="#1c1a7a"/>
				</g>
			</g>
			<rect className={styles['eEN5WXIlSHY4']} width="14" height="2" rx="0" ry="0" transform="translate(0 6)" fill="#1c1a7a"/>
		</svg>
	);
}