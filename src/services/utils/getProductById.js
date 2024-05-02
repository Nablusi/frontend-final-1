import axios from "axios"
import { urls } from "../../config/urls";

export const getProductById = async(id) =>  {
    try {
        const sendData = await axios.get(`${urls.getProductDetail}/${id}`);
        return sendData.data;

    } catch (e) {
        console.log('there is an error in ', e);
    }
}