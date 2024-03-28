import {useState} from 'react';
import PurchaseOrderContext from './PurchaseOrder';

const PurchaseOrderProvider = ({children}: {children: any}) => {
  const [billData, setBillData] = useState(null);

  return (
    <PurchaseOrderContext.Provider value={{billData, setBillData}}>
      {children}
    </PurchaseOrderContext.Provider>
  );
};

export default PurchaseOrderProvider;
