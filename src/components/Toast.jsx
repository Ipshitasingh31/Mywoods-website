import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function Toast() {
  const { toast } = useContext(ShopContext);

  if (!toast) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25 }}
      className="toast-notification"
    >
      {toast.message}
    </motion.div>
  );
}

export default Toast;
