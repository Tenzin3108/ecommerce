import React from 'react';
import { motion } from 'framer-motion';

const ProductList = ({ products }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {products.map((product) => (
        <motion.li
          key={product.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
          <button>Add to Cart</button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProductList;
