import React from 'react';
import { motion } from 'framer-motion';
import { colors } from 'Styles';
export default function SomeRandomAnim({ i }) {
	return (
		<div>
			<motion.div
				style={{
					width: 20,
					height: 20,
					borderRadius: 3,
					backgroundColor: colors.lightnavy,
					position: 'fixed',
					top: i + Math.floor(Math.random() * 720) + 50,
					right: i + Math.floor(Math.random() * 1901) + 50,
				}}
				animate={{ rotate: 360 }}
				transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
			/>
		</div>
	);
}
