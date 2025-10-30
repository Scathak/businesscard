import { motion } from "framer-motion";

export const Strip = ({ children, delay = 0, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="py-12"
  >
    {children}
  </motion.section>
);

