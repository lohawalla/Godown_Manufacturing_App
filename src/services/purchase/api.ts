import { apiCall } from ".."
import { salesBill, salesList } from "../ApiRoutes"

export const fetchSalesData = async () => {
    const data = await apiCall("get",`${salesList}`)
    return data
}

export const fetchSalesBill = async (id:any) => {
    const data = await apiCall("get",`${salesBill+'/65eb00b2580e39250f8bbaac'}`)
    return data
}