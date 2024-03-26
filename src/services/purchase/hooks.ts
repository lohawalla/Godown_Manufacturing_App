import { useQuery } from "@tanstack/react-query"
import { fetchPurchaseParties, fetchSalesBill, fetchSalesData } from "./api"

interface FetchSalesIdParams {
    saleId: string;
  }

export const useSalesList=()=>{
    return useQuery({
        queryKey:['salesList'],
        queryFn:fetchSalesData
    })
}

// to fetch all parties
export const usePurchaseParties=()=>{
    return useQuery({
        queryKey:['purchasePartiesList'],
        queryFn:fetchPurchaseParties
    })
}

export const useSaleBill=({saleId}:FetchSalesIdParams)=>{
    return useQuery({
        queryKey:['saleBill', {saleId}],
        queryFn:()=>fetchSalesBill(saleId)
    })
}
  