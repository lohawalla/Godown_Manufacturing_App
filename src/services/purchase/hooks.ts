import { useQuery } from "@tanstack/react-query"
import { fetchSalesData } from "./api"


export const useSalesList=()=>{
    return useQuery({
        queryKey:['salesList'],
        queryFn:fetchSalesData
    })
}