import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ title }) {
  return (
    <motion.h1 animate={{ x: 65 }} style={{ color: '#F24452' }}>
      {title}
    </motion.h1>
  );
}
