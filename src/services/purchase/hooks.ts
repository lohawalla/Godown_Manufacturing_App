import { useQuery } from "@tanstack/react-query"
import { fetchSalesBill, fetchSalesData } from "./api"

interface FetchSalesIdParams {
    saleId: string;
  }

export const useSalesList=()=>{
    return useQuery({
        queryKey:['salesList'],
        queryFn:fetchSalesData
    })
}

export const useSaleBill=({saleId}:FetchSalesIdParams)=>{
    return useQuery({
        queryKey:['saleBill', {saleId}],
        queryFn:()=>fetchSalesBill(saleId)
    })
}
  