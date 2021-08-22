import React from 'react';
import { motion } from 'framer-motion';
export default function SomeRandomAnim({ i }) {
	return (
		<motion.div
			style={{
				zIndex: -10,
				opacity: 0.2,
				position: 'fixed',
				top: i + Math.floor(Math.random() * 720) + 50,
				right: i + Math.floor(Math.random() * 1901) + 50,
			}}
			animate={{ rotate: 360 }}
			transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
			⭐️
		</motion.div>
	);
}
