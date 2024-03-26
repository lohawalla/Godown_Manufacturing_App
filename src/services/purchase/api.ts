import { apiCall } from ".."
import { purchaseParties, salesBill, salesList } from "../ApiRoutes"
import { AllSalesApiResponse, AllPurchaseApiResponse } from "./types"

export const fetchSalesData = async (): Promise<any> => {
    const data = await apiCall<AllSalesApiResponse>("get",`${salesList}`)
    return data
}

export const fetchPurchaseParties  = async (): Promise<any> => {
    const data = await apiCall<AllPurchaseApiResponse>("get",`${purchaseParties}`)
    return data
}

export const fetchSalesBill = async (id:any) => {
    const data = await apiCall("get",`${salesBill+'/'+id}`)
    return data
}