export interface AllSalesApiResponse {
    success: boolean;
    message: string;
    id:number;
    data: {
      salesNumber: string;
      BillNumber: string;
      partyName:string;
      qrImage:string;
      buyerImage:string;
      _id:number;
      keyExtractor:string;
    }[];
  }

  export interface AllPurchaseApiResponse {
    success: boolean;
    message: string;
    id:number;
    data: {
      salesNumber: string;
      BillNumber: string;
      partyName:string;
      qrImage:string;
      buyerImage:string;
      _id:number;
      keyExtractor:string;
    }[];
  }
  