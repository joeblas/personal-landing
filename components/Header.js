import { motion } from 'framer-motion'

export default function Header({ title }) {
  return <motion.h1 animate={{ x: 115 }} className="title">{title}</motion.h1>
}
