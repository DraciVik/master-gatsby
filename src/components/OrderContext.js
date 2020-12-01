import React, { createContext, useState } from 'react';

// Create Order context
const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
  // We need to stick state in here
}
export default OrderContext;
