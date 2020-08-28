import {CREATE_ORDER, CREATE_ORDER_ERROR} from "../type";
import {toast} from "react-toastify";

export const dataReducer = (state = {}, action) =>{
    switch (action.type) {
        case CREATE_ORDER:
            toast.success("Order Created")
            return state;
        case CREATE_ORDER_ERROR:
            toast.error("An Error Occured Please Try Again Later")
            return state
        default:
            return state;
    }
}